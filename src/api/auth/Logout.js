import Api from '@/api/Api'
import Csrf from '@/api/Csrf'

class Logout {

    async logout(data = {}) {
        await Csrf.getCookie();
        return Api.post('/logout', data);
    }

}

export default new Logout();