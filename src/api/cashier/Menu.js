import Api from '@/api/Api'
import Csrf from '@/api/Csrf'

class Menu {

    async all() {
        await Csrf.getCookie();
        return Api.get('/api/menus');
    }

}

export default new Menu();