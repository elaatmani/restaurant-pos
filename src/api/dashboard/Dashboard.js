import Api from '@/api/Api'
import Csrf from '@/api/Csrf'

class Dashboard {

    async ca_net(params = {}) {
        await Csrf.getCookie();
        return Api.get('/api/dashboard/ca/net', { params });
    }

    async ca_gross(params = {}) {
        await Csrf.getCookie();
        return Api.get('/api/dashboard/ca/gross', { params });
    }

    async ca_off(params = {}) {
        await Csrf.getCookie();
        return Api.get('/api/dashboard/ca/off', { params });
    }

    async ticket_total(params = {}) {
        await Csrf.getCookie();
        return Api.get('/api/dashboard/tickets/total', { params });
    }

    async ticket_paymentmethods(params = {}) {
        await Csrf.getCookie();
        return Api.get('/api/dashboard/tickets/paymentmethods', { params });
    }

    async ticket_types(params = {}) {
        await Csrf.getCookie();
        return Api.get('/api/dashboard/tickets/types', { params });
    }



}

export default new Dashboard();