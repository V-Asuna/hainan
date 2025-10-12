<template>
  <div>
    <section class="hero" style="background-image: url('/images/routes-hero.jpg');">
      <div class="hero-content">
        <h2>海南旅游路线</h2>
        <p>探索最佳行程安排</p>
      </div>
    </section>
    <section class="container">
      <h2>精选旅游路线</h2>
      <p class="text-center" style="margin-bottom: 2rem;">我们为您精心规划了多条海南旅游路线，无论您是喜欢自然风光还是人文历史，总有一条适合您。</p>
      <div class="routes-list">
        <div class="route-item" v-for="(route, index) in routeList" :key="index">
          <div class="route-img">
            <img :src="route.img" :alt="route.title" onerror="this.src='https://via.placeholder.com/600x400?text=路线图片'">
          </div>
          <div class="route-info">
            <div class="route-header">
              <h3>{{ route.title }}</h3>
              <div class="route-meta">
                <span><i class="fas fa-calendar-alt"></i> {{ route.days }}</span>
                <span><i class="fas fa-map-marker-alt"></i> {{ route.area }}</span>
                <span class="difficulty" :class="route.diffClass"><i class="fas fa-mountain"></i> {{ route.diffText }}</span>
              </div>
            </div>
            <div class="route-highlights">
              <h4>行程亮点：</h4>
              <div class="highlights-tags">
                <span v-for="(highlight, idx) in route.highlights" :key="idx" class="highlight-tag">{{ highlight }}</span>
              </div>
            </div>
            <p class="route-desc">{{ route.desc }}</p>
            <div class="route-footer">
              <span class="route-price">{{ route.price }}</span>
              <button class="btn btn-small" @click="showRouteDetail(route)">查看详情</button>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- 路线详情弹窗 -->
    <div v-if="selectedRoute" class="modal-overlay" @click="closeModal">
      <div class="modal-content" @click.stop>
        <button class="close-btn" @click="closeModal">&times;</button>
        <h3>{{ selectedRoute.detailTitle }}</h3>
        <div class="modal-body">
          <div class="route-detail-img">
            <img :src="selectedRoute.map" :alt="selectedRoute.title" onerror="this.src='https://via.placeholder.com/800x500?text=路线图'">
          </div>
          <div class="route-days-plan">
            <div v-for="(day, idx) in selectedRoute.daysPlan" :key="idx" class="day-plan">
              <h4>{{ day.title }}</h4>
              <p>{{ day.content }}</p>
              <div v-if="day.extra" class="day-extra">
                <strong>{{ day.extra.label }}：</strong>{{ day.extra.text }}
              </div>
            </div>
          </div>
          <div class="route-tips">
            <h4>出行提示：</h4>
            <ul>
              <li v-for="(tip, idx) in selectedRoute.tips" :key="idx">{{ tip }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RoutesView',
  data() {
    return {
      routeList: [
        {
          title: '海口三日游', 
          days: '3天', 
          area: '海口市', 
          diffClass: 'easy', 
          diffText: '轻松', 
          img: '/images/hainan-overview.jpg',
          highlights: ['骑楼老街','火山口地质公园','假日海滩','地道美食'],
          desc: '深度体验海口城市魅力，从历史文化到现代都市。', 
          price: '¥1580起/人',
          detailTitle: '海口三日游详细行程',
          map: '/images/holiday-beach.jpg',
          daysPlan: [
            { title: '第一天：抵达海口 - 市区漫游', content: '入住休息，傍晚骑楼老街品小吃，感受南洋风情。', extra: { label: '住宿', text: '海口市区酒店' } },
            { title: '第二天：火山口地质公园 - 假日海滩', content: '上午地质公园科普，下午海滩观日落、沙滩活动。', extra: { label: '用餐', text: '早餐、午餐' } },
            { title: '第三天：骑行滨海大道 - 返程', content: '早晨骑行滨海大道，拍照打卡后返程。', extra: { label: '用餐', text: '早餐' } }
          ],
          tips: ['海口夏季紫外线强，请注意防晒', '夜市美食丰富，注意饮食卫生']
        },
        {
          title: '万宁四日游', 
          days: '4天', 
          area: '万宁市', 
          diffClass: 'medium', 
          diffText: '中等', 
          img: '/images/riyue-bay.jpg',
          highlights: ['日月湾冲浪','兴隆热带植物园','石梅湾海滩','黎族文化'],
          desc: '体验热带风情与原始雨林，冲浪与生态之旅。', 
          price: '¥2380起/人',
          detailTitle: '万宁四日游详细行程',
          map: '/images/xinglong-garden.jpg',
          daysPlan: [
            { title: '第一天：抵达万宁 - 兴隆小镇', content: '入住兴隆，夜游小镇，品尝热带水果。' },
            { title: '第二天：兴隆热带植物园 - 石梅湾', content: '上午科普游，下午海滩放松、拍照。' },
            { title: '第三天：日月湾冲浪体验', content: '专业教练指导，体验刺激冲浪。' },
            { title: '第四天：黎族文化村 - 返程', content: '了解黎族传统文化，购买特色纪念品后返程。' }
          ],
          tips: ['冲浪需要一定体力，提前做好准备', '热带地区蚊虫多，携带驱蚊用品']
        }
      ],
      selectedRoute: null
    }
  },
  methods: {
    showRouteDetail(route) {
      this.selectedRoute = route;
    },
    closeModal() {
      this.selectedRoute = null;
    }
  }
}
</script>