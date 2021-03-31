<template>
  <v-app>
    <v-app-bar app color="#fcb69f" dark class="gradient">
      <v-app-bar-nav-icon @click="$router.push('/')"></v-app-bar-nav-icon>

      <v-toolbar-title>TodoList</v-toolbar-title>
      {{ app.userName }}
      <v-btn color="cyan" @click="changeUserName">点击</v-btn>
      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <v-container class="fill-height">
        <v-row align="start" justify="start">
          <!-- 基本实现方式 -->
          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="400">
              <v-img class="white--text align-end" height="200px" src="../assets/img/6.jpg">
                <v-card-title>基本实现方式</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">输入内容按回车或点击添加</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>
                  <v-text-field
                    id="item"
                    label="Item"
                    name="item"
                    type="text"
                    v-model="inputBasic"
                    @keyup.enter="addDataBasic"
                  />
                  <v-btn color="primary" dark @click="addDataBasic">添加</v-btn>
                  <v-spacer></v-spacer>
                  <v-chip
                    v-for="(item, index) in basicList"
                    :key="index"
                    close
                    color="accent"
                    label
                    text-color="white"
                    class="mt-2 mr-2"
                    @click="delDataBasic(index)"
                  >
                    <v-icon left>mdi-label</v-icon>
                    {{ item }}
                  </v-chip>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- 组件化watch方式实现 -->
          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="400">
              <v-img class="white--text align-end" height="200px" src="../assets/img/1.jpg">
                <v-card-title>组件化watch实现</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">输入内容按回车或点击添加</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>
                  <v-text-field
                    id="item"
                    label="Item"
                    name="item"
                    type="text"
                    v-model="inputWatch"
                    @keyup.enter="addDataWatch"
                  />
                  <v-btn color="purple lighten-2" dark @click="addDataWatch">添加</v-btn>
                  <v-spacer></v-spacer>
                  <!-- 此处调用封装的ListItem组件，组件内封装了删除元素的方法，父组件绑定该方法 -->
                  <list-item :list="watchList" @delDataWatch="delDataWatch"></list-item>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- 组件化emit方式实现 -->
          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="400">
              <v-img class="white--text align-end" height="200px" src="../assets/img/2.jpg">
                <v-card-title>组件化emit实现</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">输入内容按回车或点击添加</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>
                  <v-text-field
                    id="item"
                    label="Item"
                    name="item"
                    type="text"
                    v-model="inputEmit"
                    @keyup.enter="addDataEmit"
                  />
                  <v-btn color="red lighten-2" dark @click="addDataEmit">添加</v-btn>
                  <v-spacer></v-spacer>
                  <!-- 此处调用封装的ListItem1组件，将自身的 delDataEmitFather绑定给子组件-->
                  <list-item1 :list="emitList" @delDataEmitFather="delDataEmitFather"></list-item1>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- 事件总线bus方式实现 -->
          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="400">
              <v-img class="white--text align-end" height="200px" src="../assets/img/4.jpg">
                <v-card-title>事件总线bus方式实现</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">输入内容按回车或点击添加</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>
                  <v-text-field
                    id="item"
                    label="Item"
                    name="item"
                    type="text"
                    v-model="inputBus"
                    @keyup.enter="addDataBus"
                  />
                  <v-btn color="teal lighten-2" dark @click="addDataBus">添加</v-btn>
                  <v-spacer></v-spacer>
                  <!--给子组件传递数据即可，事件通过bus传 -->
                  <list-item2 :list="busList"></list-item2>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- 组件化触发原生事件实现 -->
          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="400">
              <v-img class="white--text align-end" height="200px" src="../assets/img/3.jpg">
                <v-card-title>组件化触发原生事件实现</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">输入内容按回车或点击添加</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>
                  <v-text-field
                    id="item"
                    label="Item"
                    name="item"
                    type="text"
                    v-model="inputNative"
                    @keyup.enter="addDataNative"
                  />
                  <v-btn color="cyan lighten-2" dark @click="addDataNative">添加</v-btn>
                  <v-spacer></v-spacer>
                  <!--组件化触发原生事件实现-->
                  <list-item3 :list="nativeList" @click.native="delDataNative($event)"></list-item3>
                </div>
              </v-card-text>
            </v-card>
          </v-col>

          <!-- Vuex父子组件方式实现 -->
          <v-col cols="12" md="4">
            <v-card class="mx-auto" max-width="400">
              <v-img class="white--text align-end" height="200px" src="../assets/img/7.jpg">
                <v-card-title>Vuex实现</v-card-title>
              </v-img>
              <v-card-subtitle class="pb-0">输入内容按回车或点击添加</v-card-subtitle>
              <v-card-text class="text--primary">
                <div>
                  <v-text-field
                    id="item"
                    label="Item"
                    name="item"
                    type="text"
                    v-model="inputVuex"
                    @keyup.enter="addDataVuex"
                  />
                  <v-btn color="green lighten-2" dark @click="addDataVuex">添加</v-btn>
                  <v-spacer></v-spacer>
                  <!--vuex方式，只需要传值-->
                  <list-item4 :list="vuexList"></list-item4>
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import ListItem from '../components/ListItem'
import ListItem1 from '../components/ListItem1'
import ListItem2 from '../components/ListItem2'
import ListItem3 from '../components/ListItem3'
import ListItem4 from '../components/ListItem4'
import { mapGetters } from 'vuex'
import { types } from '../store/types'
export default {
  inject: ['app'],
  name: 'TodoList',
  components: {
    ListItem,
    ListItem1,
    ListItem2,
    ListItem3,
    ListItem4
  },
  data() {
    return {
      basicList: [],
      watchList: [],
      emitList: [],
      busList: [],
      nativeList: [],
      inputBasic: '',
      inputWatch: '',
      inputEmit: '',
      inputBus: '',
      inputNative: '',
      inputVuex: ''
    }
  },
  created() {
    //父组件的created里需要注册删除方法，组件可以触发该方法
    this.$bus.$on('delDataBus', (index) => {
      this.busList.splice(index, 1)
    })
  },
  methods: {
    //基础方式添加元素
    addDataBasic() {
      // inputBasic长度为0时候不添加
      if (this.inputBasic.length === 0) {
        return
      }
      //加入basicList尾部
      this.basicList.push(this.inputBasic)
      // 添加之后清空inputBasic
      this.inputBasic = ''
    },
    //组件watch方式添加元素
    addDataWatch() {
      if (this.inputWatch.length === 0) {
        return
      }
      this.watchList.push(this.inputWatch)
      this.inputWatch = ''
    },
    //组件emit方式添加元素
    addDataEmit() {
      if (this.inputEmit.length === 0) {
        return
      }
      this.emitList.push(this.inputEmit)
      this.inputEmit = ''
    },
    //事件总线bus方式添加元素
    addDataBus() {
      if (this.inputBus.length === 0) {
        return
      }
      this.busList.push(this.inputBus)
      this.inputBus = ''
    },
    //native方式添加元素
    addDataNative() {
      if (this.inputNative.length === 0) {
        return
      }
      this.nativeList.push(this.inputNative)
      this.inputNative = ''
    },
    //Vuex方式添加元素
    addDataVuex() {
      if (this.inputVuex.length === 0) {
        return
      }
      this.$store.commit(types.ADD_DATA_TO_LIST, this.inputVuex)
      this.inputVuex = ''
    },
    //基础方式删除元素
    delDataBasic(index) {
      //从basicList中删除当前index位置的一个元素
      this.basicList.splice(index, 1)
    },
    delDataWatch(index) {
      this.watchList.splice(index, 1)
    },
    //组件emit方式删除元素
    delDataEmitFather(index) {
      //从emitList中删除当前index位置的一个元素
      this.emitList.splice(index, 1)
    },
    //组件化触发原生事件删除元素
    delDataNative(event) {
      let index = event.target.getAttribute('data-key')
      this.nativeList.splice(index, 1)
    },
    changeUserName() {
      alert('change')
      this.app.userName = '陶然然'
      this.app.getUserName()
    }
  },
  computed: {
    ...mapGetters(['vuexList'])
  }
}
</script>

<style scoped lang="scss">
.gradient {
  background: #654ea3;
  background: -webkit-linear-gradient(to right, rgb(101, 78, 163), rgb(234, 175, 200));
  background: linear-gradient(to right, rgb(149, 113, 176), rgb(234, 175, 200));
}
</style>
