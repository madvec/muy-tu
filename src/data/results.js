const discoveries = {
    beauty:
        'Cuando llegas a un lugar nuevo, sabes encontrar esos rincones que hacen que quieras quedarte un poco más.',
    explore:
        'Conocer otro lugar te entusiasma porque siempre puede aparecer algo que aprender, probar o recordar.',
    people:
        'Para ti, conocer un lugar también pasa por conocer a su gente: una conversación puede convertirse en lo mejor del viaje.',
}

const projects = {
    dream:
        'Tienes facilidad para imaginar lo que una idea podría llegar a ser. Y cuando te importa, te gusta poner de ti para verla crecer.',
    learn:
        'Cuando algo te ilusiona, te pones en movimiento: investigas, aprendes y buscas cómo hacerlo posible.',
    share:
        'Te entusiasma construir cosas propias, y compartir esa emoción con alguien de confianza también forma parte del camino.',
}

const care = {
    detail:
        'Con los tuyos, muchas veces tu cariño aparece en un detalle elegido pensando especialmente en ellos.',
    presence:
        'Con los tuyos, sabes hacer espacio: escuchar, acompañar y estar también son maneras de cuidar.',
    help:
        'Con los tuyos, tu cariño también se convierte en acciones: si puedes hacerles el día un poco más fácil, lo intentas.',
}

const styles = {
    outfit:
        'Y disfrutas verte bien, encontrar tu estilo y salir sintiéndote a gusto contigo.',
    details:
        'Además, tienes ojo para esos pequeños detalles que hacen que algo bonito se sienta muy tuyo.',
    ritual:
        'También sabes que disfrutar puede empezar antes de salir: música, tiempo para ti y ganas de sentirte bien.',
}

const plans = {
    coffee:
        'Un café en un lugar bonito y una charla sin prisa encajan bastante contigo.',
    icecream:
        'Un helado, unas risas y buena compañía también tienen mucho de ti.',
    walk:
        'Un paseo con algo por descubrir y buena conversación también tiene mucho de ti.',
}

const birthdayWishes = {
    dream:
        'Que este nuevo año te acerque a eso que imaginas con tanta ilusión, y te regale momentos tan bonitos como los que te gusta crear.',
    learn:
        'Que este nuevo año venga con lugares por conocer, cosas por aprender y muchas oportunidades para hacer crecer lo que te apasiona.',
    share:
        'Que este nuevo año te dé motivos para emocionarte, proyectos que te hagan sentir orgullosa y personas con quienes compartir cada alegría.',
}

const birthdayNotes = {
    detail:
        'Tú que disfrutas tener detalles con los demás, hoy merecías uno pensado especialmente para ti.',
    presence:
        'Tú que sabes hacer espacio para los demás, hoy merecías un momento dedicado a ti.',
    help:
        'Tú que pones tanto de ti en lo que haces y en quienes quieres, hoy merecías que alguien preparara algo para ti.',
}

const invitationDetails = {
    detail:
        'Podemos buscar un lugar bonito para la ocasión.',
    presence:
        'La idea es encontrar un rato para platicar sin prisa.',
    help:
        'Un pequeño descanso de los pendientes también cuenta como celebración.',
}

export function getQuizResult(answers) {
    const discovery = discoveries[answers.discovery]
    const project = projects[answers.project]
    const caring = care[answers.care]
    const style = styles[answers.style]
    const plan = plans[answers.plan]

    if (!discovery || !project || !caring || !style || !plan) {
        return null
    }

    return {
        title: 'Tienes una vida en mente. Y muchas ganas de hacerla tuya.',
        paragraphs: [
            `${project} ${discovery}`,
            `${caring} ${style}`,
            `${plan} Porque entre trabajar, cuidar y seguir soñando, también hay espacio para disfrutar y compartir lo bonito que te pasa.`,
        ],
        birthdayWish: birthdayWishes[answers.project],
        birthdayNote: birthdayNotes[answers.care],
        invitationDetail: invitationDetails[answers.care],
    }
}