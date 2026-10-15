import coffeeImage from '../assets/coffee.avif'
import icecreamImage from '../assets/icecream.avif'
import walkImage from '../assets/walk.avif'

export const celebration = {
    recipient: 'Caro',
    signature: 'Alguien que tenía ganas de hacerte sonreír.',

    wishes: {
        calm: 'Que este nuevo año te regale momentos tranquilos, pequeños detalles y muchas razones para sonreír.',
        fun: 'Que este nuevo año venga lleno de risas, buena compañía y momentos que quieras repetir.',
        adventure: 'Que este nuevo año te sorprenda con lugares, personas y experiencias que se conviertan en buenos recuerdos.',
    },

    notes: {
        humor: 'Y que no te falte alguien que encuentre la manera de hacerte reír. Yo me apunto a intentarlo.',
        attention: 'Este pequeño detalle es mi forma de decirte que hoy me acordé especialmente de ti.',
        chemistry: 'Me gustaría que entre tus próximos buenos recuerdos hubiera una conversación más contigo.',
    },

    times: {
        morning: 'Por la mañana',
        afternoon: 'Por la tarde',
        evening: 'Al caer la noche',
    },

    plans: {
        coffee: {
            title: '¿Un café para celebrar?',
            description:
                'Un café y una buena charla siempre son un buen plan. Si se te antoja, queda pendiente uno para celebrar tu cumpleaños.',
            image: coffeeImage,
            imageAlt: 'Una taza de café sobre una mesa de madera.',
        },
        icecream: {
            title: 'Un cumpleaños merece un helado.',
            description:
                'Una buena excusa para salir por un helado y celebrar un rato. El sabor lo eliges tú.',
            image: icecreamImage,
            imageAlt: 'Un cono de helado de vainilla en una cafetería.',
        },
        walk: {
            title: '¿Qué tal un paseo?',
            description:
                'Salir a caminar, despejarse y platicar un rato. Un plan sencillo para celebrar, cuando se acomode.',
            image: walkImage,
            imageAlt: 'Un camino entre árboles en un parque.',
        },
    },
}

export const invitationMemories = {
    photo:
        'Y si aparece un rincón bonito, habrá una buena excusa para una foto.',
    music:
        'Una buena canción también podría acompañar el plan.',
    story:
        'Quizá termine siendo una buena anécdota para después.',
}