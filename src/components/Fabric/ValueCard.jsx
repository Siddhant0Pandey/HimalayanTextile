/* eslint-disable no-unused-vars */
export default function ValueCard({ icon: Icon, title, description, delay, isVisible }) {
  return (
    <div
      className="text-center group transition-all duration-700 ease-out"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transitionDelay: `${delay}ms`
      }}
    >
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-[#F0F7F4] rounded-full flex items-center justify-center mx-auto group-hover:bg-[#1fa951] transition-colors duration-300">
          <Icon className="w-10 h-10 text-[#1fa951] group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
      <h3 className="text-2xl font-normal text-[#1fa951] mb-3">{title}</h3>
      <p className="text-[#1d1f10] opacity-70">{description}</p>
    </div>
  );
}