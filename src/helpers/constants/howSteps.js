const folder = 'howWorks/';
export const steps = [
  {
    id: 1,
    title: 'Find your favorite project',
    content: 'Filter your preferences by type of technology, region and university',
    image: process.env.REACT_APP_IMAGES_SRC + folder + 'step1.png',
  },
  {
    id: 2,
    title: 'Support the project',
    content: 'Choose how you want to help: money, knowledge or sharing in social media.',
    image: process.env.REACT_APP_IMAGES_SRC + folder + 'step2.png',
  },
  {
    id: 3,
    title: 'Track the impact',
    content: 'Watch it grows! Follow the process to see the impact in the community',
    image: process.env.REACT_APP_IMAGES_SRC + folder + 'step3.png',
  },
];

export const support = [
  {
    title: 'knowledge',
    steps: [
      {
        id: 1,
        title: 'Tell us about yourself',
        content: 'Fill out the form to find out your profile and aspirations.',
        icon: 'address-book',
      },
      {
        id: 2,
        title: 'We connect you with the team',
        content:
          'Meet the people behind your favorite project along with the details and requirements to be part of the project.',
        icon: 'users',
      },
      {
        id: 3,
        title: 'You are already a member of the team, start making an impact!',
        content:
          'Once linked to the project, it begins to work. Your team will define the steps to follow.',
        icon: 'handshake-o',
      },
    ],
  },
  {
    title: 'finance',
    steps: [
      {
        id: 4,
        title: 'Make the transaction',
        content: 'Select the payment method and follow the steps.',
        icon: 'credit-card-alt',
      },
      {
        id: 5,
        title: 'Access project information',
        content:
          'Track how your money is being invested through monthly newsletters issued on the board of our platform.',
        icon: 'info-circle',
      },
      {
        id: 6,
        title: 'Receive your reward',
        content:
          'Depending on the amount you donated, receive a donation certificate, a craft made by the impacted community, or a guided tour of the completed project.',
        icon: 'gift',
      },
    ],
  },
];
