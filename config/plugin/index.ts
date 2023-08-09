import type { Plugin } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import legacy from '@vitejs/plugin-legacy';
import { configCompressPlugin } from './compress';
import styleImport, { VantResolve } from 'vite-plugin-style-import';

export function createVitePlugins(isBuild: boolean) {
  const vitePlugins: (Plugin | Plugin[])[] = [
    // vue支持
    vue(),
    // JSX支持
    vueJsx(),
    //vant
    styleImport({
      resolves: [VantResolve()],
    }),
  ];

  // @vitejs/plugin-legacy
  // isBuild && vitePlugins.push(legacy());

  // rollup-plugin-gzip
  isBuild && vitePlugins.push(configCompressPlugin());

  return vitePlugins;
}
