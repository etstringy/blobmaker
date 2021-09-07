import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  interface State {
    title: string;
    page: string;
    colors: {
      color1: string;
      color2: string;
      secondary: string;
    }
    shareUrl: string;
  }

  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}