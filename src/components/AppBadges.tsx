import { type FC } from "react";

type BadgeSize = "sm" | "md" | "lg";

interface AppBadgesProps {
  size?: BadgeSize;
  className?: string;
}

const dimensions: Record<BadgeSize, { h: number; w: number }> = {
  sm: { h: 40, w: 135 },
  md: { h: 48, w: 162 },
  lg: { h: 56, w: 189 },
};

const AppBadges: FC<AppBadgesProps> = ({ size = "md", className = "" }) => {
  const { h, w } = dimensions[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Download on the App Store */}
      <a
        href="#"
        aria-label="Download on the App Store"
        className="inline-block transition-opacity hover:opacity-80"
      >
        <svg
          width={w}
          height={h}
          viewBox="0 0 189 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Download on the App Store"
        >
          {/* Background */}
          <rect
            x="0.5"
            y="0.5"
            width="188"
            height="55"
            rx="9.5"
            fill="#0A0A0A"
            stroke="rgba(255,255,255,0.1)"
          />

          {/* Apple logo */}
          <g transform="translate(14, 10)">
            <path
              d="M22.6 23.4c-.04 4.14 3.63 6.14 3.8 6.22-.03.1-.59 2.04-1.96 4.04-1.18 1.73-2.4 3.45-4.34 3.49-1.9.04-2.5-1.13-4.67-1.13-2.17 0-2.84 1.09-4.64 1.17-1.87.08-3.28-1.87-4.47-3.59-2.44-3.52-4.3-9.94-1.8-14.28 1.24-2.15 3.46-3.5 5.86-3.54 1.83-.04 3.56 1.23 4.68 1.23 1.12 0 3.22-1.52 5.42-1.3.92.04 3.52.37 5.18 2.82-.13.08-3.09 1.8-3.06 5.37zM19.5 13.16c.99-1.2 1.66-2.85 1.47-4.51-1.43.06-3.15.95-4.17 2.15-.92 1.06-1.72 2.76-1.5 4.39 1.59.12 3.21-.81 4.2-2.03z"
              fill="white"
            />
          </g>

          {/* "Download on the" */}
          <text
            x="50"
            y="21"
            fill="white"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
            fontSize="9"
            fontWeight="400"
            letterSpacing="0.3"
          >
            Download on the
          </text>

          {/* "App Store" */}
          <text
            x="50"
            y="40"
            fill="white"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
            fontSize="18"
            fontWeight="600"
            letterSpacing="-0.2"
          >
            App Store
          </text>
        </svg>
      </a>

      {/* Get it on Google Play */}
      <a
        href="#"
        aria-label="Get it on Google Play"
        className="inline-block transition-opacity hover:opacity-80"
      >
        <svg
          width={w}
          height={h}
          viewBox="0 0 189 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Get it on Google Play"
        >
          {/* Background */}
          <rect
            x="0.5"
            y="0.5"
            width="188"
            height="55"
            rx="9.5"
            fill="#0A0A0A"
            stroke="rgba(255,255,255,0.1)"
          />

          {/* Google Play triangle icon */}
          <g transform="translate(14, 12)">
            {/* Blue */}
            <path
              d="M3.4 0.8C3.1 1.1 2.9 1.6 2.9 2.2V29.8c0 0.6 0.2 1.1 0.5 1.4l0.1 0.1L19.2 16v-0.3L3.4 0.8z"
              fill="#4285F4"
            />
            {/* Green */}
            <path
              d="M24.5 21.3L19.2 16v-0.3l5.3-5.3 0.1 0.1 6.3 3.6c1.8 1 1.8 2.7 0 3.7l-6.3 3.6L24.5 21.3z"
              fill="#34A853"
            />
            {/* Red */}
            <path
              d="M24.6 21.2L19.2 15.8 3.4 31.2c0.6 0.6 1.6 0.7 2.7 0.1L24.6 21.2z"
              fill="#EA4335"
            />
            {/* Yellow */}
            <path
              d="M24.6 10.5L6.1 0.5C5 -0.1 4 0 3.4 0.6L19.2 15.8l5.4-5.3z"
              fill="#FBBC04"
            />
          </g>

          {/* "GET IT ON" */}
          <text
            x="50"
            y="21"
            fill="white"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
            fontSize="8"
            fontWeight="500"
            letterSpacing="1.2"
          >
            GET IT ON
          </text>

          {/* "Google Play" */}
          <text
            x="50"
            y="40"
            fill="white"
            fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif"
            fontSize="18"
            fontWeight="600"
            letterSpacing="-0.2"
          >
            Google Play
          </text>
        </svg>
      </a>
    </div>
  );
};

export default AppBadges;
