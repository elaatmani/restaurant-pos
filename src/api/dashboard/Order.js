import Api from '@/api/Api'
import Csrf from '@/api/Csrf'

class Order {

    async all() {
        await Csrf.getCookie();
        return Api.get('/api/orders');
    }


}

export default new Order();