import TabContent from '../utils/TabContent';

function HowSection() {
  const steps =[
    {
      id: 1,
      title: '1. Find the project(s) you want to support',
      content: 'Choose the project (s) you like the most in our catalog.',
      icon: 'search',
    },
    {
      id: 2,
      title: '2. Choose how you want to support the project: money, knowledge or outreach',
      content:
        'You can make a monetary contribution, be an active member or mentor in the project development team, or share the project on your network.',
      icon: 'hand-holding-usd',
    },
    {
      id: 3,
      title: '3. Track the impact you created',
      content:
        'Follow the project progress periodically.',
      icon: 'heart',
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

  let RenderStep = ({step}) => {
    return (
      <div className="howStep has-text-justified p-6" key={step.title} style={{ backgroundImage: 'url(https://bulma.io/images/placeholders/480x480.png)'}} >
        <h2 className="title is-3">{step.title}</h2>
        <p className="is-6">{step.content}</p>
      </div>
    );
  };

  return (
    <section className="section has-background-dark howSection">
      <div className="centerDiv mb-5">
        <div className="howContainer  pl-5 container mx-6 my-4">
          <RenderStep step={steps[0]} />
          <RenderStep step={steps[1]} />
          <RenderStep step={steps[2]} />
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
