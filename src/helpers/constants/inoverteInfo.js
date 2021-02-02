import statics from '../../assets/images/info/statics.png';
import handTool from '../../assets/images/info/handTool.png';
import world from '../../assets/images/info/world.png';
import benefits from '../../assets/images/info/benefits.png';
import handTree from '../../assets/images/info/handTree.png';
import support from '../../assets/images/info/support.png';
import transparency from '../../assets/images/info/transparency.png';
import box from '../../assets/images/info/box.png';
import communication from '../../assets/images/info/communication.png';

export const tags = [
  {
    value: 'All',
    selected: true,
  },
  {
    value: 'Why have my project at Inoverte',
    selected: false,
  },
  {
    value: 'Why support a Inoverte Project',
    selected: false,
  },
];

export const sections = [
  {
    image: statics,
    title: 'Follow up',
    content: `Inoverte we go further than only
      finding funds. Follow the evolution of
      the project, its implementation and
      the impact generated through our
      platform. Receive monthly updates on
      the status of your investment and the

      project.`,
    color: '#4eb6e1',
  },
  {
    image: handTool,
    title: 'Crowd-talent',
    content: `Help with your knowledge! In Inoverte
      we are convinced that anyone can be
      part of a renewable energy project. Do
      you want to return to the ecosystem
      what it offer you? You can be a mentor
      or join as a member of the team.`,
    color: '#eeaa3d',
  },
  {
    image: world,
    title: 'Inoverte community',
    content: `The perfect community for people
      passionate about renewable energy.
      Connect with people from all over the
      world who want to rock innovative
      projects! Anyone, everywhere,
      anytime.`,
    color: '#e67d58',
  },
  {
    image: benefits,
    title: 'Stay tuned',
    content: `Learn about what is happening in
      Colombia and the world in sustainability and innovation. With our blog, you
      can discover the latest news and
      discuss with other innoverters.`,
    color: '#9dc69e',
  },
  {
    multiples: [
      {
        image: handTree,
        title: 'Reducing CO2 emissions',
        content: `With every project we support, we seek to
          reduce the greatest amount of carbon emissions. Know the specific amount in the
          details of each project. Together for our
          environment.`,
      },
      {
        image: support,
        title: 'People first',
        content: `The perfect community for people passionate about renewable energy. Connect with
        people from all over the world who want to
        rock innovative projects! Anyone, everywhere, anytime.`,
      },
    ],
    color: '#7e9794',
  },
  {
    image: transparency,
    title: 'Transparency',
    content: `Our Inoverte projects go through a
      rigorous feasibility evaluation process.
      We make sure they meet all the legal,
      technological and financial requirements to provide real implementable
      solutions`,
    color: '#c3a485',
  },
  {
    image: box,
    title: 'Sourcing',
    content: `You company is valuable! In Inoverte
      our projects can share their specific
      needs such as products, services and
      spaces. Do you want to be one of our
      partner suppliers and create positive
      impact? contact us!`,
    color: '#5acbaf',
  },
  {
    image: communication,
    title: 'Share',
    content: `You can be part of the renewable
      change! Even if you do not have the
      money, the knowledge or the resource, you can still make the idea viral.
      Support innovation dedicated for the
      ones who need it the most with Inoverte!`,
    color: '#883aed',
  },
];
