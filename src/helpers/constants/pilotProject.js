import banner from '../../assets/images/project1/banner.jpg';
import logo from '../../assets/images/project1/logo.png';
import image2 from '../../assets/images/project1/gallery/img2.jpg';
import image3 from '../../assets/images/project1/gallery/img3.jpg';
import image4 from '../../assets/images/project1/gallery/img4.jpg';
import image6 from '../../assets/images/project1/gallery/img6.png';
import image7 from '../../assets/images/project1/gallery/img7.png';
import avatar1 from '../../assets/images/project1/team/avatar-default.jpg';
import avatar2 from '../../assets/images/project1/team/Pedro Rubiano.jpg';
import avatar3 from '../../assets/images/project1/team/Simón García.jpg';
import avatar4 from '../../assets/images/project1/team/Rafael Rubiano.jpg';
import avatar5 from '../../assets/images/project1/team/Santiago Pinzón.jpg';
import avatar6 from '../../assets/images/project1/team/avatar-default.jpg';

const project = {
    id: 1,
    banner: banner,
    images: [image2, image6, image3, image7, image4],
    content: {
        title: 'Solar energy for treating sea, subterranean or superficial reservoir water to generate drinkable water.',
        categories: ['solar'],
        location: 'Buenavista, Riohacha, La Guajira, Colombia',
        description: [
            'Sea for Change is a humanitarian project thought and designed by a team of interdisciplinary young minds who seek to bring water to the communities that need it most.',
            'Even in the XXI century, the department of La Guajira in Colombia is the most affected by the shortage of drinking water. Why? It is a desert area that suffers from deforestation, mining exploitation and the disappearance of rivers. However, its geographical conditions (high solar radiation, proximity to the sea and the presence of groundwater) allow the development of an environmentally friendly solution using solar energy.',
            'We want to provide drinking water as soon as possible to the Wayuus, an indigenous community in the area that has suffered from a shortage of drinking water for more than 40 years.',
            "We created an innovative portable machine that uses solar energy to desalinate and treat sea, groundwater or surface reservoir water. It's attractive in terms of cost, design, versatility, and of course portability. The unit has the capacity to provide drinking water to more than 30 people, equivalent to a minimum of 150 liters per day.",
            'We have designed the machine’s first version and it is ready to be built, tested and optimized. We will use the funds raised to finance the construction and testing of our prototype.',
            'Join Sea for Change as an investor or team member. After building our prototype and doing field tests this year (2021), we hope to scale our business in 2022. Our goal is to mass produce our desalinators in an economically, socially and environmentally sustainable manner.',
            'We believe in the power of solidarity, technology and collaboration as engines of progress in societies. Help us and be an active entity of change! #PotableWaterForAll.',
        ],
        characteristics: ['Helps 30 people/day', 'Indigenous ethnic group Wayuu', '150 Kg CO2 saved per year']
    },
    details: {
        goalt: '5.800',
        goal: 5800,
        amount: 5800,
        organization: 'Startup',
        supporters: 300,
        university: 'Universidad de los andes',
        company: 'Sea for change',
        slogan: 'Water and sun for life',
        logo: logo,
    },
    resources: [
        'Suppliers: RO membrane', 'High pressure pump suppliers 800 PSI and 10-20 L/min - affordable', 'DC motor suppliers, 1HP - affordable', 'Efficient and compact solar panels suppliers - affordable '
    ],
    skills: [{ skill: 'Mentors! We are open to new ideas, suggestions or feedback. Knowledge in MOFs technology for water desalination, pretreatment alternatives and power efficiency are very well received!' }, {
        skill: 'We are looking for interested parties on funding or buying our desalination units', subs: ['ONGS',
            'Humanitarian organizations',
            'Privates',
            'Universities',
            'Governments'
        ]
    },
    ],
    team: [
        {
            name: 'María Camila Prieto ',
            comment:
                'This project reminds me that we are just temporarily in this world, and whatever we do must be in favor of life, through kindness and empathy.',
            role: 'Communications ',
            image: avatar1,
        },
        {
            name: 'Pedro Felipe Rubiano Perez ',
            comment:
                'I am a mechanical engineer and artist with an enormous social and environmental focus in my work. I spend most of my time thinking about how to provide drinkable water to communities that need it the most.',
            role: 'Project manager',
            image: avatar2,
        },
        {
            name: 'Simón David García',
            comment:
                'Throughout my career I have engineered for people. For me, the biggest challenge is the access to basic needs like water.',
            role: 'Structural and Integration Engineer',
            image: avatar3,
        },
        {
            name: 'Rafael Rubiano',
            comment:
                'I have been in the regional Real Estate markets of Chile, Colombia, Perú, Uruguay and Mexico with SURA Asset Management. Now I am working in Sea for Change financial forecast and seeking diverse sources of fundraising.',
            role: 'Business Financials',
            image: avatar4,
        },
        {
            name: 'Santiago Pinzón',
            comment:
                'I love to see my profession as a tool to create a positive impact on people. It motivates me to promote the development of remote communities in Colombia and contribute my sand grain to make this world a better place.',
            role: 'Power design engineer',
            image: avatar5,
        },
        {
            name: 'Paula Leon',
            comment:
                'I believe that engineering should be a driver to solve many of the problems that affect humanity today. In this occasion, I have joined this project to help the indigenous communities that live in La Guajira have access to potable water.',
            role: 'Power control Engineer',
            image: avatar6,
        },
    ],
    maps: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31287.59846400292!2d-72.91969962945211!3d11.411189281123761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8b652d09fa863d%3A0x23f73c8eccb1c1a3!2sBuenavista%2C%20Riohacha%2C%20La%20Guajira!5e0!3m2!1ses-419!2sco!4v1611933964698!5m2!1ses-419!2sco',
}

export default project;