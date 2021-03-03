import { connect } from 'react-redux';
import { useEffect } from 'react';
import { uploadUserInfo } from '../store/modules/user/middlewares';
import ProfileWelcome from '../components/profile/Welcome';
import ProfileForm from '../components/profile/Form';
import ProfileImage from '../components/profile/Image';
import ProfileProjects from '../components/profile/Projects';
import './scss/_profile.scss';

function profile({ onUploadUser }) {
  useEffect(() => {
    onUploadUser();
  }, []);

  return (
    <div className="profile">
      <ProfileWelcome />
      <div className="is-flex is-flex-wrap-wrap is-justify-content-space-around is-align-content-center mb-6">
        <ProfileImage />
        <ProfileForm />
      </div>
      <ProfileProjects />
    </div>
  );
}

const mapDispatchToProps = {
  onUploadUser: uploadUserInfo,
};

export default connect(null, mapDispatchToProps)(profile);
