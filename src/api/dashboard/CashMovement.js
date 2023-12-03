import Api from '@/api/Api'
import Csrf from '@/api/Csrf'

class CashMovement {

    async all() {
        await Csrf.getCookie();
        return Api.get('/api/cashMouvements');
    }



}

export default new CashMovement();