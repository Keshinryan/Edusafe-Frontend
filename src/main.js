import {
    createApp
} from 'vue';
import App from './App.vue';

import router from './router';
import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery.min';
import 'popper.js/dist/popper.min';
import 'bootstrap/dist/js/bootstrap.min';
import Navbar from './components/Navbar.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUser,faUsers ,faFlag,faNewspaper,faRightFromBracket,faRightToBracket } from '@fortawesome/free-solid-svg-icons';

// createApp(App).mount('#app')
const app = createApp(App)
//use vue router
app.use(router);
library.add(faUser,faUsers,faFlag,faNewspaper,faRightFromBracket,faRightToBracket);
app.component('Navbar',Navbar);
app.mount("#app");