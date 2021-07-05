<template>
    <div class="creator">
        <div class="character-info-box">
            <div class="column">
                <div class="row">
                    <label for="name">
                        <h6 class="label-text">Imię</h6>
                        <input id="name" type="text" v-model="character.name">
                    </label>
                </div>
                <div class="row">
                    <label for="chronicle">
                        <h6 class="label-text">Kronika</h6>
                        <input id="chronicle" type="text" v-model="character.chronicle">
                    </label>
                </div>
                <div class="row">
                    <label for="sire">
                        <h6 class="label-text">Stwórca</h6>
                        <input id="sire" type="text" v-model="character.sire">
                    </label>
                </div>
            </div>
            <div class="column">
                <div class="row">
                    <label for="concept">
                        <h6 class="label-text">Koncepcja</h6>
                        <input id="concept" type="text" v-model="character.concept">
                    </label>
                </div>
                <div class="row">
                    <label for="ambitions">
                        <h6 class="label-text">Ambicje</h6>
                        <input id="generation" type="text" v-model="character.ambitions">
                    </label>
                </div>
                <div class="row">
                    <label for="desires">
                        <h6 class="label-text">Pragnienia</h6>
                        <input id="generation" type="text" v-model="character.desires">
                    </label>
                </div>
            </div>
            <div class="column">
                <div class="row">
                    <label for="predator">
                        <h6 class="label-text">Drapieżnik</h6>
                        <input id="generation" type="text" v-model="character.predator">
                    </label>
                </div>
                <div class="row">
                    <label for="clan">
                        <h6 class="label-text">Klan</h6>
                        <select id="generation" type="text" v-model="character.clan">
                            <option v-for="clan in clans" :key="'clan-' + clan.id" :value="clan.id">{{clan.name}}</option>
                        </select>
                    </label>
                </div>
                <div class="row">
                    <label for="generation">
                        <h6 class="label-text">Pokolenie</h6>
                        <input id="generation" type="text" v-model="character.generation">
                    </label>
                </div>
            </div>
        </div>
        <div class="attributes-box">
            <div class="column">
                <div class="row">
                    <label for="strength">
                        <h6 class="label-text">Strength</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.attributes.strength">
                            <input type="radio" value="2" v-model="character.attributes.strength">
                            <input type="radio" value="3" v-model="character.attributes.strength">
                            <input type="radio" value="4" v-model="character.attributes.strength">
                            <input type="radio" value="5" v-model="character.attributes.strength">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="dexterity">
                        <h6 class="label-text">Dexterity</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.attributes.dexterity">
                            <input type="radio" value="2" v-model="character.attributes.dexterity">
                            <input type="radio" value="3" v-model="character.attributes.dexterity">
                            <input type="radio" value="4" v-model="character.attributes.dexterity">
                            <input type="radio" value="5" v-model="character.attributes.dexterity">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="stamina">
                        <h6 class="label-text">Stamina</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.attributes.stamina">
                            <input type="radio" value="2" v-model="character.attributes.stamina">
                            <input type="radio" value="3" v-model="character.attributes.stamina">
                            <input type="radio" value="4" v-model="character.attributes.stamina">
                            <input type="radio" value="5" v-model="character.attributes.stamina">
                        </div>
                    </label>
                </div>
            </div>
            <div class="column">
                <div class="row">
                    <label for="charisma">
                        <h6 class="label-text">Charisma</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.attributes.charisma">
                            <input type="radio" value="2" v-model="character.attributes.charisma">
                            <input type="radio" value="3" v-model="character.attributes.charisma">
                            <input type="radio" value="4" v-model="character.attributes.charisma">
                            <input type="radio" value="5" v-model="character.attributes.charisma">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="manipulation">
                        <h6 class="label-text">Manipulation</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.attributes.manipulation">
                            <input type="radio" value="2" v-model="character.attributes.manipulation">
                            <input type="radio" value="3" v-model="character.attributes.manipulation">
                            <input type="radio" value="4" v-model="character.attributes.manipulation">
                            <input type="radio" value="5" v-model="character.attributes.manipulation">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="composure">
                        <h6 class="label-text">Composure</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.attributes.composure">
                            <input type="radio" value="2" v-model="character.attributes.composure">
                            <input type="radio" value="3" v-model="character.attributes.composure">
                            <input type="radio" value="4" v-model="character.attributes.composure">
                            <input type="radio" value="5" v-model="character.attributes.composure">
                        </div>
                    </label>
                </div>
            </div>
            <div class="column">
                <div class="row">
                    <label for="inteligence">
                        <h6 class="label-text">Inteligence</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.attributes.inteligence">
                            <input type="radio" value="2" v-model="character.attributes.inteligence">
                            <input type="radio" value="3" v-model="character.attributes.inteligence">
                            <input type="radio" value="4" v-model="character.attributes.inteligence">
                            <input type="radio" value="5" v-model="character.attributes.inteligence">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="wits">
                        <h6 class="label-text">Wits</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.attributes.wits">
                            <input type="radio" value="2" v-model="character.attributes.wits">
                            <input type="radio" value="3" v-model="character.attributes.wits">
                            <input type="radio" value="4" v-model="character.attributes.wits">
                            <input type="radio" value="5" v-model="character.attributes.wits">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="resolve">
                        <h6 class="label-text">Resolve</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.attributes.resolve">
                            <input type="radio" value="2" v-model="character.attributes.resolve">
                            <input type="radio" value="3" v-model="character.attributes.resolve">
                            <input type="radio" value="4" v-model="character.attributes.resolve">
                            <input type="radio" value="5" v-model="character.attributes.resolve">
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div class="skills-box">
            <div class="column">
                <div class="row">
                    <label for="athletics">
                        <h6 class="label-text">Athletics</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.athletics">
                            <input type="radio" value="2" v-model="character.skills.athletics">
                            <input type="radio" value="3" v-model="character.skills.athletics">
                            <input type="radio" value="4" v-model="character.skills.athletics">
                            <input type="radio" value="5" v-model="character.skills.athletics">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="brawl">
                        <h6 class="label-text">Brawl</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.brawl">
                            <input type="radio" value="2" v-model="character.skills.brawl">
                            <input type="radio" value="3" v-model="character.skills.brawl">
                            <input type="radio" value="4" v-model="character.skills.brawl">
                            <input type="radio" value="5" v-model="character.skills.brawl">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="craft">
                        <h6 class="label-text">Craft</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.craft">
                            <input type="radio" value="2" v-model="character.skills.craft">
                            <input type="radio" value="3" v-model="character.skills.craft">
                            <input type="radio" value="4" v-model="character.skills.craft">
                            <input type="radio" value="5" v-model="character.skills.craft">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="drive">
                        <h6 class="label-text">Drive</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.drive">
                            <input type="radio" value="2" v-model="character.skills.drive">
                            <input type="radio" value="3" v-model="character.skills.drive">
                            <input type="radio" value="4" v-model="character.skills.drive">
                            <input type="radio" value="5" v-model="character.skills.drive">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="firearms">
                        <h6 class="label-text">Firearms</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.firearms">
                            <input type="radio" value="2" v-model="character.skills.firearms">
                            <input type="radio" value="3" v-model="character.skills.firearms">
                            <input type="radio" value="4" v-model="character.skills.firearms">
                            <input type="radio" value="5" v-model="character.skills.firearms">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="larceny">
                        <h6 class="label-text">Larceny</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.larceny">
                            <input type="radio" value="2" v-model="character.skills.larceny">
                            <input type="radio" value="3" v-model="character.skills.larceny">
                            <input type="radio" value="4" v-model="character.skills.larceny">
                            <input type="radio" value="5" v-model="character.skills.larceny">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="meele">
                        <h6 class="label-text">Meele</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.meele">
                            <input type="radio" value="2" v-model="character.skills.meele">
                            <input type="radio" value="3" v-model="character.skills.meele">
                            <input type="radio" value="4" v-model="character.skills.meele">
                            <input type="radio" value="5" v-model="character.skills.meele">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="stealth">
                        <h6 class="label-text">Stealth</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.stealth">
                            <input type="radio" value="2" v-model="character.skills.stealth">
                            <input type="radio" value="3" v-model="character.skills.stealth">
                            <input type="radio" value="4" v-model="character.skills.stealth">
                            <input type="radio" value="5" v-model="character.skills.stealth">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="survival">
                        <h6 class="label-text">Survival</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.survival">
                            <input type="radio" value="2" v-model="character.skills.survival">
                            <input type="radio" value="3" v-model="character.skills.survival">
                            <input type="radio" value="4" v-model="character.skills.survival">
                            <input type="radio" value="5" v-model="character.skills.survival">
                        </div>
                    </label>
                </div>
            </div>
            <div class="column">
                <div class="row">
                    <label for="animalKen">
                        <h6 class="label-text">Animal Ken</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.animalKen">
                            <input type="radio" value="2" v-model="character.skills.animalKen">
                            <input type="radio" value="3" v-model="character.skills.animalKen">
                            <input type="radio" value="4" v-model="character.skills.animalKen">
                            <input type="radio" value="5" v-model="character.skills.animalKen">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="etiquette">
                        <h6 class="label-text">Etiquette</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.etiquette">
                            <input type="radio" value="2" v-model="character.skills.etiquette">
                            <input type="radio" value="3" v-model="character.skills.etiquette">
                            <input type="radio" value="4" v-model="character.skills.etiquette">
                            <input type="radio" value="5" v-model="character.skills.etiquette">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="insight">
                        <h6 class="label-text">Insight</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.insight">
                            <input type="radio" value="2" v-model="character.skills.insight">
                            <input type="radio" value="3" v-model="character.skills.insight">
                            <input type="radio" value="4" v-model="character.skills.insight">
                            <input type="radio" value="5" v-model="character.skills.insight">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="intimidation">
                        <h6 class="label-text">Intimidation</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.intimidation">
                            <input type="radio" value="2" v-model="character.skills.intimidation">
                            <input type="radio" value="3" v-model="character.skills.intimidation">
                            <input type="radio" value="4" v-model="character.skills.intimidation">
                            <input type="radio" value="5" v-model="character.skills.intimidation">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="leadership">
                        <h6 class="label-text">Leadership</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.leadership">
                            <input type="radio" value="2" v-model="character.skills.leadership">
                            <input type="radio" value="3" v-model="character.skills.leadership">
                            <input type="radio" value="4" v-model="character.skills.leadership">
                            <input type="radio" value="5" v-model="character.skills.leadership">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="performance">
                        <h6 class="label-text">Performance</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.performance">
                            <input type="radio" value="2" v-model="character.skills.performance">
                            <input type="radio" value="3" v-model="character.skills.performance">
                            <input type="radio" value="4" v-model="character.skills.performance">
                            <input type="radio" value="5" v-model="character.skills.performance">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="persuasion">
                        <h6 class="label-text">Persuasion</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.persuasion">
                            <input type="radio" value="2" v-model="character.skills.persuasion">
                            <input type="radio" value="3" v-model="character.skills.persuasion">
                            <input type="radio" value="4" v-model="character.skills.persuasion">
                            <input type="radio" value="5" v-model="character.skills.persuasion">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="streetwise">
                        <h6 class="label-text">Streetwise</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.streetwise">
                            <input type="radio" value="2" v-model="character.skills.streetwise">
                            <input type="radio" value="3" v-model="character.skills.streetwise">
                            <input type="radio" value="4" v-model="character.skills.streetwise">
                            <input type="radio" value="5" v-model="character.skills.streetwise">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="subterfuge">
                        <h6 class="label-text">Subterfuge</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.subterfuge">
                            <input type="radio" value="2" v-model="character.skills.subterfuge">
                            <input type="radio" value="3" v-model="character.skills.subterfuge">
                            <input type="radio" value="4" v-model="character.skills.subterfuge">
                            <input type="radio" value="5" v-model="character.skills.subterfuge">
                        </div>
                    </label>
                </div>
            </div>
            <div class="column">
                <div class="row">
                    <label for="academics">
                        <h6 class="label-text">Academics</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.academics">
                            <input type="radio" value="2" v-model="character.skills.academics">
                            <input type="radio" value="3" v-model="character.skills.academics">
                            <input type="radio" value="4" v-model="character.skills.academics">
                            <input type="radio" value="5" v-model="character.skills.academics">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="awareness">
                        <h6 class="label-text">Awareness</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.awareness">
                            <input type="radio" value="2" v-model="character.skills.awareness">
                            <input type="radio" value="3" v-model="character.skills.awareness">
                            <input type="radio" value="4" v-model="character.skills.awareness">
                            <input type="radio" value="5" v-model="character.skills.awareness">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="finance">
                        <h6 class="label-text">Finance</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.finance">
                            <input type="radio" value="2" v-model="character.skills.finance">
                            <input type="radio" value="3" v-model="character.skills.finance">
                            <input type="radio" value="4" v-model="character.skills.finance">
                            <input type="radio" value="5" v-model="character.skills.finance">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="investigation">
                        <h6 class="label-text">Investigation</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.investigation">
                            <input type="radio" value="2" v-model="character.skills.investigation">
                            <input type="radio" value="3" v-model="character.skills.investigation">
                            <input type="radio" value="4" v-model="character.skills.investigation">
                            <input type="radio" value="5" v-model="character.skills.investigation">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="medicine">
                        <h6 class="label-text">Medicine</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.medicine">
                            <input type="radio" value="2" v-model="character.skills.medicine">
                            <input type="radio" value="3" v-model="character.skills.medicine">
                            <input type="radio" value="4" v-model="character.skills.medicine">
                            <input type="radio" value="5" v-model="character.skills.medicine">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="occult">
                        <h6 class="label-text">Occult</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.occult">
                            <input type="radio" value="2" v-model="character.skills.occult">
                            <input type="radio" value="3" v-model="character.skills.occult">
                            <input type="radio" value="4" v-model="character.skills.occult">
                            <input type="radio" value="5" v-model="character.skills.occult">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="politics">
                        <h6 class="label-text">Politics</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.politics">
                            <input type="radio" value="2" v-model="character.skills.politics">
                            <input type="radio" value="3" v-model="character.skills.politics">
                            <input type="radio" value="4" v-model="character.skills.politics">
                            <input type="radio" value="5" v-model="character.skills.politics">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="science">
                        <h6 class="label-text">Science</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.science">
                            <input type="radio" value="2" v-model="character.skills.science">
                            <input type="radio" value="3" v-model="character.skills.science">
                            <input type="radio" value="4" v-model="character.skills.science">
                            <input type="radio" value="5" v-model="character.skills.science">
                        </div>
                    </label>
                </div>
                <div class="row">
                    <label for="technology">
                        <h6 class="label-text">Technology</h6>
                        <div class="radio-buttons-box">
                            <input type="radio" value="1" v-model="character.skills.technology">
                            <input type="radio" value="2" v-model="character.skills.technology">
                            <input type="radio" value="3" v-model="character.skills.technology">
                            <input type="radio" value="4" v-model="character.skills.technology">
                            <input type="radio" value="5" v-model="character.skills.technology">
                        </div>
                    </label>
                </div>
            </div>
        </div>
        <div class="disciplines">
            <div class="column">
                <div class="row">
                    <div class="cell">
                        <div class="select-row">
                            <select id="discipline1" v-model="character.disciplineOne.disciplineId" @change="changeDiscipline(character.disciplineOne)">
                                <option value="0">--</option>
                                <option v-for="discipline in disciplines" :key="'discipline-' + discipline.id" :value="discipline.id" :disabled="discipline.selected || discipline.restricted">{{discipline.name}}</option>
                            </select>
                            <input type="radio" value="1" :disabled="character.disciplineOne.disciplineId == 0" v-model="character.disciplineOne.level" name="discipline-one-level">
                            <input type="radio" value="2" :disabled="character.disciplineOne.disciplineId == 0" v-model="character.disciplineOne.level" name="discipline-one-level">
                            <input type="radio" value="3" :disabled="character.disciplineOne.disciplineId == 0" v-model="character.disciplineOne.level" name="discipline-one-level">
                            <input type="radio" value="4" :disabled="character.disciplineOne.disciplineId == 0" v-model="character.disciplineOne.level" name="discipline-one-level">
                            <input type="radio" value="5" :disabled="character.disciplineOne.disciplineId == 0" v-model="character.disciplineOne.level" name="discipline-one-level">
                        </div>
                    </div>
                    <div class="cell">
                        <div class="select-row">
                            <select id="discipline2" v-model="character.disciplineTwo.disciplineId" @change="changeDiscipline(character.disciplineTwo)">
                                <option value="0">--</option>
                                <option v-for="discipline in disciplines" :key="'discipline-' + discipline.id" :value="discipline.id" :disabled="discipline.selected || discipline.restricted">{{discipline.name}}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="row">
                    <div class="cell">
                        <div class="select-row">
                            <select id="discipline3" v-model="character.disciplineThree.disciplineId" @change="changeDiscipline(character.disciplineThree)">
                                <option value="0">--</option>
                                <option v-for="discipline in disciplines" :key="'discipline-' + discipline.id" :value="discipline.id" :disabled="discipline.selected || discipline.restricted">{{discipline.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="cell">
                        <div class="select-row">
                            <select id="discipline4" v-model="character.disciplineFour.disciplineId" @change="changeDiscipline(character.disciplineFour)">
                                <option value="0">--</option>
                                <option v-for="discipline in disciplines" :key="'discipline-' + discipline.id" :value="discipline.id" :disabled="discipline.selected || discipline.restricted">{{discipline.name}}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div class="column">
                <div class="row">
                    <div class="cell">
                        <div class="select-row">
                            <select id="discipline5" v-model="character.disciplineFive.disciplineId" @change="changeDiscipline(character.disciplineFive)">
                                <option value="0">--</option>
                                <option v-for="discipline in disciplines" :key="'discipline-' + discipline.id" :value="discipline.id" :disabled="discipline.selected || discipline.restricted">{{discipline.name}}</option>
                            </select>
                        </div>
                    </div>
                    <div class="cell">
                        <div class="select-row">
                            <select id="discipline6" v-model="character.disciplineSix.disciplineId" @change="changeDiscipline(character.disciplineSix)">
                                <option value="0">--</option>
                                <option v-for="discipline in disciplines" :key="'discipline-' + discipline.id" :value="discipline.id" :disabled="discipline.selected || discipline.restricted">{{discipline.name}}</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Creator',
    data() {
        return {
            character: {
                name: '',
                chronicle: '',
                sire: '',
                concept: '',
                ambitions: '',
                desires: '',
                predator: '',
                clan: '',
                generation: '',
                attributes: {
                    strength: 0,
                    dexterity: 0,
                    stamina: 0,
                    charisma: 0,
                    manipulation: 0,
                    composure: 0,
                    inteligence: 0,
                    wits: 0,
                    resolve: 0
                },
                skills: {
                    athletics: 0,
                    brawl: 0,
                    craft: 0,
                    drive: 0,
                    firearms: 0,
                    larceny: 0,
                    meele: 0,
                    stealth: 0,
                    survival: 0,
                    animalKen: 0,
                    etiquette: 0,
                    insight: 0,
                    intimidation: 0,
                    leadership: 0,
                    performance: 0,
                    persuasion: 0,
                    streetwise: 0,
                    subterfuge: 0,
                    academics: 0,
                    awareness: 0,
                    finance: 0,
                    investigation: 0,
                    medicine: 0,
                    occult: 0,
                    politics: 0,
                    science: 0,
                    technology: 0
                },
                disciplineOne: {
                    level: 0,
                    disciplineId: 0,
                    levelOne: '',
                    levelTwo: '',
                    levelThree: '',
                    levelFour: '',
                    levelFive: ''
                },
                disciplineTwo: {
                    level: 0,
                    disciplineId: 0,
                    levelOne: '',
                    levelTwo: '',
                    levelThree: '',
                    levelFour: '',
                    levelFive: ''
                },
                disciplineThree: {
                    level: 0,
                    disciplineId: 0,
                    levelOne: '',
                    levelTwo: '',
                    levelThree: '',
                    levelFour: '',
                    levelFive: ''
                },
                disciplineFour: {
                    level: 0,
                    disciplineId: 0,
                    levelOne: '',
                    levelTwo: '',
                    levelThree: '',
                    levelFour: '',
                    levelFive: ''
                },
                disciplineFive: {
                    level: 0,
                    disciplineId: 0,
                    levelOne: '',
                    levelTwo: '',
                    levelThree: '',
                    levelFour: '',
                    levelFive: ''
                },
                disciplineSix: {
                    level: 0,
                    disciplineId: 0,
                    levelOne: '',
                    levelTwo: '',
                    levelThree: '',
                    levelFour: '',
                    levelFive: ''
                }
                
            },
            clans: [
                {
                    id: 1,
                    name: 'Brujah'
                },
                {
                    id: 2,
                    name: 'Gangrel'
                },
                {
                    id: 3,
                    name: 'Malkavian'
                },
                {
                    id: 4,
                    name: 'Nosferatu'
                },
                {
                    id: 5,
                    name: 'Toreador'
                },
                {
                    id: 6,
                    name: 'Tremere'
                },
                {
                    id: 7,
                    name: 'Ventrue'
                },
                {
                    id: 8,
                    name: 'Banu Haquim'
                },
                {
                    id: 9,
                    name: 'Ministry'
                },
                {
                    id: 10,
                    name: 'Lasombra'
                },
                {
                    id: 11,
                    name: 'Thin-blooded'
                }
            ],
            disciplines: [
                {
                    id: 1,
                    name: 'Animalizm',
                    selected: false,
                    level: 0,
                    restricted: false
                },
                {
                    id: 2,
                    name: 'Auspex',
                    selected: false,
                    level: 0,
                    restricted: false
                },
                {
                    id: 3,
                    name: 'Blood Sorcery',
                    selected: false,
                    level: 0,
                    restricted: false
                },
                {
                    id: 4,
                    name: 'Celerity',
                    selected: false,
                    level: 0,
                    restricted: false
                },
                {
                    id: 5,
                    name: 'Dominate',
                    selected: false,
                    level: 0,
                    restricted: false
                },
                {
                    id: 6,
                    name: 'Fortitude',
                    selected: false,
                    level: 0,
                    restricted: false
                },
                {
                    id: 7,
                    name: 'Obfuscate',
                    selected: false,
                    level: 0,
                    restricted: false
                },
                {
                    id: 8,
                    name: 'Oblivion',
                    selected: false,
                    level: 0,
                    restricted: false
                },
                {
                    id: 9,
                    name: 'Potency',
                    selected: false,
                    level: 0,
                    restricted: false
                },
                {
                    id: 10,
                    name: 'Presence',
                    selected: false,
                    level: 0,
                    restricted: false
                },
                {
                    id: 11,
                    name: 'Protean',
                    selected: false,
                    level: 0,
                    restricted: false
                },
                {
                    id: 12,
                    name: 'Thin Blood Alchemy',
                    selected: false,
                    level: 0,
                    restricted: false
                }
            ]
        }
    },
    methods: {
        changeDiscipline(discipline) {
            let disciplinesSelected = [this.character.disciplineOne.disciplineId, this.character.disciplineTwo.disciplineId, this.character.disciplineThree.disciplineId, this.character.disciplineFour.disciplineId, this.character.disciplineFive.disciplineId, this.character.disciplineSix.disciplineId]
            
            for (let item of this.disciplines) {
                if (discipline.disciplineId == item.id) {
                    item.selected = true;
                }
                if (disciplinesSelected.indexOf(item.id) == -1) {
                    item.selected = false;
                }    
            }
            if (discipline.disciplineId == 0) {
                discipline.level = 0;
            }
        }
    },
    mounted() {

    }
}
</script>
<style lang="scss">
    .creator {
        .character-info-box,
        .attributes-box,
        .skills-box {
            display: flex;
            justify-content: space-evenly;
            .column {
                flex-grow: 1;
                display: flex;
                flex-direction: column;
                max-width: 300px;
                margin: 20px 50px;
                .row {
                    label {
                        display: flex;
                        justify-content: space-between;
                        margin-bottom: 0.5rem;
                        .label-text {
                            margin-right: 1rem;
                        }
                    }
                }
            }
        }
        .character-info-box {
            .column {
                .row {
                    label {
                        select,
                        input {
                            max-width: 170px;
                            width: 170px;
                            padding: 0;
                        }
                    }
                }
            }
        }
        .disciplines {
            .column {
                .row {
                    .cell {
                        .select-row {
                            display: flex;
                            flex-wrap: nowrap;
                        }
                    }
                }
            }
        }
    }
</style>