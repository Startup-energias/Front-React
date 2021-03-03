/* eslint-disable jsx-a11y/no-onchange */
import './scss/_profileForm.scss';
import { connect } from 'react-redux';
import { userModel } from '../../helpers/constants/userModel';
import { useEffect, useState } from 'react';
import { updateUserInfo } from '../../store/modules/user/middlewares';

function Form({ userInfo, updateUserInfo }) {
  const [currentUser, setCurrentUser] = useState(userModel);
  useEffect(() => {
    setCurrentUser({ ...currentUser, ...userInfo });
  }, [userInfo]);
  const updateForm = ({ target }) => {
    setCurrentUser({
      ...currentUser,
      [target.name]: target.value,
    });
  };
  const updateProfile = (e) => {
    e.preventDefault();
    updateUserInfo(currentUser);
  };

  return (
    <form className="profileForm" onSubmit={updateProfile} method="post">
      <div className="field mb-4">
        <label className="label" htmlFor="country">
          Country
        </label>
        <div className="control has-icons-left has-icons-right">
          <input
            name="country"
            className="input is-success"
            type="text"
            placeholder="Country where are you from"
            value={currentUser?.country}
            onChange={updateForm}
          />
        </div>
      </div>
      <div className="field mb-4">
        <label className="label" htmlFor="university">
          University (optional)
        </label>
        <div className="control has-icons-left has-icons-right">
          <input
            name="university"
            className="input is-success"
            type="text"
            placeholder="Country where are you from"
            value={currentUser?.university}
            onChange={updateForm}
          />
        </div>
      </div>
      <div className="field mb-4">
        <label className="label" htmlFor="profession">
          profession
        </label>
        <div className="control has-icons-left has-icons-right">
          <input
            name="profession"
            className="input is-success"
            type="text"
            placeholder="The profession that you re actually perfoming"
            value={currentUser?.profession}
            onChange={updateForm}
          />
        </div>
      </div>
      <div className="field mb-4">
        <label className="label" htmlFor="age">
          Age
        </label>
        <div className="control has-icons-left has-icons-right">
          <input
            name="age"
            className="input is-success"
            type="number"
            placeholder="e.g 32"
            value={currentUser?.age}
            onChange={updateForm}
          />
        </div>
      </div>
      <div className="field">
        <label className="label" htmlFor="gender">
          Gender
        </label>
        <div className="control mb-6">
          <div className="select">
            <select name="gender" value={currentUser?.gender} onChange={updateForm}>
              <option value="" disabled>
                Choose gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
        </div>
      </div>
      <div className="control has-text-centered">
        <button type="submit" className="button is-link is-fullwidth">
          Update general data
        </button>
      </div>
    </form>
  );
}

const mapStateToProps = (state) => ({
  userInfo: state.user.userInfo,
});

const mapDispatchToProps = {
  updateUserInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(Form);
