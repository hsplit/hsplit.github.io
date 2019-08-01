<template>
  <div class="XO">
    <h4>XO game</h4>
    <div class="content">
      <div>
        <div class="field" :class="{freeze: !!winCondition}">
          <div
            v-for="(val, i) in field"
            :key="i"
            class="cell"
            :class="{
          freeze: !!val,
          winnerX: isWinnerX(i),
          winnerO: isWinnerO(i),
        }"
            @click="cellClick(i)"
          >
            {{ val }}
          </div>
        </div>
        <label>With PC
          <input type="checkbox" v-model="withPC">
        </label>
        <br>
        <button @click="resetField">Restart</button>
        <br>
        <span v-if="!!winCondition">Player {{ currentPlayer === 'X' ? 1 : 2 }} won!</span>
        <span v-if="isDraw">Draw!</span>
      </div>
      <div class="wins">
        <span class="p1">Player 1(X): </span>{{ winsX }}<br><br>
        <span class="p2">Player 2(O): </span>{{ winsO }}
        <hr>
        <button
          class="red"
          :class="{ disabled: !winsX && !winsO }"
          @click="resetXO"
          :disabled="!winsX && !winsO"
        >
          Reset Score
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .XO {
    h4 {
      margin: 0;
    }
    label {
      cursor: pointer;
    }
    padding: 15px;
    .content {
      display: flex;
      .field {
        display: flex;
        flex-wrap: wrap;
        width: 150px;
        height: 150px;
        margin: 15px;
        user-select: none;
        .cell {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          cursor: pointer;
          &:nth-child(-n + 6) {
            border-bottom: 1px solid white;
          }
          &:not(:nth-child(3n)) {
            border-right: 1px solid white;
          }
          &.winnerX {
            color: var(--color-green);
          }
          &.winnerO {
            color: var(--color-red);
          }
        }
      }
      .wins {
        padding: 20px;
        margin: 20px;
        .p1 {
          color: var(--color-green);
        }
        .p2 {
          color: var(--color-red);
        }
      }
    }
  }
  .freeze {
    pointer-events: none;
  }
</style>

<script>
  import { mapGetters, mapActions } from 'vuex'

  const winConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6], // obliquely
  ]

  const getWinCondition = (value, field) =>
    winConditions.find(condition => condition.every(index => field[index] === value))

  export default {
    name: 'XO',
    data: () => ({
      field: new Array(9).fill(undefined),
      currentPlayer: 'X',
      winCondition: null,
      withPC: true,
    }),
    computed: {
      ...mapGetters(['winsX', 'winsO']),
      isDraw () {
        if (this.winCondition) {
          return false
        }
        return this.field.every(i => i)
      }
    },
    methods: {
      ...mapActions(['resetXO', 'win']),
      isWinnerX (i) {
        const { winCondition, currentPlayer } = this
        return winCondition && currentPlayer === 'X' && winCondition.includes(i)
      },
      isWinnerO (i) {
        const { winCondition, currentPlayer } = this
        return winCondition && currentPlayer === 'O' && winCondition.includes(i)
      },
      resetField () {
        this.field = new Array(9).fill(undefined)
        this.winCondition = null
        this.currentPlayer = 'X'
      },
      cellClick (index) {
        this.$set(this.field, index, this.currentPlayer)
        const winCondition = getWinCondition(this.currentPlayer, this.field)
        if (winCondition) {
          this.winCondition = winCondition
          this.win(this.currentPlayer)
        } else {
          this.swapPlayer()
          this.withPC && this.pcStep()
        }
      },
      swapPlayer () {
        if (this.currentPlayer === 'X') {
          this.currentPlayer = 'O'
        } else {
          this.currentPlayer = 'X'
        }
      },
      pcStep () {
        if (this.currentPlayer !== 'O') { return }
        const index = this.field.lastIndexOf(undefined)
        this.cellClick(index)
      },
    },
  }
</script>
