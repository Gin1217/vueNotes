<template>
  <div id="app">
    <div class="container">
      <input type="checkbox" v-model="checkAll" />
      全选
      <input type="checkbox" @change="inverse" />
      反选
      <div v-for="(goods, index) in goodsList" :key="index" class="item">
        <input type="checkbox" :value="goods.value" v-model="model" />
        <div class="item-id">
          {{ goods.id }}
        </div>
        <div class="item-name">
          {{ goods.name }}
        </div>
        <div class="item-img">
          <img :src="goods.imgUrl" :alt="goods.name" class="img" />
        </div>
        <div class="item-price">
          {{ goods.price }}
        </div>
        <div class="item-count">
          <button @click="goods.count > 1 ? goods.count-- : ''">-</button>
          <input type="text" v-model="goods.count" class="goods-count" />
          <button @click="goods.count += 1">+</button>
        </div>
      </div>
      <div class="message">已选择:{{ model }}</div>
      <div class="money">￥总价:{{ totalPrice }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Test",
  data() {
    return {
      goodsList:[
          {
            id:1,
            name: '单品甜甜圈',
            label:'单品甜甜圈',
            value:'单品甜甜圈',
            imgUrl: 'http://bnnbucket.oss-cn-hangzhou.aliyuncs.com/food/food2.jpg',
            price: 15,
            count: 1,
          },
            {
            id:2,
            name: '多味甜甜圈',
            label:'多味甜甜圈',
            value:'多味甜甜圈',
            imgUrl: 'http://bnnbucket.oss-cn-hangzhou.aliyuncs.com/food/food3.jpg',
            price: 25,
            count: 1,
          },
            {
            id:3,
            name: '奶油甜品',
            label:'奶油甜品',
            value:'奶油甜品',
            imgUrl: 'http://bnnbucket.oss-cn-hangzhou.aliyuncs.com/food/food4.jpg',
            price: 30,
            count: 1,
          },
        ],
      model: [],
    };
  },
    computed: {
    checkAll: {
      get() {
        return this.model.length === this.goodsList.length;
      },
      set(val) {
        if (val) {
          this.model = [];
          this.goodsList.forEach((item) => {
            this.model.push(item.value);
          });
        } else {
          this.model = [];
        }
      },
    },
    totalPrice() {
      let t = 0;
      this.model.forEach((goods) => {
        let index = this.goodsList.findIndex((item) => item.value === goods);
        t += this.goodsList[index].price * this.goodsList[index].count;
      });
      return t;
    },
  },
  methods: {
    inverse() {
      this.goodsList.forEach((item) => {
        let index = this.model.findIndex((goods) => goods === item.value);
        if (index > -1) {
          this.model.splice(index, 1);
        } else {
          this.model.push(item.value);
        }
      });
    },
  },
};
</script>

<style lang="scss" scope>
* {
  background-color: #fafafd;
}

.container {
  width: 400px;
  font-size: 18px;
  .item {
    display: flex;
    border: 1px solid #1c1c1c;
    border-radius: 10px;
    width: 90%;
    margin: 0 auto;
    height: 100px;
    align-items: center;
    padding-left: 10px;
    padding-right: 10px;
    margin-top: 10px;
    .item-id {
      flex: 1 1 10%;
      margin-left: 10px;
      color: darkseagreen;
    }
    .item-name {
      flex: 1 1 20%;
    }
    .item-img {
      flex: 1 1 20%;
      .img {
        width: 90%;
        height: 90%;
      }
    }
    .item-price {
      margin-left: 20px;
      flex: 1 1 15%;
    }
    .item-count {
      flex: 1 1 15%;
      display: flex;
      input {
        width: 80px;
      }
    }
  }
  .message {
    margin-top: 10px;
  }
  .money {
    margin-top: 10px;
  }
}
</style>