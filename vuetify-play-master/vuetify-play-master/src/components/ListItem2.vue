<template>
  <div>
    <v-chip
      v-for="(item, index) in list"
      :key="index"
      close
      color="teal lighten-3"
      label
      text-color="white"
      class="mt-2 mr-2"
      @click="handleClick(index)"
    >
      <v-icon left>mdi-label</v-icon>
      {{ item }}
    </v-chip>
  </div>
</template>
<script>
export default {
  name: 'ListItem2',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    //子组件通过事件总线和emit去触发父组件的ddelDataBus方法
    handleClick(index) {
      this.$bus.$emit('delDataBus', index)
    }
  }
}
</script>

<style scoped lang="scss"></style>
