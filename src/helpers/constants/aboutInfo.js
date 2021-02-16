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
                name: 'Mariana Holguin',
                role: 'VP Operations',
                email: 'mariana@inoverte.com',
                instagram: 'https://www.instagram.com/mariana_holguinpe/',
                linkedin: 'https://www.linkedin.com/in/mariana-holguin-771aa017b',
                image: images__team + 'mariana.jpg'
            },
            {
                name: 'Nicolás Abondano',
                role: 'CTO',
                email: 'nicolas@inoverte.com',
                instagram: 'https://www.instagram.com/nabondano/',
                linkedin: 'https://www.linkedin.com/in/nicolasabo/',
                image: images__team + 'nicolas.jpeg'
            },
            {
                name: 'Christian Bravo',
                role: 'VP Engineering',
                email: 'christian@inoverte.com',
                instagram: 'https://www.instagram.com/christianmbp_12/',
                linkedin: 'https://www.linkedin.com/in/christian-mauricio-bravo-9242a315a/',
                image: images__team + 'christian.jpeg'
            },
            {
                name: 'Gustavo Lozano',
                role: 'CMO',
                email: 'gustavo@inoverte.com',
                instagram: 'https://www.instagram.com/galca97/',
                linkedin: 'https://www.linkedin.com/in/gustavo-lozano-cardenas-05559a125/',
                image: images__team + 'gustavo.JPG'
            },
        ],
        advisors: [
        ]
    },
    ]
}