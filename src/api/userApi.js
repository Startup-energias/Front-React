import mainInterceptor from './util/mainInterceptor';

class UserApi {
  constructor(path) {
    this.path = path;
  }

  getUser() {
    return mainInterceptor().get(this.path);
  }

  updateUser(userProfile) {
    return mainInterceptor().put(this.path, { ...userProfile });
  }

  updateteImg(imgFile) {
    const formData = new FormData();
    formData.append('file', imgFile);
    return mainInterceptor().put(`${this.path}/image`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
  }
}

export default new UserApi('/user');
