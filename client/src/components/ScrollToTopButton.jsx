import { useEffect, useState } from "react";


export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
      `}</style>
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={
          "fixed bottom-10 right-10 z-50 w-14 h-14 rounded-full shadow-xl flex items-center justify-center text-3xl font-bold transition-all duration-300 " +
          "bg-gradient-to-tr from-yellow to-teal text-snow hover:scale-110 hover:shadow-2xl " +
          (visible
            ? "opacity-100 pointer-events-auto animate-bounce-custom"
            : "opacity-0 pointer-events-none")
        }
      >
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          strokeWidth={3}
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </>
  );
}