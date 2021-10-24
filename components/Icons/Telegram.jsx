export function Telegram(props) {
  return (
    <svg
      viewBox="0 0 124 124"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <circle cx="62" cy="62" r="62" fill="url(#paint0_linear_73:55)" />
      <rect x="27" y="27" width="69" height="69" fill="url(#pattern0)" />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_73:55" transform="scale(0.00390625)" />
        </pattern>
        <linearGradient
          id="paint0_linear_73:55"
          x1="-9.82996e-07"
          y1="20"
          x2="134"
          y2="124"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8913C0" />
          <stop offset="0.9999" stopColor="#FFCF44" stopOpacity="0.75" />
          <stop offset="1" stopColor="#C4C4C4" stopOpacity="0" />
        </linearGradient>
        <image
          id="image0_73:55"
          width="256"
          height="256"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
}
