## 前端架构升级说明

### vue3
整体架构由vue2 升级至 vue3

### 相关生态

#### vite
webpack => vite   
vite拥有不可思议的编译速度，几乎是webpack的几十分之一，真正做到了1秒编译，节省了繁琐的编译以及打包时间

#### vant
vant2 => 为vant3   
全面支持vue3，开发者活跃且质量很高，同时支持小程序，做到ui的统一

#### pnpm
npm,yarn => pnpm   
相比npm yarn，pnpm有更加快速的依赖安装速度以及磁盘利用率，以及新的依赖管理方式防止npm以及yarn出现的问题

#### typescript
javascript => typescript    
typescript是js的未来，更加严格的类型校验以及写法有助于整体代码质量的把控提升

#### store
vuex => pinia   
由vuex 改变为 pinia， 在vuex暂时无法提供较好的ts支持之前，pinia是最好的选择

#### tailwind
sass => tailwind   
tailwind 快捷书写样式

### todo
#### jsx
1. 使用setup语法糖下jsx并不能得到优雅的书写方式
2. vite下使用template书写html无法触发热更新操作，script与css是正常的

#### lint规范
暂时比较粗，需要整理

#### 多环境打包
会在开发中补足

#### 通用组件
会在开发中补足

