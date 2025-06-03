/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function VideoContainer({ videoSrc, isVisible, delay, type }) {
  return (
    <div className="relative h-screen">
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl h-full"
        initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0.8,
          rotateY: isVisible ? 0 : -15
        }}
        transition={{ 
          duration: 1, 
          delay: (delay + 1000) / 1000,
          ease: "easeOut"
        }}
      >
        <div className="h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
          {videoSrc ? (
            <video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoSrc} type="video/mp4" />
            </video>
          ) : (
            <div className="w-full h-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-6xl">
                  {type === "problem" ? "⚠️" : type === "solution" ? "🌱" : "🏔️"}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20"></div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full"
        animate={{ 
          y: [0, -10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          delay: (delay + 1500) / 1000
        }}
      />
      <motion.div
        className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"
        animate={{ 
          y: [0, 10, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity,
          delay: (delay + 2000) / 1000
        }}
      />
    </div>
  );
}