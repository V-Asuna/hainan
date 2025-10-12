<template>
  <div id="app">
    <header>
      <div class="container">
        <div class="logo">
          <h1>椰香海南</h1>
          <p>热带海岛的奇妙之旅</p>
        </div>
        <nav>
          <ul>
            <li><router-link to="/" exact-active-class="active" class="nav-link">首页</router-link></li>
            <li><router-link to="/attractions" active-class="active" class="nav-link">景点介绍</router-link></li>
            <li><router-link to="/guide" active-class="active" class="nav-link">旅游攻略</router-link></li>
            <li><router-link to="/routes" active-class="active" class="nav-link">旅游路线</router-link></li>
            <li><router-link to="/food" active-class="active" class="nav-link">美食指南</router-link></li>
            <li><router-link to="/cultural-products" active-class="active" class="nav-link">文创周边</router-link></li>
          </ul>
        </nav>
      </div>
    </header>

    <router-view></router-view>

    <footer>
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <h3>椰香海南</h3>
            <p>热带海岛的奇妙之旅</p>
          </div>
          <div class="footer-links">
            <h4>快速链接</h4>
            <ul>
              <li><router-link to="/">首页</router-link></li>
              <li><router-link to="/attractions">景点介绍</router-link></li>
              <li><router-link to="/routes">旅游路线</router-link></li>
              <li><router-link to="/guide">旅游攻略</router-link></li>
              <li><router-link to="/food">美食指南</router-link></li>
              <li><router-link to="/cultural-products">文创周边</router-link></li>
            </ul>
          </div>
          <div class="footer-contact">
            <h4>参与制作成员名单</h4>
            <p><i class="fas fa-user"></i> 屈韩</p>
            <p><i class="fas fa-user"></i> 陈雨轩</p>
            <p><i class="fas fa-user"></i> 王家师</p>
            <p><i class="fas fa-user"></i> 王柏然</p>
            <p><i class="fas fa-user"></i> 师千茸</p>
            <p><i class="fas fa-user"></i> 殷飞扬</p>
          </div>
        </div>
        <div class="footer-bottom">
          <p>安全第一，旅途愉快</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
/* 全局样式将在 assets/css/style.css 中定义 */
</style>