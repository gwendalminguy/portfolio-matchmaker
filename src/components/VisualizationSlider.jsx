import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function VisualizationSlider({ theme = "light", images, duration = 3000 }) {

  const [current, setCurrent] = useState(0);
  const [pause, setPause] = useState(false);

  // Automatic Sliding
  useEffect(() => {
    if (pause) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, duration);
    return () => clearInterval(interval);
  }, [pause, images.length]);

  // Manual Sliding
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % images.length);

  return (
    <div className="flex flex-col items-center gap-6">
      <div onMouseEnter={() => setPause(true)} onMouseLeave={() => setPause(false)} className="relative w-full max-w-3xl overflow-hidden rounded-xl shadow-xl border border-base-300 bg-base-100 select-none">
        {/* Container */}
        <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${current * 100}%)` }}>
          {images.map((src, index) => (
            <div key={index} className="flex-shrink-0 w-full">
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto object-contain" />
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 btn btn-circle bg-base-200/50 hover:bg-base-300">
          <ChevronLeft />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 btn btn-circle bg-base-200/50 hover:bg-base-300">
          <ChevronRight />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex gap-2">
        {images.map((_, index) => (
          <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === current ? "bg-primary w-5" : "bg-base-100"}`} />
        ))}
      </div>
    </div>
  );
}

export default VisualizationSlider;
