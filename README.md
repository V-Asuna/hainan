<template>
  <div>
    <section class="hero" style="background-image: url('/images/attractions-hero.jpg');">
      <div class="hero-content">
        <h2>海南景点介绍</h2>
        <p>享受自由之旅</p>
      </div>
    </section>
    <section class="container">
      <h2>海南著名景点</h2>
      <p class="text-center" style="margin-bottom: 2rem;">海南省拥有丰富的自然与人文景观，从美丽的海滩到热带雨林，总有一处能打动您的心灵。</p>
      <div class="attraction-filters">
        <button class="filter-btn" :class="{active: active==='all'}" @click="setFilter('all')">全部</button>
        <button class="filter-btn" :class="{active: active==='beach'}" @click="setFilter('beach')">海滩</button>
        <button class="filter-btn" :class="{active: active==='forest'}" @click="setFilter('forest')">雨林</button>
        <button class="filter-btn" :class="{active: active==='culture'}" @click="setFilter('culture')">文化</button>
        <button class="filter-btn" :class="{active: active==='city'}" @click="setFilter('city')">城市</button>
      </div>
      <div class="attractions-list">
        <div class="attraction-item" v-for="item in filtered" :key="item.title">
          <div class="attraction-img">
            <img :src="item.img" :alt="item.title" onerror="this.src='https://via.placeholder.com/800x500?text=图片'">
          </div>
          <div class="attraction-info">
            <h3>{{ item.title }}</h3>
            <div class="attraction-meta">
              <span><i class="fas fa-map-marker-alt"></i> {{ item.city }}</span>
              <span><i class="fas fa-clock"></i> {{ item.duration }}</span>
              <span><i class="fas fa-ticket-alt"></i> {{ item.ticket }}</span>
            </div>
            <div class="attraction-tags">
              <span v-for="tag in item.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
            <p class="attraction-desc">{{ item.desc1 }}</p>
            <p class="attraction-desc">{{ item.desc2 }}</p>
            <div class="attraction-tips">
              <h4>游览提示：</h4>
              <ul>
                <li v-for="(tip, index) in item.tips" :key="index">{{ tip }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AttractionsView',
  data() {
    return {
      active: 'all',
      items: [
        // 海滩分类
        {
          title: '日月湾',
          city: '万宁市',
          duration: '半天',
          ticket: '免费',
          img: '/images/riyue-bay1.jpg',
          tags: ['海滩','冲浪','水上运动','4A级景区'],
          categories: ['beach'],
          desc1: '海南著名的冲浪胜地，沙滩细腻，海水清澈。',
          desc2: '提供帆板、皮划艇等水上项目，周边度假设施完备。',
          tips: [
            '最佳冲浪季：10月至次年4月',
            '初学者建议请教练',
            '注意防晒，备好防晒霜与遮阳帽',
            '携带泳衣与换洗衣物'
          ]
        },
        {
          title: '蜈支洲岛',
          city: '三亚市',
          duration: '全天',
          ticket: '168元',
          img: '/images/wuzhizhou-island.jpg',
          tags: ['海岛','潜水','度假','5A级景区'],
          categories: ['beach'],
          desc1: '中国最美的热带海岛之一，有"中国马尔代夫"之称。',
          desc2: '海水能见度极高，是潜水胜地，岛上设施完善。',
          tips: [
            '建议早上去，避开人流高峰',
            '岛上消费较高，可自带饮用水和零食',
            '潜水项目需提前预约',
            '注意保护环境，不要随意丢弃垃圾'
          ]
        },
        {
          title: '神州半岛',
          city: '万宁市',
          duration: '半天-全天',
          ticket: '免费',
          img: '/images/Shenzhou-Peninsula.jpg',
          tags: ['海滩','度假','高尔夫','4A级景区'],
          categories: ['beach'],
          desc1: '拥有4公里优质沙滩的度假胜地，宁静而美丽。',
          desc2: '周边有多个高端度假酒店和高尔夫球场，适合休闲度假。',
          tips: [
            '沙滩人少，适合拍照和放松',
            '附近有海鲜餐厅，可品尝新鲜海鲜',
            '租车前往更为方便',
            '日落景色非常美丽，值得等待'
          ]
        },
        {
          title: '三亚湾',
          city: '三亚市',
          duration: '2-3小时',
          ticket: '免费',
          img: '/images/Sanya-Bay.jpg',
          tags: ['海滩','城市景观','日落','免费'],
          categories: ['beach'],
          desc1: '三亚市区内的著名海湾，绵延22公里。',
          desc2: '椰梦长廊是三亚湾的标志性景观，日落景色迷人。',
          tips: [
            '傍晚时分最适合游览，可欣赏日落',
            '靠近市区，交通便利',
            '注意保管好个人财物',
            '可在海边餐厅享用海鲜晚餐'
          ]
        },
        
        // 雨林分类
        {
          title: '兴隆热带植物园',
          city: '万宁市',
          duration: '3-4小时',
          ticket: '60元',
          img: '/images/xinglong-garden1.jpg',
          tags: ['植物园','科普教育','生态旅游','4A级景区'],
          categories: ['forest'],
          desc1: '中国最大的热带植物园之一，3000多种热带植物。',
          desc2: '可科普学习与品尝热带水果，适合亲子出行。',
          tips: [
            '建议请导游讲解，了解更多植物知识',
            '园区较大，穿舒适鞋子',
            '防蚊虫，备驱虫喷雾',
            '可购买热带水果带回'
          ]
        },
        {
          title: '五指山景区',
          city: '五指山市',
          duration: '全天',
          ticket: '50元',
          img: '/images/FiveFinger-Mountains.jpg',
          tags: ['山脉','雨林','徒步','自然保护区'],
          categories: ['forest'],
          desc1: '海南第一高峰，主峰海拔1867米，形如五指。',
          desc2: '热带雨林景观丰富，是天然的氧吧和生态天堂。',
          tips: [
            '登山需准备充足的水和食物',
            '穿防滑登山鞋，带登山杖',
            '山区天气多变，备雨具',
            '建议请当地向导带路'
          ]
        },
        {
          title: '呀诺达雨林',
          city: '保亭县',
          duration: '4-5小时',
          ticket: '158元',
          img: '/images/Yanoda-Rainforest.jpg',
          tags: ['雨林','探险','生态旅游','5A级景区'],
          categories: ['forest'],
          desc1: '中国唯一地处北纬18度的热带雨林，是海南岛五大热带雨林精品的浓缩。',
          desc2: '提供高空滑索、踏瀑戏水等特色体验项目。',
          tips: [
            '建议穿运动装和防滑鞋',
            '踏瀑戏水项目需准备换洗衣物',
            '可乘坐景区观光车游览',
            '夏季注意防晒和防蚊虫'
          ]
        },
        
        // 文化分类
        {
          title: '槟榔谷黎苗文化旅游区',
          city: '保亭县',
          duration: '3-4小时',
          ticket: '120元',
          img: '/images/Binlang-Valley.jpg',
          tags: ['民俗文化','黎苗风情','非遗展示','5A级景区'],
          categories: ['culture'],
          desc1: '展示海南黎族和苗族传统文化的综合性景区。',
          desc2: '可欣赏黎苗歌舞表演、体验织锦技艺、品尝少数民族美食。',
          tips: [
            '建议参加景区内的文化体验活动',
            '民族歌舞表演定时举行，提前了解时间',
            '购买黎锦等手工艺品可适当议价',
            '尊重少数民族风俗习惯'
          ]
        },
        {
          title: '南山文化旅游区',
          city: '三亚市',
          duration: '半天-全天',
          ticket: '129元',
          img: '/images/Nanshan.jpg',
          tags: ['佛教文化','海景','祈福','5A级景区'],
          categories: ['culture'],
          desc1: '以佛教文化为主题的大型园区，拥有108米高的海上观音圣像。',
          desc2: '集园林景观、佛教文化、旅游休闲于一体的综合性旅游区。',
          tips: [
            '景区较大，建议乘坐观光车',
            '海上观音像内部有电梯可直达莲花宝座',
            '注意宗教场所的礼仪',
            '素食餐厅提供的素斋值得品尝'
          ]
        },
        {
          title: '三亚千古情',
          city: '三亚市',
          duration: '3小时',
          ticket: '300元',
          img: '/images/Sanya-EverlastingLove.jpg',
          tags: ['演出','文化表演','互动体验','4A级景区'],
          categories: ['culture'],
          desc1: '大型歌舞剧，展现海南历史文化和民俗风情。',
          desc2: '舞台效果震撼，演员表演精彩，是三亚必看的文化演出。',
          tips: [
            '提前购票并预订座位',
            '演出时间约1小时，建议提前到达',
            '剧场内禁止拍照和录像',
            '可同时游览宋城景区内的其他景点'
          ]
        },
        
        // 城市分类
        {
          title: '三亚国际免税城',
          city: '三亚市',
          duration: '2-4小时',
          ticket: '免费',
          img: '/images/cdf-sanya.jpg',
          tags: ['购物天堂','奢华品牌','时尚潮流','一站式购物'],
          categories: ['city'],
          desc1: '亚洲领先的免税购物目的地，汇集全球众多奢侈品牌与时尚名品。',
          desc2: '不仅是购物天堂，其独特的海棠湾凤凰之花建筑本身也是一大景观。',
          tips: [
            '建议先注册会员积分可抵现',
            '离岛前6小时完成购物',
            '可关注官方小程序提前浏览优惠',
            '提供行李寄存和邮寄服务'
          ]
        },
        {
          title: '骑楼老街',
          city: '海口市',
          duration: '2-3小时',
          ticket: '免费',
          img: '/images/qilou-street.jpg',
          tags: ['南洋建筑','历史风貌','市井烟火','拍照圣地'],
          categories: ['city'],
          desc1: '中国现今保留规模最大、保存基本完好的骑楼建筑群，被誉为"老海口的缩影"。',
          desc2: '斑驳的墙体与精致的雕花诉说着下南洋的故事，沿街遍布地道小吃与特色小店。',
          tips: [
            '清晨或傍晚前往光线最佳且人少',
            '可品尝街边的海南粉、清补凉',
            '参观骑楼老街博物馆了解历史',
            '夜间亮灯后别有一番风情'
          ]
        },
        {
          title: '兴隆咖啡谷',
          city: '万宁市',
          duration: '2-3小时',
          ticket: '58元',
          img: '/images/xinglong-coffee-valley.jpg',
          tags: ['咖啡文化','侨乡风情','雨林体验','亲子研学'],
          categories: ['city'],
          desc1: '沉浸于海南著名的"咖啡之乡"，在雨林环绕中了解从一颗咖啡豆到一杯咖啡的全过程。',
          desc2: '这里融合了东南亚侨乡文化，不仅可以品尝地道兴隆咖啡，还能体验独特的归侨风情。',
          tips: [
            '一定要品尝一杯现场制作的炭烧兴隆咖啡',
            '建议请导游讲解，能更深入了解咖啡文化和侨乡历史',
            '园区内有电瓶车，穿行于雨林和咖啡园中很惬意',
            '可以给家人带上一些正宗兴隆咖啡豆作为手信'
          ]
        },
        {
          title: '博鳌亚洲论坛会址',
          city: '琼海市',
          duration: '1-2小时',
          ticket: '128元',
          img: '/images/boa-forum.jpg',
          tags: ['国际会议','地标建筑','玉带滩','人文景观'],
          categories: ['city'],
          desc1: '亚洲论坛永久性会议所在地，宏伟现代的建筑群与优美的自然风光完美结合。',
          desc2: '可参观主会场，感受国际政经领袖视角，并乘船前往世界分隔河海最狭窄的沙滩半岛——玉带滩。',
          tips: [
            '建议购买含玉带滩的联票',
            '会场内请保持安静',
            '注意防晒，景区内遮阴处较少',
            '可顺道游览博鳌禅寺和滨海小镇'
          ]
        }
      ]
    }
  },
  computed: {
    filtered() {
      if (this.active === 'all') return this.items;
      return this.items.filter(i => i.categories.includes(this.active));
    }
  },
  methods: {
    setFilter(val) { this.active = val; }
  }
}
</script>
