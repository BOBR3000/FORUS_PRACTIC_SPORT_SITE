<script>
  import { defineComponent } from 'vue';
import MENU_PANEL from './components/MENU_PANEL.vue'; // Импортируем MENU_PANEL

export default defineComponent({
  name: 'App',
  components: {
    MENU_PANEL,
  },
});
</script>

<template>
<div class="bg-white flex">
 <MENU_PANEL></MENU_PANEL>
 <router-view></router-view>
</div>
</template>

<style>

</style>
