import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / windowHeight) * 100;
      setScrollPercent(scrolled);
      setVisible(scrollTop > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
  const startPosition = window.scrollY;
  const duration = 1200; // বেশি duration মানেই ধীরগতিতে
  let start = null;

  const easeInOutQuad = (t) => t < 0.5
    ? 2 * t * t
    : -1 + (4 - 2 * t) * t;

  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = timestamp - start;
    const percent = Math.min(progress / duration, 1);
    const ease = easeInOutQuad(percent);
    window.scrollTo(0, startPosition * (1 - ease));

    if (progress < duration) {
      requestAnimationFrame(step);
    }
  };

  requestAnimationFrame(step);
};


  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (scrollPercent / 100) * circumference;

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full bg-red-800 text-white shadow-lg z-50 flex items-center justify-center transition-all duration-100 hover:scale-105"
        style={{ position: "fixed" }}
      >
        <svg
          className="absolute w-14 h-14 rotate-[-90deg]"
          viewBox="0 0 60 60"
        >
          <circle
            stroke="white"
            fill="none"
            strokeWidth="2"
            r={radius}
            cx="30"
            cy="30"
            style={{
              strokeDasharray: `${circumference} ${circumference}`,
              strokeDashoffset: offset,
              transition: "stroke-dashoffset 0.5s ease-out",
            }}
          />
        </svg>
        <FaArrowUp className="z-10 text-white" />
      </button>
    )
  );
};

export default ScrollToTop;
