import { UserConfig, ConfigEnv } from 'vite';
import { resolve } from 'path';
import { createVitePlugins } from './config/plugin';

function pathResolve(dir: string) {
  return resolve(process.cwd(), '.', dir);
}

// https://vitejs.dev/config/
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  console.log(command, mode);

  return {
    resolve: {
      alias: [
        // /@/xxxx => src/xxxx
        { find: /^~/, replacement: resolve(__dirname, '') },
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
      ],
    },

    plugins: createVitePlugins(isBuild),

    css: {
      preprocessorOptions: {
        less: {
          modifyVars: true,
          javascriptEnabled: true,
        },
      },
    },

    // build
    build: {
      target: 'es2015',
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: true,
        },
      },

      // 解决错位
      sourcemap: false,

      // Turning off brotliSize display can slightly reduce packaging time
      brotliSize: false,
      chunkSizeWarningLimit: 2000,
    },

    //optimizeDeps
    // optimizeDeps: {
    //   include: ['ant-design-vue/es/locale/zh_CN', 'moment/dist/locale/zh-cn'],
    // },
  };
};
