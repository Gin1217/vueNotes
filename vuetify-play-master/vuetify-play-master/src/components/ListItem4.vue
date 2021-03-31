<template>
  <div>
    <v-chip
      v-for="(item, index) in list"
      :data-key="index"
      :key="index"
      close
      color="green lighten-3"
      label
      text-color="white"
      class="mt-2 mr-2"
      @click="delDataFromList(index)"
    >
      <v-icon left>mdi-label</v-icon>
      {{ item }}
    </v-chip>
  </div>
</template>
<script>
import { types } from '../store/types'
export default {
  name: 'ListItem4',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    delDataFromList(index) {
      this.$store.commit(types.DEL_DATA_TO_LIST, index)
    }
  }
}
</script>

<style scoped lang="scss"></style>
