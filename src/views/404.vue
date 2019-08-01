<template>
  <div class="NotFound">
    <h3>
      You are on the wrong way, boy! <i>somebody / something else</i>
    </h3>
    <h3 class="error">404 This page is not found <i>{{currentRout}}</i></h3>
    <router-link to="/">Go Home</router-link>
  </div>
</template>

<style scoped lang="scss">
  .NotFound {
    padding-top: 50px;
  }
  .error {
    color: indianred;
    margin: 40px 0;
  }
  i {
    font-size: 14px;
    color: grey;
  }
  a {
    text-decoration: underline;
  }
</style>

<script>
  export default {
    name: 'NotFound',
    computed: {
      currentRout: function () {
        return this.$router.history.current.path
      }
    },
  }
</script>
