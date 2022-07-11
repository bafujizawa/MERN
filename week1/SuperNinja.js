class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    sayName() {
        console.log("My name is " + this.name)
    }

    showStats() {
        console.log("Showing stats for " + this.name);
        console.log("Health: " + this.health);
        console.log("Speed: " + this.speed);
        console.log("Stength: " + this.strength);
    }

    drinkSake() {
        this.health += 10;
    }
}

class Sensei extends Ninja {
    constructor(name, wisdom=10) {
        super(name, 200);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        super.drinkSake();
        console.log("What one programmer can do in one month, two programmer can do in two months.");
    }
}

const ninja = new Ninja("Sam", 100)

// console.log(ninja);
// ninja.sayName();

// ninja.drinkSake();
// ninja.showStats();

const sensei = new Sensei("Master Splinter");
sensei.speakWisdom();
console.log(sensei);