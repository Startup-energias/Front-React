import mainInterceptor from './util/mainInterceptor';

class ProjectApi {
    constructor(path) {
        this.path = path;
    }

    getProjects(limit) {
        return mainInterceptor().get(this.path + "?limit=" + limit);
    }

    getProject(idProject) {
        return mainInterceptor().get(this.path + '/' + idProject);
    }
}

export default new ProjectApi('/projects');