const images__project = process.env.REACT_APP_IMAGES_SRC + 'projects/projects__images/project__1/';
const images__gallery = images__project + 'gallery/';
const images__team = images__project + 'team/';

const project = {
  id: 1,
  banner: images__project + 'banner.jpg',
  images: [
    images__gallery + 'img2.jpg',
    images__gallery + 'img3.jpg',
    images__gallery + 'img4.jpg',
    images__gallery + 'sal1.png',
    images__gallery + 'sal2.png',
    images__gallery + 'sal3.png',
    images__gallery + 'sal4.png',
    images__gallery + 'sal5.png',
    images__gallery + 'sal6.png',
    images__gallery + 'sal7.png',
    images__gallery + 'sal8.png',
  ],
  content: {
    title:
      'Solar energy for treating sea, subterranean or superficial reservoir water to generate drinkable water.',
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
    characteristics: [
      'Helps 30 people/day',
      'Indigenous ethnic group Wayuu',
      '150 Kg CO2 saved per year',
    ],
  },
  details: {
    goal: 9000,
    amount: 0,
    organization: 'Startup',
    supporters: 300,
    university: 'Universidad de los andes',
    company: 'Sea for change',
    slogan: 'Water and sun for life',
    logo: images__project + 'logo.png',
    email: 'inoverte@gmail.com',
  },
  skills: [
    'Mentors',
    'ONGS',
    'Humanitarian organizations',
    'Privates',
    'Universities',
    'Governments',
  ],
  resources: ['Membranes', 'Pumps', 'Motors', 'Solar panels'],
  team: [
    {
      name: 'María Camila Prieto ',
      comment:
        'This project reminds me that we are just temporarily in this world, and whatever we do must be in favor of life, through kindness and empathy.',
      role: 'Communications ',
      image: images__team + 'avatar-default.jpg',
    },
    {
      name: 'Pedro Felipe Rubiano Perez ',
      comment:
        'I am a mechanical engineer and artist with an enormous social and environmental focus in my work. I spend most of my time thinking about how to provide drinkable water to communities that need it the most.',
      role: 'Project manager',
      image: images__team + 'Pedro Rubiano.jpg',
    },
    {
      name: 'Simón David García',
      comment:
        'Throughout my career I have engineered for people. For me, the biggest challenge is the access to basic needs like water.',
      role: 'Structural and Integration Engineer',
      image: images__team + 'Simón García.jpg',
    },
    {
      name: 'Rafael Rubiano',
      comment:
        'I have been in the regional Real Estate markets of Chile, Colombia, Perú, Uruguay and Mexico with SURA Asset Management. Now I am working in Sea for Change financial forecast and seeking diverse sources of fundraising.',
      role: 'Business Financials',
      image: images__team + 'Rafael Rubiano.jpg',
    },
    {
      name: 'Santiago Pinzón',
      comment:
        'I love to see my profession as a tool to create a positive impact on people. It motivates me to promote the development of remote communities in Colombia and contribute my sand grain to make this world a better place.',
      role: 'Power design engineer',
      image: images__team + 'Santiago Pinzón.jpg',
    },
    {
      name: 'Paula Leon',
      comment:
        'I believe that engineering should be a driver to solve many of the problems that affect humanity today. In this occasion, I have joined this project to help the indigenous communities that live in La Guajira have access to potable water.',
      role: 'Power control Engineer',
      image: images__team + 'avatar-default.jpg',
    },
  ],
  maps:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31287.59846400292!2d-72.91969962945211!3d11.411189281123761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e8b652d09fa863d%3A0x23f73c8eccb1c1a3!2sBuenavista%2C%20Riohacha%2C%20La%20Guajira!5e0!3m2!1ses-419!2sco!4v1611933964698!5m2!1ses-419!2sco',
};

export default project;
