const images__modal = process.env.REACT_APP_IMAGES_SRC + 'projects/page/modal/';
const images__payment = process.env.REACT_APP_IMAGES_SRC + 'projects/page/payment/';
const images__medals = images__payment + 'medals/';
const images__denominations = images__payment + 'denominations/';
const images__time = images__payment + 'time/';

export const modalIcons = {
  media: {
    linkedin: images__modal + 'linkedin.png',
    twitter: images__modal + 'twitter.png',
    facebook: images__modal + 'facebook.png',
  },
  support: [
    {
      image: images__modal + 'money.png',
      title: 'Money',
      link: "/payment"
    },
    {
      image: images__modal + 'skills.png',
      title: 'Skills'
    },
    {
      image: images__modal + 'resources.png',
      title: 'Resources'
    },
    {
      image: images__modal + 'share.png',
      title: 'Share'
    }
  ]
};

export const payContent = {
  end: images__payment + 'people.png',
  info: [
    {
      title: 'Make the Transaction',
      content: 'Select the payment method and follow the steps.',
      image: images__payment + 'card.png'
    },
    {
      title: 'Access project information',
      content: 'Track how your money is being invested through monthly newsletters issued on the board of our plataform',
      image: images__payment + 'info.png'
    },
    {
      title: 'Receive your reward',
      content: 'Depending on the amount you donated,receive a donation certificate, a creaft made by the impacted community, or a guided tour of the completed project.',
      image: images__payment + 'box.png'
    }
  ],
  medals: [
    {
      value: 'bronze',
      image: images__medals + 'bronze.png'
    }
  ],
  denominations: [
    {
      cant: 10,
      image: images__denominations + 'money10.png'
    },
    {
      cant: 30,
      image: images__denominations + 'money30.png'
    },
    {
      cant: 50,
      image: images__denominations + 'money50.png'
    },
    {
      type: 'Other',
      image: images__denominations + 'moneyOther.png'
    },
  ],
  time: [
    {
      freq: 'Just once',
      image: images__time + 'once.png',
    },
    {
      freq: 'Montly',
      image: images__time + 'montly.png',
    }
  ]

}
