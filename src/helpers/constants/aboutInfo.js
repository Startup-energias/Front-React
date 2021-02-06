const images__about = process.env.REACT_APP_IMAGES_SRC + 'about/';

export const aboutInfo = {
    banner: images__about + 'banner.jpg',
    team: images__about + 'team.jpg',
    members:[
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
        title: 'MISION',
        color: "#247dff", 
        text: "Impulsar el desarrollo tecnológico sostenible con el objetivo de brindar acceso a los recursos básicos de electricidad y agua potable. Conectamos proyectos sostenibles con financiación y talento humano para que puedan ser implementados en las comunidades que lo necesitan a través de la visibilización y difusión que fomenta nuestra plataforma", 
        image: images__about + 'mision.jpeg'
    },{
        right: true,
        title: 'VISION',
        color: "#23cee0", 
        text: "Impulsar el desarrollo tecnológico sostenible con el objetivo de brindar acceso a los recursos básicos de electricidad y agua potable. Conectamos proyectos sostenibles con financiación y talento humano para que puedan ser implementados en las comunidades que lo necesitan a través de la visibilización y difusión que fomenta nuestra plataforma", 
        image: images__about + 'mision.jpg'
    },{
        right: false,
        title: 'PATH',
        color: "#1a2340", 
        text: "Impulsar el desarrollo tecnológico sostenible con el objetivo de brindar acceso a los recursos básicos de electricidad y agua potable. Conectamos proyectos sostenibles con financiación y talento humano para que puedan ser implementados en las comunidades que lo necesitan a través de la visibilización y difusión que fomenta nuestra plataforma", 
    },
    ]
}