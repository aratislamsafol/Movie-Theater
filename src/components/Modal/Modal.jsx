import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();
  const overlayRef = useRef();
  const [shouldRender, setShouldRender] = useState(isOpen);

  // Open animation
    useEffect(() => {
    if (isOpen) {
        setShouldRender(true);
        gsap.fromTo(
        modalRef.current,
            { opacity: 0, scale: 0.95, y: -30 },
            { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "power2.out" }
        );
    } else if (shouldRender) {
        gsap.to(modalRef.current, {
        opacity: 0,
        scale: 0.95,
        y: -30,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
            setShouldRender(false);
        },
        });
    }
    }, [isOpen, shouldRender]);


  // ESC press to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (shouldRender) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [shouldRender, onClose]);

  // Overlay click to close
  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  if (!shouldRender) return null;

  return (
    <div
      ref={overlayRef}
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 bg-black/70 flex justify-center items-start pt-20 px-4"
    >
      <div
        ref={modalRef}
        className="bg-gray-100 w-full max-w-2xl rounded-md md:rounded-xl p-4 shadow-2xl relative"
      >
        <button
          onClick={onClose}
          className="absolute -top-1 right-2 text-gray-500 hover:text-red-500 text-2xl font-bold"
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
