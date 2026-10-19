/**
 * Portfolio Data Configuration for Vishnu Varthan VG
 * Electrical & Electronics Engineering, Chennai Institute of Technology
 * 
 * Edit this file to update personal details, links, project statuses, or photos.
 */

export const personalInfo = {
  name: "Vishnu Varthan VG",
  role: "Electrical & Electronics Engineering Student",
  institution: "Chennai Institute of Technology",
  location: "Chennai & Coimbatore, Tamil Nadu, India",
  tagline: "Bridging the physical world of power switchgear, microcontrollers, and motor control with intelligent real-time firmware.",
  availability: "Open to Core Engineering, Embedded Systems & Automation Opportunities",
  profileImage: "/profile.jpg",
  email: "varthanvgvishnu@gmail.com",
  socials: {
    github: "https://github.com/varthanvgvishnu-cmyk",
    linkedin: "https://www.linkedin.com/in/vishnu-varthan-vg",
    resume: "/resume.pdf",
  },
  stats: [
    { label: "Hackathon Podiums", value: "2x", sub: "VISION X & Y'HACK" },
    { label: "Hardware & IoT Builds", value: "6+", sub: "ESP32, Arduino & Robotics" },
    { label: "Industrial Experience", value: "1", sub: "Auto Print Machinery, CBE" },
    { label: "Core Domains", value: "4", sub: "Embedded, Controls, Switchgear, ML" }
  ]
};

export const education = {
  degree: "Bachelor of Electrical and Electronics",
  major: "Electrical and Electronics Engineering",
  cgpa: "8.30 / 10.00",
  institution: "Chennai Institute of Technology (CIT)",
  affiliation: "Affiliated to Anna University",
  period: "Expected May 2029",
  location: "Chennai, Tamil Nadu",
  highlights: [
    "Specialization coursework in Digital Electronics, Microprocessors and Microcontrollers, and Control Systems Engineering.",
    "Active participant in collegiate robotics, embedded hardware design hackathons, and technical symposiums.",
    "Strong laboratory grounding in electrical machinery, digital signal processing, and industrial wiring standards."
  ],
  coreCoursework: [
    "Digital Electronics",
    "Microprocessors and Microcontrollers",
    "Electrical Measurements and Instrumentation",
    "Control Systems Engineering",
    "Power Electronics",
    "Embedded Systems",
    "Electrical Machines",
    "Digital Signal Processing"
  ]
};

export const projects = [
  {
    id: "mosfet-thermal-analyzer",
    title: "Power Semiconductor Loss & Thermal Reliability Analyzer",
    category: "Power Electronics & Simulation",
    statusBadge: "Python & Streamlit Simulation Engine (Verified)",
    statusType: "completed",
    featured: true,
    shortDescription: "Interactive Python & Streamlit engineering simulation platform calculating conduction losses, switching dissipation, steady-state junction temperatures (Tj), and safe operating margins for power MOSFETs with Plotly parametric sweeps.",
    fullDescription: "Engineered a modular Python simulation framework to evaluate semiconductor power dissipation and steady-state thermal behavior in power electronics switches. Calculates channel conduction loss via Joule heating (P_cond = I_RMS² · R_DS(on)) and dynamic switching dissipation (P_sw ≈ (E_on + E_off) · f_s). Integrates a 1D thermal resistance network to estimate junction temperatures (T_j = T_a + P_total · R_θ) and thermal safety margins against maximum silicon ratings (T_j(max)). Includes an interactive Streamlit dashboard with Plotly parametric sensitivity sweeps (frequency scaling 5–100 kHz, heatsink comparisons across 4, 8, 12 °C/W), CSV dataset export, and a 5-point automated Pytest verification suite.",
    hardwareSpecs: [
      { item: "Simulation Stack", detail: "Python 3.11, Streamlit, NumPy, Pandas" },
      { item: "Visualization Engine", detail: "Plotly Interactive Charts (Loss Breakdown & Parametric Sweeps)" },
      { item: "Verification Suite", detail: "Pytest (5 automated unit tests with edge-case validation)" },
      { item: "Thermal Model Topology", detail: "Steady-state 1D thermal network (T_j = T_a + P_total × R_θ)" },
      { item: "Baseline Operating Point", detail: "10A RMS, 20mΩ RDS(on), 200µJ (Eon+Eoff), 20kHz fs, 8°C/W R_θ" },
      { item: "Simulated Performance", detail: "P_cond: 2.0W | P_sw: 4.0W | P_total: 6.0W | Tj: 78°C (Margin: +72°C) | η: 94.34%" }
    ],
    pinoutTitle: "Governing Equations & Mathematical Model",
    pinoutHeader1: "Parameter / Metric",
    pinoutHeader2: "Mathematical Formulation & Sample Evaluation",
    pinoutTable: [
      { pin: "Conduction Loss (P_cond)", function: "P_cond = I_RMS² × R_DS(on) = (10 A)² × 0.020 Ω = 2.00 W" },
      { pin: "Switching Loss (P_sw)", function: "P_sw ≈ (E_on + E_off) × f_s = 200 µJ × 20,000 Hz = 4.00 W" },
      { pin: "Total MOSFET Dissipation", function: "P_total = P_cond + P_sw = 2.00 W + 4.00 W = 6.00 W" },
      { pin: "Junction Temperature (T_j)", function: "T_j = T_a + (P_total × R_θ) = 30°C + (6.0 W × 8.0 °C/W) = 78.00 °C" },
      { pin: "Thermal Safety Margin", function: "Margin = T_j(max) - T_j = 150°C - 78°C = +72.00 °C (Safe Operating Region)" },
      { pin: "MOSFET-Only Efficiency", function: "η = [P_out / (P_out + P_total)] × 100% = [100 / (100 + 6)] = 94.34%" },
      { pin: "Pytest Automated Suite", function: "5/5 Passing Tests: Conduction, Switching, Total, Freq Doubling, ValueError" }
    ],
    tags: ["Power Electronics", "Semiconductor Devices", "MOSFET Thermal Modeling", "Python", "Streamlit", "Plotly", "Pytest", "Loss Analysis"],
    image: "/projects/mosfet-thermal-analyzer.png",
    imageBadge: "Live App Dashboard",
    liveUrl: "https://mosfet-thermal-analyzer-wemtycydxwe9pbux8wk4xg.streamlit.app/",
    liveLabel: "Live Streamlit Simulation App",
    githubRepo: "https://github.com/varthanvgvishnu-cmyk/mosfet-thermal-analyzer",
    truthLabel: "Mathematical simulation engine verified with automated pytest suite; models steady-state conduction & switching losses under ideal 1D thermal resistance assumptions without transient thermal impedance network."
  },
  {
    id: "esp32-safe-locker",
    title: "ESP32-Based Smart Safe Locker with OLED Display & Timed Security Lockout",
    category: "Embedded & IoT",
    statusBadge: "Hardware Implemented & Verified",
    statusType: "completed",
    featured: true,
    shortDescription: "A tamper-resistant physical electronic safe featuring analog potentiometer passcode calibration, 0.96\" I2C OLED interface, dual-LED indicators, and a 30-second timed lockout after 3 failed attempts.",
    fullDescription: "Designed and programmed a standalone embedded security locker driven by an ESP32 microcontroller. The passcode entry mechanism leverages an analog potentiometer mapped dynamically to alphanumeric character sets via calibrated ADC thresholds. Real-time system status is displayed on an SSD1306 OLED via I2C protocol. An anti-brute-force state machine tracks failed attempts: three consecutive invalid entries trigger a persistent 30-second security hardware lockout with a live countdown display, accompanied by acoustic buzzer warnings and red LED beacon.",
    hardwareSpecs: [
      { item: "Microcontroller", detail: "ESP32 NodeMCU DevKit (Xtensa dual-core 32-bit LX6)" },
      { item: "Display", detail: "0.96-inch Monochrome I2C SSD1306 OLED (128x64)" },
      { item: "Input Selector", detail: "10kΩ Precision Linear Potentiometer (ADC GPIO 34)" },
      { item: "Entry Confirm", detail: "Tactile Push Button (GPIO 0 with internal pullup)" },
      { item: "Visual Indicators", detail: "Dual LED: Green (GPIO 25 - Access Granted) & Red (GPIO 26 - Lockout/Error)" },
      { item: "Current Limiting", detail: "2x 220Ω Resistors for Green & Red LED Protection" },
      { item: "Power Rails", detail: "Regulated 3.3V Logic Supply & Common Breadboard Ground" }
    ],
    pinoutTable: [
      { pin: "GPIO 21", function: "I2C SDA (OLED Display Serial Data line)" },
      { pin: "GPIO 22", function: "I2C SCL (OLED Display Serial Clock line)" },
      { pin: "GPIO 34", function: "ADC1 Channel 6 (10kΩ Potentiometer Analog Voltage Wiper)" },
      { pin: "GPIO 25", function: "Digital OUT -> 220Ω -> Green LED Anode (Unlocked State)" },
      { pin: "GPIO 26", function: "Digital OUT -> 220Ω -> Red LED Anode (Lockout / Tamper Alarm)" },
      { pin: "GPIO 0",  function: "Digital IN (Tactile Pushbutton to GND for Passcode Confirm)" },
      { pin: "3.3V / GND", function: "Regulated DC Power Bus for OLED, Potentiometer, & LEDs" }
    ],
    tags: ["ESP32", "Embedded C++", "I2C Protocol", "OLED SSD1306", "State Machine", "Hardware Security", "Circuit Wiring"],
    image: "/projects/esp32-locker-circuit.jpg",
    wiringDiagram: "/projects/esp32-locker-circuit.jpg",
    demoVideoPlaceholder: "https://www.youtube.com/watch?v=placeholder-esp32-demo",
    githubRepo: "https://github.com/varthanvgvishnu-cmyk/ESP32-Based_Smart_Safe_Locker",
    truthLabel: "Fully built, wired on breadboard/perfboard, and tested with real-time countdown timer."
  },
  {
    id: "flame-rover",
    title: "Flame Rover (Autonomous Fire Detection Robot)",
    category: "Robotics & Hardware",
    statusBadge: "Prototype Built & Field Tested",
    statusType: "completed",
    featured: true,
    shortDescription: "Autonomous mobile rover with multi-directional infrared flame sensors, differential drive propulsion, ultrasonic obstacle ranging, pan/tilt nozzle, and fire extinguishing pump.",
    fullDescription: "Constructed an agile robotic firefighting platform engineered to navigate confined spaces, locate nascent fire outbreaks, and dispense water directly onto the flame. Utilizes high-sensitivity photodiode flame detection modules sensitive to infrared radiation emitted by open flames (760nm - 1100nm). Dual L298N H-bridge motor drivers coordinate twin DC drive gearmotors for differential steering, while a 2-axis pan/tilt servo assembly directs the water suppression nozzle powered by a submersible pump.",
    hardwareSpecs: [
      { item: "Core Controller", detail: "Arduino Mega ADK / Uno Microcontroller" },
      { item: "Motor Drivers", detail: "Dual L298N Full H-Bridge Drivers (Drive Motors + Water Pump)" },
      { item: "Fire Detection", detail: "Optical IR Flame Photodiode Sensor Array (Mid, Top, Left, Right)" },
      { item: "Ranging & Avoidance", detail: "HC-SR04 Ultrasonic Distance Sensor" },
      { item: "Extinguisher Mechanism", detail: "Submersible DC Water Pump with 2-DOF Pan/Tilt Servos" },
      { item: "Power Isolation", detail: "Dual Rail: 9V Logic Battery + 7.4V 2S LiPo 2800mAh Motor Supply" }
    ],
    pinoutTable: [
      { pin: "A0 - A3 / D2 - D4", function: "Analog & Digital Inputs (Multi-Zone IR Flame Photodiode Array)" },
      { pin: "D5, D6, D9, D10", function: "PWM & Directional Control for L298N Chassis Drive Motors" },
      { pin: "D11, D12", function: "HC-SR04 Ultrasonic Trigger & Echo Pins" },
      { pin: "D3, D13", function: "PWM Servo Signals (Horizontal Pan & Vertical Tilt Servos)" },
      { pin: "Aux Driver Out", function: "L298N Switched 5V/9V DC Submersible Water Pump Actuator" },
      { pin: "Common Ground", function: "Optically / Ground-isolated dual power rail to eliminate inductive EMI" }
    ],
    tags: ["Arduino", "Robotics", "L298N H-Bridge", "Flame IR Sensors", "Ultrasonic HC-SR04", "Pan/Tilt Servos", "Fire Suppression"],
    image: "/projects/flame-rover-circuit.png",
    wiringDiagram: "/projects/flame-rover-circuit.png",
    demoVideoPlaceholder: "https://www.youtube.com/watch?v=placeholder-flame-rover",
    githubRepo: "https://github.com/varthanvgvishnu-cmyk/arduino-flame-detection-rover",
    truthLabel: "Assembled chassis, sensor threshold tuning verified with real flame sources under controlled conditions."
  },
  {
    id: "dc-motor-speed-control",
    title: "Arduino DC Motor Speed Control",
    category: "Robotics & Hardware",
    statusBadge: "PWM Speed Control & Hall Tachometer (Verified)",
    statusType: "completed",
    featured: true,
    shortDescription: "Precision PWM motor speed modulation using Arduino Uno, L298N H-Bridge, 10kΩ potentiometer reference, and Hall effect magnetic sensor pulse interrupt feedback.",
    fullDescription: "Implemented and documented an electronic motor drive circuit regulating the rotational velocity of a 12V brushed DC motor using Arduino Timer PWM. An analog 10kΩ potentiometer supplies the target reference speed via analog-to-digital conversion on pin A0. The L298N dual H-bridge provides robust high-current switching with flyback diode clamping, while an A3144 Hall effect magnetic sensor connected to external interrupt pin D2 registers motor revolutions in real time for closed-loop speed feedback.",
    hardwareSpecs: [
      { item: "Controller", detail: "Arduino Uno (ATmega328P, 16MHz)" },
      { item: "Motor Driver", detail: "L298N Dual Full H-Bridge Module with heatsink" },
      { item: "Actuator", detail: "12V DC Permanent Magnet Brushed Motor" },
      { item: "RPM Feedback", detail: "A3144 Hall Effect Sensor Module with magnetic rotor disc" },
      { item: "Speed Setpoint", detail: "10kΩ Linear Rotary Potentiometer (ADC channel A0)" },
      { item: "External Power", detail: "12V DC External Battery / Power Supply with Common Ground" }
    ],
    pinoutTable: [
      { pin: "Pin 5 (PWM)", function: "Arduino Timer PWM Output -> L298N ENA (Speed Modulation 0-255)" },
      { pin: "Pin 7", function: "Digital OUT -> L298N IN1 (Direction Control Logic)" },
      { pin: "Pin 8", function: "Digital OUT -> L298N IN2 (Direction Control Logic)" },
      { pin: "Pin 2 (INT0)", function: "External Hardware Interrupt -> Hall Effect Sensor Signal OUT" },
      { pin: "Pin A0", function: "Analog Input -> 10kΩ Potentiometer Wiper (Speed Reference 0-5V)" },
      { pin: "5V & GND", function: "Logic Power Rail shared with Potentiometer & Hall Sensor" },
      { pin: "12V & Common GND", function: "High-Current External Motor Power Supply Rail" }
    ],
    tags: ["Arduino", "PWM Regulation", "Motor Drivers", "L298N", "Hall Effect Sensor", "Power Electronics", "Hardware Interfacing"],
    image: "/projects/dc-motor-circuit.jpg",
    wiringDiagram: "/projects/dc-motor-circuit.jpg",
    demoVideoPlaceholder: "https://www.youtube.com/watch?v=placeholder-dc-motor",
    githubRepo: "https://github.com/varthanvgvishnu-cmyk/pid-dc-motor-speed-control",
    truthLabel: "Fully wired hardware circuit: Potentiometer speed modulation, L298N motor driver, and Hall effect sensor pulse detection verified on bench."
  },
  {
    id: "adaptive-noise-cancellation",
    title: "ML-Driven Adaptive Noise Cancellation",
    category: "Signal Processing & Control",
    statusBadge: "Simulated LMS Algorithm | Hardware Stage Planned",
    statusType: "research",
    featured: true,
    shortDescription: "Algorithmic modeling of Least Mean Squares (LMS) adaptive filter for removing 50Hz power grid hum and acoustic noise, with roadmap for DSP deployment.",
    fullDescription: "Researched and simulated adaptive finite impulse response (FIR) filtering techniques using Python (NumPy/SciPy) and MATLAB. Modeled the Least Mean Squares (LMS) and Normalized LMS (NLMS) error-minimization algorithms to extract clean speech and biological signals contaminated by persistent 50Hz/60Hz AC line harmonics and Gaussian white noise. Honest Engineering Scope: Algorithmic weight update converges reliably in numerical simulation (SNR improvement of +14dB). Proposed Future Milestone: Porting filter coefficients to an ARM Cortex-M4 DSP with hardware FPU for real-time I2S audio stream denoising.",
    hardwareSpecs: [
      { item: "Simulation Stack", detail: "Python 3.11 (NumPy, SciPy, Matplotlib), MATLAB Simulink" },
      { item: "Filter Topology", detail: "32-tap Adaptive FIR filter using Normalized LMS weight adaptation" },
      { item: "Noise Models", detail: "50Hz Mains hum harmonic interference + Additive White Gaussian Noise" },
      { item: "Target Embedded Target (Proposed)", detail: "STM32F401 / ESP32-S3 with dual MEMS I2S microphone array" }
    ],
    pinoutTable: [
      { pin: "Algorithm Stage", function: "e(n) = d(n) - y(n); w(n+1) = w(n) + 2μ * e(n) * x(n)" },
      { pin: "Target I2S (Future)", function: "BCLK, WCLK, DOUT from INMP441 MEMS microphone" }
    ],
    tags: ["DSP", "LMS Algorithm", "Adaptive Filtering", "Python", "MATLAB", "Signal Processing"],
    imagePlaceholder: "/projects/anc-waveform.jpg",
    wiringDiagramPlaceholder: "/projects/anc-block-diagram.png",
    demoVideoPlaceholder: "https://www.youtube.com/watch?v=placeholder-noise-cancelling",
    githubRepo: "https://github.com/vishnuvarthan-vg/adaptive-noise-cancellation-lms",
    truthLabel: "Simulation phase complete with mathematical verification; embedded microcontroller deployment is a proposed next step."
  },
  {
    id: "vision-shield",
    title: "VisionShield (Industrial Danger Zone Optical Monitor)",
    category: "Computer Vision & Safety",
    statusBadge: "Concept Architecture & Prototype",
    statusType: "research",
    featured: false,
    shortDescription: "Computer vision safety surveillance prototype engineered to detect perimeter intrusions around automated machinery and high-voltage areas.",
    fullDescription: "Conceptualized and tested an optical safety perimeter system using Python and OpenCV. Designed to monitor safety exclusion zones around dangerous high-voltage switchgear or automated packaging machinery, issuing immediate digital trip triggers when human presence breaches virtual keep-out boundaries. Clear Project Boundary: Developed as an academic prototype exploring camera-based safety interlocks; not certified for ISO 13849 safety-rated industrial operations.",
    hardwareSpecs: [
      { item: "Capture Unit", detail: "Wide-angle HD USB Camera / ESP32-CAM" },
      { item: "Processing Host", detail: "Edge SBC (Raspberry Pi 4 / Laptop Workstation)" },
      { item: "Vision Framework", detail: "OpenCV, Background Subtraction, Contour Polygon Zoning" },
      { item: "Interlock Output", detail: "GPIO relay trip command signal" }
    ],
    pinoutTable: [
      { pin: "USB / CSI", function: "Camera Video Frame Capture stream" },
      { pin: "GPIO 17", function: "Safety E-Stop Relay Trip Signal (Active Low)" }
    ],
    tags: ["Computer Vision", "OpenCV", "Python", "Industrial Safety", "Edge Computing"],
    imagePlaceholder: "/projects/visionshield.jpg",
    liveUrl: "https://visionshield-iota.vercel.app/",
    liveLabel: "Live Vercel Deployment",
    githubRepo: "https://github.com/varthanvgvishnu-cmyk/visionshield",
    truthLabel: "Clearly scoped as a software/vision safety prototype without false commercial certification claims."
  }
];

export const internship = {
  company: "Auto Print Machinery",
  location: "Coimbatore, Tamil Nadu",
  role: "Assistant Electrical Engineer / Intern",
  type: "Industrial On-Site Internship",
  period: "Industry Practical Immersion",
  summary: "Comprehensive hands-on exposure to heavy industrial printing machinery electrical panels, power distribution switchgear, variable frequency drives, and machine control circuits.",
  keyLearnings: [
    {
      title: "Industrial Switchgear & Circuit Protection",
      description: "Hands-on assembly, testing, and troubleshooting of Miniature Circuit Breakers (MCBs), Magnetic Contactors, and Thermal Overload Relays (OLRs) designed to safeguard 3-phase induction motors from overcurrent and phase loss."
    },
    {
      title: "Variable Frequency Drives (VFDs)",
      description: "Studied VFD parameter configuration, V/f curve tuning, multi-step velocity presets, acceleration/deceleration ramp profiles, and dynamic braking resistors for high-precision printing roller drives."
    },
    {
      title: "Control Panel Wiring & Standards",
      description: "Learned industrial panel layout standards on DIN rails, wire ferrule numbering, cable segregation (isolating low-voltage 24V DC sensor signals from 415V AC power lines to avoid EMI), and equipment grounding."
    },
    {
      title: "PLC & HMI Machine Interlocking",
      description: "Gained operational understanding of Programmable Logic Controller (PLC) input/output mapping and Human-Machine Interface (HMI) screens, including emergency stop safety loops and sequence interlocks."
    }
  ],
  panelComponents: [
    { name: "MCBs & MCCBs", role: "Short-circuit and thermal overcurrent line protection", voltage: "415V AC / 230V AC" },
    { name: "Magnetic Contactors", role: "Heavy inductive load coil switching & forward-reverse interlocking", voltage: "Coil: 24V DC / 230V AC" },
    { name: "Thermal Overload Relays", role: "Bimetallic motor winding thermal overload trip protection", voltage: "Adjustable trip current" },
    { name: "Variable Frequency Drives", role: "Continuous smooth speed and torque regulation of 3-phase motors", voltage: "0 - 50 Hz output" },
    { name: "SMPS Power Supply", role: "Converts 230V AC mains to clean regulated 24V DC for PLC/sensors", voltage: "24V DC, 5A / 10A" },
    { name: "Terminal Blocks & Ferrules", role: "Standardized point-to-point panel wiring with wire identification", voltage: "DIN Rail Mounted" }
  ]
};

export const achievements = [
  {
    id: "vision-x",
    title: "2nd Place Winner",
    event: "VISION X Hackathon",
    badge: "2nd Place Podium",
    category: "Hardware & Automation Hackathon",
    year: "Recent Milestone",
    description: "Awarded 2nd place among dozens of engineering teams for engineering an automated hardware prototype under intense 24-hour hackathon constraints, demonstrating robust circuit execution, sensor integration, and system reliability.",
    highlight: "Recognized for practical engineering execution and hardware-software synergy."
  },
  {
    id: "y-hack",
    title: "Runner-Up",
    event: "Y'HACK",
    badge: "Runner-Up Award",
    category: "Technical Innovation Hackathon",
    year: "Recent Milestone",
    description: "Secured Runner-Up recognition at Y'HACK for architecting a functional embedded system addressing real-world operational challenges, praised by industry evaluators for clean code and responsive hardware actuation.",
    highlight: "Commended for embedded firmware stability and effective problem solving."
  },
  {
    id: "cit-symposium",
    title: "Technical Excellence Showcase",
    event: "CIT Engineering Symposium",
    badge: "Special Recognition",
    category: "Academic Showcase",
    year: "Ongoing",
    description: "Presented research and functional hardware builds in internal department reviews and inter-collegiate technical symposiums at Chennai Institute of Technology.",
    highlight: "Demonstrated ESP32 IoT safe locker and motor drive control systems."
  }
];

export const skills = {
  categories: [
    {
      name: "Embedded Systems & Microcontrollers",
      skills: [
        { name: "ESP32 (Dual Core / Wi-Fi / BLE)", level: 88, highlight: "Primary IoT platform" },
        { name: "Arduino Uno / Nano (ATmega328P)", level: 90, highlight: "Rapid prototyping & PWM" },
        { name: "Embedded C / C++", level: 85, highlight: "Firmware, interrupts & registers" },
        { name: "Communication Protocols (I2C, SPI, UART)", level: 88, highlight: "OLEDs, sensors & telemetry" },
        { name: "STM32 & 8051 Concepts", level: 72, highlight: "Architectural foundations" }
      ]
    },
    {
      name: "Industrial Automation & Switchgear",
      skills: [
        { name: "VFD Parameterization & Motor Control", level: 82, highlight: "Auto Print Machinery internship" },
        { name: "Industrial Switchgear (MCBs, Contactors, OLRs)", level: 86, highlight: "Panel wiring & sizing" },
        { name: "Panel Wiring & Ferrule Numbering", level: 85, highlight: "DIN rail layout & safety" },
        { name: "PLC & HMI Operational Concepts", level: 75, highlight: "Interlock sequence logic" },
        { name: "Electrical Safety & Earthing Systems", level: 84, highlight: "Industrial workplace standards" }
      ]
    },
    {
      name: "Circuit Design & Simulation Tools",
      skills: [
        { name: "MATLAB & Simulink", level: 80, highlight: "Control loops & filter models" },
        { name: "KiCad / EasyEDA PCB Layout", level: 78, highlight: "Schematic capture & routing" },
        { name: "Proteus Circuit Simulation", level: 82, highlight: "Virtual circuit debugging" },
        { name: "Lab Instruments (DSO, Multimeter, Function Gen)", level: 90, highlight: "Hands-on bench testing" }
      ]
    },
    {
      name: "Programming Languages & HDL",
      skills: [
        { name: "C / C++", level: 90, highlight: "Firmware, registers & embedded control" },
        { name: "Verilog HDL", level: 80, highlight: "Digital logic & hardware description" },
        { name: "Python", level: 84, highlight: "Simulations, DSP & OpenCV" },
        { name: "Git & GitHub", level: 86, highlight: "Version control & collaboration" },
        { name: "Antigravity & Linux CLI", level: 85, highlight: "Advanced developer tooling & automation" }
      ]
    },
    {
      name: "Core Electrical Engineering",
      skills: [
        { name: "Control Systems (State-Space & Classical)", level: 84, highlight: "Pole placement & Bode plots" },
        { name: "Power Electronics (Inverters, Choppers)", level: 82, highlight: "PWM switching topologies" },
        { name: "Electrical Machines (Transformers, Induction Motors)", level: 85, highlight: "Torque-speed dynamics" },
        { name: "Linear Integrated Circuits (Op-Amps, 555 Timers)", level: 86, highlight: "Signal conditioning & filters" }
      ]
    }
  ]
};

export const learningLogs = [
  {
    id: "log-1",
    date: "Recent Lab Entry",
    title: "Overcoming ESP32 ADC Non-Linearity in Potentiometer Calibration",
    category: "Embedded Firmware",
    summary: "The ESP32's 12-bit SAR ADC exhibits noticeable non-linearity near 0V and 3.3V (below 0.1V and above 3.1V). In the smart safe locker, mapping the raw analogRead() directly produced uneven digit increments.",
    solution: "Applied hardware calibration using esp_adc_cal APIs combined with software multi-segment linear interpolation and an exponential moving average (EMA) filter. The digit selector dial became rock-solid without jitter.",
    codeSnippet: `// Exponential Moving Average filter for ADC smoothing
float readSmoothPot(int pin, float alpha = 0.25) {
  static float smoothed = 0.0;
  int raw = analogRead(pin);
  smoothed = (alpha * raw) + ((1.0 - alpha) * smoothed);
  return smoothed;
}`
  },
  {
    id: "log-2",
    date: "Industrial Site Note",
    title: "Forward-Reverse Contactor Electrical & Mechanical Interlocking",
    category: "Industrial Switchgear",
    summary: "During my internship at Auto Print Machinery, I inspected motor reversal circuits. Energizing both forward and reverse contactors simultaneously creates a catastrophic phase-to-phase dead short across lines L1 and L3.",
    solution: "Implemented dual-layer interlocking: physical mechanical rocker latches preventing both plungers from engaging together, backed by normally-closed (NC) auxiliary contacts wired in series with the opposing contactor coil circuits.",
    codeSnippet: `// Schematic Logic:
// Forward Coil Power:  [START_FWD] -> [STOP_NC] -> [REV_AUX_NC] -> (FWD_COIL)
// Reverse Coil Power:  [START_REV] -> [STOP_NC] -> [FWD_AUX_NC] -> (REV_COIL)`
  },
  {
    id: "log-3",
    date: "Hardware Debugging",
    title: "Suppressing I2C Bus Hangs Caused by Inductive Flyback",
    category: "Circuit Protection",
    summary: "In early iterations of the Smart Safe Locker, engaging the latch solenoid or motor occasionally froze the SSD1306 OLED display, causing the I2C bus to hang indefinitely in a WAIT_ACK loop.",
    solution: "Traced the culprit to inductive voltage spikes coupling onto the 3.3V logic rail. Added a 1N4007 flyback snubber diode across the inductive coil, 100nF ceramic decoupling capacitors right at the OLED VCC/GND headers, and shortened the I2C bus wiring.",
    codeSnippet: `// Wire timeout guard added to prevent infinite blocking:
Wire.setTimeOut(3000); // 3ms hardware I2C timeout
if (Wire.getErrorCode() != 0) {
  Wire.begin(SDA_PIN, SCL_PIN); // Soft bus reset
}`
  },
  {
    id: "log-4",
    date: "Control Systems",
    title: "Why Full-State Feedback Dominates Classical PID in Multi-Variable Systems",
    category: "Control Theory",
    summary: "While PID controllers handle single-input single-output (SISO) loops easily, modern industrial automation processes with coupled thermal and fluid dynamics suffer from cross-coupling interaction.",
    solution: "Formulating the system in state-space allows pole placement via Ackermann's formula. By feeding back all state variables (e.g. height, flow rate, temperature), we position closed-loop eigenvalues arbitrarily to achieve rapid settling time with zero overshoot.",
    codeSnippet: `% MATLAB Pole Placement Design
A = [-0.1 0.05; 0.02 -0.2];
B = [1; 0];
desired_poles = [-1 + 1i, -1 - 1i];
K = place(A, B, desired_poles);
% System eigenvalues: eig(A - B*K) match desired locations perfectly`
  }
];
