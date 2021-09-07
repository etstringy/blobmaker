<script setup lang="ts">
import blob from './blob.vue';
import SideBarOption from './sidebar-option.vue';
</script>

<script lang="ts">
export default {
  components: {
    "sidebar-option": SideBarOption,
    "blob": blob
  },
  methods: {
    copyurl(){
      navigator.clipboard.writeText(this?.$store.state.shareUrl)
    }
  }
}
</script>

<template>
  <div class="h-full">
    <div class="p-8">
      <div class="w-24 mb-8">
        <sidebar-option @btn-click="$store.commit('navigate', 'maker')" icon="bx bx-chevron-left" text="Back"/>
      </div>
      <div class="flex items-center flex-col justify-center h-full">
        <blob
        :color1="$store.state.colors.color1" 
        :color2="$store.state.colors.color2" 
        :colorsecondary="$store.state.colors.secondary" 
        class="w-80 z-10 overflow-hidden pb-5"
        />
        <div class="flex flex-col space-y-2 items-center">
          <h1 class="text-4xl font-bold bg-clip-text">
          Share your blob
          </h1>
          <div class="flex flex-row space-x-2">
            <input
            :value="$store.state.shareUrl"
            class="bg-gray-600 pt-1 pb-1 pl-2 pr-2 border-2 rounded-md select-text w-48 sm:w-96 flex-grow"
            readonly
            :style="`
            border-image: linear-gradient(90deg, ${$store.state.colors.color1} 0%, ${$store.state.colors.color2} 100%);
            border-color: ${$store.state.colors.color1};
            border-image-slice: 1;`"
            />
            <div class="w-12">
              <sidebar-option 
              class="h-full" 
              @btn-click="copyurl()" 
              icon="bx bx-copy" 
              text="" 
              v-tippy="{ content: 'Copy URL' }"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>