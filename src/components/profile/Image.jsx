import './scss/_profileImage.scss';
import { connect } from 'react-redux';
import { defaultImagePic } from '../../helpers/constants/userModel';

function DoubleComponent({ image }) {
  const updateImage = (e) => {
    console.log(e);
  };
  return (
    <div className="profileImage is-flex is-flex-direction-column is-align-items-center">
      <div className="profileImage__img">
        <img src={image || defaultImagePic} alt="profile main pic" />
      </div>
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

export default connect(mapStateToProps, null)(DoubleComponent);
