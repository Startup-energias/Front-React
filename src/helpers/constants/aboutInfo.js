const images__about = process.env.REACT_APP_IMAGES_SRC + 'about/';
const images__team = process.env.REACT_APP_IMAGES_SRC + 'team/';
export const aboutInfo = {
    items: [{
        right: false,
        title: 'Mision',
        color: 'warning',
        text: 'To drive renewable innovation by connecting entrepreneurs, off-grid communities, and investors worldwide.',
        image: images__about + 'mision.jpg'
    }, {
        right: true,
        title: 'Vision',
        color: 'info',
        text: 'We envision a world where sustainable technologies drive our society. We introduce a digital platform to Latin America that fits this vision. At Inoverte, we promote sustainability, as we connect renewable innovation and financing to benefit off-grid communities.',
        image: images__about + 'vision.jpg'
    }, {
        right: false,
        title: 'Path',
        color: 'dark',
        text: 'Invoverte is a Colombian initiative supported by START Global that is taking off in the Swiss entrepreneurship ecosystem.',
        image: images__about + 'path.png'
    },
    {
        right: true,
        title: 'Values',
        color: 'success',
        text: 'We are governed by the Sustainable Development Goals SDGs from the United Nations UN 6. Clean water and 7. Affordable and clean energy.',
        image: images__about + 'drivers.png'
    },
    {
        title: 'Team',
        color: 'primary',
        team: [
            {
                name: 'Valentina Ballén',
                role: 'CEO & Founder',
                email: 'valentina@inoverte.com',
                instagram: 'https://www.instagram.com/valentinaballen7/',
                linkedin: 'https://www.linkedin.com/in/valentina-ball%C3%A9n-castillo/',
                image: images__team + 'valentina.jpg'
            },
            {
                name: 'Nicolás Abondano',
                role: 'CTO',
                email: 'nicolas@inoverte.com',
                instagram: 'https://www.instagram.com/nabondano/',
                linkedin: 'https://www.linkedin.com/in/nicolasabo/',
                image: images__team + 'nicolas.jpeg'
            },
        ],
        advisors: [
        ]
    },
    ]
}