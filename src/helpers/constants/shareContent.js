const images__modal = process.env.REACT_APP_IMAGES_SRC + 'projects/page/modal/';

export const modalIcons = {
  media: [
    images__modal + 'linkedin.png',
    images__modal + 'twitter.png',
    images__modal + 'facebook.png',
    images__modal + 'instagram.png',
  ],
  support: [
    {
      image: images__modal + 'money.png',
      link: "/payment"
    },
    {
      image: images__modal + 'resources.png',
    },
    {
      image: images__modal + 'skills.png',
    },
    {
      image: images__modal + 'share.png',
    }
  ]
};

export const payContent = {
  sections: [
    {
      title: 'Make the Transaction',
      content: 'Select the payment method and follow the steps.',
      image: images__modal + 'card.png'
    },
    {
      title: 'Access project information',
      content: 'Track how your money is being invested through monthly newsletters issued on the board of our plataform',
      image: images__modal + 'info.png'
    },
    {
      title: 'Receive your reward',
      content: 'Depending on the amount you donated,receive a donation certificate, a creaft made by the impacted community, or a guided tour of the completed project.',
      image: images__modal + 'box.png'
    }
  ]
}
