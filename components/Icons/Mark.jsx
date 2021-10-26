export function Mark(props) {
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle
        cx={13.5}
        cy={13.5}
        r={12.825}
        stroke="url(#prefix__paint0_linear_88:5)"
        strokeWidth={1.35}
      />
      <path
        d="M7.2 12.15c1.8 1.44 4.35 4.8 5.4 6.3l9-10.8"
        stroke="url(#prefix__paint1_linear_88:5)"
        strokeWidth={1.35}
      />
      <defs>
        <linearGradient
          id="prefix__paint0_linear_88:5"
          x1={3.6}
          y1={2.25}
          x2={27}
          y2={25.2}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8913C0" />
          <stop offset={0.974} stopColor="#FFCF44" stopOpacity={0.6} />
          <stop offset={1} stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id="prefix__paint1_linear_88:5"
          x1={7.2}
          y1={11.7}
          x2={21.6}
          y2={11.7}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8913C0" />
          <stop offset={1} stopColor="#FFCF44" stopOpacity={0.5} />
        </linearGradient>
      </defs>
    </svg>
  );
}
