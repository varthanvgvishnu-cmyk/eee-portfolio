"""
Power Semiconductor Loss & Thermal Reliability Analyzer
Interactive Streamlit Dashboard with Plotly Visualizations.
Author: Vishnu Varthan VG (Chennai Institute of Technology)
"""

import streamlit as st
import numpy as np
import pandas as pd
import plotly.graph_objects as go
from plotly.subplots import make_subplots
from losses import calculate_losses

# Page Configuration
st.set_page_config(
    page_title="MOSFET Thermal Analyzer",
    page_icon="⚡",
    layout="wide",
    initial_sidebar_state="expanded"
)

# Custom Styling (Dark Neon Theme)
st.markdown("""
<style>
    .metric-card {
        background-color: #0b140e;
        border: 1px solid rgba(0, 255, 136, 0.25);
        border-radius: 12px;
        padding: 16px;
        margin-bottom: 12px;
    }
    .metric-val {
        font-family: 'JetBrains Mono', monospace;
        font-size: 26px;
        font-weight: 700;
        color: #00ff88;
    }
    .metric-lbl {
        font-size: 12px;
        color: #94a3b8;
        text-transform: uppercase;
        letter-spacing: 1px;
    }
</style>
""", unsafe_allow_html=True)

st.title("⚡ Power Semiconductor Loss & Thermal Reliability Analyzer")
st.caption("MOSFET Conduction Loss, Switching Dissipation, and 1D Steady-State Junction Temperature Simulation")

# --- SIDEBAR INPUTS ---
st.sidebar.header("🔧 Electrical Operating Parameters")
i_rms = st.sidebar.number_input("RMS Current I_RMS (A)", min_value=0.1, max_value=200.0, value=10.0, step=0.5)
r_ds_on_mohm = st.sidebar.number_input("R_DS(on) at Operating Temp (mΩ)", min_value=0.5, max_value=1000.0, value=20.0, step=1.0)
r_ds_on = r_ds_on_mohm / 1000.0  # Convert to Ohms

e_on_uj = st.sidebar.number_input("Turn-on Energy E_on (µJ)", min_value=0.0, max_value=10000.0, value=100.0, step=10.0)
e_off_uj = st.sidebar.number_input("Turn-off Energy E_off (µJ)", min_value=0.0, max_value=10000.0, value=100.0, step=10.0)
e_on = e_on_uj * 1e-6
e_off = e_off_uj * 1e-6

f_s_khz = st.sidebar.slider("Switching Frequency f_s (kHz)", min_value=1.0, max_value=250.0, value=20.0, step=1.0)
f_s = f_s_khz * 1000.0

st.sidebar.header("🌡️ Thermal Boundary Conditions")
t_a = st.sidebar.number_input("Ambient Temperature T_a (°C)", min_value=-40.0, max_value=100.0, value=30.0, step=1.0)
r_theta = st.sidebar.number_input("Effective Thermal Resistance R_θ (°C/W)", min_value=0.1, max_value=50.0, value=8.0, step=0.5)
t_j_max = st.sidebar.number_input("Max Rated Junction Temp T_j(max) (°C)", min_value=85.0, max_value=200.0, value=150.0, step=5.0)
p_out = st.sidebar.number_input("Useful Output Power P_out (W)", min_value=1.0, max_value=50000.0, value=100.0, step=10.0)

# Calculate Base Results
results = calculate_losses(
    i_rms=i_rms,
    r_ds_on=r_ds_on,
    e_on=e_on,
    e_off=e_off,
    f_s=f_s,
    t_a=t_a,
    r_theta=r_theta,
    t_j_max=t_j_max,
    p_out=p_out,
)

# Over-temperature Alert
if results["is_overheated"]:
    st.error(f"⚠️ THERMAL HAZARD WARNING: Estimated Junction Temperature Tj ({results['t_j']}°C) exceeds rated limit Tj(max) ({t_j_max}°C) by {-results['temp_margin']:.1f}°C! Component failure imminent under steady-state conditions.")
else:
    st.success(f"✅ THERMAL SAFETY COMPLIANT: Estimated Junction Temperature Tj ({results['t_j']}°C) is within safe boundary. Headroom margin: +{results['temp_margin']}°C.")

# --- TOP KPI METRICS ---
col1, col2, col3, col4, col5 = st.columns(5)
with col1:
    st.metric(label="Conduction Loss", value=f"{results['p_cond']:.2f} W", delta=f"{results['conduction_pct']}% of total")
with col2:
    st.metric(label="Switching Loss", value=f"{results['p_sw']:.2f} W", delta=f"{results['switching_pct']}% of total")
with col3:
    st.metric(label="Total Dissipation", value=f"{results['p_total']:.2f} W")
with col4:
    st.metric(label="Estimated Junction Tj", value=f"{results['t_j']:.1f} °C", delta=f"Margin: {results['temp_margin']} °C")
with col5:
    st.metric(label="MOSFET Efficiency", value=f"{results['efficiency']:.2f} %")

st.markdown("---")

# --- TABS FOR VISUALIZATION & ANALYSIS ---
tab1, tab2, tab3, tab4 = st.tabs(["📊 Loss Breakdown & Budget", "📈 Frequency & Current Sweeps", "🌡️ Thermal Resistance Comparison", "📁 Data Export (CSV)"])

with tab1:
    col_chart1, col_chart2 = st.columns([1, 1])
    with col_chart1:
        # Donut Chart for Loss Share
        fig_pie = go.Figure(data=[go.Pie(
            labels=['Conduction Loss P_cond', 'Switching Loss P_sw'],
            values=[results['p_cond'], results['p_sw']],
            hole=0.55,
            marker_colors=['#00ff88', '#38bdf8']
        )])
        fig_pie.update_layout(
            title="MOSFET Power Loss Distribution",
            template="plotly_dark",
            paper_bgcolor='rgba(0,0,0,0)',
            plot_bgcolor='rgba(0,0,0,0)',
            height=340
        )
        st.plotly_chart(fig_pie, use_container_width=True)

    with col_chart2:
        # Stacked Bar Comparison
        fig_bar = go.Figure(data=[
            go.Bar(name='Conduction Loss', x=['Operating Loss'], y=[results['p_cond']], marker_color='#00ff88'),
            go.Bar(name='Switching Loss', x=['Operating Loss'], y=[results['p_sw']], marker_color='#38bdf8')
        ])
        fig_bar.update_layout(
            barmode='stack',
            title=f"Total Dissipation Stack: {results['p_total']:.2f} W",
            yaxis_title="Power (Watts)",
            template="plotly_dark",
            paper_bgcolor='rgba(0,0,0,0)',
            plot_bgcolor='rgba(0,0,0,0)',
            height=340
        )
        st.plotly_chart(fig_bar, use_container_width=True)

with tab2:
    st.subheader("Parametric Sensitivity Sweep: Switching Frequency vs Power Loss")
    freq_range = np.linspace(5000, 100000, 50)  # 5 kHz to 100 kHz
    p_cond_arr = [(i_rms ** 2) * r_ds_on] * len(freq_range)
    p_sw_arr = [(e_on + e_off) * f for f in freq_range]
    p_total_arr = [c + s for c, s in zip(p_cond_arr, p_sw_arr)]
    tj_arr = [t_a + (tot * r_theta) for tot in p_total_arr]

    fig_sweep = make_subplots(specs=[[{"secondary_y": True}]])
    fig_sweep.add_trace(go.Scatter(x=freq_range / 1000, y=p_total_arr, name="Total Loss (W)", line=dict(color='#00ff88', width=2.5)), secondary_y=False)
    fig_sweep.add_trace(go.Scatter(x=freq_range / 1000, y=p_sw_arr, name="Switching Loss (W)", line=dict(color='#38bdf8', dash='dot')), secondary_y=False)
    fig_sweep.add_trace(go.Scatter(x=freq_range / 1000, y=tj_arr, name="Junction Temp Tj (°C)", line=dict(color='#f59e0b', width=2)), secondary_y=True)
    fig_sweep.add_hline(y=t_j_max, line_dash="dash", line_color="#ef4444", annotation_text=f"Max Tj Limit ({t_j_max}°C)", secondary_y=True)

    fig_sweep.update_layout(
        title="Impact of Switching Frequency on Losses and Junction Temperature",
        xaxis_title="Switching Frequency (kHz)",
        template="plotly_dark",
        paper_bgcolor='rgba(0,0,0,0)',
        plot_bgcolor='rgba(0,0,0,0)',
        height=400
    )
    fig_sweep.update_yaxes(title_text="Power Loss (Watts)", secondary_y=False)
    fig_sweep.update_yaxes(title_text="Junction Temperature (°C)", secondary_y=True)
    st.plotly_chart(fig_sweep, use_container_width=True)

with tab3:
    st.subheader("Experiment 2: Thermal Resistance (Heatsink) Comparison")
    r_thetas = [4.0, 8.0, 12.0]
    comparison_data = []
    for r_th in r_thetas:
        res = calculate_losses(i_rms, r_ds_on, e_on, e_off, f_s, t_a, r_th, t_j_max, p_out)
        comparison_data.append({
            "R_theta (°C/W)": r_th,
            "Total Loss (W)": res["p_total"],
            "Junction Temp Tj (°C)": res["t_j"],
            "Safety Margin (°C)": res["temp_margin"],
            "Status": "Safe" if not res["is_overheated"] else "Overheated"
        })
    df_compare = pd.DataFrame(comparison_data)
    st.dataframe(df_compare, use_container_width=True)

    fig_th = go.Figure(data=[
        go.Bar(x=[f"{r}°C/W" for r in df_compare["R_theta (°C/W)"]], y=df_compare["Junction Temp Tj (°C)"], marker_color=['#00ff88', '#38bdf8', '#f59e0b'])
    ])
    fig_th.add_hline(y=t_j_max, line_dash="dash", line_color="#ef4444", annotation_text=f"Tj Max ({t_j_max}°C)")
    fig_th.update_layout(
        title="Junction Temperature across Heatsink Thermal Resistance Variants",
        xaxis_title="Thermal Resistance R_theta",
        yaxis_title="Junction Temperature (°C)",
        template="plotly_dark",
        paper_bgcolor='rgba(0,0,0,0)',
        plot_bgcolor='rgba(0,0,0,0)',
        height=320
    )
    st.plotly_chart(fig_th, use_container_width=True)

with tab4:
    st.subheader("Export Simulation Dataset")
    sweep_df = pd.DataFrame({
        "Frequency_kHz": freq_range / 1000,
        "P_cond_W": p_cond_arr,
        "P_sw_W": p_sw_arr,
        "P_total_W": p_total_arr,
        "Junction_Temp_C": tj_arr,
        "Ambient_Temp_C": t_a,
        "R_theta_C_per_W": r_theta
    })
    st.dataframe(sweep_df.head(10), use_container_width=True)
    csv = sweep_df.to_csv(index=False).encode('utf-8')
    st.download_button(
        label="📥 Download Frequency Sweep CSV",
        data=csv,
        file_name="mosfet_thermal_sweep_results.csv",
        mime="text/csv"
    )

st.markdown("---")
st.caption("Developed by Vishnu Varthan VG • Electrical & Electronics Engineering, Chennai Institute of Technology")
