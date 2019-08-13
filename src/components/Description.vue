<template>
  <div class="Description">
    <h2 class="title">Welcome to vue example</h2>
    <article>
      Here you probably can find nothing useful
      <p>
        <i>But if you still here, you can look at some examples:</i>
      </p>
      How the alone horse walking on the board <router-link to="/walking-horse">here</router-link>.
      <br>
      <br>
      Play in XO game <router-link to="/xo">here</router-link>.
      <br>
      <br>
      Some fiddles HTML/CSS/JS <router-link to="/fiddle">here</router-link>.
      <br>
      <br>
      Other projects on github <router-link to="/other">here</router-link>.
      <br>
      <br>
      Bookmarks <router-link to="/bookmarks">here</router-link>.
      <br>
      <br>
      <a href="https://github.com/hsplit/hsplit.github.io">Repo</a> of this project.
    </article>
    <div class="warning">Don't look at vue code please, save your eyes.</div>
  </div>
</template>

<script>
export default {
  name: 'Description',
}
</script>

<style scoped lang="scss">
  .Description {
    padding: 20px;
  }
  .title {
    margin-top: 0;
  }
  article {
    text-align: left;
  }
  .warning {
    font-size: 12px;
    margin-top: 15px;
    text-align: left;
    color: var(--color-red);
    padding-top: 5px;
    border-top: 1px solid;
  }
</style>
