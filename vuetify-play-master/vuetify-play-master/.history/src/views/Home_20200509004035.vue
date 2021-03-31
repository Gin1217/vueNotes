<template>
  <v-app>
    <v-app-bar
      app
      clipped-left
      color="primary"
      height="100"
      src="../assets/img/3.jpg"
      shrink-on-scroll
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title>开到荼蘼</v-toolbar-title>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(236,97,145,.7), rgba(128,208,199,.8)"
        ></v-img>
      </template>
      <v-spacer></v-spacer>
      <div class="mt-1">
        <v-avatar>
          <v-img src="../assets/img/avatar/taoranran.jpg"></v-img>
        </v-avatar>
        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="secondary">mdi-heart</v-icon>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      clipped
      dark
      color="secondary"
      :mini-variant.sync="mini"
      class="elevation-12"
    >
      <v-list dense>
        <v-list-item link @click="$router.push('/')">
          <v-list-item-action>
            <v-icon @click.stop="mini = !mini">mdi-view-dashboard</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Dashboard</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/components">
          <v-list-item-action>
            <v-icon>mdi-at</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Components</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/login">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/todo">
          <v-list-item-action>
            <v-icon>mdi-apple</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>TodoList</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/github">
          <v-list-item-action>
            <v-icon>mdi-github</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>GitHub</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-content class="accent">
      <v-container class="fill-heigh">
        <v-row align="start" justify="start">
          <v-col cols="12" class="shrink" md="4" v-for="(img, index) in imgs" :key="index">
            <v-hover v-slot:default="{ hover }" open-delay="200">
              <v-card class="mx-auto secondary" dark :elevation="hover ? 16 : 2" link>
                <v-img :src="require('../assets/img/avatar/' + img)" height="220px"></v-img>
                <v-card-title>
                  Western road trips
                </v-card-title>
                <v-card-subtitle>
                  1,000 miles of wonder
                </v-card-subtitle>
                <v-card-actions>
                  <v-btn text color="accent">Share</v-btn>
                  <v-btn color="accent" text>
                    Explore
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="show = !show">
                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                  </v-btn>
                </v-card-actions>
                <v-expand-transition>
                  <div v-show="show">
                    <v-divider></v-divider>
                    <v-card-text>
                      I'm a thing. But, like most politicians, he promised more than he could
                      deliver. You won't have time for sleeping, soldier, not with all the bed
                      making you'll be doing.
                    </v-card-text>
                  </div>
                </v-expand-transition>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <!-- <v-footer app color="primary">
      <span>&copy; 2020</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    show: false,
    mini: false,
    imgs: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', 'taoranran.jpg']
  }),
  created() {
    this.$vuetify.theme.dark = false
    //mutation1
    this.$store.commit('CAT', { name: 'newCat1' })
    //mutation2
    this.changeCatAge({ age: 20 })
    //action 2秒后执行异步更新
    this.$store.dispatch('updateCat')
    this.handleUpdateCat({ name: '我是辅助函数定义的' })
    //getter过滤 返回的值
    console.log(this.$store.getters.filterCat)
  },
  methods: {
    //数组的方式
    ...mapMutations({
      changeCatAge: 'CAT'
    }),
    ...mapActions({
      handleUpdateCat: 'updateCat'
    })
  }
}
</script>
