import { Trophy, Share2, ArrowRightLeft, Network, Globe, CircleQuestionMark } from "lucide-react";

function FeatureDisplay({ title, description, icon, component, image, button, direction = "left" }) {

  const iconMap = {
    tournament: Trophy,
    bracket: Network,
    sharing: Share2,
    scores: ArrowRightLeft,
    languages: Globe,
  };

  const IconComponent = iconMap[icon] || CircleQuestionMark;
  const { text, action } = button || {};

  return (
    <section className={`flex flex-col lg:flex-row items-center justify-center gap-24 scale-75 md:scale-100 ${direction === "right" ? "lg:flex-row-reverse" : ""}`}>
      <div className="flex flex-col justify-center space-y-4">
        {/* Icon & Title */}
        <div className="flex items-center gap-3 transition-transform duration-500 ease-in-out hover:scale-105">
          <IconComponent strokeWidth={2.5} className="w-8 h-8 text-primary shrink-0" />
          <h3 className="text-3xl font-bold text-left md:whitespace-nowrap">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-base-content/70 text-lg leading-relaxed text-left w-full max-w-xl min-w-sm">
          {description}
        </p>

        {/* Button */}
        {button && (
          <div className="flex items-center justify-center md:justify-start">
            <button onClick={action} className="mt-4 px-5 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition cursor-pointer max-w-xs">
              {text}
            </button>
          </div>
        )}
      </div>

      {/* Component / Image */}
      <div className="flex justify-center items-center">
        {component && (
          <div className="flex w-full max-w-md md:max-w-3xl items-center justify-center">
            {component}
          </div>
        )}
        {image && (
          <img src={image} alt={title} className="rounded-xl shadow-lg border border-base-300 max-w-full h-auto" />
        )}
      </div>
    </section>
  );
}

export default FeatureDisplay;
