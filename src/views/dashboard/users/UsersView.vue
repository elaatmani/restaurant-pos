<template>
    <div class="tw-min-h-[calc(100vh-80px)] tw-bg-gray-100 tw-p-2">
        <div class="tw-bg-white tw-p-4">
            <div class="tw-flex tw-items-center tw-justify-between tw-gap-5">
                <h1 class="tw-font-bold tw-text-gray-700 tw-text-lg tw-mb-5">Users</h1>
                <UsersCreate />
            </div>

            <div class="tw-my-3"></div>
            <UsersTable :key="users.length" :data="users" :loading="loading" />
        </div> 
    </div>


</template>
<script setup>
import UsersTable from '@/components/dashboard/users/table/UsersTable'
import UsersCreate from '@/components/dashboard/users/UsersCreate';
import useStore from '@/stores/dashboard/userStore';
import { ref, computed, onMounted } from 'vue';

const store = useStore();
const loading = ref(true);

const users = computed(() => store.users);

const getUsers = () => {
    loading.value = true;
    const users = [
        {
            id: 1,
            name: 'Yassine',
            email: 'yassine@gmail.com',
            role: 'Admin'
        }
    ]

    setTimeout(() => {
        store.setUsers(users);
        loading.value = false;
    }, 3000) 
}

onMounted(() => {
    getUsers();
})
</script>