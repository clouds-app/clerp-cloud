# STORE

**This directory is not required, you can delete it if you don't want to use it.**

This directory contains your Vuex Store files.
Vuex Store option is implemented in the Nuxt.js framework.

Creating a file in this directory automatically activates the option in the framework.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/guide/vuex-store).

index
# nuxtServerInit 页面刷新是,重新获取初始值

1.index.js 默认主模块,引用时,直接使用 this.$store.dispatch('函数',值)
2.新建子模块 直接不添加,不要添加文件夹,引用 this.$store.dispatch('子模块文件名称/函数',值)

