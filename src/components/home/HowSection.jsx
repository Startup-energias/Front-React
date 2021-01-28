import TabContent from '../utils/TabContent';
import Step1 from '../../assets/images/howWorks/step1.jpg';
import Step2 from '../../assets/images/howWorks/step2.jpg';
import Step3 from '../../assets/images/howWorks/step3.jpg';

function HowSection() {
  const steps =[
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
      content:
        'Follow the project progress periodically.',
      image: Step3,
    },
  ];

  const support = [
    {
      title: "knowledge",
      steps: [
        {
          id: 1,
          title: 'Tell us about yourself',
          content: 'Fill out the form to find out your profile and aspirations.'
        },
        {
          id: 2,
          title: 'We connect you with the team',
          content: 'Meet the people behind your favorite project along with the details and requirements to be part of the project.'
        },
        {
          id: 3,
          title: 'You are already a member of the team, start making an impact!',
          content: 'Once linked to the project, it begins to work. Your team will define the steps to follow.'
        }
      ]
    },
    {
      title: "finance",
      steps: [
        {
          id: 4,
          title: 'Make the transaction',
          content: 'Select the payment method and follow the steps.'
        },
        {
          id: 5,
          title: 'Access project information',
          content: 'Track how your money is being invested through monthly newsletters issued on the board of our platform.'
        },
        {
          id: 6,
          title: 'Receive your reward',
          content: 'Depending on the amount you donated, receive a donation certificate, a craft made by the impacted community, or a guided tour of the completed project.'
        }
      ]
    }
  ];

  let RenderSteps = ({steps}) => {
    return steps.map((step) => (
      <div className="howStep has-text-justified p-6" key={step.title} style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${step.image})`}} >
        <h2 className="title is-size-3-widescreen is-size-5-touch is-flex ">{step.title}</h2>
        <p className="is-size-6">{step.content}</p>
      </div>
    ));
  };

  return (
    <section className="section has-background-white howSection">
      <div className="centerDiv mb-5">
        <div className="howContainer  pl-5 container mx-6 my-4">
          <RenderSteps steps={steps} />
        </div>
      </div>

      <TabContent titles={["Finance a proyect", "Support with knowledge"]} info={support} />
      

      <div className="buttons has-addons is-centered mt-6">
          <div className="button is-link is-medium"><a className="black-link" href="#Projects">Support a proyect</a></div>
          <div className="button is-primary is-medium">Register a proyect</div>
      </div>

      
    </section>
  );
}

export default HowSection;
