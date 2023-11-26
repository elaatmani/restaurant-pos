import Api from '@/api/Api'
import Csrf from '@/api/Csrf'

class User {

    async create(user) {
        await Csrf.getCookie();
        return Api.post('/api/users', user);
    }

}

export default new User();