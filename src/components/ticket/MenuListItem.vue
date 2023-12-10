<template>
    <button @click="visible = true" class="tw-bg-white tw-rounded-lg tw-shadow-sm hover:tw-shadow-lg tw-duration-200 tw-overflow-hidden tw-relative">
        <img class="tw-w-full tw-aspect-square tw-object-cover hover:tw-scale-110 tw-duration-300" :src="$backend(menu.image_url)">
        <div class="tw-absolute tw-pointer-events-none tw-bottom-0 tw-left-0 tw-w-full tw-bg-gradient-to-t tw-from-black/50 tw-to-black tw-p-1 tw-text-white tw-text-center tw-font-bold">
            {{ menu.menu_name }}
        </div>

        <MenuListItemPopup v-model:visible="visible" :menu="menu" />
    </button>

</template>

<script>
import MenuListItemPopup from './MenuListItemPopup.vue'
export default {
  components: { MenuListItemPopup },
    props: {
        menu: {
            required: true
        }
    },

    data() {
        return {
            visible: false
        }
    }

}
</script>

<style>

</style>