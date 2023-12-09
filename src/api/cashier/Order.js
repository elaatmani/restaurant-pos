import Api from '@/api/Api'
import Csrf from '@/api/Csrf'

class Order {

    async all() {
        await Csrf.getCookie();
        return Api.get('/api/orders');
    }

    async create(order) {
        await Csrf.getCookie();
        return Api.post('/api/orders', order);
    }


}

export default new Order();