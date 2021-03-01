import './scss/_welcomeProfile.scss';
import { connect } from 'react-redux';

function DoubleComponent({ name }) {
  return (
    <section className="hero is-primary mb-6">
      <div className="hero-body py-5">
        <h1 className="title">We&apos;re really happy to welcome you to Inoverte.</h1>
        <p className="subtitle mt-3">
          {name} here is your profile information, feel free to update it
          <br />
          <i className="is-italic is-size-7"> Note: e-mail updating is not currently enabled.</i>
        </p>
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  name: state.user.userInfo.email,
});

export default connect(mapStateToProps, null)(DoubleComponent);
