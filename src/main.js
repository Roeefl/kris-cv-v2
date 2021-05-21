import { createApp } from 'vue';
import App from './App.vue';

import Unicon from 'vue-unicons';
import { uniSuitcase, uniGraduationCap, uniShield, uniUser } from 'vue-unicons/dist/icons';

Unicon.add([uniSuitcase, uniGraduationCap, uniShield, uniUser]);

createApp(App)
  .use(Unicon)
  .mount('#app');
