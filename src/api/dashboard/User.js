import Api from '@/api/Api'
import Csrf from '@/api/Csrf'

class User {

    async all() {
        await Csrf.getCookie();
        return Api.get('/api/users');
    }

    async create(user) {
        await Csrf.getCookie();
        return Api.post('/api/users', user);
    }

    async delete(id) {
        await Csrf.getCookie();
        return Api.delete('/api/users/' + id);
    }

    async update(id, user) {
        await Csrf.getCookie();
        return Api.put('/api/users/' + id, user);
    }

}

export default new User();