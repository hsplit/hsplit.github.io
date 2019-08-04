<template>
  <li class="BookmarkCard">
    <span class="title" :class="{ opened: opened }" @click="toggle">{{ bookmark.title }}</span>
    <ul v-if="opened">
      <li v-for="(link, k) in bookmark.links" :key="k">
        {{ link.text }} <a :href="link.href">{{ link.ltext || link.href }}</a>
      </li>
    </ul>
  </li>
</template>

<script>
  export default {
    name: 'BookmarkCard',
    props: ['bookmark'],
    data: () => ({
      opened: false,
    }),
    methods: {
      toggle () {
        this.opened = !this.opened
      },
    }
  }
</script>

<style scoped lang="scss">
  .BookmarkCard {
     .title {
       display: block;
       position: relative;
       cursor: pointer;
       transition: color .1s ease-in;
       margin-bottom: 5px;
       &:hover {
         color: #6dd5ed;
       }
       &::before {
         content: '+ ';
         position: absolute;
         left: -15px;
       }
       &.opened::before {
         content: '- ';
       }
     }
    li {
      padding: 5px;
    }
  }
</style>
