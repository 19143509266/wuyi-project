import { defineConfig } from 'umi'

export default defineConfig({
  routes: [{ path: '/', component: './HomePage' }],
  npmClient: 'pnpm',
  base: '/wuyi-project/',
  publicPath: '/wuyi-project/'
})
