<template>
  <div>
    <section class="hero" style="background-image: url('/images/hainan-overview.jpg');">
      <div class="hero-content">
        <h2>海南文创周边</h2>
        <p>带走海南的美好记忆</p>
      </div>
    </section>
    <section class="container">
      <h2>海南特色文创产品</h2>
      <p class="text-center" style="margin-bottom: 2rem;">海南文创产品融合了当地的历史文化、自然风光和民族特色，是您旅游归来的理想纪念品。</p>
      
      <div class="cultural-products">
        <div class="product-category">
          <h3>传统工艺</h3>
          <div class="products-grid">
            <div class="product-item">
              <img src="/images/Li-brocade.jpg" alt="黎锦" onerror="this.src='https://via.placeholder.com/300x300?text=黎锦'">
              <h4>黎锦</h4>
              <p>黎族传统织锦工艺，图案精美，色彩鲜艳，是海南非物质文化遗产的代表。</p>
            </div>
            <div class="product-item">
              <img src="/images/Coconut-Carving.jpg" alt="椰雕" onerror="this.src='https://via.placeholder.com/300x300?text=椰雕'">
              <h4>椰雕</h4>
              <p>以椰子壳为原料雕刻而成的工艺品，造型多样，具有浓厚的海南特色。</p>
            </div>
            <div class="product-item">
              <img src="/images/Shell-Carving.jpg" alt="贝雕" onerror="this.src='https://via.placeholder.com/300x300?text=贝雕'">
              <h4>贝雕</h4>
              <p>以贝壳为原料加工而成的工艺品，晶莹剔透，图案精美。</p>
            </div>
          </div>
        </div>
        
        <div class="product-category">
          <h3>特色食品</h3>
          <div class="products-grid">
            <div class="product-item">
              <img src="/images/Coconut-sugar.jpg" alt="椰子糖" onerror="this.src='https://via.placeholder.com/300x300?text=椰子糖'">
              <h4>椰子糖</h4>
              <p>以新鲜椰子汁为原料制成的糖果，甜而不腻，椰香浓郁。</p>
            </div>
            <div class="product-item">
              <img src="/images/xinglong-Coffee.jpg" alt="兴隆咖啡" onerror="this.src='https://via.placeholder.com/300x300?text=兴隆咖啡'">
              <h4>兴隆咖啡</h4>
              <p>产自万宁兴隆，是海南著名的咖啡品牌，口感醇厚，香气浓郁。</p>
            </div>
            <div class="product-item">
              <img src="/images/YellowLantern-ChiliSauce.jpg" alt="黄灯笼辣椒" onerror="this.src='https://via.placeholder.com/300x300?text=黄灯笼辣椒'">
              <h4>黄灯笼辣椒酱</h4>
              <p>海南特产，辣度高，香味浓，是调味的佳品。</p>
            </div>
          </div>
        </div>
        
        <div class="product-category">
          <h3>文创纪念品</h3>
          <div class="products-grid">
            <div class="product-item">
              <img src="/images/Clothing.jpg" alt="热带风情服饰" onerror="this.src='https://via.placeholder.com/300x300?text=热带风情服饰'">
              <h4>热带风情服饰</h4>
              <p>印有海南特色图案的T恤、裙子等，色彩鲜艳，富有热带气息。</p>
            </div>
            <div class="product-item">
              <img src="/images/Postcard.jpg" alt="特色明信片" onerror="this.src='https://via.placeholder.com/300x300?text=特色明信片'">
              <h4>特色明信片</h4>
              <p>印有海南风景、民俗等图案的明信片，是寄给亲友的理想选择。</p>
            </div>
            <div class="product-item">
              <img src="/images/Cultural-CreativeStationery.jpg" alt="文创文具" onerror="this.src='https://via.placeholder.com/300x300?text=文创文具'">
              <h4>文创文具</h4>
              <p>融入海南元素的笔记本、笔、书签等文具，实用又有纪念意义。</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="where-to-buy">
        <h3>购买地点推荐</h3>
        <ul>
          <li><strong>海口骑楼老街</strong>：集中了众多海南特色商品店，可购买黎锦、椰雕等传统工艺品。</li>
          <li><strong>三亚国际免税城</strong>：不仅有免税商品，也有海南特色文创产品专柜。</li>
          <li><strong>各大景区纪念品店</strong>：如天涯海角、蜈支洲岛等景区内的纪念品店，有各种特色商品。</li>
          <li><strong>海口日月广场</strong>：海南本土品牌集中地，可购买特色食品和文创产品。</li>
        </ul>
      </div>
      
      <p class="text-center">更多文创内容即将上线...</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CulturalProductsView'
}
</script>