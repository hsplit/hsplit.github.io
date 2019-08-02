<template>
  <div class="Other">
    <h3>Other projects on github</h3>
    <article>
      <b>Indexed DB </b><a href="https://hsplit.github.io/indexed-db/">Demo</a><br>
      <a href="https://github.com/hsplit/indexed-db">https://github.com/hsplit/indexed-db</a>
      <br>
      <br>
      Html Course Project <a href="https://hsplit.github.io/html-course-project/">Demo</a><br>
      <a href="https://github.com/hsplit/html-course-project">https://github.com/hsplit/html-course-project</a>
      <br>
      <br>
      Split your blocks in html by random colored shadows <span class="shadows" @click="shadowsSplit(0, 30)">Try It!</span>
      <br>
      Outline <input type="number" min="0" max="3" v-model="outline"> px<br>
      Shadow <input type="number" min="0" max="30" step="5" v-model="shadow"> px<br>
      You can change route and write in console <span class="hintCode">randomShadowTags()</span><br>
      <a href="https://github.com/hsplit/random-shadow-tags-split">https://github.com/hsplit/random-shadow-tags-split</a>
      <br>
      <br>
      Webpack 4. Simple template<br>
      <a href="https://github.com/hsplit/webpack-simple-template">https://github.com/hsplit/webpack-simple-template</a>
      <br>
      <br>
      Angular Notes <a href="https://hsplit.github.io/angular-notes/">Demo</a><br>
      <a href="https://github.com/hsplit/angular-notes">https://github.com/hsplit/angular-notes</a>
      <br>
      <br>
      Draw SVG. Angular with Material UI <a href="https://hsplit.github.io/draw-svg-angular/">Demo</a><br>
      <a href="https://github.com/hsplit/draw-svg-angular">https://github.com/hsplit/draw-svg-angular</a>
      <br>
      <br>
      <b>Git Conflict Manager</b><br>
      Client <a href="https://github.com/hsplit/conflict-manager-client">https://github.com/hsplit/conflict-manager-client</a><br>
      Server <a href="https://github.com/hsplit/conflict-manager-server">https://github.com/hsplit/conflict-manager-server</a><br>
      Mobile App <a href="https://github.com/hsplit/conflict-manager-mobile-app">https://github.com/hsplit/conflict-manager-mobile-app</a>
    </article>
  </div>
</template>

<script>
  import { randomShadowTags } from '@/utils'
  export default {
    name: 'Other',
    data: () => ({
      outline: 0,
      shadow: 0,
    }),
    watch: {
      outline () { this.shadowsSplit(this.outline, this.shadow) },
      shadow () { this.shadowsSplit(this.outline, this.shadow) },
    },
    methods: {
      shadowsSplit (outline, shadow) {
        this.outline = outline
        this.shadow = shadow
        randomShadowTags(outline, shadow)
      }
    },
  }
</script>

<style scoped lang="scss">
  .Other {
    padding: 15px;
    overflow: auto;
    article {
      text-align: left;
      margin: 10px;
      line-height: 28px;
    }
    a {
      text-decoration: underline;
    }
    .shadows {
      color: #42b983;
      cursor: pointer;
      font-weight: bold;
      text-decoration: underline;
    }
    input[type=number] {
      color: #000000;
      width: 40px;
    }
    .hintCode {
      color: #6dd5ed;
    }
  }
</style>
