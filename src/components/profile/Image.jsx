import './scss/_profileImage.scss';
import { connect } from 'react-redux';
import { defaultImagePic } from '../../helpers/constants/userModel';
import { setUserImage } from '../../store/modules/user/actions';
import { notySuccess, notyError } from '../../utils/notifications/notify';
import { useState } from 'react';

import userApi from '../../api/userApi';

function DoubleComponent({ image, setUserImage }) {
  const [loading, setLoading] = useState(false);
  const updateImage = ({ target }) => {
    setLoading(true);
    setUserImage('');
    userApi
      .updateteImg(target.files[0])
      .then(
        ({
          data: {
            data: { profile_img },
          },
        }) => {
          notySuccess('Profile image updated');
          setUserImage(profile_img);
        },
      )
      .catch(() => {
        notyError(' sorry, the profile image was not updated');
        setUserImage(image);
      })
      .finally(() => setLoading(false));
  };

  return (
    <div className="profileImage is-flex is-flex-direction-column is-align-items-center">
      {loading ? (
        <progress className="progress is-large is-info" max="100">
          60%
        </progress>
      ) : (
        <div className="profileImage__img">
          <img src={image || defaultImagePic} alt="profile main pic" />
        </div>
      )}
      <button
        className="profileImage__upload button is-link has-text-centered mt-4"
        title="update profile image"
      >
        <p>Update image</p>
        <input onInput={updateImage} type="file" accept="image/*" />
      </button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  image: state.user.userInfo.profile_img,
});

const mapDispatchToProps = {
  setUserImage,
};

export default connect(mapStateToProps, mapDispatchToProps)(DoubleComponent);
