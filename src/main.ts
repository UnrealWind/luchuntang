import { createApp } from 'vue';

import App from './App.vue';
import { router } from './router';
import { store } from './store';
import './index.css';

import * as echarts from 'echarts';
import * as echartsGL from 'echarts-gl';

// import Vconsole from 'vconsole';
// const vConsole = new Vconsole();

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

const app = createApp(App);

app.use(store);
app.use(router);
app.use(Antd);
app.config.globalProperties.$echarts = echarts;
app.config.globalProperties.$echartsGL = echartsGL;

app.mount('#app');
