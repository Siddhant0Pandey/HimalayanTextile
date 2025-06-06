/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function VideoContainer({ videoSrc, isVisible, delay, type, fullWidth = false }) {
  if (fullWidth) {
    return (
      <div className="absolute inset-0 w-full h-full">
        <motion.div
          className="relative w-full h-full overflow-hidden"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ 
            opacity: isVisible ? 1 : 0, 
            scale: isVisible ? 1 : 1.05,
          }}
          transition={{ 
            duration: 1.2, 
            delay: delay / 1000,
            ease: [0.25, 0.46, 0.45, 0.94] // Smooth easing
          }}
          style={{
            backfaceVisibility: 'hidden',
            WebkitBackfaceVisibility: 'hidden',
            transform: 'translateZ(0)', // Hardware acceleration
          }}
        >
          {videoSrc ? (
            <motion.video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 2,
                ease: "easeOut"
              }}
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <source src={videoSrc} type="video/mp4" />
            </motion.video>
          ) : (
            <div className="w-full h-full relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900"
                animate={{
                  background: [
                    "linear-gradient(135deg, #1e3a8a 0%, #581c87 50%, #312e81 100%)",
                    "linear-gradient(135deg, #1e40af 0%, #6b21a8 50%, #3730a3 100%)",
                    "linear-gradient(135deg, #1e3a8a 0%, #581c87 50%, #312e81 100%)"
                  ]
                }}
                transition={{ 
                  duration: 8, 
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20"
                  animate={{
                    x: ["-100%", "100%"],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              </motion.div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="text-6xl md:text-8xl lg:text-9xl filter drop-shadow-2xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0],
                    y: [0, -10, 0]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity,
                    delay: delay / 1000,
                    ease: "easeInOut"
                  }}
                >
                  {type === "problem" ? "⚠️" : type === "solution" ? "🌱" : "✨"}
                </motion.div>
              </div>
              
              {/* Enhanced floating particles */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-${i % 2 === 0 ? '2' : '1'} h-${i % 2 === 0 ? '2' : '1'} bg-white/${30 + i * 5} rounded-full`}
                  style={{
                    top: `${20 + i * 12}%`,
                    left: `${15 + i * 15}%`,
                  }}
                  animate={{ 
                    y: [0, -20 - i * 3, 0],
                    x: [0, 10 - i * 2, 0],
                    opacity: [0.3, 0.8, 0.3],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{ 
                    duration: 3 + i * 0.5, 
                    repeat: Infinity,
                    delay: delay / 1000 + i * 0.3,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          )}

          {/* Enhanced gradient overlays */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30"
            animate={{
              opacity: [0.7, 0.5, 0.7]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/20" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="absolute h-screen w-full left-0 top-0 -z-10">
      <motion.div
        className="relative rounded-2xl overflow-hidden shadow-2xl h-full"
        initial={{ opacity: 0, scale: 0.9, rotateY: -10 }}
        animate={{ 
          opacity: isVisible ? 1 : 0, 
          scale: isVisible ? 1 : 0.9,
          rotateY: isVisible ? 0 : -10
        }}
        transition={{ 
          duration: 1.5, 
          delay: delay / 1000 + 0.5,
          ease: [0.25, 0.46, 0.45, 0.94]
        }}
        style={{
          backfaceVisibility: 'hidden',
          WebkitBackfaceVisibility: 'hidden',
        }}
      >
        <div className="h-full bg-gradient-to-br from-blue-900 to-purple-900 flex items-center justify-center">
          {videoSrc ? (
            <motion.video
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 2,
                ease: "easeOut"
              }}
            >
              <source src={videoSrc} type="video/mp4" />
            </motion.video>
          ) : (
            <div className="w-full h-full relative overflow-hidden">
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600"
                animate={{
                  background: [
                    "linear-gradient(90deg, #2563eb 0%, #9333ea 50%, #2563eb 100%)",
                    "linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #3b82f6 100%)",
                    "linear-gradient(90deg, #2563eb 0%, #9333ea 50%, #2563eb 100%)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  className="text-6xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 10, -10, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {type === "problem" ? "⚠️" : type === "solution" ? "🌱" : "🏔️"}
                </motion.div>
              </div>
            </div>
          )}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        <motion.div 
          className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl blur opacity-20"
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>

      {/* Enhanced floating elements */}
      <motion.div
        className="absolute -top-4 -right-4 w-8 h-8 bg-green-400/80 rounded-full backdrop-blur-sm"
        animate={{ 
          y: [0, -15, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          delay: (delay + 1500) / 1000,
          ease: "easeInOut"
        }}
      />
      <motion.div
        className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400/80 rounded-full backdrop-blur-sm"
        animate={{ 
          y: [0, 15, 0],
          scale: [1, 0.8, 1],
          rotate: [0, -180, -360]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          delay: (delay + 2000) / 1000,
          ease: "easeInOut"
        }}
      />
    </div>
  );
}