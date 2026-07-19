import { Post } from "@/types/post";

export const posts: Post[] = [
  {
    id: 1,
    slug: "ai-torque-vectoring-ev",
    title: "AI-Driven Torque Vectoring in Electric Vehicles",
    subtitle: "A Hardware-in-the-Loop Study on dynamic torque distribution using ESP32 and MPU6050 sensors.",
    excerpt: "How we designed a real-time AI-assisted controller for dynamic torque distribution on ESP32, outperforming traditional mechanical differentials on rough terrain.",
    category: "Automotive",
    date: "July 15, 2026",
    year: 2026,
    readingTime: "8 min read",
    image: "/images/projects/ev-chassis.jpg",
    featured: true,
    technologies: ["ESP32", "MPU6050 IMU", "Embedded C", "Sensor Fusion", "Control Systems"],
    relatedProjectSlug: "smarttorquedrive",
    references: [
      "G. Gillespie et al., 'Dynamic Torque Vectoring for Electric All-Wheel Drive Vehicles,' IEEE Transactions on Vehicular Technology, 2021.",
      "L&T Techgium 8th Edition - National Engineering Innovation Submissions, 2025."
    ],
    toc: [
      { id: "introduction", text: "Introduction & Context" },
      { id: "mathematical-model", text: "The Torque Allocation Math" },
      { id: "firmware-implementation", text: "Firmware Implementation & Code" },
      { id: "results-lessons", text: "Results & Key Lessons" }
    ],
    content: `
      <h3 id="introduction" class="text-2xl font-bold text-white mb-4">Introduction & Context</h3>
      <p class="text-slate-300 mb-6 leading-relaxed">
        Conventional mechanical differential gearboxes have powered vehicles for over a century. However, as we transition to multi-motor Electric Vehicles (EVs), the mechanical constraints of gears can be replaced by direct software control. This project explores how an intelligent embedded system can dynamically adjust individual wheel speed and torque based on real-time physics data.
      </p>
      
      <div class="my-6 border-l-4 border-blue-500 bg-blue-500/5 p-4 rounded-r-xl">
        <strong class="text-blue-400 block mb-1">Key Research Goal:</strong>
        <p class="text-slate-300 text-sm">
          Optimize lateral stability and maximize wheel traction during aggressive cornering or slippery terrain transitions by dynamically distributing power between left and right motors.
        </p>
      </div>

      <h3 id="mathematical-model" class="text-2xl font-bold text-white mt-8 mb-4">The Torque Allocation Math</h3>
      <p class="text-slate-300 mb-4 leading-relaxed">
        Our torque vectoring algorithm continuously reads raw IMU accelerometer and gyroscope data. The slip ratio for each wheel is computed dynamically to check if any tire has exceeded its friction coefficient limit.
      </p>
      <p class="text-slate-300 mb-4 leading-relaxed">
        The base torque distribution relies on the Ackerman steering geometry and vehicle tilt angle:
      </p>
      <div class="my-6 text-center bg-white/[0.02] border border-white/5 p-4 rounded-xl font-mono text-blue-300 text-lg">
        T_{left} = T_{base} \cdot \left(1 - \frac{W \cdot \tan(\theta)}{2 \cdot L}\right) \pm \Delta T_{corr}
      </div>
      <p class="text-slate-300 mb-6 leading-relaxed">
        Where \(W\) represents the vehicle track width, \(L\) is the wheelbase, and \(\theta\) is the tilt angle. The correction factor \(\Delta T_{corr}\) is computed dynamically using an onboard lightweight AI estimation model.
      </p>

      <h3 id="firmware-implementation" class="text-2xl font-bold text-white mt-8 mb-4">Firmware Implementation & Code</h3>
      <p class="text-slate-300 mb-6 leading-relaxed">
        The system is implemented on an ESP32 micro-controller using FreeRTOS. Below is a code block showing the raw MPU6050 sensor acquisition task and torque distribution logic:
      </p>
      
      <pre class="bg-slate-950 border border-white/10 rounded-2xl p-6 overflow-x-auto text-sm text-slate-300 font-mono mb-6 leading-relaxed"><code class="language-cpp">// MPU6050 Acquisition and Torque Vectoring Task
void vTorqueControlTask(void *pvParameters) {
  TickType_t xLastWakeTime = xTaskGetTickCount();
  const TickType_t xDelayTime = pdMS_TO_TICKS(10); // 100Hz Frequency

  for (;;) {
    // Read raw IMU data
    int16_t ax, ay, az;
    int16_t gx, gy, gz;
    mpu.getMotion6(&ax, &ay, &az, &gx, &gy, &gz);

    // Compute vehicle roll/pitch orientation
    float roll = atan2(ay, az) * 180.0 / M_PI;
    float yawRate = gz / 131.0; // Sensitivity scale

    // Dynamic torque allocation algorithm
    float deltaTorque = computeAITorqueCorrection(roll, yawRate);
    float torqueLeft = baseTorque - deltaTorque;
    float torqueRight = baseTorque + deltaTorque;

    // Apply motor PWM outputs
    applyPWM(MOTOR_LEFT_PIN, constrain(torqueLeft, 0, 255));
    applyPWM(MOTOR_RIGHT_PIN, constrain(torqueRight, 0, 255));

    vTaskDelayUntil(&xLastWakeTime, xDelayTime);
  }
}</code></pre>

      <h3 id="results-lessons" class="text-2xl font-bold text-white mt-8 mb-4">Results & Key Lessons</h3>
      <p class="text-slate-300 mb-6 leading-relaxed">
        During validation runs on a custom 1:10 scale remote-controlled chassis model (incorporating 3D-printed chassis components), the software-controlled torque vectoring reduced understeer yaw deviations by **34%** compared to standard open differentials on loose dirt trails. 
      </p>
      
      <div class="my-6 border-l-4 border-yellow-500 bg-yellow-500/5 p-4 rounded-r-xl">
        <strong class="text-yellow-400 block mb-1">Key Lesson:</strong>
        <p class="text-slate-300 text-sm">
          Sensor calibration is critical. Accelerometer offsets due to chassis vibrations had to be filtered using a digital low-pass Butterworth filter implemented in firmware to prevent control loop instability.
        </p>
      </div>
    `
  },
  {
    id: 2,
    slug: "edge-ai-drones-disaster-response",
    title: "Developing Edge AI Drones for Disaster Response",
    subtitle: "Integrating Raspberry Pi and ArduPilot to execute autonomous search and rescue operations.",
    excerpt: "A deep dive into integrating Raspberry Pi with ArduPilot flight controllers to execute automated search patterns and real-time survivor detection.",
    category: "Robotics",
    date: "May 12, 2026",
    year: 2026,
    readingTime: "12 min read",
    image: "/images/projects/nidar-drones.jpg",
    featured: true,
    technologies: ["Raspberry Pi", "ArduPilot", "OpenCV", "Telemetry", "Computer Vision"],
    relatedProjectSlug: "nidar-drone",
    references: [
      "Drone Federation of India - Technical Guidelines, 2025.",
      "National Innovation Challenge for Drone Application and Research (NIDAR), 2025."
    ],
    toc: [
      { id: "disaster-scenario", text: "Disaster Surveillance Constraints" },
      { id: "hardware-integration", text: "Hardware & Telemetry Setup" },
      { id: "computer-vision", text: "Real-time Edge AI Tracking" },
      { id: "conclusion", text: "Future Deployments" }
    ],
    content: `
      <h3 id="disaster-scenario" class="text-2xl font-bold text-white mb-4">Disaster Surveillance Constraints</h3>
      <p class="text-slate-300 mb-6 leading-relaxed">
        In the immediate aftermath of floods or earthquakes, time is of the essence. Debris, toxic fumes, and collapsed infrastructure make it extremely dangerous for human search parties to enter affected zones. Drones offer an eye in the sky, but traditional video streaming consumes immense RF bandwidth and requires dedicated human operators to inspect video frames.
      </p>

      <blockquote class="my-6 border-l-4 border-blue-400 pl-4 italic text-slate-400">
        "On-board Edge intelligence is not a feature; it is a necessity when communication channels are severed during disasters."
      </blockquote>

      <h3 id="hardware-integration" class="text-2xl font-bold text-white mt-8 mb-4">Hardware & Telemetry Setup</h3>
      <p class="text-slate-300 mb-6 leading-relaxed">
        We configured a custom hexacopter equipped with carbon fiber framing. The onboard telemetry system connects an **APM/Pixhawk** flight controller (running ArduPilot) to a **Raspberry Pi 4** companion computer via a high-speed telemetry link (MAVLink protocol over serial).
      </p>
      
      <p class="text-slate-300 mb-6 leading-relaxed">
        This allows the Raspberry Pi to dynamically override autopilot waypoints based on real-time computer vision analysis, without needing constant ground control station contact.
      </p>

      <h3 id="computer-vision" class="text-2xl font-bold text-white mt-8 mb-4">Real-time Edge AI Tracking</h3>
      <p class="text-slate-300 mb-6 leading-relaxed">
        The companion computer runs a lightweight mobile target detector built with OpenCV. Whenever a survivor is recognized, the Pi logs the GPS coordinate and transmits an alert packet back over a secondary sub-GHz radio transceiver.
      </p>

      <pre class="bg-slate-950 border border-white/10 rounded-2xl p-6 overflow-x-auto text-sm text-slate-300 font-mono mb-6 leading-relaxed"><code class="language-python"># Dynamic waypoint adjustment based on vision detection
def adjust_flight_path(vehicle, target_gps):
    print(f"Target located! Redirecting flight path to: {target_gps}")
    
    # Switch flight mode to GUIDED
    vehicle.mode = VehicleMode("GUIDED")
    
    # Command drone to hover directly over the detected location
    target_location = LocationGlobalRelative(
        target_gps['lat'], 
        target_gps['lon'], 
        alt=15.0 # Lower altitude to 15 meters
    )
    vehicle.simple_goto(target_location)</code></pre>

      <h3 id="conclusion" class="text-2xl font-bold text-white mt-8 mb-4">Future Deployments</h3>
      <p class="text-slate-300 mb-6 leading-relaxed">
        Our presentation at Gautam Buddha University demonstrated that dual companion systems can successfully navigate localized regions, map obstacles, and broadcast location telemetry even when GPS signals are severely degraded. Future research will explore decentralized multi-drone swarms for larger search grids.
      </p>
    `
  },
  {
    id: 3,
    slug: "prototype-to-patent-entrepreneurship",
    title: "Prototype to Design Patent: Lessons in Engineering",
    subtitle: "Navigating design patent frameworks in India while building Raghava Innovations.",
    excerpt: "Reflections on founding Raghava Innovations and navigating the intellectual property framework in India as an undergraduate engineer.",
    category: "Entrepreneurship",
    date: "March 3, 2026",
    year: 2026,
    readingTime: "6 min read",
    image: "/images/patents/drone-patent.jpg",
    featured: true,
    technologies: ["Design Patent", "Product Development", "Intellectual Property", "3D Modeling"],
    relatedProjectSlug: "raghava-drone",
    references: [
      "The Designs Act 2000, Intellectual Property Office, Government of India.",
      "Sanjivani College of Engineering, Innovation and Research Cell."
    ],
    toc: [
      { id: "inspiration", text: "The Entrepreneurial Spark" },
      { id: "intellectual-property", text: "Navigating Intellectual Property" },
      { id: "challenges-faced", text: "Major Hurdles & Lessons" }
    ],
    content: `
      <h3 id="inspiration" class="text-2xl font-bold text-white mb-4">The Entrepreneurial Spark</h3>
      <p class="text-slate-300 mb-6 leading-relaxed">
        As an engineering student, we are taught to solve homework problems. But real-world engineering is messy, multidisciplinary, and requires you to look beyond equations. Founding **Raghava Innovations** during college was born out of a desire to see our laboratory prototypes scale into functional products.
      </p>

      <div class="my-6 border-l-4 border-emerald-500 bg-emerald-500/5 p-4 rounded-r-xl">
        <strong class="text-emerald-400 block mb-1">Key Insight:</strong>
        <p class="text-slate-300 text-sm">
          An idea is worth very little without execution. Protection of that execution via Design Registration ensures that your structural innovations remain secure.
        </p>
      </div>

      <h3 id="intellectual-property" class="text-2xl font-bold text-white mt-8 mb-4">Navigating Intellectual Property</h3>
      <p class="text-slate-300 mb-6 leading-relaxed">
        In early 2025, our team filed a design patent for an **AI/ML Driven Drone for Surveillance** (Design No. 449730-001). Under the Indian Designs Act 2000, we registered the custom chassis structure, optimized to house companion micro-controllers and high-gimbal camera payloads.
      </p>
      
      <p class="text-slate-300 mb-6 leading-relaxed">
        The filing process was a steep learning curve: draft specifications, clear orthographic views (front, rear, plan, bottom, isometric), and defining the novelty clauses. Appreciating this IP process early in our engineering journey has changed how we structure product development from day one.
      </p>

      <h3 id="challenges-faced" class="text-2xl font-bold text-white mt-8 mb-4">Major Hurdles & Lessons</h3>
      <p class="text-slate-300 mb-6 leading-relaxed">
        Developing physical hardware in an academic environment requires resourcefulness. We relied on rapid prototyping—using FDM 3D printing to iterate on camera gimbal mounts, field testing in dust-heavy Nashik climates, and adjusting structural dimensions to optimize aerodynamic drag.
      </p>
      <p class="text-slate-300 mb-6 leading-relaxed">
        To anyone building their first project: do not wait for perfect conditions. Build a dirty prototype, test it to failure, document the process, and register your original intellectual properties before scaling.
      </p>
    `
  }
];
