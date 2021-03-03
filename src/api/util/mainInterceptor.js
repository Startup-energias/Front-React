import axios from 'axios';

const mainInterceptor = () => {
  const token = localStorage.getItem('accessToken');
  return axios.create({
    baseURL: process.env.REACT_APP_INOVERTE_API,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export default mainInterceptor;
