/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useTypewriter } from "../../hooks/useTypewriter";
import VideoContainer from "../VideoContainer";

export default function ContentCard({ 
  title = "Transforming Textile Manufacturing",
  description = "Discover how modern technology is revolutionizing the textile industry with sustainable practices and innovative solutions.",
  videoSrc, 
  isVisible = true,
  delay = 0,
  type = "problem",
  audio = null,
  stackedMode = false
}) {
  const { displayText: titleText } = useTypewriter(
    isVisible ? title : "", 
    80, 
    delay,
    audio
  );
  const { displayText: descText } = useTypewriter(
    isVisible ? description : "", 
    30, 
    delay + title.length * 80 + 500,
    audio
  );

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: "easeOut",
        delay: delay / 1000
      }
    }
  };

  const getTypeConfig = () => {
    switch (type) {
      case "problem":
        return {
          badge: "CHALLENGE",
          badgeClass: "bg-red-500/20 text-red-100 border border-red-400/50"
        };
      case "solution":
        return {
          badge: "SOLUTION",
          badgeClass: "bg-green-500/20 text-green-100 border border-green-400/50"
        };
      default:
        return {
          badge: "FUTURE",
          badgeClass: "bg-purple-500/20 text-purple-100 border border-purple-400/50"
        };
    }
  };

  const typeConfig = getTypeConfig();

  if (stackedMode) {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-2xl">
        {/* Full-width Video Background */}
        <VideoContainer 
          videoSrc={videoSrc} 
          isVisible={isVisible} 
          delay={delay} 
          type={type}
          fullWidth={true}
        />
        
        {/* Content Overlay */}
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.div
            className="w-full max-w-4xl mx-auto px-8 lg:px-16 text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
            transition={{ duration: 0.6, delay: delay / 1000 }}
          >
            <div className="space-y-6">
              <motion.div 
                className={`inline-block px-6 py-3 rounded-full text-sm font-medium ${typeConfig.badgeClass} backdrop-blur-sm`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay / 1000 + 0.2 }}
              >
                {typeConfig.badge}
              </motion.div>

              <motion.h2 
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay / 1000 + 0.3 }}
              >
                {stackedMode ? title : titleText}
                {!stackedMode && <span className="animate-pulse">|</span>}
              </motion.h2>

              <motion.p 
                className="text-lg md:text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-3xl mx-auto drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: delay / 1000 + 0.4 }}
              >
                {stackedMode ? description : descText}
                {!stackedMode && descText.length < description.length && (
                  <span className="animate-pulse">|</span>
                )}
              </motion.p>
            </div>
          </motion.div>
        </div>

        {/* Subtle decorative elements */}
        <motion.div
          className="absolute top-8 right-8 w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm"
          animate={{ 
            y: [0, -8, 0],
            rotate: [0, 90, 0]
          }}
          transition={{ 
            duration: 6, 
            repeat: Infinity,
            delay: delay / 1000
          }}
        />
      </div>
    );
  }

  // Original layout for non-stacked mode
  return (
    <motion.div
      className="h-screen flex items-start justify-center pt-8 px-8 lg:px-16 top-0 relative"
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start h-full">
        
        <div className="space-y-8 flex flex-col justify-center h-full">
          <div className="space-y-4">
            <motion.div 
              className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${typeConfig.badgeClass}`}
            >
              {typeConfig.badge}
            </motion.div>

            <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-lightText">
              {titleText}
              <span className="animate-pulse">|</span>
            </h2>
          </div>

          <div className="space-y-6">
            <p className="text-xl lg:text-2xl text-light leading-relaxed">
              {descText}
              {descText.length < description.length && (
                <span className="animate-pulse">|</span>
              )}
            </p>
          </div>
        </div>

        {/* Video Content - Right Side */}
        <VideoContainer 
          videoSrc={videoSrc} 
          isVisible={isVisible} 
          delay={delay} 
          type={type}
        />
      </div>
    </motion.div>
  );
}