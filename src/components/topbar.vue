<script setup lang="ts">
  import blob from './blob.vue';
  // const blobs = [
  //   "inkatail.png"
  // ]
  // const blobIndex = Math.floor(Math.random() * blobs.length + 0);
</script>

<script lang="ts">
  export default {
    data(){
      return {
        rainbowPos: 0
      }
    },
    // mounted(){
    //   setInterval(() => {
    //     this.rainbowPos++
    //     if(this.rainbowPos > 360){
    //       this.rainbowPos = 0;
    //     }
    //   }, 10)
    // }
  }
</script>

<template>
  <div class="bg-gray-800 h-14 drop-shadow-lg flex items-center p-4 z-30">
    <div class="space-x-2 flex items-center">
      <blob 
        :color1="`hsl(${rainbowPos}, 75%, 50%)`"
        :color2="`hsl(${rainbowPos}, 75%, 50%)`" 
        colorsecondary="#000" 
        class="w-12"
      />
      <h2 class="text-white text-lg">{{$store.state.title}}</h2>
    </div> 
  </div>
</template>