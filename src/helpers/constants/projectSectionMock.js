const projects__img = process.env.REACT_APP_IMAGES_SRC + 'projects/projects__images/';
const projects__un = process.env.REACT_APP_IMAGES_SRC + 'projects/universities/';

export default [
  {
    id: 1,
    categories: ['solar'],
    name: 'Solar energy for generate drinkable water.',
    description:
      'Sea for Change is a humanitarian project aiming to tackle potable water shortage in vulnerable communities through an innovative water desalination unit.',
    team_name: 'Sea for Change',
    image: projects__img + 'project__1/card.jpg',
    university: {
      name: 'U. de los Andes',
      img: projects__un + 'andes.png',
    },
    raised: {
      percentage: '100%',
      goal: 50000,
    },
    ubication: 'La Guajira, Colombia',
    supporters: 300,
    status: true,
  },
  {
    id: 2,
    categories: ['solar', 'water', 'oil'],
    name: 'Microgrid for rural electrification.',
    description:
      'Sea for Change is a humanitarian project aiming to tackle potable water shortage in vulnerable communities through an innovative water desalination unit.',
    team_name: 'Sea for Change',
    image: projects__img + 'project__2/card.jpg',
    university: {
      name: 'U. Javeriana',
      img: projects__un + 'javeriana.png',
    },
    raised: {
      percentage: '100%',
      goal: 50000,
    },
    ubication: 'Putumayo, Colombia',
    supporters: 300,
    status: false,
  },
  {
    id: 3,
    categories: ['solar'],
    name: 'Tiny House: containers for self-sustainable rural housing',
    description:
      'Sea for Change is a humanitarian project aiming to tackle potable water shortage in vulnerable communities through an innovative water desalination unit.',
    team_name: 'Sea for Change',
    image: projects__img + 'project__3/card.jpg',
    university: {
      name: 'U. Javeriana',
      img: projects__un + 'javeriana.png',
    },
    raised: {
      percentage: '100%',
      goal: 50000,
    },
    ubication: 'El Choco , Colombia',
    supporters: 300,
    status: false,
  },
];
