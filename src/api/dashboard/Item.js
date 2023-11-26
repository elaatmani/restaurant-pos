import Api, {ApiForm} from '@/api/Api'
import Csrf from '@/api/Csrf'

class Item {

    async create(item) {
        await Csrf.getCookie();
        return ApiForm.post('/api/items', item);
    }

    async update(id, item) {
        await Csrf.getCookie();
        return ApiForm.patch('/api/items/' + id, item);
    }
    
    async items() {
        await Csrf.getCookie();
        return Api.get('/api/items');
    }

    async delete(id) {
        await Csrf.getCookie();
        return Api.delete('/api/items/' + id);
    }

}

export default new Item();