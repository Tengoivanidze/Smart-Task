/*Დაბეჭდეთ რიცხვები 2 დან 8 მდე*/
for (let i = 2; i < 8; i++) { 
    console.log(i);
}
/*5 დან 35 - ის ჩათვლით დაბეჭდეთ ყოველი მეოთხე რიცხვი (უნდა დაიბეჭდოს 5,9,13…)*/
for (let i = 5; i <= 35; i += 4) {
    console.log(i); }
    /*დაბეჭდეთ 3 დან 8 მდე რიცხვების ნამრავლი*/
    let product=1
    for (let number =3;number<8;number++){
        console.log(number);
        product*=number;
    }  
    console.log('product',product) 
    /*Გამოაცხადეთ ობიექტი person რომელსაც აქვს firstName, lastName, age და დაბეჭდეთ person-სრული სახელი ( სახელი და გვარი)*/
const person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 30,
    
    // Method to return the full name of the person
    getFullName: function() {
        return `${this.firstname} ${this.lastname}`;
    }
};

// Print the person object
console.log("Person Object:", person);

// Print the full name of the person using the method
console.log("Full Name:", person.getFullName()); */
// Define the person object
const person = {
    firstname: 'John',
    lastname: 'Doe',
    age: 30,

    // Method to get the full name
    getFullName: function() {
        return `${this.firstname} ${this.lastname}`;
    }
};

// Print each property value of the person object
console.log('Firstname:', person.firstname);
console.log('Lastname:', person.lastname);
console.log('Age:', person.age);
console.log('Full Name:', person.getFullName());*/

/* დაწერეთ მასივი fruits ელემენტებით ["Apple", "Banana", "Orange"]; დაბეჭდეთ მასივის თითოეული წევრი.*/
// Define the array of fruits
const fruits = ['apple', 'banana', 'orange'];

// Print each fruit in the array
fruits.forEach(fruit => {
    console.log(fruit);
}); */
/*დაამატეთ fruits მასივის თავში Grapes და ბოლოში  Pineapples დაბეჭდეთ fruits*/
// Define the initial array of fruits
const fruits = ['apple', 'banana', 'orange'];

// Add 'grapes' at the beginning of the array
fruits.unshift('grapes');

// Add 'pineapple' at the end of the array
fruits.push('pineapple');

// Print each fruit in the updated array
fruits.forEach(fruit => {
    console.log(fruit);
});
//დაბეჭდეთ 1 დან 34 მდე რიცხვების ჯამი
// Initialize the sum variable
let sum = 0;

// Loop through numbers from 1 to 34
for (let i = 1; i <= 34; i++) {
    sum += i;
}
console.log('The sum of numbers from 1 to 34 is:', sum);*/

