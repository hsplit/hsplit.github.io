<template>
  <div class="Bookmarks">
    <h3>Bookmarks</h3>
    <ul>
      <BookmarkCard v-for="(bookmark, i) in bookmarks" :key="i" :bookmark="bookmark">
      </BookmarkCard>
    </ul>
  </div>
</template>

<script>
  import BookmarkCard from '@/components/BookmarkCard.vue'
  export default {
    name: 'Bookmarks',
    components: {
      BookmarkCard,
    },
    data: () => ({
      bookmarks: [
        {
          title: 'To read (RU)',
          links: [
            { text: 'Learn Javascript', href: 'https://learn.javascript.ru/' },
            { text: 'METANIT.COM', href: 'https://metanit.com/web/' },
            { text: 'SOLID book', href: 'https://ota-solid.now.sh/' },
            { text: 'Про токены', href: 'https://gist.github.com/zmts/802dc9c3510d79fd40f9dc38a12bccfc' },
          ],
        },
        {
          title: 'JS Sandbox',
          links: [
            { href: 'https://codepen.io/pen/' },
            { href: 'https://jsfiddle.net/' },
          ],
        },
        {
          title: 'Async JS',
          links: [
            { text: 'JavaScript: методы асинхронного программирования', href: 'https://m.habr.com/ru/company/ruvds/blog/337662/' },
            { text: 'Tasks, microtasks, queues and schedules', href: 'https://jakearchibald.com/2015/tasks-microtasks-queues-and-schedules/' },
          ],
        },
        {
          title: 'React',
          links: [
            { text: 'Learn React JS', href: 'https://learn-reactjs.ru/home' },
            { text: 'React Lifecycle', href: 'http://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/' },
            { text: 'React Developer Roadmap', href: 'https://github.com/adam-golab/react-developer-roadmap' },
          ],
        },
        {
          title: 'Regex',
          links: [
            { text: 'Online regex tester', href: 'https://regex101.com/' },
            { text: 'Regex шпаргалка', href: 'http://froland.ru/samodel/jshelp/regexp0.html' },
            { text: 'Регулярные выражения на примерах', href: 'https://vk.com/@itcookies-regulyarnye-vyrazheniya-na-primerah' },
          ],
        },
        {
          title: 'CSS, design, styling',
          links: [
            { text: 'uiGradients', href: 'https://uigradients.com/' },
            { text: 'Instant HEX to RGB or RGB to HEX', href: 'https://www.webfx.com/web-design/hex-to-rgb/' },
            { text: 'Colors naming (RU)', href: 'https://colorscheme.ru/color-names.html' },
            { text: 'CSS shapes', href: 'https://frontender.info/css-shapes/' },
            { text: 'Stock photos', href: 'https://www.istockphoto.com/ru' },
            { text: 'Subtle Patterns', href: 'https://www.toptal.com/designers/subtlepatterns/' },
          ],
        },
        {
          title: 'Icons',
          links: [
            { href: 'https://www.freepik.com/' },
            { href: 'https://www.flaticon.com/' },
          ],
        },
        {
          title: 'SVG',
          links: [
            { text: 'SVG-path', href: 'http://css.yoksel.ru/svg-path/' },
            { text: 'SVG-editor', href: 'https://editor.method.ac/' },
          ],
        },
        {
          title: 'Git',
          links: [
            { href: 'https://git-scm.com/book/ru/v2' },
            { href: 'https://learngitbranching.js.org/' },
          ],
        },
        {
          title: 'Telegram',
          links: [
            { text: 'JavaScript Rules', href: 'https://t.me/jsrules' },
            { text: 'Archakov Blog', href: 'https://t.me/archakov_im' },
            { text: 'maxpfrontend', href: 'https://t.me/maxpfrontend' },
            { text: 'JavaScript and Node.js', href: 'https://t.me/HowProgrammingWorks' },
          ],
        },
        {
          title: 'Youtube',
          links: [
            { ltext: 'link', text: 'JavaScript.ru', href: 'https://www.youtube.com/channel/UCKPbiit_j8ycmkutM0wVzdA' },
            { ltext: 'link', text: 'WebDev с нуля. Канал Алекса Лущенко', href: 'https://www.youtube.com/channel/UCP-xJwnvKCGyS-nbyOx1Wmg' },
            { ltext: 'link', text: 'Timur Shemsedinov', href: 'https://www.youtube.com/channel/UChSGI2R2kRMjzXJuYqHWQZg' },
            { ltext: 'link', text: 'Fun Fun Function', href: 'https://www.youtube.com/channel/UCO1cgjhGzsSYb1rsB4bFe4Q' },
            { ltext: 'link', text: 'Max Frontend', href: 'https://www.youtube.com/channel/UCqJyAVWwIqPWKEkfCSP1y4Q' },
            { ltext: 'link', text: 'Пятиминутка React', href: 'https://www.youtube.com/channel/UCtcMCp5GwNdQuloP4v5slfw' },
            { ltext: 'link', text: 'CSSSR', href: 'https://www.youtube.com/channel/UCdkZ6ckHOJ3DjAYxoGeMG0w' },
            { ltext: 'link', text: 'Monsterlessons', href: 'https://www.youtube.com/channel/UCyUFMVZ6VnbB5a8d_EyrFBQ' },
            { ltext: 'link', text: 'Glo Academy — HTML, CSS и JS', href: 'https://www.youtube.com/channel/UCVswRUcKC-M35RzgPRv8qUg' },
            { ltext: 'link', text: 'CodeDojo', href: 'https://www.youtube.com/channel/UCY10FZglXJ8RL3xB04VpykQ' },
            { ltext: 'link', text: 'Sorax', href: 'https://www.youtube.com/user/ArtSorax' },
          ],
        },
        {
          title: 'Other',
          links: [
            { text: 'Markdown editor', href: 'https://dillinger.io' },
            { text: 'JSONPlaceholder', href: 'https://jsonplaceholder.typicode.com/' },
            { text: 'particles.js', href: 'https://vincentgarreau.com/particles.js/' },
            { text: 'Page speed', href: 'https://developers.google.com/speed/pagespeed/insights/' },
            { text: 'Font Converter', href: 'https://onlinefontconverter.com' },
            { text: 'Online Document Viewer', href: 'https://www.onlinedocumentviewer.com/' },
          ],
        },
      ],
    }),
  }
</script>

<style scoped lang="scss">
  .Bookmarks {
    text-align: left;
    padding: 15px;
    overflow: auto;
    h3 {
      text-align: center;
      margin-top: 0;
    }
    ul {
      list-style-type: none;
      li {
        margin: 10px;
      }
    }
  }
</style>
