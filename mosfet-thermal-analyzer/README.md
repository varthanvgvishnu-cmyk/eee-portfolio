# Power Semiconductor Loss & Thermal Reliability Analyzer

An interactive Python & Streamlit engineering simulation platform for estimating MOSFET conduction losses, switching dissipation, steady-state junction temperatures ($T_j$), and thermal margins across operating conditions.

Developed by **Vishnu Varthan VG** (Chennai Institute of Technology, Dept. of Electrical & Electronics Engineering).

---

## 1. Engineering Principles & Governing Equations

### 1.1 Conduction Loss
Conduction loss occurs across the channel resistance $R_{\text{DS(on)}}$ during current conduction:
$$P_{\text{cond}} = I_{\text{RMS}}^2 \times R_{\text{DS(on)}}$$

### 1.2 Switching Loss
Switching loss occurs during turn-on and turn-off phase transitions:
$$P_{\text{sw}} \approx (E_{\text{on}} + E_{\text{off}}) \times f_s$$

### 1.3 Total Dissipation
$$P_{\text{total}} = P_{\text{cond}} + P_{\text{sw}}$$

### 1.4 Steady-State 1D Thermal Model
$$T_j = T_a + (P_{\text{total}} \times R_\theta)$$

### 1.5 Thermal Headroom / Safety Margin
$$\text{Margin} = T_{j(\max)} - T_j$$

### 1.6 Illustrative MOSFET Stage Efficiency
$$\eta = \left[\frac{P_{\text{out}}}{P_{\text{out}} + P_{\text{total}}}\right] \times 100\%$$

---

## 2. Sample Baseline Simulation & Verification

| Parameter | Baseline Value | Model Result | Formula Check |
| :--- | :--- | :--- | :--- |
| RMS Current ($I_{\text{RMS}}$) | $10.0\text{ A}$ | $P_{\text{cond}} = 2.00\text{ W}$ | $(10)^2 \times 0.020 = 2\text{ W}$ |
| $R_{\text{DS(on)}}$ | $20.0\text{ m}\Omega$ | $P_{\text{sw}} = 4.00\text{ W}$ | $200\ \mu\text{J} \times 20\text{ kHz} = 4\text{ W}$ |
| Turn-on / Turn-off ($E_{\text{on}} + E_{\text{off}}$) | $100\ \mu\text{J} + 100\ \mu\text{J}$ | $P_{\text{total}} = 6.00\text{ W}$ | $2\text{ W} + 4\text{ W} = 6\text{ W}$ |
| Switching Frequency ($f_s$) | $20.0\text{ kHz}$ | Junction Temp ($T_j$) = $78.0^\circ\text{C}$ | $30^\circ\text{C} + (6\text{ W} \times 8) = 78^\circ\text{C}$ |
| Ambient Temp ($T_a$) | $30.0^\circ\text{C}$ | Thermal Margin = $+72.0^\circ\text{C}$ | $150^\circ\text{C} - 78^\circ\text{C} = +72^\circ\text{C}$ |
| Thermal Resistance ($R_\theta$) | $8.0^\circ\text{C/W}$ | Stage Efficiency = $94.34\%$ | $100 / (100 + 6) = 94.34\%$ |
| Max Junction Limit ($T_{j(\max)}$) | $150.0^\circ\text{C}$ | Thermal Status | **Safe Operating Region (SOA)** |

---

## 3. Automated Test Suite (Pytest)

The project includes 5 automated tests in `test_losses.py`:
1. **Conduction Loss**: Verifies $P_{\text{cond}} = 2.0\text{ W}$ for sample inputs.
2. **Switching Loss**: Verifies $P_{\text{sw}} = 4.0\text{ W}$.
3. **Total Loss & Junction Temperature**: Verifies $P_{\text{total}} = 6.0\text{ W}$ and $T_j = 78.0^\circ\text{C}$.
4. **Switching Frequency Linearity**: Confirms that doubling $f_s$ ($20\text{ kHz} \rightarrow 40\text{ kHz}$) doubles $P_{\text{sw}}$ ($4\text{ W} \rightarrow 8\text{ W}$) while $P_{\text{cond}}$ remains unaffected.
5. **Input Validation**: Confirms negative current or invalid values raise `ValueError`.

Run tests via:
```bash
pytest test_losses.py -v
```

---

## 4. Installation & Local Execution

```bash
# Clone the repository
git clone https://github.com/varthanvgvishnu-cmyk/mosfet-thermal-analyzer.git
cd mosfet-thermal-analyzer

# Install dependencies
pip install -r requirements.txt

# Run the Streamlit interactive dashboard
streamlit run app.py
```

---

## 5. Scope & Limitations
- Assumes steady-state thermal equilibrium (1D thermal network $R_\theta$).
- Transient thermal impedance $Z_{\theta(t)}$ is not modeled in this release.
- Intended for educational simulation, preliminary engineering analysis, and portfolio verification.
