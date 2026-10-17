import {useEffect, useState} from 'react'
import {questions} from './data/questions'
import CelebrationScreen from './components/CelebrationScreen'
import {getQuizResult} from './data/results'
import './App.css'

const processingMessages = [
    'Analizando tus respuestas…',
    'Identificando patrones de personalidad…',
    'Preparando un resultado sospechosamente específico…',
]

function App() {
    const [screen, setScreen] = useState('welcome')
    const [questionIndex, setQuestionIndex] = useState(0)
    const [processingStep, setProcessingStep] = useState(0)
    const [answers, setAnswers] = useState({})

    useEffect(() => {
        if (screen !== 'processing') return

        const secondMessageTimer = setTimeout(() => {
            setProcessingStep(1)
        }, 2000)

        const thirdMessageTimer = setTimeout(() => {
            setProcessingStep(2)
        }, 4000)

        const resultTimer = setTimeout(() => {
            setScreen('result')
        }, 6000)

        return () => {
            clearTimeout(secondMessageTimer)
            clearTimeout(thirdMessageTimer)
            clearTimeout(resultTimer)
        }
    }, [screen])

    const currentQuestion = questions[questionIndex]
    const selectedAnswer = answers[currentQuestion.id] ?? ''
    const isLastQuestion = questionIndex === questions.length - 1

    const quizResult = getQuizResult(answers)

    function handleStart() {
        setScreen('quiz')
    }

    function handleAnswer(optionId) {
        setAnswers((previousAnswers) => ({
            ...previousAnswers,
            [currentQuestion.id]: optionId,
        }))
    }

    function handleNext() {
        if (!selectedAnswer) return

        if (isLastQuestion) {
            setProcessingStep(0)
            setScreen('processing')
        } else {
            setQuestionIndex((previousIndex) => previousIndex + 1)
        }
    }

    function handlePrevious() {
        if (questionIndex === 0) {
            setScreen('welcome')
        } else {
            setQuestionIndex((previousIndex) => previousIndex - 1)
        }
    }

    function handleRestart() {
        setScreen('welcome')
        setQuestionIndex(0)
        setAnswers({})
    }

    const isCelebrating = screen === 'celebration'

    return (
        <main className={`app ${isCelebrating ? 'app--celebration' : ''}`}>
            <section
                className={`quiz-panel ${
                    isCelebrating ? 'quiz-panel--celebration' : ''
                }`}
                aria-labelledby="quiz-title"
            >
                <p className="quiz-brand">✦ muy tú.</p>

                {screen === 'welcome' && (
                    <>
                        <p className="quiz-eyebrow">
                            Un pequeño test de personalidad
                        </p>

                        <h1 id="quiz-title">
                            ¿Qué te hace tan tú?
                        </h1>

                        <p className="quiz-description">
                            Tu forma de soñar, de querer y de disfrutar
                            está llena de pistas. Descubre qué dicen de ti
                            en {questions.length} preguntas.
                        </p>

                        <button
                            type="button"
                            className="quiz-button"
                            onClick={handleStart}
                        >
                            Empezar el quiz
                            <span aria-hidden="true">→</span>
                        </button>

                        <p className="quiz-note">
                            {questions.length} preguntas · a tu ritmo
                        </p>
                    </>
                )}

                {screen === 'quiz' && (
                    <>
                        <p className="quiz-eyebrow">
                            Pregunta {questionIndex + 1} de {questions.length}
                        </p>

                        <h1 id="quiz-title" aria-live="polite">
                            {currentQuestion.title}
                        </h1>

                        <fieldset
                            className="quiz-options"
                            key={currentQuestion.id}
                        >
                            <legend>
                                Elige la opción que más se parezca a ti.
                            </legend>

                            {currentQuestion.options.map((option) => (
                                <label
                                    key={option.id}
                                    className={`quiz-option ${
                                        selectedAnswer === option.id ? 'is-selected' : ''
                                    }`}
                                >
                                    <input
                                        type="radio"
                                        name={currentQuestion.id}
                                        value={option.id}
                                        checked={selectedAnswer === option.id}
                                        onChange={() => handleAnswer(option.id)}
                                    />

                                    <span>{option.label}</span>
                                </label>
                            ))}
                        </fieldset>

                        <div className="quiz-actions">
                            <button
                                type="button"
                                className="quiz-button"
                                onClick={handleNext}
                                disabled={!selectedAnswer}
                            >
                                {isLastQuestion ? 'Ver mi resultado' : 'Continuar'}
                                <span aria-hidden="true">→</span>
                            </button>

                            <button
                                type="button"
                                className="quiz-back"
                                onClick={handlePrevious}
                            >
                                {questionIndex === 0 ? 'Volver al inicio' : 'Anterior'}
                            </button>
                        </div>
                    </>
                )}

                {screen === 'result' && quizResult && (
                    <>
                        <p className="quiz-eyebrow">Tu resultado · muy tú.</p>

                        <h1 id="quiz-title">{quizResult.title}</h1>

                        {quizResult.paragraphs.map((paragraph, index) => (
                            <p className="quiz-description" key={index}>
                                {paragraph}
                            </p>
                        ))}

                        <p className="quiz-anticipation">
                            Hay detalles tuyos que no caben en cinco preguntas.
                        </p>

                        <button
                            type="button"
                            className="quiz-button"
                            onClick={() => setScreen('celebration')}
                        >
                            Un detalle más
                            <span aria-hidden="true">→</span>
                        </button>
                    </>
                )}

                {screen === 'processing' && (
                    <div
                        className="quiz-processing"
                        role="status"
                        aria-atomic="true"
                    >
                        <p className="quiz-eyebrow">
                            Cada detalle cuenta
                        </p>

                        <h1 id="quiz-title">
                            {processingMessages[processingStep]}
                        </h1>

                        <p className="quiz-description">
                            Hay detalles que empiezan a encajar.
                        </p>

                        <div
                            className="quiz-processing-bar"
                            aria-hidden="true"
                        >
                            <span/>
                        </div>
                    </div>
                )}

                {screen === 'celebration' && (
                    <CelebrationScreen
                        answers={answers}
                        onRestart={handleRestart}
                    />
                )}

            </section>
        </main>
    )
}

export default App