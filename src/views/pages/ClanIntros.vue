<template>
    <div class="clan-intros">
        <h1 class="clan-intros-header">Zapowiedzi klanowe</h1>
        <p class="clan-intros-desc">Poniżej znajduje się lista wszystkich dostępnych w grze klanów. Po zaakceptowaniu postaci otrzymasz hasło, które umożliwi Ci odczytanie treści wstępu. Rzecz jasna, jedynie dla tej części rodziny, którą wybrałeś. Nakieruj kursor na pole z klanem, aby wyświetlić dostępne opcje. Pierwsza z nich pokaże Ci krótki opis każdego z klanów, druga przeniesie na stronę z szczegółowym opisem sytuacji Klanu w Krakowie.</p>
        <div class="clans-list">
            <div v-for="clan of clansList" class="clan" :key="'clan-' + clan.clanId">
                <img :src="require('../../assets/img/' + clan.clanSymbol + '.png')" alt="">
                <h3>{{clan.clanName}}</h3>
                <div class="buttons-row">
                    <button class="btn btn-red btn-hiding" @click="openModal(clan.clanId)">Opis klanu</button>
                    <button class="btn btn-red btn-hiding" @click="askForPswd(clan.clanId)">Zajawka</button>
                </div>
            </div>
        </div>
        <div v-if="modalOpen" class="modal">
            <div class="modal-inner">
                <i class="fa fa-close" @click="closeModal()"></i>
                <h2>{{modalHeader}}</h2>
                <p class="clan-paragraph" v-for="(p, i) of modalContent" :key="'clan-' + i + '-paragraph'">{{p}}</p>
            </div>
        </div>
        <div v-if="pswdModal" class="modal">
            <div class="modal-inner">
                <i class="fa fa-close" @click="closePswdModal()"></i>
                <h3>Podaj hasło...</h3>
                <input type="password" v-model="pswd" @keydown="enterPswd"/>
                <span :class="['pswd-error', pswdError ? 'visible' : 'hidden']">Ta wiedza nie jest Ci pisana...</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            clansList: [
                {
                    clanName: 'Brujah',
                    clanId: 1,
                    clanSymbol: 'SymbolClanBrujahV5',
                    desc: [
                        'Opis klanu Brujah będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'aaa'
                },
                {
                    clanName: 'Gangrel',
                    clanId: 2,
                    clanSymbol: 'SymbolClanGangrelV5',
                    desc: [
                        'Opis klanu Gangrel będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'staryBrujahMocnoŚpi'
                },
                {
                    clanName: 'Malkavian',
                    clanId: 3,
                    clanSymbol: 'SymbolClanMalkavianV5',
                    desc: [
                        'Opis klanu Malkavian będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'staryBrujahMocnoŚpi'
                },
                {
                    clanName: 'Nosferatu',
                    clanId: 4,
                    clanSymbol: 'SymbolClanNosferatuV5',
                    desc: [
                        'Opis klanu Nosferatu będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'staryBrujahMocnoŚpi'
                },
                {
                    clanName: 'Toreador',
                    clanId: 5,
                    clanSymbol: 'SymbolClanToreadorV5',
                    desc: [
                        'Opis klanu Toreador będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'staryBrujahMocnoŚpi'
                },
                {
                    clanName: 'Tremere',
                    clanId: 6,
                    clanSymbol: 'SymbolClanTremereV5-2',
                    desc: [
                        'Opis klanu Tremere będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'staryBrujahMocnoŚpi'
                },
                {
                    clanName: 'Ventrue',
                    clanId: 7,
                    clanSymbol: 'SymbolClanVentrueV5',
                    desc: [
                        'Opis klanu Ventrue będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'staryBrujahMocnoŚpi'
                },
                {
                    clanName: 'Lasombra',
                    clanId: 8,
                    clanSymbol: 'LogoClanLasombraV5',
                    desc: [
                        'Opis klanu Lasombra będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'staryBrujahMocnoŚpi'
                },
                {
                    clanName: 'Tzimisce',
                    clanId: 9,
                    clanSymbol: 'LogoClanTzimisce',
                    desc: [
                        'Opis klanu Tzimisce będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'staryBrujahMocnoŚpi'
                },
                {
                    clanName: 'Ravnos',
                    clanId: 10,
                    clanSymbol: 'SymbolClanRavnosV5',
                    desc: [
                        'Opis klanu Ravnos będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'staryBrujahMocnoŚpi'
                },
                {
                    clanName: 'Hecata',
                    clanId: 11,
                    clanSymbol: 'SymbolHecataModern',
                    desc: [
                        'Opis klanu Hecata będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'staryBrujahMocnoŚpi'
                },
                {
                    clanName: 'Banu Haquim',
                    clanId: 12,
                    clanSymbol: 'SymbolClanBanuHaqim',
                    desc: [
                        'Opis klanu Banu Haquim będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'staryBrujahMocnoŚpi'
                },
                {
                    clanName: 'Ministry',
                    clanId: 13,
                    clanSymbol: 'SymbolMinistryV5',
                    desc: [
                        'Opis klanu Ministry będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'staryBrujahMocnoŚpi'
                },
                {
                    clanName: 'Salubri',
                    clanId: 14,
                    clanSymbol: 'Salubri',
                    desc: [
                        'Opis klanu Salubri będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'staryBrujahMocnoŚpi'
                },
                {
                    clanName: 'Parias',
                    clanId: 15,
                    clanSymbol: 'Vampire5thAnkh',
                    desc: [
                        'Opis Pariasów będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'staryBrujahMocnoŚpi'
                },
                {
                    clanName: 'Thin Blood',
                    clanId: 16,
                    clanSymbol: 'SymbolThinBloodsV5',
                    desc: [
                        'Opis Cienkuszy będzie tutaj',
                        'Tutaj jego dalsza część',
                        'A tu zakończenie'
                    ],
                    pswd: 'staryBrujahMocnoŚpi'
                }
            ],
            modalOpen: false,
            modalHeader: '',
            pswdModal: false,
            clanPswd: '',
            modalContent: [],
            clanId: 0,
            pswd: '',
            pswdError: false
        }
    },
    methods: {
        openModal(clanId) {
            for (let clan of this.clansList) {
                if (clan.clanId == clanId) {
                    this.modalHeader = clan.clanName
                    this.modalContent = clan.desc
                }
            }
            this.modalOpen = true
        },
        closeModal() {
            this.modalOpen = false
        },
        askForPswd(clanId) {
            this.pswdError = false
            for (let clan of this.clansList) {
                if (clan.clanId == clanId) {
                    this.clanPswd = clan.pswd
                    this.clanId = clanId
                }
            }
            this.pswdModal = true;
        },
        closePswdModal() {
            this.pswdModal = false
        },
        enterPswd(ev) {
            if (ev.keyCode == 13) {
                if (this.pswd == this.clanPswd) {
                    this.$session.set('clanAccess', {clanId: this.clanId, pswd: true})
                    this.$router.push('/clans-intro/' + this.clanId)
                } else {
                    this.pswdError = true
                }
            }
        }
    }
}
</script>
<style lang="scss">
    .clan-intros {
        position: relative;
        padding: 20px;
        background-image: url('../../assets/img/thorns-bg.jpg');
        background-size: cover;
        background-position: center;
        color: #8d8d8d;
        box-shadow: inset 0px 0px 40px 1px #000;
        .clan-intros-header {
            margin: 0 0 16px;
            font-size: 20px;
            font-weight: 700;
        }
        .clan-intros-desc {
            margin: 0 0 20px;
        }
        .clans-list {
            display: flex;
            flex-wrap: wrap;
            .clan {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-between;
                width: 20%;
                margin: 0 20px 20px 0;
                padding: 20px;
                border: 1px solid black;
                border-radius: 5px;
                cursor: pointer;
                img {
                    width: auto;
                    height: 100px;
                    margin: 0 0 16px;
                }
                h3 {
                    margin: 0 0 20px;
                    font-weight: 700;
                }

                .buttons-row {
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    .btn-hiding {
                        opacity: 0;
                        &:hover {
                            background-color: #000;
                        }
                    }
                }
                
                &:hover {
                    animation-name: link-hover;
                    animation-duration: 8s;
                    animation-iteration-count: infinite;
                    -o-animation-timing-function: ease-in-out;
                    .buttons-row {
                        .btn-hiding {
                            animation-name: show-button;
                            animation-duration: 1s;
                            animation-iteration-count: 1;
                            animation-fill-mode: forwards;
                            -o-animation-timing-function: ease-in-out;
                            cursor: pointer;

                            &:last-child {
                                animation-delay: 0.5s;
                            }
                            @keyframes show-button {
                                0% {opacity: 0;}
                                100% {opacity: 0.7;}
                            }
                        }
                    }
                }
            }
        }
        .modal {
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            background-color: rgba(0,0,0, 0.4);
            .modal-inner {
                position: relative;
                display: flex;
                flex-direction: column;
                min-width: 400px;
                padding: 20px;
                background-color: #29292d;
                .fa-close {
                    position: absolute;
                    right: 10px;
                    top: 10px;
                    cursor: pointer;
                }
                h2 {
                    text-align: center;
                    margin: 0 0 20px;
                }
                .clan-paragraph {
                    margin: 0 0 8px;
                    font-size: 14px;
                    line-height: 1.4;
                }
                h3 {
                    text-align: center;
                    margin: 0 0 20px;
                }
                input {
                    margin: 0 0 12px;
                    padding: 6px 12px;
                    background-color: #8d8d8d;
                    border: #000;
                    border-radius: 5px;
                }
                .pswd-error {
                    color: #ff0000;
                    visibility: hidden;
                    &.visible {
                        visibility: visible;
                    }
                }
            }
            
        }
    }
</style>