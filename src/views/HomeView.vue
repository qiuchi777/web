<template>
  <section class="card">
    <h2>已完成基础迁移骨架</h2>
    <p>你之前找不到迁移位置，是因为 Vue CLI 默认模板只有一个 App 页面。</p>
    <p>现在每个旧页面都已经映射成路由，内容来自 public/legacy 下的原始 html。</p>
    <ul>
      <li>临时过渡文件位置：<code>public/legacy</code></li>
      <li>正式迁移文件位置：<code>src/views</code></li>
      <li>路由配置位置：<code>src/router/index.js</code></li>
    </ul>
    <p>下一步可逐个把旧页面的 body 内容搬到对应 Vue 组件中。</p>
  </section>
</template>

<script>
export default {
  name: 'HomeView'
}
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 12px;
  padding: 18px;
  box-shadow: 0 6px 20px rgba(15, 23, 42, 0.08);
}

h2 {
  margin-top: 0;
}

ul {
  padding-left: 18px;
}
</style>
