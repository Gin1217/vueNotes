<template>
  <div>
    <v-chip
      v-for="(item, index) in list"
      :key="index"
      close
      color="red lighten-3"
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
  name: 'ListItem1',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    //子组件通过emit去触发父组件的delDataEmitFather事件
    handleClick(index) {
      this.$emit('delDataEmitFather', index)
    }
  }
}
</script>

<style scoped lang="scss"></style>
