<template>
  <div class="flex flex-col pt-1 pb-1">
    <p class="text-sm">{{comment}}</p>
    <div class="space-x-1">
      <template v-for="link in links" :key="link">
        <a :href="link.link">
          <i :class="link.icon + ' transform hover:scale-110 transition-transform'"/>
        </a>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    comment: string;
    links: {
      link: string;
      icon: string;
    }[]
  }>();
</script>