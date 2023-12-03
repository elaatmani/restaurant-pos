import { ApiForm } from '@/api/Api'
import Csrf from '@/api/Csrf'

class CashMovement {

    async create(movement) {
        await Csrf.getCookie();
        return ApiForm.post('/api/cashMouvements', movement);
    }

}

export default new CashMovement();