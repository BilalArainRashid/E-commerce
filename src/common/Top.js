import { useState, useEffect } from "react";
import { AiOutlineUp } from "react-icons/ai";

function Top() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add scroll event listener to show/hide button
    window.addEventListener("scroll", handleScroll);

    // Clean up listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    // Show button when user scrolls down 200 pixels
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const handleClick = () => {
    // Scroll to top of page when button is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-0 right-8 z-50 transition-opacity duration-500 ${isVisible ? "slideIn opacity-100" : "opacity-0"
        } sm:bottom-4 sm:right-6 lg:right-10`}
    >
      <button
        className="bg-gray-700 text-white px-3 h-10 py-2"
        onClick={handleClick}
      >
        <AiOutlineUp />
      </button>
    </div>
  );
}

export default Top;
