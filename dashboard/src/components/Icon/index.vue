<template>
      <component :is="props.name" />
</template>

<script>
import Loading from './Loading.vue';

export default {
  components: {
    Loading
  },

  props: {
    name: {
      type: String,
      required: true
    }
  },
  setup (props) {
    

    return {
      props
    }
  }
}
</script>

<style lang="scss" scoped>

</style>