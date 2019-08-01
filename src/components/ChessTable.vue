<template>
  <div class="ChessTable" v-bind:class="{ disabled: disabled }">
    <div v-for="(line, x) in table" :key="x" class="line">
      <ChessCell
        v-for="(cell, y) in line"
        :key="y"
        :text="cell"
        :horse="isHorseHere(cell)"
        :cellClick="cellClick"
        :x="x"
        :y="y"
        :walked="walked"
      >
      </ChessCell>
    </div>
    <img :style="{...pos}" class="horse" src="../assets/horse.png" alt="" @click="horseClick">
  </div>
</template>

<style scoped lang="scss">
  .ChessTable {
    position: relative;
  }
  .line {
    display: flex;
  }
  .disabled {
    pointer-events: none;
  }
  .horse {
    position: absolute;
    height: 25px;
    width: 25px;
    filter: invert(1);
    transition: all .1s;
  }
</style>

<script>
  import ChessCell from '@/components/ChessCell.vue'

  export default {
    name: 'ChessTable',
    components: {
      ChessCell,
    },
    props: ['table', 'horsePos', 'disabled', 'styleHorse', 'cellClick', 'walked', 'horseClick'],
    computed: {
      pos () {
        return this.$props.styleHorse
      },
    },
    methods: {
      isHorseHere (cell) {
        const { table, horsePos } = this
        return table[horsePos.x][horsePos.y] === cell
      }
    },
  }
</script>
