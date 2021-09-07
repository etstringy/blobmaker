import { createApp } from 'vue'

import VueTippy from 'vue-tippy'
import 'tippy.js/dist/tippy.css'
import 'tippy.js/themes/material.css'
import 'tippy.js/animations/scale-subtle.css'

import store from './store/store';

import App from './App.vue'

const app = createApp(App)

// VueX
app.use(store);

// Vue Tippy
app.use(
  VueTippy,
  {
    directive: 'tippy',
    component: 'tippy',
    componentSingleton: 'tippy-singleton',
    defaultProps: {
      animation: 'scale-subtle',
      inertia: true,
      delay: 0,
      duration: 100,
    }
  }
)

app.mount('#app')
