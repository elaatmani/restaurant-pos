import Api, {ApiForm} from '@/api/Api'
import Csrf from '@/api/Csrf'

class Menu {

    async create(menu) {
        await Csrf.getCookie();
        return ApiForm.post('/api/menus', menu);
    }

    async update(id, menu) {
        await Csrf.getCookie();
        const formData = new FormData();

        for(let key in menu) {
            formData.append(key, menu[key])
        }
        return Api.post('/api/menus/' + id, formData, { headers: {
            'Content-Type': 'multipart/form-data'
          }});
    }
    
    async menus() {
        await Csrf.getCookie();
        return Api.get('/api/menus');
    }

    async delete(id) {
        await Csrf.getCookie();
        return Api.delete('/api/menus/' + id);
    }

}

export default new Menu();