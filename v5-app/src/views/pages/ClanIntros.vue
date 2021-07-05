<template>
    <div class="clan-intros">
        <h1 class="clan-intros-header">Zapowiedzi klanowe</h1>
        <p class="clan-intros-desc">Poniżej znajduje się lista wszystkich dostępnych w grze klanów. Po zaakceptowaniu postaci otrzymasz hasło, które umożliwi Ci odczytanie treści wstępu. Rzecz jasna, jedynie dla tej części rodziny, którą wybrałeś.</p>
        <div class="clans-list">
            <div v-for="clan of clansList" class="clan" :key="'clan-' + clan.clanId">
                <img :src="require('../../assets/img/' + clan.clanSymbol + '.png')" alt="">
                <h3>{{clan.clanName}}</h3>
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
                    clanSymbol: 'SymbolClanBrujahV5'
                },
                {
                    clanName: 'Gangrel',
                    clanId: 2,
                    clanSymbol: 'SymbolClanGangrelV5'
                },
                {
                    clanName: 'Malkavian',
                    clanId: 3,
                    clanSymbol: 'SymbolClanMalkavianV5'
                },
                {
                    clanName: 'Nosferatu',
                    clanId: 4,
                    clanSymbol: 'SymbolClanNosferatuV5'
                },
                {
                    clanName: 'Toreador',
                    clanId: 5,
                    clanSymbol: 'SymbolClanToreadorV5'
                },
                {
                    clanName: 'Tremere',
                    clanId: 6,
                    clanSymbol: 'SymbolClanTremereV5-2'
                },
                {
                    clanName: 'Ventrue',
                    clanId: 7,
                    clanSymbol: 'SymbolClanVentrueV5'
                },
                {
                    clanName: 'Lasombra',
                    clanId: 8,
                    clanSymbol: 'LogoClanLasombraV5'
                },
                {
                    clanName: 'Tzimisce',
                    clanId: 9,
                    clanSymbol: 'LogoClanTzimisce'
                },
                {
                    clanName: 'Ravnos',
                    clanId: 10,
                    clanSymbol: 'SymbolClanRavnosV5'
                },
                {
                    clanName: 'Hecata',
                    clanId: 11,
                    clanSymbol: 'SymbolHecataModern'
                },
                {
                    clanName: 'Banu Haquim',
                    clanId: 12,
                    clanSymbol: 'SymbolClanBanuHaqim'
                },
                {
                    clanName: 'Ministry',
                    clanId: 13,
                    clanSymbol: 'SymbolMinistryV5'
                },
                {
                    clanName: 'Salubri',
                    clanId: 14,
                    clanSymbol: 'Salubri'
                },
                {
                    clanName: 'Parias',
                    clanId: 15,
                    clanSymbol: 'Vampire5thAnkh'
                },
                {
                    clanName: 'Thin Blood',
                    clanId: 16,
                    clanSymbol: 'SymbolThinBloodsV5'
                }
            ]
        }
    }
}
</script>
<style lang="scss">
    .clan-intros {
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
                    font-weight: 700;
                }
                
                &:hover {
                    animation-name: link-hover;
                    animation-duration: 8s;
                    animation-iteration-count: infinite;
                    -o-animation-timing-function: ease-in-out;
                }
            }
        }
    }
</style>