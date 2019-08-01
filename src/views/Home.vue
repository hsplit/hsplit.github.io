<template>
  <div class="home">
    <Description />
  </div>
</template>

<script>
// @ is an alias to /src
import Description from '@/components/Description.vue'

export default {
  name: 'home',
  components: {
    Description,
  },
}
</script>

<style scoped lang="scss">
</style>
