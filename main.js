const intro = document.querySelector('.intro');
const btn = document.querySelector('.btn');

btn.addEventListener('click' , () => {

intro.classList.toggle('active');

});

const i = document.querySelector('.fa-solid.fa-bars');
const ul = document.querySelector('ul');

i.addEventListener('click' , () => {

ul.classList.toggle('active');



});




const btnd = document.querySelector('.btndark');
const container = document.querySelector('.container');
btnd.addEventListener('click' , () => {

container.classList.toggle('active');
btnd.innerText = ("LIGHT MODE");


});



const user = document.querySelector('.fa-solid.fa-user');
const main = document.querySelector('.main');
const mainlogin = document.querySelector('.mainlogn');
user.addEventListener('click' , () => {
 
    main.classList.toggle('active');
mainlogin.classList.toggle('active');

});





















/* pre loader*/
    const preloader = document.getElementById('preloader');

window.addEventListener('load', () => {
    
    // بنستنى ثانية بسيطة عشان المستخدم يلحق يشوف اللودينج وبعدين نخفيه
    setTimeout(() => {
        preloader.classList.add('fade-out');
    }, 1000); 
});












const image = document.querySelector('.images');
const productPrice = document.querySelector('.productPrice');















const products = {
    "item1":{
        name : "white tshirt(White)",
        price : "660.00 EGY",
        Image: " liz3.jpg"

    },
        "item2":{
        name : "black tshirt(green)",
        price : "960.00 EGY",
        Image: " liz1.jpg"

    },
            "item3":{
        name : "offwihte tshirt(green)",
        price : "2000.00 EGY",
        Image: " liz5.jpg"

    },
            "item4":{
        name : "blue tshirt(green)",
        price : "100.00 EGY",
        Image: " liz2.jpg"

    }

};
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");

if (productId && products[productId]) {
    const data = products[productId];
    document.getElementById("productTitle").innerText = data.name;
    document.getElementById("productPrice").innerText = data.price;
    document.getElementById("mainImg").src = data.image;
};
































function sayhello(username) {

console.log(`hello how are you ${username} ?`);

}

sayhello("malek");