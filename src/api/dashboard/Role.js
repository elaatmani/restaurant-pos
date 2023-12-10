import Api from '@/api/Api'
import Csrf from '@/api/Csrf'

class Role {

    async all() {
        await Csrf.getCookie();
        return Api.get('/api/roles');
    }


}

export default new Role();