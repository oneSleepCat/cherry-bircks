import { App } from 'Vue';
import LImage from './LImage.vue';

LImage.install = (app: App) => {
  app.component(LImage.name, LImage)
}

export default LImage;