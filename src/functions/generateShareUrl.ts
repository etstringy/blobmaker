import { State } from "@vue/runtime-dom"
import { Store } from "vuex"
import { Buffer } from 'buffer';

export default (store: Store<State>) => {
  const blobcode = (
  '1.0.0' + 
  ';' + 
  store.state.colors.color1 + 
  ';' + 
  store.state.colors.color2 + 
  ';' + 
  store.state.colors.secondary + 
  ';' 
  )

  const based = Buffer.from(blobcode).toString('base64');

  return location.protocol + "//" + location.host + "/?blob=" + based
}