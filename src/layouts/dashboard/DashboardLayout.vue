<template>
  <v-layout :full-height="true" class="rounded rounded-md">
    <v-app-bar elevation="0" class="border-b" title="Application bar"></v-app-bar>

    <v-navigation-drawer>
      <v-list>
        <v-list-item title="Navigation drawer"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="d-flex align-center justify-center">
      <router-view></router-view>
    </v-main>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>