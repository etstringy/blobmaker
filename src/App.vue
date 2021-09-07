<script setup lang="ts">
import topbar from './components/topbar.vue';
import sidebar from './components/sidebar.vue';
import blob from './components/blob.vue';

import library from './components/library.vue'
import share from './components/share.vue'
import { Buffer } from 'buffer';
</script>

<script lang="ts">
export default {
  data() {
    return {
      previewZoom: 100
    }
  },
  mounted(){
    // read query string for blob url
    const qs = new URLSearchParams(window.location.search)
    let blobcode = qs.get("blob");
    if(blobcode){
      console.log("blobcode found")
      blobcode = Buffer.from(blobcode, "base64").toString()
      try {
        const arr = blobcode
        .split(";")
        .filter(e => (e != ""))
        
        const [version, color1, color2, secondary] = arr

        switch(version){
          case "1.0.0":
            if(arr.length > 4) throw "too long"
            const hex = /^#[0-9A-F]{6}$/i;

            const colorsNotValid = [color1, color2, secondary].some(c => !hex.test(c))
            if(colorsNotValid) throw "invalid color";

            this.$store.commit('setColors', {color1, color2, secondary})
            break;
          
          default:
            throw "invalid version"
        }

      } catch {
        console.log("invalid blobcode!")
      }
    }
    
  }
}
</script>

<template>
  <div class="h-screen bg-gray-900 text-white flex flex-col">
    <topbar></topbar>
    <transition name="page-transition" mode="out-in">
      <template v-if="$store.state.page == 'maker'">
        <div class="flex flex-col-reverse sm:flex-row h-full">
          <sidebar></sidebar>
          <div class="flex items-center justify-center h-full w-full flex-col relative overflow-hidden">
            <blob 
              :color1="$store.state.colors.color1" 
              :color2="$store.state.colors.color2" 
              :colorsecondary="$store.state.colors.secondary" 
              class="w-96 z-10 overflow-hidden"
              :style="`transform: scale(${previewZoom / 100})`"
            />
            <div class="z-30 absolute bottom-2 left-2 flex space-x-2">
              <p>Zoom ({{previewZoom}}%)</p>
              <input
              type="range"
              min="50"
              max="200"
              :value="previewZoom"
              @input="previewZoom = $event?.target?.value"
              >
            </div>
          </div>
        </div>
      </template>
      <template v-else-if="$store.state.page == 'library'">
        <library></library>
      </template>
      <template v-else-if="$store.state.page == 'share'">
        <share></share>
      </template>
    </transition>
  </div>
</template>

<style>
  @import './style/index.css';
</style>
