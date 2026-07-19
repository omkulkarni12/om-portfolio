import { Project } from "@/types/project";
console.log("🔥 NEW PROJECT FILE LOADED");
export const projects: Project[] = [
  {
    id: "smarttorquedrive",

    title:
      "AI-Driven Torque Compensation for Enhanced Stability in Electric Vehicles on Rough Terrain",

    subtitle:
      "An Intelligent Embedded System for Dynamic Torque Distribution in Electric Vehicles",

    status: "Patent Filed",

    category: "Artificial Intelligence • Electric Vehicles • Embedded Systems",

    duration: "Jan 2025 – Jun 2026",

    role: "Lead Researcher, System Designer & Core Implementation Engineer",

    team: "Final Year Research Project",

    technologies: [
      "ESP32",
      "MPU6050 IMU",
      "Embedded C",
      "Arduino IDE",
      "Python",
      "Machine Learning",
      "Artificial Intelligence",
      "Motor Control",
      "PWM",
      "L298N Motor Driver",
      "IoT",
      "CAD",
      "Electrical Design",
    ],

    problem:
      "Electric vehicles operating on rough and uneven terrain experience unstable torque distribution, resulting in reduced traction, poor vehicle stability and inefficient power utilization. Conventional mechanical differential systems cannot dynamically adapt to changing terrain conditions in real time.",

    solution:
      "Designed an AI-assisted torque compensation system capable of continuously monitoring vehicle inclination, terrain conditions and wheel dynamics using embedded sensors. The system intelligently redistributes motor torque to improve traction, stability and driving safety while maintaining higher energy efficiency.",

    contributions: [
      "Conceptualized the complete research idea and system architecture.",
      "Designed the embedded hardware architecture and electronic control system.",
      "Developed AI-assisted decision-making logic for dynamic torque compensation.",
      "Integrated MPU6050 sensor with ESP32-based controller.",
      "Designed electrical wiring, power distribution and control workflow.",
      "Prepared CAD models, technical documentation and research presentation.",
      "Led system integration, prototype validation and project execution.",
    ],

    features: [
      "Real-time terrain monitoring",
      "Dynamic torque compensation",
      "Intelligent stability control",
      "Embedded sensor fusion",
      "AI-assisted driving decisions",
      "Energy-efficient torque distribution",
      "Scalable architecture for future EV platforms",
    ],

    challenges: [
      "Achieving accurate IMU sensor calibration.",
      "Maintaining real-time response with limited embedded resources.",
      "Synchronizing sensor data with torque control logic.",
      "Designing a reliable prototype suitable for repeated testing.",
      "Balancing control accuracy with computational efficiency.",
    ],

    results: [
      "Successfully designed and validated the complete system architecture.",
      "Prototype demonstrated intelligent torque compensation concept.",
      "Design Patent Filed.",
      "Selected as Top Finalist at L&T Techgium, Bengaluru.",
    ],

    github: "Coming Soon",

    demo: "Coming Soon",

    images: ["/images/projects/ev-chassis.jpg"],

    patent: "Coming Soon",

    publication: "Coming Soon",

    awards: [
      "Top Finalist - L&T Techgium, Bengaluru",
    ],

    featured: true,
  },

  {
    id: "raghava-drone",

    title: "Raghava AI & ML-Based Drone for Surveillance & Mapping",

    subtitle:
      "Autonomous Edge-AI Drone for Intelligent Surveillance, Mapping and Threat Detection",

    status: "Research Completed",

    category: "Artificial Intelligence • Robotics • Drone Technology",

    duration: "Aug 2024 – Jun 2026",

    role: "Lead Researcher, AI Developer & System Architect",

    team: "Raghava Innovations",

    technologies: [
      "Python",
      "OpenCV",
      "TensorFlow",
      "Computer Vision",
      "Machine Learning",
      "Raspberry Pi",
      "Pi Camera",
      "ArduPilot",
      "Mission Planner",
      "IoT",
      "Drone Navigation",
      "GPS",
      "Edge AI",
    ],

    problem:
      "Conventional surveillance drones depend heavily on manual operation and offer limited onboard intelligence for threat detection, autonomous navigation and real-time decision-making during security and monitoring operations.",

    solution:
      "Developed an AI-powered autonomous drone capable of intelligent surveillance, object detection, mapping and edge-based computer vision processing, enabling safer and more efficient monitoring with minimal human intervention.",

    contributions: [
      "Designed the complete drone architecture.",
      "Integrated Raspberry Pi with onboard AI processing.",
      "Developed computer vision algorithms for surveillance.",
      "Implemented autonomous navigation workflow.",
      "Integrated camera streaming and real-time monitoring.",
      "Designed communication workflow between onboard systems.",
      "Led overall project planning, testing and deployment.",
    ],

    features: [
      "Autonomous surveillance",
      "Real-time object detection",
      "Edge AI processing",
      "Live video streaming",
      "GPS-based navigation",
      "Mission planning",
      "Intelligent mapping",
      "Threat monitoring",
    ],

    challenges: [
      "Optimizing AI inference on edge hardware.",
      "Maintaining stable autonomous flight.",
      "Reducing latency during live video processing.",
      "Power optimization for longer flight duration.",
      "Reliable communication between onboard modules.",
    ],

    results: [
      "Successfully developed an intelligent surveillance drone prototype.",
      "Validated AI-based monitoring and mapping workflow.",
      "Recognized at multiple national and state-level innovation competitions.",
    ],

    github: "Coming Soon",

    demo: "Coming Soon",

    images: ["/images/projects/raghava-drone.jpg"],

    patent: "Coming Soon",

    publication: "Coming Soon",

    awards: [
      "Recognized at 4 National & State Level Hackathons",
    ],

    featured: true,
  },

  {
    id: "nidar-drone",

    title: "NIDAR Autonomous Drone Management System for Disaster Management",

    subtitle:
      "AI-Enabled Drone Solution for Emergency Response, Search & Rescue Operations",

    status: "Prototype Completed",

    category: "Disaster Management • Autonomous Systems • Drone Technology",

    duration: "2025",

    role: "Lead Designer, AI Engineer & Core Implementation Engineer",

    team: "NIDAR Innovation Team",

    technologies: [
      "Python",
      "Artificial Intelligence",
      "Computer Vision",
      "OpenCV",
      "Raspberry Pi",
      "Drone Navigation",
      "Mission Planner",
      "GPS",
      "Telemetry",
      "ArduPilot",
      "IoT",
    ],

    problem:
      "Disaster-affected regions require rapid situational awareness and efficient search operations. Traditional rescue methods often face delays due to inaccessible terrain, limited visibility and lack of real-time aerial intelligence.",

    solution:
      "Designed an autonomous drone management system capable of performing aerial surveillance, search operations and real-time disaster assessment using AI-powered vision, autonomous navigation and intelligent mission planning.",

    contributions: [
      "Designed complete mission workflow.",
      "Developed autonomous drone operation logic.",
      "Integrated AI-assisted surveillance capabilities.",
      "Implemented navigation and telemetry workflow.",
      "Designed emergency response architecture.",
      "Led prototype development and competition preparation.",
    ],

    features: [
      "Autonomous search missions",
      "Disaster area mapping",
      "Real-time aerial surveillance",
      "GPS waypoint navigation",
      "AI-assisted target identification",
      "Emergency response support",
    ],

    challenges: [
      "Mission planning for dynamic environments.",
      "Maintaining reliable communication during autonomous flight.",
      "Optimizing onboard processing under power constraints.",
      "Accurate navigation in complex disaster scenarios.",
    ],

    results: [
      "Successfully demonstrated disaster management drone concept.",
      "Qualified as Top Finalist at NIDAR 2025, New Delhi.",
      "Validated autonomous aerial monitoring workflow.",
    ],

    github: "Coming Soon",

    demo: "Coming Soon",

    images: ["/images/projects/nidar-drones.jpg"],

    patent: "Coming Soon",

    publication: "Coming Soon",

    awards: [
      "Top Finalist - NIDAR 2025, New Delhi",
    ],

    featured: true,
  },

    {
    id: "skillsense-ai",

    title: "SkillSense AI",

    subtitle:
      "AI-Powered Resume Analysis, Skill Gap Assessment & Career Recommendation Platform",

    status: "Completed",

    category: "Artificial Intelligence • NLP • Career Technology",

    duration: "Oct 2025 – Jul 2026",

    role: "Lead AI Developer, System Designer & Full Stack Engineer",

    team: "Infosys Springboard Guided Project",

    technologies: [
      "Python",
      "Machine Learning",
      "Natural Language Processing",
      "Sentence Transformers",
      "FAISS",
      "Scikit-learn",
      "Next.js",
      "React",
      "TypeScript",
      "Supabase",
      "REST API",
    ],

    problem:
      "Students and job seekers often struggle to identify skill gaps, understand ATS compatibility and choose suitable career opportunities based on their profiles.",

    solution:
      "Developed an AI-powered platform that analyzes resumes, evaluates ATS compatibility, identifies missing skills and recommends personalized career paths using NLP and machine learning techniques.",

    contributions: [
      "Designed complete system architecture.",
      "Developed AI-based resume analysis workflow.",
      "Implemented ATS scoring engine.",
      "Built intelligent skill-gap recommendation module.",
      "Designed recruiter and student dashboards.",
      "Integrated AI models with full-stack web application.",
      "Led complete project planning and implementation.",
    ],

    features: [
      "AI Resume Parser",
      "ATS Compatibility Score",
      "Skill Gap Analysis",
      "Career Recommendation Engine",
      "Resume Insights Dashboard",
      "Recruiter-Friendly Reports",
      "Modern Responsive Interface",
    ],

    challenges: [
      "Improving resume parsing accuracy.",
      "Handling multiple resume formats.",
      "Optimizing NLP model performance.",
      "Designing meaningful recommendation logic.",
      "Building scalable AI workflow.",
    ],

    results: [
      "Successfully developed a working AI prototype.",
      "Validated ATS analysis workflow.",
      "Demonstrated intelligent career recommendation system.",
      "Completed as a guided project under Infosys Springboard.",
    ],

    github: "Coming Soon",

    demo: "Coming Soon",

    images: ["/images/projects/skillsense-app.jpg"],

    patent: "Coming Soon",

    publication: "Coming Soon",

    awards: [
      "Guided Project under Infosys Springboard",
    ],

    featured: true,
  },

  {
    id: "ai-thumper-test",

    title: "AI-Based Thumper Test for Automotive Components",

    subtitle:
      "Predictive Fault Detection using Vibration & Acoustic Signal Analysis",

    status: "Completed",

    category: "Artificial Intelligence • Automotive Engineering • Predictive Maintenance",

    duration: "2025",

    role: "Lead System Designer & AI Implementation Engineer",

    team: "Engineering Innovation Project",

    technologies: [
      "Python",
      "Machine Learning",
      "Signal Processing",
      "FFT",
      "Vibration Analysis",
      "Acoustic Analysis",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
    ],

    problem:
      "Conventional thumper testing depends heavily on manual inspection, making defect identification inconsistent, time-consuming and difficult to scale in modern automotive manufacturing.",

    solution:
      "Designed an AI-assisted diagnostic system capable of analyzing vibration and acoustic signatures to automatically identify faulty automotive components and support predictive maintenance.",

    contributions: [
      "Designed AI-based inspection workflow.",
      "Developed vibration analysis methodology.",
      "Implemented acoustic signal processing pipeline.",
      "Designed machine learning classification workflow.",
      "Prepared complete technical documentation.",
    ],

    features: [
      "Automatic Fault Detection",
      "Vibration Signal Analysis",
      "Acoustic Pattern Recognition",
      "Predictive Maintenance Support",
      "Machine Learning Classification",
      "Quality Inspection Dashboard",
    ],

    challenges: [
      "Noise removal from sensor signals.",
      "Feature extraction from vibration data.",
      "Model accuracy optimization.",
      "Reliable defect classification.",
    ],

    results: [
      "Successfully demonstrated AI-assisted inspection concept.",
      "Improved consistency of fault identification.",
      "Established a scalable predictive maintenance approach.",
    ],

    github: "Coming Soon",

    demo: "Coming Soon",

    images: ["/images/projects/thumper.jpg"],

    patent: "Coming Soon",

    publication: "Coming Soon",

    awards: [],

    featured: true,
  },

  {
    id: "titan-edubridge-rural",

    title: "Titan – EduBridge Rural",

    subtitle:
      "Digital Skill Development & Employability Initiative for Rural Youth",

    status: "Completed",

    category: "Social Impact • Education • Community Development",

    duration: "2025",

    role: "Project Contributor & Technical Mentor",

    team: "Titan Company Limited & EduBridge",

    technologies: [
      "Digital Literacy",
      "Career Development",
      "Employability Skills",
      "Training Programs",
      "Communication",
      "Mentorship",
    ],

    problem:
      "Many students from rural communities face limited access to digital education, industry exposure and employability training, reducing their opportunities for sustainable careers.",

    solution:
      "Contributed to the Titan–EduBridge Rural initiative by supporting digital skill development, career readiness and employability programs designed to improve opportunities for rural youth.",

    contributions: [
      "Supported digital skill development activities.",
      "Contributed to employability training initiatives.",
      "Participated in career guidance sessions.",
      "Assisted students in professional development.",
      "Promoted technology awareness and digital learning.",
    ],

    features: [
      "Digital Skill Development",
      "Career Readiness",
      "Professional Communication",
      "Employability Training",
      "Community Engagement",
      "Social Impact",
    ],

    challenges: [
      "Addressing varying digital literacy levels.",
      "Encouraging participation among rural students.",
      "Adapting training for diverse learning needs.",
    ],

    results: [
      "Contributed to improving digital awareness.",
      "Supported employability and career readiness initiatives.",
      "Created positive social impact through community engagement.",
    ],

    github: "Coming Soon",

    demo: "Coming Soon",

    images: ["/images/projects/titan-overview.jpg"],

    patent: "Coming Soon",

    publication: "Coming Soon",

    awards: [
      "Social Impact Project",
    ],

    featured: true,
  },
];