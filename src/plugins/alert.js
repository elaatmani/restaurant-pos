import useAlertStore from '@/stores/alertStore'


export default {
    install(app) {
        app.config.globalProperties.$alert = function(alert) {
            useAlertStore().toggle(alert)
        }
    }
}