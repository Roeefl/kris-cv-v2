import { createApp } from 'vue';
import App from './App.vue';

import Unicon from 'vue-unicons';
import { uniSuitcase, uniGraduationCap, uniShield, uniUser, uniUniversity, uniUserSquare, uniEnglishToChinese, uniHeartMedical } from 'vue-unicons/dist/icons';

Unicon.add([uniSuitcase, uniGraduationCap, uniShield, uniUser, uniUniversity, uniUserSquare, uniEnglishToChinese, uniHeartMedical]);

createApp(App)
  .use(Unicon)
  .mount('#app');
