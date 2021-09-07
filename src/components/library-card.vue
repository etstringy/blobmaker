<script setup lang="ts">
import blob from './blob.vue';
import blankblob from './blob-blank.vue'
import blobBlank from './blob-blank.vue';

defineProps<{
  isBlob?: boolean;
  isDisplayNew?: boolean;
  isDisplayNone?: boolean;
}>();

</script>

<template>
  <div class="bg-gray-700 w-72 h-80 rounded-lg m-2 p-4">
    <template v-if="isBlob">
      <div class="flex flex-col items-center justify-center h-full space-y-4">
        <blob
          color1="#0fab0a"
          color2="#a65ffa"
          colorsecondary="#000"
          class="w-2/3"
        />
        <h1 class="font-semibold text-xl">Jimmy</h1>
      </div>
    </template>
    <template v-if="isDisplayNone">
      <div class="flex flex-col items-center justify-center h-full space-y-4">
        <h1 class="font-semibold text-6xl">😭</h1>
        <h1 class="font-semibold text-xl">No blobs</h1>
      </div>
    </template>
    <template v-if="isDisplayNew">
      <div class="flex flex-col items-center justify-center h-full space-y-4">
        <blob-blank class="w-2/3"/>
        <h1 class="font-semibold text-xl">Make a new blob!</h1>
      </div>
    </template>
  </div>
</template>

<script lang="ts">
export default {
  components: { blobBlank },

}
</script>