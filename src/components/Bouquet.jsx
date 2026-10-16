import {useId} from 'react'

const petalPath = `
  M 0 24
  C -22 16 -49 -5 -51 -35
  C -57 -52 -45 -73 -30 -72
  C -27 -89 -8 -96 3 -83
  C 18 -98 38 -84 35 -69
  C 54 -66 58 -46 45 -30
  C 38 -6 19 15 0 24
`

const petalLayers = [
    {count: 10, scale: 1, offset: 0},
    {count: 8, scale: 0.72, offset: 18},
    {count: 6, scale: 0.43, offset: 8},
]

function PeonyBloom({gradientId}) {
    return (
        <>
            {petalLayers.map((layer, layerIndex) => (
                <g key={layerIndex}>
                    {Array.from({length: layer.count}, (_, index) => (
                        <path
                            key={index}
                            d={petalPath}
                            transform={`
                rotate(${index * (360 / layer.count) + layer.offset})
                scale(${layer.scale})
              `}
                            fill={`url(#${gradientId})`}
                            stroke="#ffe8ef"
                            strokeOpacity="0.55"
                            strokeWidth="1.3"
                        />
                    ))}
                </g>
            ))}

            <path
                d="M-11 5 C-23 -10 -7 -25 5 -17
           C20 -24 27 -5 14 6
           C10 18 -8 19 -11 5Z"
                fill="#bf7893"
                stroke="#fbd1df"
                strokeWidth="2"
            />
        </>
    )
}

function RoseBloom({gradientId}) {
    return (
        <g
            stroke="#ffd6dc"
            strokeOpacity="0.3"
            strokeWidth="0.7"
            strokeLinejoin="round"
        >
            <path
                d="M-47 -23
           C-55 -46 -35 -65 -12 -58
           C5 -70 36 -62 45 -43
           C62 -35 65 -12 50 7
           C53 37 33 60 3 63
           C-28 64 -50 47 -50 17
           C-63 5 -61 -15 -47 -23Z"
                fill={`url(#${gradientId})`}
            />

            <path
                d="M-46 -21
           C-61 -46 -24 -65 -7 -52
           C-17 -35 -16 -18 -4 -7
           C-23 0 -39 -7 -46 -21Z"
                fill="#f18495"
            />

            <path
                d="M-3 -53
           C18 -68 50 -54 48 -31
           C31 -39 13 -28 7 -13
           C-6 -24 -12 -42 -3 -53Z"
                fill="#ffb3bd"
            />

            <path
                d="M-49 -20
           C-32 -21 -14 -5 -2 9
           C-13 29 -14 47 -5 61
           C-39 61 -52 36 -50 13
           C-59 0 -58 -13 -49 -20Z"
                fill="#e65f79"
            />

            <path
                d="M48 -29
           C65 -13 51 5 47 22
           C41 49 23 60 -5 61
           C-2 36 5 14 19 2
           C32 -11 48 -15 48 -29Z"
                fill="#c9405e"
            />

            <path
                d="M-35 -31
           C-35 -53 -6 -61 16 -53
           C37 -48 46 -30 30 -17
           C13 -6 -14 -9 -29 -20
           C-35 -23 -37 -28 -35 -31Z"
                fill="#fa97a7"
            />

            <path
                d="M-32 -30
           C-22 -47 0 -52 19 -39
           C0 -41 -6 -27 -1 -18
           C-14 -11 -28 -18 -32 -30Z"
                fill="#ffc4cc"
            />

            <path
                d="M18 -40
           C34 -39 36 -24 21 -17
           C6 -10 -7 -18 -7 -28
           C0 -21 18 -19 20 -28
           C24 -33 22 -37 18 -40Z"
                fill="#e5637c"
            />

            <path
                d="M-11 -36
           C-8 -46 15 -45 19 -35
           C22 -25 6 -19 -4 -25
           C-11 -27 -15 -30 -11 -36Z"
                fill="#b53450"
            />

            <path
                d="M-8 -35
           C-3 -43 13 -42 15 -35
           C18 -28 5 -24 0 -29
           C-6 -33 2 -39 7 -34
           C9 -31 5 -29 3 -31
           C7 -31 5 -35 2 -34
           C-2 -33 2 -28 7 -29
           C16 -31 12 -42 3 -40
           C-4 -41 -8 -38 -8 -35Z"
                fill="#ffabb9"
                stroke="none"
            />

            <path
                d="M-43 -18
           C-26 -14 -2 -3 11 7
           C-5 15 -12 34 -8 52
           C-24 42 -29 19 -43 -18Z"
                fill="#e46c82"
            />

            <path
                d="M42 -15
           C39 9 11 10 -1 30
           C-6 39 -7 49 -5 59
           C22 60 40 43 43 23
           C48 8 51 -2 42 -15Z"
                fill="#f18495"
            />

            <g
                fill="none"
                stroke="#ffe9ec"
                strokeOpacity="0.55"
                strokeWidth="1.2"
                strokeLinecap="round"
            >
                <path d="M-31 -39 C-17 -53 8 -56 25 -42"/>
                <path d="M-43 -12 C-24 -2 -11 10 -10 29"/>
                <path d="M35 -8 C27 5 4 16 0 32"/>
            </g>
        </g>
    )
}

export default function Bouquet() {
    const id = useId()
    const peonyId = `${id}-peony`
    const roseId = `${id}-rose`
    const paperId = `${id}-paper`

    const peonies = [
        {x: 200, y: 100, scale: 0.78, rotation: -6},
        {x: 113, y: 146, scale: 0.68, rotation: -22},
        {x: 287, y: 143, scale: 0.7, rotation: 20},
    ]

    const roses = [
        {x: 196, y: 175, scale: 0.94, rotation: -8},
        {x: 132, y: 218, scale: 0.75, rotation: -20},
        {x: 263, y: 212, scale: 0.78, rotation: 16},
        {x: 200, y: 235, scale: 0.78, rotation: 0},
    ]

    const stems = [
        'M200 110 C187 217 206 313 201 392',
        'M113 155 C139 237 182 312 202 392',
        'M287 152 C258 236 220 316 202 392',
        'M196 183 C194 258 203 325 202 392',
        'M132 226 C156 282 184 339 202 392',
        'M263 220 C241 283 215 341 202 392',
    ]

    return (
        <svg
            viewBox="0 0 400 440"
            fill="none"
            aria-hidden="true"
            focusable="false"
        >
            <defs>
                <linearGradient
                    id={peonyId}
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
                    id={roseId}
                    x1="-30"
                    y1="-55"
                    x2="25"
                    y2="50"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#e3a1b5"/>
                    <stop offset="1" stopColor="#9f4b6b"/>
                </linearGradient>

                <linearGradient
                    id={paperId}
                    x1="90"
                    y1="220"
                    x2="275"
                    y2="420"
                    gradientUnits="userSpaceOnUse"
                >
                    <stop stopColor="#deedf7"/>
                    <stop offset="0.55" stopColor="#b8d3e8"/>
                    <stop offset="1" stopColor="#91b7d3"/>
                </linearGradient>
            </defs>

            <path
                d="M57 178
           L132 211
           L167 188
           L202 212
           L240 189
           L275 211
           L345 178
           L254 412
           Q201 438 150 412Z"
                fill="#a8c7df"
                stroke="#87abc8"
                strokeWidth="1.4"
                strokeLinejoin="round"
            />

            <path
                d="M73 184 L143 224 L168 201 L202 226
           L239 201 L271 225 L328 186"
                stroke="#e9f3fa"
                strokeWidth="4"
                strokeLinejoin="round"
            />

            <g stroke="#638269" strokeWidth="4" strokeLinecap="round">
                {stems.map((stem, index) => (
                    <path key={index} d={stem}/>
                ))}
            </g>

            <g stroke="#6f8c70" strokeWidth="1">
                <path
                    d="M127 225 C89 217 64 189 68 160
             C105 165 126 191 127 225Z"
                    fill="#8fa88a"
                />

                <path
                    d="M276 221 C281 186 308 160 340 161
             C331 192 309 216 276 221Z"
                    fill="#809c7e"
                />

                <path
                    d="M160 265 C124 267 99 249 87 225
             C123 217 153 236 160 265Z"
                    fill="#94ac8c"
                />

                <path
                    d="M242 261 C251 231 279 215 309 222
             C296 249 272 265 242 261Z"
                    fill="#8fa88a"
                />

                <path
                    d="M159 132 C138 107 141 80 158 66
             C177 91 174 114 159 132Z"
                    fill="#91a98a"
                />

                <path
                    d="M247 124 C248 96 268 75 291 76
             C286 102 270 120 247 124Z"
                    fill="#809c7e"
                />
            </g>

            <g stroke="#d5dfc6" strokeOpacity="0.65" strokeWidth="1.3">
                <path d="M76 172 L123 216"/>
                <path d="M283 214 L329 171"/>
                <path d="M99 233 L153 260"/>
                <path d="M249 257 L297 229"/>
                <path d="M158 79 L159 122"/>
                <path d="M254 117 L281 85"/>
            </g>

            {peonies.map((flower, index) => (
                <g
                    key={`peony-${index}`}
                    transform={`
            translate(${flower.x} ${flower.y})
            rotate(${flower.rotation})
            scale(${flower.scale})
          `}
                >
                    <PeonyBloom gradientId={peonyId}/>
                </g>
            ))}

            {roses.map((flower, index) => (
                <g
                    key={`rose-${index}`}
                    transform={`
            translate(${flower.x} ${flower.y})
            rotate(${flower.rotation})
            scale(${flower.scale})
          `}
                >
                    <RoseBloom gradientId={roseId}/>
                </g>
            ))}

            <path
                d="M65 202
           Q121 251 201 278
           L238 414
           Q193 435 151 411Z"
                fill={`url(#${paperId})`}
                stroke="#91b4d0"
                strokeWidth="1.3"
                strokeLinejoin="round"
            />

            <path
                d="M335 201
           Q279 251 201 278
           L166 414
           Q211 435 251 410Z"
                fill="#c5dff0"
                stroke="#91b4d0"
                strokeWidth="1.3"
                strokeLinejoin="round"
            />

            <path
                d="M77 217 Q129 260 201 284
           M323 216 Q275 259 207 280"
                stroke="#f0f7fc"
                strokeWidth="3"
                strokeLinecap="round"
            />

            <path
                d="M115 274 L181 383
           M286 274 L223 384
           M201 284 L197 341"
                stroke="#8eafc9"
                strokeOpacity="0.45"
                strokeWidth="1.5"
                strokeLinecap="round"
            />

            <g fill="#fbf5e9" stroke="#d8cbbb" strokeWidth="1.2">
                <path
                    d="M198 350
             C173 325 151 333 161 349
             C168 360 185 357 198 350Z"
                />

                <path
                    d="M203 350
             C228 325 250 333 240 349
             C233 360 216 357 203 350Z"
                />

                <path
                    d="M196 354 L177 389 L191 382
             L198 394 L204 355Z"
                />

                <path
                    d="M203 354 L214 393 L221 380
             L235 385 L210 352Z"
                />

                <ellipse cx="201" cy="350" rx="8" ry="6"/>
            </g>
        </svg>
    )
}