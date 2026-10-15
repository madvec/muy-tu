const profiles = {
    calm: {
        title: 'Tienes talento para disfrutar lo sencillo.',
        introduction:
            'Tu forma de disfrutar empieza cuando puedes bajar el ritmo y prestar atención a los pequeños detalles.',
    },
    fun: {
        title: 'La buena compañía es tu lugar favorito.',
        introduction:
            'Para ti, lo que hace memorable un plan es con quién lo compartes. Una tarde cualquiera puede convertirse en una gran historia.',
    },
    adventure: {
        title: 'Siempre dejas espacio para lo inesperado.',
        introduction:
            'Te gusta que un plan tenga espacio para cambiar de rumbo. A veces, lo mejor del día es justo lo que no habías planeado.',
    },
}

const connections = {
    humor:
        'Si además hay alguien que te haga reír, tienes una buena razón para quedarte un rato más.',
    attention:
        'Y cuando alguien recuerda un detalle pequeño sobre ti, consigue que ese momento se sienta todavía más especial.',
    chemistry:
        'Lo disfrutas especialmente cuando la conversación fluye y puedes ser tú sin pensarlo demasiado.',
}

const memories = {
    photo:
        'Quizá después quede una foto que te devuelva a ese instante.',
    music:
        'Quizá después una canción se convierta en la manera de volver a ese instante.',
    story:
        'Quizá después tengas una anécdota que disfrutes contar una y otra vez.',
}

const plans = {
    coffee: 'un café que se enfría mientras la conversación sigue',
    icecream: 'un helado entre risas y ocurrencias',
    walk: 'un paseo que se alarga sin mirar el reloj',
}

const times = {
    morning: 'por la mañana',
    afternoon: 'por la tarde',
    evening: 'al caer la noche',
}

export function getQuizResult(answers) {
    const profile = profiles[answers.mood]
    const connection = connections[answers.connection]
    const memory = memories[answers.memory]
    const plan = plans[answers.plan]
    const time = times[answers.time]

    if (!profile || !connection || !memory || !plan || !time) {
        return null
    }

    return {
        title: profile.title,
        paragraphs: [
            `${profile.introduction} ${connection}`,
            `Tu escena ideal podría empezar con ${plan}, ${time}. ${memory}`,
        ],
    }
}