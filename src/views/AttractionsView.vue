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
          title: '骑楼老街',
          city: '海口市',
          duration: '2-3小时',
          ticket: '免费',
          img: '/images/qilou-street1.jpg',
          tags: ['历史建筑','南洋风情','文化遗产','免费'],
          categories: ['culture'],
          desc1: '海口最具代表性的历史文化街区，始建于19世纪末20世纪初。',
          desc2: '融合了南洋建筑风格与中国传统元素，是了解海南移民文化的重要窗口。',
          tips: [
            '建议清晨或傍晚游览，避开人流高峰',
            '可品尝老街特色小吃如清补凉、海南粉',
            '骑楼建筑内有许多特色店铺，可购买纪念品',
            '注意保护历史建筑，不要乱涂乱画'
          ]
        },
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
          title: '三亚',
          city: '三亚市',
          duration: '2-3天',
          ticket: '无',
          img: '/images/Sanya.jpg',
          tags: ['国际旅游城市','海滩度假','美食购物','交通便利'],
          categories: ['city'],
          desc1: '海南最著名的旅游城市，拥有亚龙湾、蜈支洲岛等世界级景点。',
          desc2: '城市设施完善，旅游服务成熟，是海南旅游的首选目的地之一。',
          tips: [
            '建议安排3-5天游玩时间',
            '避开春节等假期高峰',
            '海鲜市场购买后加工更划算',
            '市区到各景点有旅游专线巴士'
          ]
        },
        {
          title: '海口',
          city: '海口市',
          duration: '1-2天',
          ticket: '无',
          img: '/images/haikou.jpg',
          tags: ['省会城市','历史文化','美食','交通枢纽'],
          categories: ['city'],
          desc1: '海南省省会，是海南的政治、经济、文化中心。',
          desc2: '有骑楼老街、火山口公园等景点，美食种类丰富多样。',
          tips: [
            '作为海南旅游的第一站或最后一站',
            '海口美兰机场有高铁直达市区',
            '夜市文化发达，不容错过',
            '城市绿化率高，适合慢节奏游览'
          ]
        },
        {
          title: '万宁',
          city: '万宁市',
          duration: '1-2天',
          ticket: '无',
          img: '/images/wanning.jpg',
          tags: ['滨海城市','冲浪胜地','咖啡文化','生态旅游'],
          categories: ['city'],
          desc1: '位于海南岛东南部，是著名的冲浪和咖啡之乡。',
          desc2: '拥有日月湾、神州半岛等优质海滩，兴隆咖啡闻名遐迩。',
          tips: [
            '冲浪爱好者的天堂',
            '可参观咖啡种植园和加工厂',
            '海鲜新鲜且价格实惠',
            '交通便利，环岛高铁可直达'
          ]
        },
        {
          title: '琼海',
          city: '琼海市',
          duration: '1天',
          ticket: '无',
          img: '/images/qionghai.jpg',
          tags: ['红色文化','温泉','田园风光','宜居城市'],
          categories: ['city'],
          desc1: '著名的红色娘子军故乡，以温泉和田园风光著称。',
          desc2: '博鳌亚洲论坛永久会址所在地，自然风光优美。',
          tips: [
            '可参观红色娘子军纪念园',
            '博鳌亚洲论坛会址值得一游',
            '官塘温泉是放松身心的好去处',
            '当地的温泉鹅是特色美食'
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