import React from "react"
import useDarkMode from "use-dark-mode"

const Mitchures = () => {

  // NOTE: darkMode persists if not removed from localStorage first
  localStorage.removeItem("darkMode")
  const { value } = useDarkMode()

  const usePrimaryColor = value ? "#fbc2eb" : "#f6d365"
  const useSecondaryColor = value ? "#a6c1ee" : "#fda085"

  return (
    <svg id="mitchures" viewBox="0 0 436 377.6">
      <defs>
        <linearGradient id="linear-gradient" x1="61.85" y1="254.67" x2="327.92" y2="520.74"
                        gradientTransform="matrix(0.25, 0.71, -0.25, 0.71, 114.84, -223.96)"
                        gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={usePrimaryColor} />
          <stop offset="1" stopColor={useSecondaryColor} />
        </linearGradient>
        <linearGradient id="linear-gradient-2" className="gradientPath" x1="181.96" y1="-84.98" x2="448.03" y2="181.09"
                        gradientTransform="matrix(-0.25, 0.65, 0.25, 0.65, 247.38, -27.4)"
                        href="#linear-gradient"/>
        <linearGradient id="linear-gradient-3" className="gradientPath" x1="288.89" y1="-325.37" x2="554.96" y2="-59.3"
                        gradientTransform="matrix(-0.65, 0.25, -0.65, -0.25, 481.99, 56.07)"
                        href="#linear-gradient"/>
        <linearGradient id="linear-gradient-4" className="gradientPath" x1="666.69" y1="-350.17" x2="932.76" y2="-84.1"
                        href="#linear-gradient"/>
      </defs>
      <g opacity="0.75">
        <rect fill="url(#linear-gradient)" y="0.3" width="133.3" height="377.26" rx="66.7"/>
      </g>
      <g opacity="0.5">
        <rect fill="url(#linear-gradient-2)" x="114" y="36.1" width="133.3" height="346.94" rx="66.7"
              transform="translate(-133.3 121.8) rotate(-45)"/>
      </g>
      <g opacity="0.5">
        <rect fill="url(#linear-gradient-3)" x="158.3" y="142.9" width="346.9" height="133.32" rx="66.7"
              transform="translate(-89 228.6) rotate(-45)"/>
      </g>
      <g opacity="0.75">
        <rect fill="url(#linear-gradient-4)" x="302.3" y="0.3" width="133.3" height="377.26" rx="66.7"/>
      </g>
    </svg>
  )
}

export default Mitchures
