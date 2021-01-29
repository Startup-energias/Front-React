import Step1 from '../../assets/images/howWorks/step1.jpg';
import Step2 from '../../assets/images/howWorks/step2.jpg';
import Step3 from '../../assets/images/howWorks/step3.jpg';

export const steps = [
    {
      id: 1,
      title: 'Find your favorite project',
      content: 'Choose the project (s) you like the most in our catalog.',
      image: Step1,
    },
    {
      id: 2,
      title: 'Choose how you want to support the project',
      content:
        'You can make a monetary contribution, be an active member or mentor in the project development team, or share the project on your network.',
      image: Step2,
    },
    {
      id: 3,
      title: 'Track the impact you created',
      content: 'Follow the project progress periodically.',
      image: Step3,
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
          icon: 'address-book'
        },
        {
          id: 2,
          title: 'We connect you with the team',
          content:
            'Meet the people behind your favorite project along with the details and requirements to be part of the project.',
            icon: 'users'
        },
        {
          id: 3,
          title: 'You are already a member of the team, start making an impact!',
          content:
            'Once linked to the project, it begins to work. Your team will define the steps to follow.',
            icon: 'handshake-o'
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
          icon: 'credit-card-alt'
        },
        {
          id: 5,
          title: 'Access project information',
          content:
            'Track how your money is being invested through monthly newsletters issued on the board of our platform.',
            icon:'info-circle'
        },
        {
          id: 6,
          title: 'Receive your reward',
          content:
            'Depending on the amount you donated, receive a donation certificate, a craft made by the impacted community, or a guided tour of the completed project.',
          icon: 'gift'
          },
      ],
    },
  ];