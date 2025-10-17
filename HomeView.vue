<template>
  <div>
    <section class="hero">
      <div class="hero-content">
        <h2>欢迎来到海南</h2>
        <p>探索椰风海韵的美丽之旅</p>
        <router-link to="/guide" class="btn">开始探索</router-link>
      </div>
    </section>

    <section class="intro container">
      <h2>关于海南</h2>
      <div class="intro-content">
        <div class="intro-text">
          <p>海南，位于中国最南端，是著名的热带滨海旅游胜地。这里有迷人的海滩、丰富的热带雨林和独特的岛屿文化。</p>
          <p>从美丽的三亚湾到热闹的海口骑楼老街，从原始的热带雨林到清澈的日月湾，海南的每一处都令人心驰神往。在这里，您可以感受海南文化的独特魅力，品尝地道的海南美食，体验海岛上的悠闲与惬意。</p>
          <router-link to="/attractions" class="btn btn-outline">了解更多</router-link>
        </div>
        <div class="intro-image">
          <img src="/images/hainan-overview.jpg" alt="海南全景" onerror="this.src='https://via.placeholder.com/500x300?text=海南全景'">
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <h2>探索海南</h2>
        <div class="feature-grid">
          <div class="feature-box">
            <i class="fas fa-mountain"></i>
            <h3>自然风光</h3>
            <p>阳光、沙滩、椰林、热带雨林，海南拥有最迷人的热带海岛风光。</p>
            <router-link to="/attractions" class="btn-small">查看景点</router-link>
          </div>
          <div class="feature-box">
            <i class="fas fa-route"></i>
            <h3>精选路线</h3>
            <p>从海口市区游览到万宁，我们为您规划最佳旅游路线。</p>
            <router-link to="/routes" class="btn-small">浏览路线</router-link>
          </div>
          <div class="feature-box">
            <i class="fas fa-book-open"></i>
            <h3>旅行攻略</h3>
            <p>防晒防暑、最佳旅行季节、必备物品清单等实用信息。</p>
            <router-link to="/guide" class="btn-small">阅读攻略</router-link>
          </div>
          <div class="feature-box">
            <i class="fas fa-utensils"></i>
            <h3>海南美食</h3>
            <p>椰子鸡、文昌鸡、海鲜大餐，品尝独特的海岛美食。</p>
            <router-link to="/food" class="btn-small">美食指南</router-link>
          </div>
          <div class="feature-box">
            <i class="fas fa-gift"></i>
            <h3>文创周边</h3>
            <p>黎锦、椰雕、黄灯笼辣椒酱，带走海南的美好记忆。</p>
            <router-link to="/cultural-products" class="btn-small">查看文创</router-link>
          </div>
        </div>
      </div>
    </section>

    <section class="gallery container">
      <h2>本次海南之旅主要景点</h2>
      <div class="gallery-grid">
          <div class="gallery-item">
            <img :src="imageUrl" alt="骑楼老街" @error="handleImageError">
            <div class="overlay">骑楼老街</div>
          </div>
          <div class="gallery-item">
            <img src="/images/riyue-bay.jpg" alt="日月湾" onerror="this.src='https://via.placeholder.com/300x200?text=日月湾'">
            <div class="overlay">日月湾</div>
          </div>
          <div class="gallery-item">
            <img src="/images/xinglong-garden.jpg" alt="兴隆热带植物园" onerror="this.src='https://via.placeholder.com/300x200?text=兴隆热带植物园'">
            <div class="overlay">兴隆热带植物园</div>
          </div>
          <div class="gallery-item">
            <img src="/images/holiday-beach.jpg" alt="假日海滩" onerror="this.src='https://via.placeholder.com/300x200?text=假日海滩'">
            <div class="overlay">假日海滩</div>
          </div>
          <div class="gallery-item">
            <img src="/images/wuzhizhou-island.jpg" alt="蜈支洲岛" onerror="this.src='https://via.placeholder.com/300x200?text=蜈支洲岛'">
            <div class="overlay">蜈支洲岛</div>
          </div>
          <div class="gallery-item">
            <img src="/images/tianya-haitang.jpg" alt="天涯海角" onerror="this.src='https://via.placeholder.com/300x200?text=天涯海角'">
            <div class="overlay">天涯海角</div>
          </div>
      </div>
    </section>

    <section class="testimonials">
      <div class="container">
        <div class="testimonial-slider">
          <div class="testimonial">
            <p>“海南之行是我人生中最难忘的旅程，迷人的海滩、丰富的热带水果、热情的海南人民，一切都那么美好。”</p>
          </div>
        </div>
      </div>
    </section>

    <section class="cta container">
      <h2>准备好开始我们的海南之旅了吗？</h2>
      <p>从椰林海滩到热带雨林，从美食夜市到清澈海湾，海南等待着我们的探索。</p>
      <router-link to="/guide" class="btn btn-large">开始行动</router-link>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
  data() {
    return {
      items: [
        {
          title: '海岛风光',
          description: '探索海南最美的海滩和岛屿',
          image: '/images/hainan-overview.jpg'
        },
        {
          title: '历史文化',
          description: '感受海南独特的民俗文化和历史底蕴',
          image: '/images/qilou-street.jpg'
        },
        {
          title: '美食之旅',
          description: '品尝地道的海南特色美食',
          image: '/images/food-hero.jpg'
        },
        {
          title: '休闲度假',
          description: '享受阳光沙滩的惬意假期',
          image: '/images/holiday-beach.jpg'
        }
      ],
      imageUrl: '/images/qilou-street.jpg'
    }
  },
  methods: {
    handleImageError(event) {
      console.error('图片加载失败:', event.target.src);
      // 尝试不同的路径格式
      const altPaths = [
        '../images/qilou-street.jpg',
        './images/qilou-street.jpg',
        '/hainan/images/qilou-street.jpg'
      ];
      
      // 尝试下一个路径
      const currentIndex = altPaths.indexOf(event.target.src);
      if (currentIndex < altPaths.length - 1) {
        event.target.src = altPaths[currentIndex + 1];
      } else {
        // 所有路径都尝试失败后使用占位图
        event.target.src = 'https://via.placeholder.com/300x200?text=图片加载失败';
      }
    }
  }
}
</script>