<template>
  <div class="app">
    <div class="nav">
      <router-link to="/"><img alt="Vue logo" class="logo" src="./assets/logo.png"></router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/walking-horse">Walking horse</router-link>
      <router-link to="/xo">XO game</router-link>
      <router-link to="/fiddle">Fiddle notes</router-link>
      <router-link to="/other">Other projects</router-link>
      <router-link to="/bookmarks">Bookmarks</router-link>
      <span class="contact">
        <a href="https://t.me/h_split">Telegram</a><br>
        <a href="https://www.linkedin.com/in/oleg-sak/">LinkedIn</a>
      </span>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
  @import '~normalize.scss/normalize';

  body {
    --color-green: #38ef7d;
    --color-red: #ff8e7b;
  }

  * {
    box-sizing: border-box;
  }

  a {
    font-weight: bold;
    color: #42b983;
    margin-bottom: 20px;
    text-decoration: none;
  }

  button {
    position: relative;
    margin: 10px 5px;
    background: linear-gradient(to right, #2193b0, #6dd5ed);
    border: none;
    height: 40px;
    width: 120px;
    border-radius: 6px;
    box-shadow: 5px 5px 15px 0 #00000070;
    outline: none;
    &:active {
      top: 1px;
      left: 1px;
      box-shadow: 4px 4px 15px 0 #00000070;
    }
    &.small {
      width: 75px;
    }
    &.red {
      background: linear-gradient(to right, #ff5a3d, var(--color-red));
    }
    &.disabled {
      opacity: .25%;
      pointer-events: none;
    }
  }
</style>

<style scoped lang="scss">
  .contact {
    width: 100%;
    font-size: 14px;
    line-height: 24px;
    padding-top: 10px;
    border-top: 1px solid;
  }
  .app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    display: flex;
    color: #ffffff;
    height: 100vh;
    overflow: hidden;
    > * {
      &:first-child {
        flex-basis: 15%;
      }
      &:last-child{
        flex-basis: 85%;
        background: linear-gradient(to bottom, #2c3e50, #5e6061);
      }
    }
  }

  .nav {
    padding: 30px;
    background: linear-gradient(to right, #2C5364, #203A43, #0F2027);
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      font-weight: bold;
      color: #ffffff;
      margin-bottom: 20px;
      text-decoration: none;
      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }

  .logo {
    height: 50px;
    width: 50px;
  }
</style>
