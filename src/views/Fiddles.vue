<template>
    <div class="Fiddle">
      Fiddle notes (some fiddles very old)
      <article>
        <h4>CSS sliders without JS</h4>
        Accordion hover and buttons to change shape of block <a href="https://jsfiddle.net/qetbkdx6/">https://jsfiddle.net/qetbkdx6/</a><br>
        Slider with buttons based on opacity <a href="https://jsfiddle.net/qetbkdx6/1">https://jsfiddle.net/qetbkdx6/1</a><br>
        Infinity slider with buttons prev/next and custom choose <a href="https://jsfiddle.net/qetbkdx6/2">https://jsfiddle.net/qetbkdx6/2</a>
        <br>
      </article>
      <article>
        <h4>CSS features</h4>
        Counter CSS <a href="https://jsfiddle.net/vc4cpdod/">https://jsfiddle.net/vc4cpdod/</a><br>
        Centered and sized img inside square block <a href="https://jsfiddle.net/r0m8oryq/">https://jsfiddle.net/r0m8oryq/</a><br>
      </article>
      <article>
        <h4>Shop without JS???</h4>
        Yes, it's possible, wrap this into form and add action link <a href="https://jsfiddle.net/yh87jfzc/">https://jsfiddle.net/yh87jfzc/</a>
      </article>
      <article>
        <h4>Some Js Patterns</h4>
        Module <a href="https://jsfiddle.net/osg8gv9f/">https://jsfiddle.net/osg8gv9f/</a><br>
        Singleton <a href="https://jsfiddle.net/osg8gv9f/1/">https://jsfiddle.net/osg8gv9f/1/</a><br>
        MVC <a href="https://jsfiddle.net/7m4yjoLs/">https://jsfiddle.net/7m4yjoLs/</a><br>
        Observer <a href="https://jsfiddle.net/30t1f9zp/">https://jsfiddle.net/30t1f9zp/</a>
      </article>
      <article>
        <h4>Js Tricks</h4>
        <div class="codeExample">
          <span class="code">const getClass = obj => ({}.toString.call(obj).slice(8, -1))</span><br>
          <span class="code">const snapshot = (obj, msg) => console.log(msg || 'snapshot', JSON.parse(JSON.stringify(obj)))</span>
        </div>
        Modal mode (prevent scroll body when modal is open) <a href="https://jsfiddle.net/4oenLzkr/">https://jsfiddle.net/4oenLzkr/</a><br>
        Open/focus new tab in browser <a href="https://jsfiddle.net/fck2sj1b/">https://jsfiddle.net/fck2sj1b/</a><br>
        Get Object With Similar Values <a href="https://jsfiddle.net/jr3benz5/">https://jsfiddle.net/jr3benz5/</a><br>
        Custom Promise <a href="https://jsfiddle.net/z5g19dr8/4/">https://jsfiddle.net/z5g19dr8/4/</a><br>
        Show Author (leave your signature on your project) <a href="https://jsfiddle.net/rabgxp62/">https://jsfiddle.net/rabgxp62/</a><br>
        <i>'й' !== 'й' && 'й'.length !== 'й'.length </i><a href="https://jsfiddle.net/2xjg15bu/">https://jsfiddle.net/2xjg15bu/</a>
      </article>
      <article>
        <h4>Js task about callbacks with timers</h4>
        Task <a href="https://jsfiddle.net/v5b8hdvt/1/">https://jsfiddle.net/v5b8hdvt/1/</a><br>
        Solution <a href="https://jsfiddle.net/pnrac2he/">https://jsfiddle.net/pnrac2he/</a>
      </article>
      <article>
        <h4>Js task: check for contains pair with sum as K</h4>
        Solution with performance tests <a href="https://jsfiddle.net/4aLms7g5/">https://jsfiddle.net/4aLms7g5/</a>
      </article>
      <article>
        <h4>Js task: execute <i>12-2+333/7+1*2</i> without using eval</h4>
        Solution <a href="https://jsfiddle.net/jxkpchbo/">https://jsfiddle.net/jxkpchbo/</a>
      </article>
      <article>
        <h4>Js task: the knapsack problem or rucksack problem</h4>
        Solution <a href="https://jsfiddle.net/Lp5rzhnu/">https://jsfiddle.net/Lp5rzhnu/</a>
      </article>
    </div>
</template>

<script>
  export default {
    name: 'fiddles',
  }
</script>

<style scoped lang="scss">
  .Fiddle {
    padding: 15px;
    overflow: auto;
    .codeExample {
      line-height: 1;
      font-size: 14px;
      font-family: Consolas;
      margin-bottom: 10px;
      .code {
        color: #6dd5ed;
      }
    }
  }
  h4 {
    line-height: 1;
  }
  article {
    text-align: left;
    line-height: 26px;
    padding-bottom: 10px;
    border-bottom: 1px dashed var(--color-green);
    &:last-of-type {
      border-bottom: none;
    }
  }
  a:hover {
    text-decoration: underline;
  }
</style>
