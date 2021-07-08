<template>
    <div class="dice-roller">
        <div class="dice-roller-box">
            <div class="pool-dice-picker">
                <button v-for="i in 20" @click="selectPool(i)" :key="'pool-picker-' + i" class="dice-roller-btn">{{i}}</button>
            </div>
            <div class="score-field">
                <div class="pool">
                    <h3>Pula kości:</h3>
                    <span>{{dicePool}}</span>
                </div>
                <div class="hunger-pool">
                    <h3>Pula głodu:</h3>
                    <span>{{hunger}}</span>
                </div>
                <div class="diff">
                    <h3>ST:</h3>
                    <span>{{diffLevel}}</span>
                </div>
                <div class="scores">
                    <h3>Wyniki:</h3>
                    <div class="scores-box">
                        <span v-for="(score, i) of scoreDisplay" :key="'score-' + i" :class="['score', score.hunger ? 'hunger' : '']">{{score.value}}</span>
                    </div>
                </div>
                <div class="result">
                    <h3>Wynik:</h3>
                    <span>{{score}} - </span><span :class="['additional', additional.level == 'red' ? 'red' : additional.level == 'white' ? 'white' : additional.level == 'green' ? 'green' : '']" v-if="additional">{{additional.message}}</span>
                </div>
            </div>
            <div class="hunger-picker">
                <button v-for="i in 6" @click="selectHunger(i-1)" :key="'hunger-picker-' + (i - 1)" class="dice-roller-btn">{{i - 1}}</button>
            </div>
        </div>
        <div class="diff-picker">
            <button v-for="i in 10" @click="selectDiff(i)" :key="'diff-picker-' + i" class="dice-roller-btn">{{i}}</button>
        </div>
        <button @click="roll2()" class="btn btn-red">Roll</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            dicePool: 0,
            hunger: 0,
            diffLevel: 0,
            scoreDisplay: [],
            score: 0,
            additional: ''
        }
    },
    methods: {
        selectPool(pool) {
            this.dicePool = pool
        },
        selectHunger(hunger) {
            this.hunger = hunger
        },
        selectDiff(diff) {
            this.diffLevel = diff
        },
        getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        roll2() {
            this.scoreDisplay = []
            let countSuccess = 0
            let tensCount = 0
            let hungerTen = false
            let hungerOne = false
            this.score = 0,
            this.additional = {}
            for (let i = 0; i < (this.dicePool - this.hunger); i++) {
                let score = {
                    value: this.getRandomIntInclusive(1,10),
                    hunger: false
                }
                if (score.value >= 6 && score.value != 10) {
                    countSuccess++
                } else if (score.value == 10){
                    tensCount++
                }
                this.scoreDisplay.push(score)
            }
            for (let i = 0; i < this.hunger; i++) {
                let score = {
                    value: this.getRandomIntInclusive(1,10),
                    hunger: true
                }
                if (score.value >= 6 && score.value != 10) {
                    countSuccess++
                } else if (score.value == 10){
                    tensCount++
                    hungerTen = true
                } else if (score.value == 1) {
                    hungerOne = true
                }
                this.scoreDisplay.push(score)
            }

            if (tensCount % 2) {
                countSuccess += 4 * Math.floor(tensCount / 2) + 1
            } else {
                countSuccess += 4 * Math.floor(tensCount / 2)
            }

            this.score = countSuccess

            if (this.diffLevel > this.score && hungerOne) {
                this.additional.message = 'Bestial Failure'
                this.additional.level = 'red'
            } else if ((hungerTen && (tensCount > 1)) && (this.diffLevel > this.score)) {
                this.additional.message = 'Failed + Messy Critical'
                this.additional.level = 'red'
            } else if (this.diffLevel > this.score) {
                this.additional.message = 'Failed'
                this.additional.level = 'white'
            } else if (hungerTen && (tensCount > 1)) {
                this.additional.message = 'Messy Critical'
                this.additional.level = 'red'
            } else if (this.score >= this.diffLevel) {
                this.additional.message = 'Success'
                this.additional.level = 'green'
            }
            console.log(this.score)
            console.log(this.diffLevel)
            console.log(tensCount)
            console.log(hungerTen)
        }
    }
}
</script>
<style lang="scss">
    .dice-roller {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .dice-roller-box {
            display: flex;
            .pool-dice-picker,
            .hunger-picker {
                display: flex;
                flex-direction: column;
                max-height: 300px;
                overflow-y: auto;
            }
            .pool-dice-picker {
                .dice-roller-btn {
                    padding: 20px 24px;
                    background-color: #000;
                    font-size: 16px;
                    color: #fff;
                    border: 0;
                    border-bottom: 1px solid #fff;
                    font-weight: 700;
                    &:last-child {
                        border: 0;
                    }
                }
            }
            .hunger-picker {
                .dice-roller-btn {
                    padding: 20px 24px;
                    background-color: #6d100f;;
                    font-size: 16px;
                    color: #000;
                    border: 0;
                    border-bottom: 1px solid #000;
                    font-weight: 700;
                    &:last-child {
                        border: 0;
                    }
                }
            }
            .score-field {
                width: 400px;
                padding: 0 20px 20px;
                h2 {
                    font-size: 16px;
                }
                .pool,
                .hunger-pool,
                .diff,
                .result {
                    display: flex;
                    margin: 0 0 12px;
                }
                .scores {
                    margin: 0 0 12px;
                    .scores-box {
                        .score {
                            &.hunger {
                                color: red;
                            }
                            &:after {
                                content: ', ';
                            }
                            &:last-child {
                                &:after {
                                    content: '';
                                }
                            }
                        }
                    }
                }
                .result {
                    .additional {
                        &.red {
                            color: red;
                        }
                        &.white {
                            color: #fff;
                        }
                        &.green {
                            color: green;
                        }
                    }
                }
            }
        }
        .diff-picker {
            display: flex;
            margin: 20px 0;
            .dice-roller-btn {
                padding: 12px 24px;
                background-color: #fff;
                font-size: 16px;
                color: #000;
                border: 0;
                border-right: 1px solid #000;
                font-weight: 700;
                &:last-child {
                    border: 0;
                }
            }
        }
    }
</style>