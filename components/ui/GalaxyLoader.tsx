"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const loadingLines = [
  "Initializing neural navigation core...",
  "Synthesizing electric torque compensation parameters...",
  "Calibrating autonomous telemetry channels...",
  "Compiling sensor diagnostic pipelines...",
  "Launching Raghava Innovations interface...",
  "Welcome to my Portfolio.",
];

export default function GalaxyLoader() {
  const [lineIndex, setLineIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [processedSrc, setProcessedSrc] = useState<string | null>(null);

  useEffect(() => {
    // Process the image background client-side
    const img = new window.Image();
    img.src = "/images/welcome.jpg";
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imgData.data;
      const width = canvas.width;
      const height = canvas.height;

      // Flood-fill background detection starting from the borders
      const visited = new Uint8Array(width * height);
      const queue: Array<[number, number]> = [];

      // Add all border pixels to queue
      for (let x = 0; x < width; x++) {
        queue.push([x, 0]);
        queue.push([x, height - 1]);
        visited[x] = 1;
        visited[x + (height - 1) * width] = 1;
      }
      for (let y = 1; y < height - 1; y++) {
        queue.push([0, y]);
        queue.push([width - 1, y]);
        visited[y * width] = 1;
        visited[(width - 1) + y * width] = 1;
      }

      const isBgColor = (r: number, g: number, b: number) => {
        const diff = Math.max(r, g, b) - Math.min(r, g, b);
        const avg = (r + g + b) / 3;
        // Grayscale check (small difference between R,G,B) and light color (checkerboard white/gray)
        return diff < 15 && avg > 170;
      };

      let head = 0;
      while (head < queue.length) {
        const [cx, cy] = queue[head++];
        const idx = (cx + cy * width) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];

        if (isBgColor(r, g, b)) {
          data[idx + 3] = 0; // Set alpha to 0 (transparent)

          // Check 4-way neighbors
          const neighbors: Array<[number, number]> = [
            [cx + 1, cy],
            [cx - 1, cy],
            [cx, cy + 1],
            [cx, cy - 1],
          ];

          for (const [nx, ny] of neighbors) {
            if (nx >= 0 && nx < width && ny >= 0 && ny < height) {
              const nIdx = nx + ny * width;
              if (!visited[nIdx]) {
                visited[nIdx] = 1;
                queue.push([nx, ny]);
              }
            }
          }
        }
      }

      ctx.putImageData(imgData, 0, 0);
      setProcessedSrc(canvas.toDataURL("image/png"));
    };
  }, []);

  useEffect(() => {
    // Dynamic text cycle
    const lineInterval = setInterval(() => {
      setLineIndex((prev) => {
        if (prev < loadingLines.length - 1) {
          return prev + 1;
        }
        clearInterval(lineInterval);
        return prev;
      });
    }, 600);

    // Turn off loader after a brief delay once all lines have completed
    const hideTimeout = setTimeout(() => {
      setVisible(false);
    }, loadingLines.length * 600 + 1000);

    return () => {
      clearInterval(lineInterval);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950 text-white"
        >
          {/* Centered Character & Orbiting Galaxy rings */}
          <div className="relative flex items-center justify-center h-64 w-64 mb-8">
            {/* Ambient center core glow */}
            <div className="absolute w-24 h-24 rounded-full bg-blue-500/25 blur-2xl animate-pulse" />

            {/* Orbiting galaxy rings */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
              className="absolute w-52 h-52 border border-dashed border-blue-500/20 rounded-full"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 5, ease: "linear" }}
              className="absolute w-44 h-44 border border-dashed border-cyan-400/10 rounded-full"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 3.5, ease: "linear" }}
              className="absolute w-36 h-36 border border-dotted border-purple-500/30 rounded-full"
            />

            {/* Character Avatar */}
            {processedSrc ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: 1, 
                  opacity: 1,
                  y: [0, -8, 0]
                }}
                transition={{ 
                  scale: { duration: 0.6, ease: "easeOut" },
                  opacity: { duration: 0.6, ease: "easeOut" },
                  y: { repeat: Infinity, duration: 3, ease: "easeInOut" }
                }}
                className="relative w-44 h-44 z-10 flex items-center justify-center"
              >
                <img
                  src={processedSrc}
                  alt="Welcome Avatar"
                  width={176}
                  height={176}
                  className="object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                />
              </motion.div>
            ) : (
              // Fallback placeholder while processing
              <div className="w-44 h-44 z-10 flex items-center justify-center">
                <div className="w-10 h-10 border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
              </div>
            )}
          </div>

          {/* Greeting Typography */}
          <div className="flex flex-col items-center justify-center px-6 text-center max-w-md">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-2xl md:text-3xl font-black tracking-wide gradient-text mb-4"
            >
              Welcome to my Portfolio
            </motion.h1>
            
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-500 animate-ping" />
              <p className="font-mono text-xs text-slate-400 tracking-wide select-none">
                {loadingLines[lineIndex]}
              </p>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
