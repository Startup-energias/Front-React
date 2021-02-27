import mainInterceptor from './util/mainInterceptor';

class UserApi {
  constructor(path) {
    this.path = path;
  }

  getUser() {
    return mainInterceptor().get(this.path);
  }

  updateUser() {}
}

export default new UserApi('/user');
