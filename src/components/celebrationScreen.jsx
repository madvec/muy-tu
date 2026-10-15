import {useState} from 'react'
import {
    celebration,
    invitationMemories,
} from '../data/celebration'
import Peony from './Peony'

export default function CelebrationScreen({answers, onRestart}) {
    const [showInvitation, setShowInvitation] = useState(false)
    const [isAccepted, setIsAccepted] = useState(false)

    const wish = celebration.wishes[answers.mood]
    const note = celebration.notes[answers.connection]
    const time = celebration.times[answers.time]
    const plan = celebration.plans[answers.plan]
    const memoryDetail = invitationMemories[answers.memory]

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
                                <dd>El día lo elegimos juntos.</dd>
                            </div>
                        </dl>
                    </div>

                    <div aria-live="polite">
                        {isAccepted ? (
                            <p className="invitation-confirmation">
                                Entonces solo falta elegir el día.
                            </p>
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
                        <Peony/>
                    </div>

                    <h1 id="quiz-title" className="celebration-title">
                        <span>Feliz cumpleaños,</span>
                        {celebration.recipient}.
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