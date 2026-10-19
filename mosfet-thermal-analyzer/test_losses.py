"""
Unit Tests for MOSFET Loss & Thermal Calculation Engine
Covers the 5 core validation criteria specified in the project engineering requirements.
"""

import pytest
from losses import calculate_losses


# Baseline Sample Inputs
SAMPLE_INPUTS = {
    "i_rms": 10.0,           # 10 A
    "r_ds_on": 0.020,        # 20 mΩ
    "e_on": 100e-6,          # 100 µJ
    "e_off": 100e-6,         # 100 µJ
    "f_s": 20000.0,          # 20 kHz
    "t_a": 30.0,             # 30 °C
    "r_theta": 8.0,          # 8 °C/W
    "t_j_max": 150.0,        # 150 °C
    "p_out": 100.0           # 100 W
}


def test_conduction_loss():
    """Test 1: Verify P_cond = I_RMS^2 * R_DS(on) = (10)^2 * 0.020 = 2.0 W."""
    results = calculate_losses(**SAMPLE_INPUTS)
    assert results["p_cond"] == pytest.approx(2.0, rel=1e-3)


def test_switching_loss():
    """Test 2: Verify P_sw = (E_on + E_off) * f_s = (200e-6) * 20000 = 4.0 W."""
    results = calculate_losses(**SAMPLE_INPUTS)
    assert results["p_sw"] == pytest.approx(4.0, rel=1e-3)


def test_total_loss_and_junction_temp():
    """Test 3: Verify P_total = 6.0 W and T_j = 30 + (6.0 * 8.0) = 78.0 °C."""
    results = calculate_losses(**SAMPLE_INPUTS)
    assert results["p_total"] == pytest.approx(6.0, rel=1e-3)
    assert results["t_j"] == pytest.approx(78.0, rel=1e-3)
    assert results["temp_margin"] == pytest.approx(72.0, rel=1e-3)
    assert results["is_overheated"] is False
    assert results["efficiency"] == pytest.approx(94.34, rel=1e-2)


def test_switching_frequency_doubling():
    """Test 4: Verify doubling switching frequency doubles switching loss only."""
    baseline = calculate_losses(**SAMPLE_INPUTS)
    
    doubled_inputs = SAMPLE_INPUTS.copy()
    doubled_inputs["f_s"] = 40000.0  # 40 kHz
    doubled = calculate_losses(**doubled_inputs)

    # Conduction loss must remain identical
    assert doubled["p_cond"] == baseline["p_cond"]
    # Switching loss must double: 4.0 W -> 8.0 W
    assert doubled["p_sw"] == pytest.approx(baseline["p_sw"] * 2.0, rel=1e-3)
    assert doubled["p_total"] == pytest.approx(10.0, rel=1e-3)


def test_input_validation_negative_current():
    """Test 5: Verify negative current or invalid parameters raise ValueError."""
    invalid_inputs = SAMPLE_INPUTS.copy()
    invalid_inputs["i_rms"] = -5.0
    with pytest.raises(ValueError, match="RMS current cannot be negative"):
        calculate_losses(**invalid_inputs)
