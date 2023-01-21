$('.discription_button').click(function(){
 $(".discription").fadeIn()
 $(".usage").fadeOut()
 $(".brend").fadeOut()
})
$('.usage_button').click(function(){
    $(".discription").fadeOut()
 $(".usage").fadeIn()
 $(".brend").fadeOut()
})
$('.brend_button').click(function(){
    $(".discription").fadeOut()
 $(".usage").fadeOut()
 $(".brend").fadeIn()
})
// $(".discription")
// $(".usage")
// $(".brend")
$('.mask').click(function(){
    $('.mask div').fadeIn().delay(3000).fadeOut();
})

const card = [
    {
    image: "./img/Photo1.png",
    sell: true,
    title: 'Slimming Gel Body',
    description:'Гель для тела для похудения',
    price: 2480,
    oldprice: 3579 
},
{
    image: "./img/Photo1.png",
    title: 'Slimming Gel Body',
    description:'Гель для тела для похудения',
    price: 2480,
    oldprice: 3579
},
{
    image: "./img/Photo2.png",
    title: 'Slimming Gel Body',
    description:'Гель для тела для похудения',
    price: 2480,
    oldprice: 3579
},
{
    image: "./img/Photo2.png",
    title: "Крем для рук",
    description:"Гель для рук до 23 лет",
    price: 2000,
},
]
card.map((val)=>{
    const block = document.createElement("div")//создаём div block//
    block.classList.add("item_card")//добавляем класс для каждого див блока//
    block.innerHTML = `
    <img src="${val.image}" alt="" />
    ${val.sell?"<div class='sell'>sell</div>":""}
            <div class="item_text">
              <h1>${val.title}</h1>
              <div class="text_bottom">
                <p>${val.description}</p>
                <div class="price">
                  <h4>${val.price}</h4>
                  <h6>${val.oldprice ? val.oldprice : ""}</h6>
                </div>
              </div>
            </div>
    `
    const main = document.querySelector('.item_main')//вызываем родительский блок//
    main.appendChild(block)//добовляем в родительский блок наши карточки//
})