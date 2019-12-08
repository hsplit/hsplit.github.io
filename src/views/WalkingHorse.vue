<template>
  <div class="WalkingHorse">
    How it works, algorithm on <a href="https://jsfiddle.net/avme0fc6/">jsfiddle</a>
    <div class="content">
      <div>
        <ChessTable
          :table="renderTable"
          :horsePos="position"
          :disabled="!fieldEnabled"
          :styleHorse="dPosHorse"
          :cellClick="setPosition"
          :walked="walked"
          :horseClick="resetTable"
        >
        </ChessTable>
        <div class="controls">
          <label>Position:
            <input
              maxlength="2"
              :disabled="!fieldEnabled"
              type="text"
              :value="dPos"
              @input="setPosition"
            >
          </label>
          <br><br>
          <label>Delay: {{ delay || '4 ~ 20' }}ms<br>
            <input
              type="range"
              min="0"
              max="500"
              step="50"
              :disabled="!fieldEnabled"
              v-model="delayTimer"
            >
          </label>
          <br>
          <button @click="goWalk" :disabled="!fieldEnabled">
            Go Walk
          </button>
          <button v-if="!fieldEnabled" class="small red" @click="stop">
            Stop
          </button>
          <button v-if="history.length" class="red" @click="clearHistory">
            Clear History
          </button>
        </div>
      </div>
      <div class="history">
        <div class="way" v-for="(cells, i) in history" :key="i">
          <div v-if="typeof cells === 'string'">
            {{ cells }}
          </div>
          <div v-else="">
            {{ cells.join(', ') }} -
            <span :class="{full: cells.length === 64}">{{ cells.length }} of 64</span>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
  .WalkingHorse {
    padding: 15px;
    overflow: hidden;
    .content {
      display: flex;
      padding: 25px 0;
      height: 100%;
      .history {
        margin-left: 20px;
        overflow: auto;
        .way {
          font-size: 12px;
          text-align: left;
          padding: 5px 0;
          border-bottom: 1px solid;
          &:first-child {
            border-top: 1px solid;
          }
          span {
            color: var(--color-red);
            &.full {
              color: var(--color-green);
            }
          }
        }
      }
    }
  }
  .controls {
    text-align: left;
    margin: 10px 0;
    width: 220px;

    input {
      text-align: center;
      font-size: 13px;
      outline: 0;
      color: #000000;
      width: 30px;
      resize: none;
      max-height: 200px;
      border-radius: 6px;
      padding: 6px;
      margin-bottom: 0;
      border: none;
      margin-right: 5px;
      &[type="range"] {
        width: 215px;
      }
    }
  }
</style>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import ChessTable from '@/components/ChessTable.vue'

  const initTable = [
    ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'],
    ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8'],
    ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'],
    ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8'],
    ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8'],
    ['F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8'],
    ['J1', 'J2', 'J3', 'J4', 'J5', 'J6', 'J7', 'J8'],
    ['G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8'],
  ]

  const copy = d => JSON.parse(JSON.stringify(d))
  const stepDirections = [
    { dx: -2, dy: -1 },
    { dx: -1, dy: -2 },
    { dx: 1, dy: -2 },
    { dx: 2, dy: -1 },
    { dx: -2, dy: 1 },
    { dx: -1, dy: 2 },
    { dx: 1, dy: 2 },
    { dx: 2, dy: 1 },
  ]

  const maxSafeSteps = 100000

  const getPossibleSteps = ({ x, y }, table) => stepDirections
    .filter(({ dx, dy }) =>
      table[x + dx] && table[x + dx][y + dy] && !Number(table[x + dx][y + dy])
    )
    .map(({ dx, dy }) => ({ x: x + dx, y: y + dy }))

  let tryNumber = 0
  const trySolve = (table, position, step, way = []) => {
    const possibleSteps = getPossibleSteps(position, table)
    tryNumber++
    if (tryNumber > maxSafeSteps) {
      const tryMore = confirm(`To much steps, keep trying? (One try - ${maxSafeSteps} steps)`)
      if (tryMore) {
        tryNumber = 0
      } else {
        throw 'To much steps'
      }
    }
    const t = copy(table)
    const d = t[position.x][position.y]
    t[position.x][position.y] = step

    if (way.length === 63 && typeof table[position.x][position.y] === 'string') {
      throw { table: t, way: [...way,  table[position.x][position.y]] }
    }

    possibleSteps
      .map(pos => ({ ...pos, countNext: getPossibleSteps(pos, t).length }))
      .sort(({ countNext: a }, { countNext: b }) => a === b ? 0 : a < b ? -1 : 1)
      .forEach(pos => {
        trySolve(t, pos, step + 1, [...way, d])
      })

    throw 'No results'
  }

  const getHorseWay = startPos => {
    try {
      tryNumber = 0
      trySolve(copy(initTable), startPos, 1)
    } catch (e) {
      if (typeof e === 'string') {
        return { error: e }
      } else {
        return e
      }
    }
  }

  const findPos = val => {
    const x = initTable.findIndex(item => item.some(cell => cell === val))

    if (x === -1) { return { found: false } }

    const y = initTable[x].findIndex(cell => cell === val)

    return { x, y, found: true }
  }

  export default {
    name: 'WalkingHorse',
    components: {
      ChessTable,
    },
    data: () => ({
      position: { x: 0, y: 0 },
      fieldEnabled: true,
      renderTable: initTable.map(ar => [...ar]),
      timeouts: [],
      walked: false,
    }),
    beforeDestroy () {
      this.timeouts.forEach(clearTimeout)
    },
    computed: {
      ...mapGetters(['history', 'delay']),
      delayTimer: {
        get: function () {
          return this.delay
        },
        set: function (value) {
          this.setDelay(+value)
        },
      },
      dPos () {
        const { x, y } = this.position
        return initTable[x][y]
      },
      dPosHorse () {
        const { x, y } = this.position
        return {
          top: x * 27 + 'px',
          left: y * 27 + 'px',
        }
      },
    },
    methods: {
      ...mapActions(['addHistory', 'clearHistory', 'setDelay']),
      resetTable () {
        this.renderTable = initTable.map(ar => [...ar])
        this.walked = false
      },
      stop () {
        this.timeouts.forEach(clearTimeout)
        this.timeouts = []
        this.walked = false
        this.fieldEnabled = true
      },
      goWalk () {
        const { way, error } = getHorseWay(this.position)
        if (error) {
          this.addHistory(error)
        } else {
          this.fieldEnabled = false
          this.resetTable()

          for (let i = 0; i < way.length; i++) {
            this.timeouts.push(setTimeout(() => {
              const val = way[i]
              const { x, y } = findPos(val)
              this.position = { x, y }
              this.$set(this.renderTable[x], y, i + 1)
              if (i === way.length - 1) {
                this.fieldEnabled = true
                this.addHistory(way)
                this.walked = true
              }
              this.timeouts.shift()
            }, this.delay * i))
          }
        }
      },
      setPosition (e, pos) {
        if (pos) {
          this.position = pos
          this.resetTable()
          return
        }
        const { x, y, found } = findPos(e.target.value)
        if (!found) {
          return
        }
        this.resetTable()
        this.position = { x, y }
      },
    },
  }
</script>
