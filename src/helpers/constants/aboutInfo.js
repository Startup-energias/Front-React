const images__about = process.env.REACT_APP_IMAGES_SRC + 'about/';

export const aboutInfo = {
    team: images__about + 'team.png',
    members: [
        {
            name: 'Valentina',
            rol: 'CEO',
            email: 'valentina@inverte.com'
        },
        {
            name: 'Mariana',
            rol: 'rol',
            email: 'valentina@inverte.com'
        },
        {
            name: 'Nicolas',
            rol: 'rol',
            email: 'nicolas@inverte.com'
        },
        {
            name: 'Christian',
            rol: 'rol',
            email: 'valentina@inverte.com'
        },
        {
            name: 'Gustavo',
            rol: 'rol',
            email: 'valentina@inverte.com'
        },
    ],
    items: [{
        right: false,
        title: 'Mision',
        color: "#247dff",
        text: "To drive renewable innovation by connecting entrepreneurs, off-grid communities, and investors worldwide.",
        image: images__about + 'mision.jpg'
    }, {
        right: true,
        title: 'Vision',
        color: "#23cee0",
        text: "We envision a world where sustainable technologies drive our society. We introduce a digital platform to Latin America that fits this vision. At Inverte, we promote sustainability, as we connect renewable innovation and financing to benefit off-grid communities.",
        image: images__about + 'vision.jpg'
    }, {
        right: false,
        title: 'Path',
        color: "#1a2340",
        text: "Invoverte is a Colombian initiative supported by START Global that is taking off in the Swiss entrepreneurship ecosystem.",
    },
    {
        right: true,
        title: 'Values',
        color: "#a3d9ea",
        text: "We are governed by the Sustainable Development Goals SDGs from the United Nations UN 6. Clean water and 7. Affordable and clean energy.",
        image: images__about + 'drivers.png'
    },
    ]
}