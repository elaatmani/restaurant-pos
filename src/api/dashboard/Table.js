import Api from '@/api/Api'
import Csrf from '@/api/Csrf'

class Table {

    async all() {
        await Csrf.getCookie();
        return Api.get('/api/tables');
    }

    async create(table) {
        await Csrf.getCookie();
        return Api.post('/api/tables', table);
    }

    async delete(id) {
        await Csrf.getCookie();
        return Api.delete('/api/tables/' + id);
    }


}

export default new Table();