// let obj = {
//     'name': 'Harry',
//     'age': 23
// };
// console.log(obj);

// let animal = {
//     "eats": true
// };
// let rabbit = {
//     "jumps": true
// };

// rabbit.__proto__ = animal;
// console.log(rabbit);

// class Animal{
//     constructor(name){
//         this.name = name;
//         console.log("Object is referenced");
//     }
//     eats(){
//         console.log("I do eat");
//     }
//     jumps(){
//         console.log("I do jump");
//     }
// }

// class Lion extends Animal{
//     constructor(name){
//         super(name);
//         console.log("I am a lion");
//     }
//     roars(){
//         console.log("I do roar")
//     }
//     eats(){
//         super.eats();
//         console.log("Then roar");
//     }
// }
// let a = new Lion("Sher");
// console.log(a);

class User{
    constructor(name){
        this.name = name;
    }
    get name(){
        if(this._name.length<=4){
            console.log("Name is too short remember to change it");
        }
        return this._name;
    }
    set name(name){
        if(name.length<4){
            console.log(`${name} is too short cannot change`);
            return;
        }
        this._name = name;
    }
}
u = new User("John");
console.log(u.name);
u.name = "fsd";