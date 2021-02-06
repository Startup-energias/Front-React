const images__about = process.env.REACT_APP_IMAGES_SRC + 'about/';

export const aboutInfo = {
    banner: images__about + 'banner.jpg',
    team: images__about + 'team.jpg',
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
        title: 'MISION',
        color: "#247dff",
        text: "To drive renewable innovation by connecting entrepreneurs, off-grid communities, and investors worldwide.",
        image: images__about + 'mision.jpg'
    }, {
        right: true,
        title: 'VISION',
        color: "#23cee0",
        text: "Invoverte is a Colombian initiative supported by START Global that is taking off in the Swiss entrepreneurship ecosystem. We are inspired by the need to connect and create a global community that promotes sustainability and innovation. Using the web environment, we help to make visible innovative solutions to problems related to basic resources, promoting the creation of teams with human talents capable of positively impacting the new generations through sustainable ideas. We will be the company that will lead the energy transformation towards a society where basic resources such as electricity and water are affordable for all using renewable technologies. Our goal is to supply water and / or energy to 3 million people by 2025. In this way, we visualize all the projects in our Inverte platform financed, developed and implemented. By 2022, Inverte will be the most referenced platform in the energy sector, with 1 million active users around the world. ",
        image: images__about + 'vision.jpg'
    }, {
        right: false,
        title: 'PATH',
        color: "#1a2340",
        text: "Impulsar el desarrollo tecnológico sostenible con el objetivo de brindar acceso a los recursos básicos de electricidad y agua potable. Conectamos proyectos sostenibles con financiación y talento humano para que puedan ser implementados en las comunidades que lo necesitan a través de la visibilización y difusión que fomenta nuestra plataforma",
    },
    {
        right: true,
        title: 'DRIVERS',
        color: "#a3d9ea",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesentconsequat.",
        image: images__about + 'drivers.png'
    },
    ]
}