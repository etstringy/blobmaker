<script setup lang="ts">
  import SidebarOption from './sidebar-option.vue';
  import SidebarSocials from './sidebar-socials.vue';
  import Colors from './colors.vue'
  import generateBlob from '../functions/generateBlob';
  import generateShare from '../functions/generateShareUrl'

  import { generateSlug } from "random-word-slugs";
  import { saveAs } from 'file-saver';
</script>

<script lang="ts">
  export default {
    components: {
      "sidebar-option": SidebarOption,
      "sidebar-socials": SidebarSocials,
      "color-pickers": Colors
    },
    methods: {
      async download(format: string){
        const svg = generateBlob(this?.$store.state.colors)
        const filename = `blob-${generateSlug()}`
        let svg_blob: Blob;
        
        switch(format){
          case "svg":
            svg_blob = new Blob([svg], {type: "text/plain;charset=utf-8"});
            saveAs(svg_blob, `${filename}.svg`);
            break;
          
          case "png":
            // convert to png :]
            svg_blob = new Blob([svg], {type: "image/svg+xml;charset=utf-8"});

            let canv = document.createElement('canvas');
            canv.width = 751;
            canv.height = 457;

            let ctx = canv.getContext("2d");

            let img = new Image();
            let url = URL.createObjectURL(svg_blob);
            img.onload = function() {
                ctx?.drawImage(img, 0, 0);
                let png = canv.toDataURL("image/png");
                saveAs(png, `${filename}.png`);
                URL.revokeObjectURL(png);
            };
            img.src = url;


        }
      },
      share() {
        if(!this?.$store) return;
        this.$store.state.shareUrl = generateShare(this.$store);
        this?.$store.commit('navigate', 'share')
      }
    }
  }
</script>

<template>
  <div class="h-full w-full sm:w-72 bg-gray-800 pl-4 pr-4 max-h-96 sm:max-h-full overflow-y-scroll sm:overflow-visible z-30">
    <h1 class="pt-4 font-bold text-xl">
      Colors
    </h1>
    <color-pickers></color-pickers>

    <h1 class="pt-4 font-bold text-xl">
      File
    </h1>
    <div class="flex flex-col space-y-2 mt-2">
      <sidebar-option 
      icon="bx bxs-save" 
      text="Save"  
      :disabled="true"
      v-tippy="{ content: 'Coming Soon!' }"
      />
      <sidebar-option 
      icon="bx bx-library" 
      text="My Blobs"  
      :disabled="true"
      v-tippy="{ content: 'Coming Soon!' }"
      />
      <sidebar-option 
      @btn-click="share()"
      icon="bx bxs-share" 
      text="Share"
      />
      <!-- @btn-click="$store.commit('navigate', 'library')"  -->
    </div>

    <h1 class="pt-4 font-bold text-xl">
      Export
    </h1>
    <div class="flex flex-col space-y-2 mt-2">
      <sidebar-option @btn-click="download('png')" icon="bx bxs-download" text="PNG" />
      <sidebar-option @btn-click="download('svg')" icon="bx bxs-download" text="SVG"/>
    </div>

    <h1 class="pt-4 font-bold text-xl">
      Credits
    </h1>
    <div class="flex flex-wrap justify-between">
      <sidebar-socials
      comment="Stringy"
      :links="[
        {
          link: 'https://stringy.software',
          icon: 'bx bx-sm bx-globe'
        },
        {
          link: 'https://twitter.com/etstringy',
          icon: 'bx bx-sm bxl-twitter'
        },
        {
          link: 'https://github.com/etstringy',
          icon: 'bx bx-sm bxl-github'
        },
      ]"/>
      <sidebar-socials
      comment="Muatex"
      :links="[
        {
          link: 'https://muatex.xyz',
          icon: 'bx bx-sm bx-globe'
        },
        {
          link: 'https://www.figma.com/community/file/992508010370247161',
          icon: 'bx bx-sm bxl-figma'
        },
        {
          link: 'https://github.com/muatex',
          icon: 'bx bx-sm bxl-twitter'
        },
      ]"/>
      <sidebar-socials
      comment="Blob Emoji"
      :links="[
        {
          link: 'https://blobs.gg/',
          icon: 'bx bx-sm bx-globe'
        }
      ]"/>
    </div>
  </div>
</template>