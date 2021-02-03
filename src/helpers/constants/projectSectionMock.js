import image1 from '../../assets/images/projects/Img1.jpg';
import eolicTower from '../../assets/images/projects/eolicTower.jpg';
import container from '../../assets/images/projects/container.jpg';
import andesLogo from '../../assets/images/projects/andes.png';
import javerianaLogo from '../../assets/images/projects/javeriana.png';

export default [
  {
    id: 1,
    categories: ['solar'],
    name: 'Solar energy for generate drinkable water.',
    description:
      'Sea for Change is a humanitarian project aiming to tackle potable water shortage in vulnerable communities through an innovative water desalination unit.',
    team_name: 'Sea for Change',
    image: image1,
    university: {
      name: 'Los andes',
      img: andesLogo,
    },
    raised: {
      percentage: '100%',
      goal: 50000,
    },
    ubication: 'La Guajira - Colombia',
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
    image: eolicTower,
    university: {
      name: 'Javeriana',
      img: javerianaLogo,
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
    image: container,
    university: {
      name: 'Javeriana',
      img: javerianaLogo,
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
