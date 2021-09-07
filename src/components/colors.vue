<script setup lang="ts">

</script>

<script lang="ts">
export default {
  data() {
    return {
      initialized: false,
      colors: {
        color1: this?.$store.state.colors.color1,
        color2: this?.$store.state.colors.color2,
        secondary: this?.$store.state.colors.secondary
      }
    }
  },
  mounted() {
    this.$store.watch((state) => { return state.colors }, 
    (state) => {
      if(state != this?.colors){
        this.colors = state;
      }
    })
  },
  updated() {
    this?.$store.commit("setColors", this.colors)
  }
}
</script>

<template>
  <div class="flex flex-col">
    <div class="flex space-x-1 items-center">
      <input 
      type="color" 
      class="bg-transparent rounded-md" 
      :value="colors.color1" 
      v-on:input="colors.color1 = $event?.target?.value"
      >
      <p>Gradient Color 1</p>
    </div>
    <div class="flex space-x-1 items-center">
      <input 
      type="color" 
      class="bg-transparent rounded-md" 
      :value="colors.color2" 
      v-on:input="colors.color2 = $event?.target?.value"
      >
      <p>Gradient Color 2</p>
    </div>
    <div class="flex space-x-1 items-center">
      <input 
      type="color" 
      class="bg-transparent rounded-md" 
      :value="colors.secondary" 
      v-on:input="colors.secondary = $event?.target?.value"
      >
      <p>Secondary Color</p>
    </div>
  </div>
</template>