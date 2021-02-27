import userApi from '../api/userApi';
import { useEffect } from 'react';

function profile() {
  useEffect(() => {
    userApi.getUser().then((data) => console.log(data));
  }, []);

  return (
    <>
      <div>hola</div>
      <p>perfil</p>
    </>
  );
}

export default profile;
