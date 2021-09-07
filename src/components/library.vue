loro<script setup lang="ts">
import LibraryCard from './library-card.vue';
import SideBarOption from './sidebar-option.vue';
</script>

<script lang="ts">
export default {
  components: {
    "library-card": LibraryCard,
    "sidebar-option": SideBarOption
  }
}
</script>

<template>
  <div class="h-full">
    <div class="p-8 space-y-2">
      <div class="w-24 mb-8">
        <sidebar-option @btn-click="$store.commit('navigate', 'maker')" icon="bx bx-chevron-left" text="Back"/>
      </div>
      <h1 class="text-4xl font-bold">Your blobs</h1>
      <div class="flex flex-wrap">
        <library-card :isDisplayNone="true"/>
      </div>
    </div>
  </div>
</template>