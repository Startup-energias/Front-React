import './scss/_profileProjects.scss';
import { connect } from 'react-redux';

function Projects({ projects }) {
  return projects.length > 0 ? (
    <div className="profileProjects is-flex is-flex-direction-column is-align-items-center"></div>
  ) : (
    <section className="hero is-success">
      <div className="hero-body">
        <p className="title">Not any projects subscribed yet</p>
        <p className="subtitle">¿ Ready for start to collaborating with your first project ?</p>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  projects: state.user.userInfo.projects,
});

export default connect(mapStateToProps, null)(Projects);
