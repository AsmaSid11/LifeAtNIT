import { useEffect, useState } from "react";


export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);
  const [launch, setLaunch] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    setLaunch(true);
    window.scrollTo({ top: 0, behavior: "smooth" });
    setTimeout(() => setLaunch(false), 900); // match animation duration
  };

  return (
    <>
      {/* Custom animation for bounce */}
      <style>{`
        .animate-bounce-custom {
          animation: bounce-custom 1.5s infinite;
        }
        @keyframes bounce-custom {
          0%, 100% { transform: translateY(0);}
          50% { transform: translateY(-8px);}
        }
        .rocket-launch {
          animation: rocket-launch 0.9s cubic-bezier(.4,2,.6,1) forwards;
        }
        @keyframes rocket-launch {
          0% { transform: translateY(0) rotate(0deg) scale(1);}
          60% { transform: translateY(-60vh) rotate(-20deg) scale(1.2);}
          100% { transform: translateY(-100vh) rotate(-45deg) scale(0.7);}
        }
      `}</style>
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        disabled={launch}
        className={
          "fixed bottom-10 right-10 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-3xl font-bold transition-all duration-300 " +
          "bg-gradient-to-tr from-yellow to-teal text-snow hover:scale-110 hover:shadow-2xl " +
          (visible && !launch
            ? "opacity-100 pointer-events-auto animate-bounce-custom"
            : "opacity-0 pointer-events-none") +
          (launch ? " rocket-launch" : "")
        }
        style={{ transition: "opacity 0.3s, transform 0.3s" }}
      >
        {launch ? (
          // Rocket SVG
          <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none">
            <path d="M12 2C13.1046 2 14 2.89543 14 4V6.58579C14 7.47672 14.3161 8.33336 14.8787 9L17 11.5L13.5 15L11 12.1213C10.3333 11.5587 9.47672 11.2426 8.58579 11.2426H6C4.89543 11.2426 4 10.3472 4 9.24264V4C4 2.89543 4.89543 2 6 2H12Z" fill="#fff"/>
            <circle cx="12" cy="8" r="1.5" fill="#DDA853"/>
            <rect x="11" y="16" width="2" height="6" rx="1" fill="#DDA853"/>
          </svg>
        ) : (
          // Up arrow SVG
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            strokeWidth={3}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
          </svg>
        )}
      </button>
    </>
  );
}