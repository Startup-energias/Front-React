import banner from '../../assets/images/project1/banner.jpg';
import logo from '../../assets/images/project1/logo.png';
import image2 from '../../assets/images/project1/gallery/img2.jpg';
import image3 from '../../assets/images/project1/gallery/img3.jpg';
import image4 from '../../assets/images/project1/gallery/img4.jpg';
import image5 from '../../assets/images/project1/gallery/img5.jpg';
import image6 from '../../assets/images/project1/gallery/img6.png';
import image7 from '../../assets/images/project1/gallery/img7.png';
import avatar1 from '../../assets/images/project1/team/avatar-10-1.jpg';
import avatar2 from '../../assets/images/project1/team/avatar-10.jpg';
import avatar3 from '../../assets/images/project1/team/avatar-default.jpg';

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
        name: 'Paula Andrea Leon Tabares',
        comment:
          'I believe that engineering should be a source to solve many of the problems that arise today, so I have joined this project in order to help the communities of the Guajira through my career. It is necessary to generate conscience in many aspects, not only in helping the communities that suffer a state oblivion, but also through the renewable energies. With this project I hope to reduce my carbon footprint and help others do the same, while also making a basic need such as potable water accessible to many people',
        image: avatar1,
      },
      {
        name: 'Pedro Felipe Rubiano Perez',
        comment:
          'The main motivation in doing this project relies in the desire to propose an effective solution for a problem that has prevailed over 15 years in La Guajira, despite of all the efforts made by the government and other entities. During this process I want to show and prove that engineering applied for social purposes needs sensible and human study dimensions to really work and generate positive social impact. Moreover, I believe that engineering projects should be conceived deeming an artistic approach to be more successful and well-received. And that is what I want for this project, a collective construction between engineers and communities, of a device powered by the sun capable of supplying drinkable water from the sea and conceived as an artwork',
        image: avatar2,
      },
      {
        name: 'Simón David García',
        comment:
          'The biggest challenge for development is the access to basic needs like water, energy or food. This project is a substantial aid for people from La Guajira to access drinking water through an innovative solution. The main goal is to give this community all the essential tools they need to provide real social impact. Engineering should always be an ally in the pursuit of better life quality. Therefore, my objective is to build, iterate and produce a long term system that could use available resources to change their lives dramatically while working together with the community',
        image: avatar3,
      },
    ],
  }

  export default project;