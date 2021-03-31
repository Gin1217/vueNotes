<template>
  <div>
    <v-chip
      v-for="(item, index) in list"
      :data-key="index"
      :key="index"
      close
      color="cyan lighten-3"
      label
      text-color="white"
      class="mt-2 mr-2"
    >
      <v-icon left>mdi-label</v-icon>
      {{ item }}
    </v-chip>
  </div>
</template>
<script>
export default {
  name: 'ListItem3',
  props: {
    list: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style scoped lang="scss"></style>
