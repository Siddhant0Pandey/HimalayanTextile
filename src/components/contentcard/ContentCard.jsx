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
  audio = null
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
          badgeClass: "bg-red-500/20 text-red-100 border border-red-200/70"
        };
      case "solution":
        return {
          badge: "SOLUTION",
          badgeClass: "bg-green-500/20 text-green-100 border border-green-100/70"
        };
      default:
        return {
          badge: "INTRODUCTION",
          badgeClass: "bg-blue-500/20 text-blue-700 border border-blue-600/30"
        };
    }
  };

  const typeConfig = getTypeConfig();

  return (
    <motion.div
      className="h-screen flex items-start justify-center pt-8 px-8 lg:px-16  top-0 relative"
      variants={cardVariants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start h-full">
        
        <div className="space-y-8 flex flex-col justify-center h-full ">
          <div className="space-y-4">
            <motion.div 
              className={`inline-block px-4 py-2 rounded-full  text-sm font-medium ${typeConfig.badgeClass}`}
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