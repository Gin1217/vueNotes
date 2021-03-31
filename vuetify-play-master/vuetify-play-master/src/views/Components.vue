<template>
  <v-content class="ma-0">
    <v-toolbar color="cyan" elevation="12"></v-toolbar>
    <v-row class="ma-2">
      <v-col cols="12" md="3">
        <my-button color="pink" fab fixed @my-click="handleClick">
          <v-icon slot="suffix-icon" color="red">mdi-heart</v-icon>
        </my-button>
        <v-spacer class="mt-6"></v-spacer>
        <my-button disabled dark>
          <span>按钮2</span>
          <v-icon slot="suffix-icon" color="white">mdi-home</v-icon>
        </my-button>

        <v-spacer class="mt-6"></v-spacer>
        <my-button color="orange" small @click.native="handleClick">
          <i>按钮3</i>
        </my-button>
        <v-spacer class="mt-6"></v-spacer>
        <my-button color="#ccc" large @my-click="handleClick">
          <v-icon slot="pre-icon">mdi-apple</v-icon>
          <span>按钮4</span>
          <v-icon slot="suffix-icon">mdi-apple</v-icon>
        </my-button>
        <v-spacer class="mt-6"></v-spacer>
        <my-button color="purple" dark large block>
          <span>按钮5</span>
        </my-button>
      </v-col>
    </v-row>

    <!-- <h3 v-if="show">{{ app.userName }}</h3> -->
  </v-content>
</template>

<script>
import MyButton from '../components/MyButton'

export default {
  inject: ['app'],
  name: 'Components',
  data() {
    return {}
  },
  components: {
    MyButton
  },
  created() {},
  methods: {
    handleClick(name, number) {
      console.log(`子组件传递参数>>>>>>${name}    ${number}`)
    }
  }
}
</script>

<style scoped lang="scss"></style>
