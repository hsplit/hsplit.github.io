<template>
  <div
    class="ChessCell"
    :class="{ number: !isNaN(+text), missed: !+text && walked }"
    @click="cellClick($event, { x, y})"
  >
    <!--<img v-if="horse" src="../assets/horse.png" alt="">-->
    <span v-if="!horse">{{text}}</span>
  </div>
</template>

<script>
  export default {
    name: 'ChessCell',
    props: ['text', 'horse', 'cellClick', 'x', 'y', 'walked'],
  }
</script>

<style scoped lang="scss">
  .ChessCell {
    margin: 1px;
    border: 1px solid white;
    height: 25px;
    width: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    cursor: pointer;
    > img {
      width: 100%;
      height: 100%;
    }
    span {
      font-size: 10px;
    }
  }
  .number {
    border-color: var(--color-green);
  }
  .missed {
    border-color: var(--color-red);
  }
</style>
