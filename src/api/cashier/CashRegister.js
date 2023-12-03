import Api from '@/api/Api'
import Csrf from '@/api/Csrf'

class CashRegister {

    async all() {
        await Csrf.getCookie();
        return Api.get('/api/cashRegisters');
    }

    async create(cashRegister) {
        await Csrf.getCookie();
        return Api.post('/api/cashRegisters', cashRegister);
    }


}

export default new CashRegister();