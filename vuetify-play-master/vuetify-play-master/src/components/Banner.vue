<template>
  <div class="banner" :style="bannerStyles" :class="`banner__${position}`" @click="touched">
    <slot></slot>
  </div>
</template>
<script>
const defaultStyles = {
  left: 0,
  right: 0
}
export default {
  name: 'FlockBanner',
  props: {
    position: {
      type: String,
      default: 'top',
      validator(position) {
        return ['top', 'bottom'].indexOf(position) > -1
      }
    },
    styles: {
      type: Object,
      default: () => ({})
    }
  },
  created() {
    console.log('Banner: created()')
  },
  data() {
    return {
      bannerStyles: {
        ...defaultStyles,
        ...this.styles
      }
    }
  },
  methods: {
    touched() {
      console.log('Hey!')
    }
  }
}
</script>
<style lang="scss" scoped>
.banner {
  padding: 12px;
  background-color: #fcf6cd;
  color: #f6a623;
  text-align: left;
  position: fixed;
  z-index: 2;
}
.banner__top {
  top: 0;
}
.banner__bottom {
  bottom: 0;
}
</style>
