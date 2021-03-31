<template>
  <v-row class="pl-12 pr-12">
    <v-col cols="12" md="2" v-for="(item, index) in list" :key="index">
      <v-card elevation="12">
        <v-card-subtitle class="cyan"> {{ item.login }} </v-card-subtitle>
        <v-card-text>
          <v-img :src="item.avatar_url"> </v-img>
        </v-card-text>
        <v-card-actions>
          <!-- <v-btn color="cyan" dark @click="handleClick($event, index)">
            UnFollow
          </v-btn> -->
          <my-button color="#ccc" dark small @click.native="handleClick($event, index)">
            <span>UnFollow</span>
            <v-icon slot="suffix-icon" color="white">mdi-cancel</v-icon>
          </my-button>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import MyButton from './MyButton'
export default {
  name: 'MyList',
  components: { MyButton },
  data() {
    return {}
  },
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    handleClick(event, index) {
      console.log(index)
      this.$emit('cancel-follow', index)
    }
  },
  mounted() {},
  computed: {}
}
</script>

<style scoped lang="scss"></style>
