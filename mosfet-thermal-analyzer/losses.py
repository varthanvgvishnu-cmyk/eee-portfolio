"""
MOSFET Loss and Thermal Calculation Engine
Part of the Power Semiconductor Loss & Thermal Reliability Analyzer.

Provides steady-state conduction loss, switching loss, junction temperature,
thermal margin, and converter efficiency calculations with input validation.
"""

from typing import Dict, Any


def calculate_losses(
    i_rms: float,
    r_ds_on: float,
    e_on: float,
    e_off: float,
    f_s: float,
    t_a: float = 30.0,
    r_theta: float = 8.0,
    t_j_max: float = 150.0,
    p_out: float = 100.0,
) -> Dict[str, Any]:
    """
    Calculate semiconductor losses, junction temperature, and thermal margins.

    Parameters:
        i_rms (float): RMS current through MOSFET channel in Amperes.
        r_ds_on (float): ON-state channel resistance in Ohms.
        e_on (float): Turn-on energy loss in Joules.
        e_off (float): Turn-off energy loss in Joules.
        f_s (float): Switching frequency in Hertz.
        t_a (float): Ambient operating temperature in °C (default: 30.0°C).
        r_theta (float): Effective junction-to-ambient thermal resistance in °C/W (default: 8.0°C/W).
        t_j_max (float): Maximum rated junction temperature limit in °C (default: 150.0°C).
        p_out (float): Converter useful output power in Watts (default: 100.0W).

    Returns:
        dict: Detailed electrical and thermal performance metrics.
    """
    # Input Validation
    if i_rms < 0:
        raise ValueError(f"RMS current cannot be negative: {i_rms} A")
    if r_ds_on < 0:
        raise ValueError(f"R_DS(on) cannot be negative: {r_ds_on} Ohms")
    if e_on < 0 or e_off < 0:
        raise ValueError("Switching energies (E_on, E_off) cannot be negative.")
    if f_s < 0:
        raise ValueError(f"Switching frequency cannot be negative: {f_s} Hz")
    if r_theta < 0:
        raise ValueError(f"Thermal resistance R_theta cannot be negative: {r_theta} °C/W")
    if p_out < 0:
        raise ValueError(f"Output power cannot be negative: {p_out} W")

    # 1. Conduction Loss: P_cond = I_RMS^2 * R_DS(on)
    p_cond = (i_rms ** 2) * r_ds_on

    # 2. Switching Loss: P_sw = (E_on + E_off) * f_s
    p_sw = (e_on + e_off) * f_s

    # 3. Total MOSFET Power Dissipation
    p_total = p_cond + p_sw

    # 4. Estimated Steady-State Junction Temperature: T_j = T_a + (P_total * R_theta)
    t_j = t_a + (p_total * r_theta)

    # 5. Thermal Margin: Margin = T_j(max) - T_j
    temp_margin = t_j_max - t_j

    # 6. Illustrative MOSFET-Only Stage Efficiency
    total_input_power = p_out + p_total
    efficiency = (p_out / total_input_power * 100.0) if total_input_power > 0 else 0.0

    # Over-temperature flag
    is_overheated = t_j > t_j_max

    return {
        "p_cond": round(p_cond, 4),
        "p_sw": round(p_sw, 4),
        "p_total": round(p_total, 4),
        "t_j": round(t_j, 2),
        "temp_margin": round(temp_margin, 2),
        "efficiency": round(efficiency, 2),
        "is_overheated": is_overheated,
        "conduction_pct": round((p_cond / p_total * 100.0) if p_total > 0 else 0.0, 1),
        "switching_pct": round((p_sw / p_total * 100.0) if p_total > 0 else 0.0, 1),
    }
