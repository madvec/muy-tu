const petalPath = `
  M 0 24
  C -22 16 -49 -5 -51 -35
  C -57 -52 -45 -73 -30 -72
  C -27 -89 -8 -96 3 -83
  C 18 -98 38 -84 35 -69
  C 54 -66 58 -46 45 -30
  C 38 -6 19 15 0 24
`

export default function Peony() {
    return (
        <svg
            viewBox="0 0 320 300"
            fill="none"
            aria-hidden="true"
            focusable="false"
        >
            <defs>
                <linearGradient
                    id="peony-leaf"
                    x1="90"
                    y1="180"
                    x2="215"
                    y2="270"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#91a78d"/>
                    <stop offset="1" stopColor="#466b59"/>
                </linearGradient>

                <linearGradient
                    id="peony-petal"
                    x1="0"
                    y1="-90"
                    x2="0"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#fbe0e5"/>
                    <stop offset="0.48" stopColor="#e9a2b4"/>
                    <stop offset="1" stopColor="#a9476b"/>
                </linearGradient>

                <linearGradient
                    id="peony-inner"
                    x1="0"
                    y1="-90"
                    x2="0"
                    y2="24"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#ffe9eb"/>
                    <stop offset="0.55" stopColor="#dc8ca5"/>
                    <stop offset="1" stopColor="#923e60"/>
                </linearGradient>
            </defs>

            <path
                d="M160 153 C151 199 169 237 153 282"
                stroke="#587b63"
                strokeWidth="5"
                strokeLinecap="round"
            />

            <path
                d="M159 235 C119 238 83 213 79 182
           C119 179 151 199 159 235Z"
                fill="url(#peony-leaf)"
            />

            <path
                d="M160 215 C164 180 194 163 231 168
           C221 199 195 219 160 215Z"
                fill="url(#peony-leaf)"
            />

            <path
                d="M91 192 L156 232 M164 211 L216 178"
                stroke="#d7e2c8"
                strokeOpacity="0.45"
                strokeWidth="1.5"
                strokeLinecap="round"
            />

            <g transform="translate(160 120)">
                {Array.from({length: 10}, (_, index) => (
                    <path
                        key={`outer-${index}`}
                        d={petalPath}
                        transform={`rotate(${index * 36})`}
                        fill="url(#peony-petal)"
                        stroke="#fff0f3"
                        strokeOpacity="0.45"
                        strokeWidth="1"
                    />
                ))}

                {Array.from({length: 9}, (_, index) => (
                    <path
                        key={`middle-${index}`}
                        d={petalPath}
                        transform={`rotate(${index * 40 + 18}) scale(0.72)`}
                        fill="url(#peony-inner)"
                        stroke="#ffe5ec"
                        strokeOpacity="0.65"
                        strokeWidth="1.5"
                    />
                ))}

                {Array.from({length: 7}, (_, index) => (
                    <path
                        key={`inner-${index}`}
                        d={petalPath}
                        transform={`rotate(${index * (360 / 7) + 8}) scale(0.43)`}
                        fill="url(#peony-petal)"
                        stroke="#ffe5ec"
                        strokeOpacity="0.7"
                        strokeWidth="2"
                    />
                ))}

                <path
                    d="M-11 5 C-23 -10 -7 -25 5 -17
             C20 -24 27 -5 14 6
             C10 18 -8 19 -11 5Z"
                    fill="#c57091"
                    stroke="#fbd1df"
                    strokeWidth="2"
                />
            </g>
        </svg>
    )
}