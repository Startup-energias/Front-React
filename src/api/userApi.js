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
}

export default new UserApi('/user');
