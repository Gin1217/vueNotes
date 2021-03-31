<template>
  <v-card>
    <v-toolbar color="teal" dark flat>
      <v-app-bar-nav-icon to="/"></v-app-bar-nav-icon>

      <v-toolbar-title>My GitHub</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs v-model="tab" align-with-title>
          <v-tabs-slider color="yellow"></v-tabs-slider>

          <v-tab v-for="item in items" :key="item">
            {{ item }}
          </v-tab>
        </v-tabs>
      </template>
    </v-toolbar>

    <v-tabs-items v-model="tab">
      <v-tab-item key="0">
        <my-list :list="followers" @cancel-follow="unFollow"></my-list>
      </v-tab-item>
      <v-tab-item key="1">
        <v-card flat>
          <v-card-text>仓库</v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs-items>
    <my-list></my-list>
  </v-card>
</template>

<script>
import MyList from '../components/MyList'
export default {
  name: 'GitHub',
  data() {
    return {
      followers: [],
      repos: [],
      tab: null,
      items: ['Followers', 'repositories']
    }
  },
  components: { MyList },
  created() {
    this.axios.get('/api/followers').then((res) => {
      // console.log(res.data.data)
      this.followers = res.data.data
    })
    this.axios.get('/api/repos').then((res) => {
      // console.log(res.data.data)
      this.repos = res.data.data
    })
  },
  methods: {
    unFollow(index) {
      alert(index)
      this.followers.splice(index, 1)
    }
  },
  computed: {}
}
</script>

<style scoped lang="scss"></style>
