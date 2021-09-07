<template>
  <button 
  @click="$emit('btn-click')" 
  :class="`${(disabled) ? 'cursor-default opacity-50' : 'hover:bg-gray-500'} w-full flex items-center pl-4 pr-4 pt-2 pb-2 rounded-md bg-gray-700 space-x-2 transition-colors`"
  >
    <i v-bind:class="icon"></i>
    <p>{{text}}</p>
  </button>
</template>

<script setup lang="ts">
type Props = {
  icon: string;
  text: string;
  disabled?: boolean;
}
defineProps<Props>();
</script>