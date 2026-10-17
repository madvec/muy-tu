import {useEffect, useState} from 'react'
import {celebration} from '../data/celebration'
import {getQuizResult} from '../data/results'
import Bouquet from './Bouquet'


export default function CelebrationScreen({answers, onRestart}) {
    const [showInvitation, setShowInvitation] = useState(false)
    const [isAccepted, setIsAccepted] = useState(false)

    const [isUnwrapped, setIsUnwrapped] = useState(false)

    useEffect(() => {
        const reduceMotion = window.matchMedia(
            '(prefers-reduced-motion: reduce)'
        ).matches

        const timer = window.setTimeout(() => {
            setIsUnwrapped(true)
        }, reduceMotion ? 0 : 2600)

        return () => window.clearTimeout(timer)
    }, [])

    const result = getQuizResult(answers)

    const wish = result?.birthdayWish
    const note = result?.birthdayNote
    const memoryDetail = result?.invitationDetail

    const time = 'Cuando se acomode.'
    const plan = celebration.plans[answers.plan]

    const phone = import.meta.env.VITE_WHATSAPP_PHONE
    const message = '¡Me gusta el plan! ¿Nos ponemos de acuerdo?'
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    if (!isUnwrapped) {
        return (
            <div className="gift-opening" role="status">
                <h1 id="quiz-title" className="gift-opening__title">
                    Abriendo un detalle para ti…
                </h1>

                <div className="gift-opening__package" aria-hidden="true">
                    <span className="gift-opening__glow"/>

                    <span className="gift-opening__paper gift-opening__paper--left"/>
                    <span className="gift-opening__paper gift-opening__paper--right"/>

                    <span className="gift-opening__ribbon"/>

                    <svg
                        className="gift-opening__bow"
                        viewBox="0 0 150 100"
                        fill="#fff6e5"
                        stroke="#d7bf9e"
                        strokeWidth="1.5"
                        focusable="false"
                    >
                        <g className="gift-opening__bow-left">
                            <path
                                d="M75 48
                               C49 7 6 13 20 40
                               C30 57 56 56 75 48Z"
                            />
                            <path
                                d="M70 48
                               Q52 64 47 92
                               L35 79 L23 82
                               Q40 56 70 48Z"
                            />
                        </g>

                        <g className="gift-opening__bow-right">
                            <path
                                d="M75 48
                               C101 7 144 13 130 40
                               C120 57 94 56 75 48Z"
                            />
                            <path
                                d="M80 48
                               Q98 64 103 92
                               L115 79 L127 82
                               Q110 56 80 48Z"
                            />
                        </g>

                        <rect
                            className="gift-opening__knot"
                            x="65"
                            y="37"
                            width="20"
                            height="22"
                            rx="7"
                        />
                    </svg>
                </div>
            </div>
        )
    }

    return (
        <div
            className={`celebration-content ${
                showInvitation
                    ? 'celebration-content--invitation'
                    : 'celebration-content--birthday'
            }`}
            key={showInvitation ? 'invitation' : 'birthday'}
        >
            {showInvitation ? (
                <>
                    <p className="quiz-eyebrow">
                        Tus respuestas nos trajeron hasta aquí
                    </p>

                    <div className="invitation-ticket">

                        <img
                            className="invitation-image"
                            src={plan.image}
                            alt={plan.imageAlt}
                        />

                        <p className="quiz-eyebrow">
                            Un plan para celebrar
                        </p>

                        <h1 id="quiz-title">
                            {plan.title}
                        </h1>

                        <p className="quiz-description">
                            {plan.description}
                        </p>

                        {memoryDetail && (
                            <p className="quiz-description">
                                {memoryDetail}
                            </p>
                        )}

                        <dl className="invitation-details">
                            <div>
                                <dt>Momento ideal</dt>
                                <dd>{time}</dd>
                            </div>

                            <div>
                                <dt>Fecha</dt>
                                <dd>El día se propone por aparte</dd>
                            </div>
                        </dl>
                    </div>

                    <div aria-live="polite">
                        {isAccepted ? (
                            <>
                                <p className="invitation-confirmation">
                                    Entonces solo falta elegir el día.
                                </p>

                                <a
                                    className="quiz-button invitation-contact"
                                    href={whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Nos ponemos de acuerdo por WhatsApp
                                    <span aria-hidden="true">↗</span>
                                </a>
                            </>
                        ) : (
                            <button
                                type="button"
                                className="quiz-button"
                                onClick={() => setIsAccepted(true)}
                            >
                                Me gusta el plan
                                <span aria-hidden="true">♡</span>
                            </button>
                        )}
                    </div>

                    <button
                        type="button"
                        className="quiz-back"
                        onClick={() => setShowInvitation(false)}
                    >
                        Volver a mi felicitación
                    </button>
                </>
            ) : (
                <>
                    <div className="celebration-confetti" aria-hidden="true">
                        {Array.from({length: 18}, (_, index) => (
                            <span key={index} style={{'--i': index}}/>
                        ))}
                    </div>

                    <p className="quiz-eyebrow">
                        Este resultado tenía nombre
                    </p>

                    <div className="celebration-flower">
                        <Bouquet/>
                    </div>

                    <h1 id="quiz-title" className="celebration-title">
                        <span>Feliz cumpleaños,</span>
                        {celebration.recipient}
                    </h1>

                    <p className="quiz-description">{wish}</p>
                    <p className="quiz-description">{note}</p>

                    <button
                        type="button"
                        className="quiz-button"
                        onClick={() => setShowInvitation(true)}
                    >
                        Hay un plan para ti
                        <span aria-hidden="true">↗</span>
                    </button>

                    <p className="celebration-signature">
                        {celebration.signature}
                    </p>
                </>
            )}

            <button
                type="button"
                className="quiz-back celebration-restart"
                onClick={onRestart}
            >
                Volver a empezar
            </button>
        </div>
    )
}