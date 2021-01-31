import banner from '../../assets/images/project1/banner.jpg';
import logo from '../../assets/images/project1/logo.png';
import image2 from '../../assets/images/project1/gallery/img2.jpg';
import image3 from '../../assets/images/project1/gallery/img3.jpg';
import image4 from '../../assets/images/project1/gallery/img4.jpg';
import image5 from '../../assets/images/project1/gallery/img5.jpg';
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
    goal: '5.800',
    goaln: 5800,
    amount: 2700,
    banner: banner,
    logo: logo,
    content: {
      category: 'Solar',
      name: 'Solar energy for generate drinkable water.',
      description: [
        'Sea for Change is a humanitarian project thought and designed by a team of interdisciplinary young minds who seek to bring water to the communities that need it most.',
        'Even in the XXI century, the department of La Guajira in Colombia is the most affected by the shortage of drinking water. Why? It is a desert area that suffers from deforestation, mining exploitation and the disappearance of rivers. However, its geographical conditions (high solar radiation, proximity to the sea and the presence of groundwater) allow the development of an environmentally friendly solution using solar energy.',
        'We want to provide drinking water as soon as possible to the Wayuus, an indigenous community in the area that has suffered from a shortage of drinking water for more than 40 years.',
        "We created an innovative portable machine that uses solar energy to desalinate and treat sea, groundwater or surface reservoir water. It's attractive in terms of cost, design, versatility, and of course portability. The unit has the capacity to provide drinking water to more than 30 people, equivalent to a minimum of 150 liters per day.",
        'We have designed the machine’s first version and it is ready to be built, tested and optimized. We will use the funds raised to finance the construction and testing of our prototype.',
        'Join Sea for Change as an investor or team member. After building our prototype and doing field tests this year (2021), we hope to scale our business in 2022. Our goal is to mass produce our desalinators in an economically, socially and environmentally sustainable manner.',
        'We believe in the power of solidarity, technology and collaboration as engines of progress in societies. Help us and be an active entity of change! #PotableWaterForAll.',
      ],
      date: new Date(2016, 1, 16).toLocaleString(),
      location: 'Buenavista, Riohacha, La Guajira, Colombia',
      images: [ image2, image6, image3, image4, image7, image5],
      caracteristics: ['Helps 30 people/day','Indigenous ethnic group Wayuu','# of tons of Co2 equivalent to X whales '],
    },
    team: [
      {
        name: 'María Camila Prieto ',
        comment:
          'This project reminds me that we are just temporarily in this world, and whatever we do must be in favor of life, through kindness and empathy.',
        image: avatar1,
      },
      {
        name: 'Pedro Felipe Rubiano Perez ',
        comment:
          'I am a mechanical engineer and artist with an enormous social and environmental focus in my work. I spend most of my time thinking about how to provide drinkable water to communities that need it the most.',
        image: avatar2,
      },
      {
        name: 'Simón David García',
        comment:
          'Throughout my career I have engineered for people. For me, the biggest challenge is the access to basic needs like water.',
        image: avatar3,
      },
      {
        name: 'Rafael Rubiano',
        comment:
          'I have been in the regional Real Estate markets of Chile, Colombia, Perú, Uruguay and Mexico with SURA Asset Management. Now I am working in Sea for Change financial forecast and seeking diverse sources of fundraising.',
        image: avatar4,
      },
      {
        name: 'Santiago Pinzón',
        comment:
          'I love to see my profession as a tool to create a positive impact on people. It motivates me to promote the development of remote communities in Colombia and contribute my sand grain to make this world a better place.',
        image: avatar5,
      },
      {
        name: 'Paula Leon',
        comment:
          'I believe that engineering should be a driver to solve many of the problems that affect humanity today. In this occasion, I have joined this project to help the indigenous communities that live in La Guajira have access to potable water.',
        image: avatar6,
      },
    ],
  }

  export default project;