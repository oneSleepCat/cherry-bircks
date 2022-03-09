import { App } from 'vue';
import LText from './components/LText';
import LShape from './components/LShape';
import LImage from './components/LImage';


const components = [LText, LShape, LImage];

const install = (app: App) => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export {
  LText,
  LShape,
  LImage,
  install
};

export default install;