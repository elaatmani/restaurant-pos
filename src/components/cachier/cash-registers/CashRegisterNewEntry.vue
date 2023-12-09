<template>
    <popup :visible="visible" :closeable="false">
        <div
            class="tw-min-h-[550px] tw-relative tw-mx-auto tw-w-[95%] md:tw-max-w-[400px]  dark:tw-bg-neutral-900 tw-bg-white tw-border tw-border-solid dark:tw-border-neutral-700 tw-border-neutral-300 tw-shadow-md tw-my-5 tw-rounded-lg">
            <div
                class="tw-p-5 tw-py-2 tw-w-full tw-bg-gray-50 tw-text-gray-700 tw-text-center tw-text-lg tw-rounded-t-lg tw-border-b">
                Fond de caisse à l'ouverture
            </div>

            <div class="tw-p-5 tw-py-2 tw-pb-[100px] tw-max-h-[480px] tw-overflow-auto">
                <ul class=" tw-divide-y">
                    <li class="tw-flex tw-items-center tw-gap-5 tw-py-2">
                        <div class="tw-flex tw-items-center tw-gap-5">
                            <img class="tw-drop-shadow-lg tw-w-[100px]" :src="$frontend('assets/images/units/0.5DH.png')">
                        </div>
                        <div class="tw-w-full">
                            <label class="tw-text-md tw-mb-1 tw-font-bold tw-text-gray-700 tw-block dark:tw-text-white">0.5
                                MAD</label>
                            <input type="number" v-model="units.half"
                                class="tw-bg-gray-50 tw-py-1 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-lg tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="0" required="" />
                        </div>
                    </li>

                    <li class="tw-flex tw-items-center tw-gap-5 tw-py-2">
                        <div class="tw-flex tw-items-center tw-gap-5">
                            <img class="tw-drop-shadow-lg tw-w-[100px]" :src="$frontend('assets/images/units/1DH.png')">
                            <!-- <span class="tw-text-lg tw-font-bold tw-text-gray-700"></span> -->
                        </div>
                        <div class="tw-w-full">
                            <label class="tw-text-md tw-mb-1 tw-font-bold tw-text-gray-700 tw-block dark:tw-text-white">1
                                MAD</label>
                            <input type="number" v-model="units.one"
                                class="tw-bg-gray-50 tw-py-1 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-lg tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="0" required="" />
                        </div>
                    </li>

                    <li class="tw-flex tw-items-center tw-gap-5 tw-py-2">
                        <div class="tw-flex tw-items-center tw-gap-5">
                            <img class="tw-drop-shadow-lg tw-w-[100px]" :src="$frontend('assets/images/units/2DH.png')">
                            <!-- <span class="tw-text-lg tw-font-bold tw-text-gray-700"></span> -->
                        </div>
                        <div class="tw-w-full">
                            <label class="tw-text-md tw-mb-1 tw-font-bold tw-text-gray-700 tw-block dark:tw-text-white">2
                                MAD</label>
                            <input type="number" v-model="units.two"
                                class="tw-bg-gray-50 tw-py-1 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-lg tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="0" required="" />
                        </div>
                    </li>

                    <li class="tw-flex tw-items-center tw-gap-5 tw-py-2">
                        <div class="tw-flex tw-items-center tw-gap-5">
                            <img class="tw-drop-shadow-lg tw-w-[100px]" :src="$frontend('assets/images/units/5DH.png')">
                            <!-- <span class="tw-text-lg tw-font-bold tw-text-gray-700"></span> -->
                        </div>
                        <div class="tw-w-full">
                            <label class="tw-text-md tw-mb-1 tw-font-bold tw-text-gray-700 tw-block dark:tw-text-white">5
                                MAD</label>
                            <input type="number" v-model="units.five"
                                class="tw-bg-gray-50 tw-py-1 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-lg tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="0" required="" />
                        </div>
                    </li>

                    <li class="tw-flex tw-items-center tw-gap-5 tw-py-2">
                        <div class="tw-flex tw-items-center tw-gap-5">
                            <img class="tw-drop-shadow-lg tw-w-[100px]" :src="$frontend('assets/images/units/10DH.png')">
                            <!-- <span class="tw-text-lg tw-font-bold tw-text-gray-700"></span> -->
                        </div>
                        <div class="tw-w-full">
                            <label class="tw-text-md tw-mb-1 tw-font-bold tw-text-gray-700 tw-block dark:tw-text-white">10
                                MAD</label>
                            <input type="number" v-model="units.ten"
                                class="tw-bg-gray-50 tw-py-1 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-lg tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="0" required="" />
                        </div>
                    </li>

                    <li class="tw-flex tw-items-center tw-gap-5 tw-py-2">
                        <div class="tw-flex tw-items-center tw-gap-5">
                            <img class="tw-drop-shadow-lg tw-w-[100px]" :src="$frontend('assets/images/units/20DH.jpg')">
                            <!-- <span class="tw-text-lg tw-font-bold tw-text-gray-700"></span> -->
                        </div>
                        <div class="tw-w-full">
                            <label class="tw-text-md tw-mb-1 tw-font-bold tw-text-gray-700 tw-block dark:tw-text-white">20
                                MAD</label>
                            <input type="number" v-model="units.twenty"
                                class="tw-bg-gray-50 tw-py-1 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-lg tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="0" required="" />
                        </div>
                    </li>

                    <li class="tw-flex tw-items-center tw-gap-5 tw-py-2">
                        <div class="tw-flex tw-items-center tw-gap-5">
                            <img class="tw-drop-shadow-lg tw-w-[100px]" :src="$frontend('assets/images/units/50DH.jpeg')">
                            <!-- <span class="tw-text-lg tw-font-bold tw-text-gray-700"></span> -->
                        </div>
                        <div class="tw-w-full">
                            <label class="tw-text-md tw-mb-1 tw-font-bold tw-text-gray-700 tw-block dark:tw-text-white">50
                                MAD</label>
                            <input type="number" v-model="units.fifty"
                                class="tw-bg-gray-50 tw-py-1 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-lg tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="0" required="" />
                        </div>
                    </li>

                    <li class="tw-flex tw-items-center tw-gap-5 tw-py-2">
                        <div class="tw-flex tw-items-center tw-gap-5">
                            <img class="tw-drop-shadow-lg tw-w-[100px]" :src="$frontend('assets/images/units/100DH.png')">
                            <!-- <span class="tw-text-lg tw-font-bold tw-text-gray-700"></span> -->
                        </div>
                        <div class="tw-w-full">
                            <label class="tw-text-md tw-mb-1 tw-font-bold tw-text-gray-700 tw-block dark:tw-text-white">100
                                MAD</label>
                            <input type="number" v-model="units.hundred"
                                class="tw-bg-gray-50 tw-py-1 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-lg tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="0" required="" />
                        </div>
                    </li>

                    <li class="tw-flex tw-items-center tw-gap-5 tw-py-2">
                        <div class="tw-flex tw-items-center tw-gap-5">
                            <img class="tw-drop-shadow-lg tw-w-[100px]" :src="$frontend('assets/images/units/200DH.jpeg')">
                            <!-- <span class="tw-text-lg tw-font-bold tw-text-gray-700"></span> -->
                        </div>
                        <div class="tw-w-full">
                            <label class="tw-text-md tw-mb-1 tw-font-bold tw-text-gray-700 tw-block dark:tw-text-white">200
                                MAD</label>
                            <input type="number" v-model="units.two_hundred"
                                class="tw-bg-gray-50 tw-py-1 tw-border tw-border-solid focus:tw-outline-none tw-border-gray-300 tw-text-gray-900 tw-text-lg tw-rounded-lg focus:tw-ring-primary-600 focus:tw-border-primary-600 tw-block tw-w-full tw-p-2.5 dark:tw-bg-gray-700 dark:tw-border-gray-600 dark:tw-placeholder-gray-400 dark:tw-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                placeholder="0" required="" />
                        </div>
                    </li>
                </ul>
            </div>

            <div class="tw-absolute tw-h-fit tw-border-t tw-bg-gray-50 tw-p-2 tw-rounded-b-lg tw-bottom-0 tw-w-full">
                <div class="tw-flex tw-items-center tw-justify-between">
                    <span class="tw-text-md tw-uppercase">Total</span>
                    <span class="tw-font-bold tw-text-lg tw-text-gray-700">{{ total }} MAD</span>
                </div>

                <button 
                    :disabled="loading"
                    @click="confirm"
                    :class="[loading && '!tw-bg-primary-200 !tw-text-primary-500 tw-cursor-not-allowed']"
                    class="tw-flex tw-items-center tw-justify-center tw-w-full tw-py-2 tw-px-4 tw-bg-primary-500 tw-uppercase tw-mt-2 tw-text-white tw-text-center">
                    <icon v-if="loading" icon="line-md:loading-twotone-loop" class="tw-absolute tw-text-2xl" />
                    <span :class="[loading && '!tw-invisible']">Valider</span>
                </button>
            </div>


        </div>
    </popup>
</template>
  
<script setup>
import { ref, reactive, computed, onMounted, defineProps, defineExpose } from 'vue';
import useAuthStore from '@/stores/authStore';
import useCashRegisterStore from '@/stores/cachier/cashRegisterStore';
import useAlert from '@/composables/useAlert'
import { totalUnits } from '@/utils/cash-register';
import CashRegister from '@/api/cashier/CashRegister';
import Logout from '@/api/auth/Logout';

import router from '@/router';

const authStore = useAuthStore();
const cashRegisterStore = useCashRegisterStore();
const props = defineProps({
    type: {
        required: false,
        default: 'in'
    },
    closeable: {
        required: false,
        default: false
    },
});

const visible = ref(false);
const loading = ref(false);
const units = reactive({
    half: 0,
    one: 0,
    two: 0,
    five: 0,
    ten: 0,
    twenty: 0,
    fifty: 0,
    hundred: 0,
    two_hundred: 0
});

const total = computed(() => totalUnits(units));

const confirm = async () => {
    loading.value = true;

    await CashRegister.create({cash_units: units, register_type: props.type})
    .then(
        async res => {
            if(res.data.status == 200 && props.type == 'in') {
                authStore.setIsCashRegisterFilled(true);
                authStore.setCurrentCashRegister(res.data.result);
                cashRegisterStore.addNewEntry(res.data.result);
                
                visible.value = false;
                useAlert('Fond de caisse est ajouté avec success');
            }

            if(res.data.status == 200 && props.type == 'out') {
                authStore.setIsCashRegisterFilled(false);
                authStore.setCurrentCashRegister(null);
                await Logout.logout().then(
                    (res) => {
                        console.log(res.data)
                        authStore.logout();
                        router.push({ name: 'login' });
                        useAlert('Fond de caisse est ajouté avec success');

                    }
                )
                
                visible.value = false;
            }
        }
    );
    loading.value = false;
}

defineExpose({
    visible
})

onMounted(() => {
    if(!authStore.isCashRegisterFilled && props.type == 'in') {
        visible.value = true;
    }
})
</script>
  
<style></style>