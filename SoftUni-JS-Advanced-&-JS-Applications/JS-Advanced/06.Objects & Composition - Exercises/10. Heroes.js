function solve(){
    function mage(name) {
        let hero = {
            name,
            health: 100,
            mana: 100,
            cast(spellName){
                console.log(`${this.name} cast ${spellName}`)
                this.mana -= 1
            }
        }
        return hero
     }
     function fighter(name){
        let hero = {
            name,
            health: 100,
            stamina: 100,
            fight(){
                console.log(`${this.name} slashes at the foe!`)
                this.stamina -= 1
            }
        }
        return hero
     }
     return { mage, fighter };
}

let create = solve();

const scorcher = create.mage("Scorcher");

scorcher.cast("fireball")

scorcher.cast("thunder")

scorcher.cast("light")

const scorcher2 = create.fighter("Scorcher 2");

scorcher2.fight()

console.log(scorcher2.stamina);

console.log(scorcher.mana);