import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function NotFoundPage() {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div className="flex flex-1 flex-col items-center justify-center text-gray-600 text-xl h-full pt-20">
      {/* SVG 404 */}
      <svg viewBox="0 0 400 100" xmlns="http://www.w3.org/2000/svg" fill="none">
        <defs>
          <linearGradient id="neonBlueGradient" x1="0" y1="0" x2="400" y2="0">
            <stop offset="0%" stop-color="#3B82F6" />
            <stop offset="50%" stop-color="#06B6D4" />
            <stop offset="100%" stop-color="#60A5FA" />
          </linearGradient>
          <filter id="thinGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <text x="50%" y="50%"
              dominant-baseline="middle"
              text-anchor="middle"
              font-size="75"
              font-weight="500"
              stroke="url(#neonBlueGradient)"
              stroke-width="1.5"
              fill="none"
              filter="url(#thinGlow)"
              stroke-linecap="round"
              stroke-linejoin="round"
              font-family="'Outfit', 'Inter', system-ui, sans-serif"
              letter-spacing="4">
          404

      <animate attributeName="opacity"
              values="1;0;1;0.25;1;1;1;0.75;1;0.25;1;1;1"
              keyTimes="0;0.05;0.07;0.09;0.12;0.3;0.6;0.65;0.68;0.7;0.73;0.9;1"
              dur="4s"
              repeatCount="indefinite" />
        </text>
      </svg>

      {/* Text & Button */}
      <h2 className="text-3xl font-bold text-base-content mb-4">
        {t('error_not_found')}
      </h2>
      <p className="text-lg text-center mb-6 text-gray-500">
        {t('not_found_description')}
      </p>
      <button className="btn border border-base-300 rounded-md" onClick={() => navigate("/")}>
        {t('home')}
      </button>
    </div>
  );
}

export default NotFoundPage;
