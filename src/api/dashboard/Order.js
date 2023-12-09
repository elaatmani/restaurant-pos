import Api from '@/api/Api'
import Csrf from '@/api/Csrf'

class Ticket {

    async all() {
        await Csrf.getCookie();
        return Api.get('/api/orders');
    }


}

export default new Ticket();