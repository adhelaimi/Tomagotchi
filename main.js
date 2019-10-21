class Tomagotchi{
    constructor(name, age){
        this.name = name
        this.age = age
        this.hunger = 0
        this.sleepiness = 0
        this.boredom = 0
        }
        addAge(){
            this.age ++
        }

        hungry(){
            this.hunger -= 1
            if(this.hunger >= 10){
                console.log("passed away")
                // location.reload()
            }
        }
        feed(){
            this.hunger += 1
            
        }

        lightsOn(){
            this.sleepiness -= 1
            if(this.sleepiness >= 10){
                console.log("sleep")
                // location.reload()
            }
        }
        lightsOff(){
            this.sleepiness += 1
        }
        play(){
            this.boredom += 1
        }
        bored(){
            this.boredom -= 1
            if(this.boredom == 10){
                console.log("bored af")
                // location.reload()
            }
        }
}
let tomagotchi = new Tomagotchi("toomy")

    setInterval(() => {
        tomagotchi.addAge()
    }, 60 * 1000);

    setInterval(() => {
        tomagotchi.hunger()
        tomagotchi.bored()
        tomagotchi.lightsOff()
    }, 30 * 1000);