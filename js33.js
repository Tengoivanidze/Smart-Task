//1. დაწერეთ ფუნქცია რომელსაც გადასცემ ორ რიცხვს (m,n) და დააბრუნებს რომელიც მეტია იმ რიცხვს , თუ რიცხვები ტოლია დააბრუნებს 0 -ს

function numbers (m,n)
{
    if(m>n)
        console.log(m)
    else if (n>m)
        console.log(n)
    else console.log(0)
}
numbers(5,5)*/
//2. დაწერეთ ფუნქცია რომელსაც გადასცემთ ორ ცვლადს(რიცხვს), დააბრუნეთ რიცხვების ჯამი*
function sum(m,c){
    console.log(m+c)
}
sum(2,6)*/
//3. დაწერეთ ფუნქცია რომელიც დააბეჭდავს თქვენ სახელს და გვარს ( ფუნქციას არ აქვს პარამეტრი)
function fullname() {
    let firstName = 'Tengo';
    let lastName = 'Ivanidze';
    
    console.log(firstName + " " + lastName);
  }
  fullname()*/
  //4. დაწერეთ ფუნქცია ორი პარამეტრით : firstname და lastname დააბრუნეთ სრული სახელი და დაბეჭდეთ ( ფუნქცია აბრუნებს სრულ სახელს და ფუნქციის გარეთ ბეჭდავთ)
function names(firstName,lastName) {
    return firstName + ' ' + lastName;
}
let firstName = 'tengo';
let lastName = 'ivanidze';
let fullname = names(firstName,lastName)
console.log(fullname) */
//5. Დაწერეთ ფუნქცია რომელსაც გადასცემთ ერთ რიცხვს (n) და ფუნქციამ უნდა დააბრუნოს 1 დან ამ რიცხვამდე  (n-მდე) რიცხვების ნამრავლი ( ანუ თუ რიცხვი არის 3 ფუნქციამ უნდა დააბრუნოს 1*2*3 -ის მნიშვნელობა, დაგჭირდებათ ახალი ცვლადის გამოცხადება ფუნქციის შიგნით რომელსაც მიანიჭებთ ნამრავლის მნიშვნელობას. Პ.ს. გამოიყენეთ თქვენთვის სასურველი ციკლი)
function task(n){
    let number = 1; for (e=1;e<=n;e++)
      number *= e;
    console.log(number)
}

task(5)

//6. დაბეჭდეთ  სტუდენტის სრული სახელი (სახელი+გვარი-  გამოიყენეთ student ობიექტის მეთოდი)
let object = {
    fistName: 'tengo',
    lastName: 'ivanidze',
    age:19,
    scores: [4,5,2,3,7],
    fullName (){
        console.log(this.firstName,this.lastName)

    }
}
//7. Დაწერეთ ფუნქცია რომელსაც გადასცემთ სტუდენტის ქულებს ( scores) და ფუნქცია დააბრუნებს  ქულების ჯამს
function getSumOfScores (scores){
    let sum = 0;
    for (e=0; e < scores.length; e++) {
        sum += scores[e];
    }
     return sum;
}
//8. დაბეჭდეთ სტუდენტის სახელი და ასაკი
let object ={
    fistName: 'tengo',
    lastName: 'ivanidze',
    age:19,
    scores:[2,3,7,4,5],
    fullName(){
        console.log(this.firstName,this.lastName)

    }
}