import Api from '@/api/Api'
import Csrf from '@/api/Csrf'
// import { PENDING } from '@/core/ticket';

class Order {

    async all() {
        await Csrf.getCookie();
        return Api.get('/api/orders');
    }

    async create(order) {
        await Csrf.getCookie();
        // const formatedOrder = {
        //     order_status: PENDING,
        //     is_paid: false,
        //     payment_type: null,
        //     order_note: '',
        //     order_discount: 0,
        //     item_variations: [
        //         {
        //             item_quantity: 0,
        //             item_note: ''
        //         }
        //     ],
        //     client: {},
        //     table: 0,
        //     nb_seats: 0,
        //     import: null,
        //     delivery: null,
        //     delivery_man: {
        //         name: '',
        //         phone: ''
        //     },
        // }
        return Api.post('/api/orders', order);
    }


}

export default new Order();