 let products ={
    data:[
        {
          productName:"Regular White T=Shirt",
          category:"topwear",
          price:"30",
          image:"./img/whiteT-shirt.avif"
        },
        {
            productName:"Beige short skirt",
            category:"bottomwear",
            price:"49",
            image:"./img/shortSkirt.webp"
          },
          {
            productName:"Sporty SmartWatch",
            category:"watch",
            price:"99",
            image:"./img/smartWatch.jpg"
          },
          {
            productName:"Basic Knitted Top",
            category:"topwear",
            price:"29",
            image:"./img/knittedTop.jpg"
          },
          {
            productName:"Black leather jacket",
            category:"jacket",
            price:"129",
            image:"./img/blackLetherJacket.webp"
          },
          {
            productName:"stylish pink Trousers",
            category:"bottomwear",
            price:"89",
            image:"./img/stylishPinkTrouser.webp"
          },
          {
            productName:"Brown men's jacket",
            category:"jacket",
            price:"189",
            image:"./img/brownmenJacket.jpg"
          },
          {
            productName:"Comfy gray pants",
            category:"bottomwear",
            price:"49",
            image:"./img/grayPant.jpg"
          },
    ],
 };

 for(let i of products.data){
    // creat card
    let card = document.createElement("div");
    card.classList.add("card", i.category, "hide");
    // card should have category and should stay hidden initially
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    // img tag
    let image = document.createElement("img");
    image.setAttribute("src", i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    // container
    let container = document.createElement("div");
    container.classList.add("container")
    // products name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerHTML = i.productName.toUpperCase();
    container.appendChild(name);
    // price
    let price = document.createElement("h6");
    price.innerText = "$" + i.price;
    container.appendChild(price);
    card.appendChild(container)
    document.getElementById("products").appendChild(card);
 }

//  parameter passed from button (parameter same as category)
    function filterProduct(value){
      // button class code
      let buttons = document.querySelectorAll(".button-value");
      buttons.forEach((button) =>{
        if(value.toUpperCase() == button.innerText.toUpperCase()){
          button.classList.add("active");
        }
        else{
          button.classList.remove("active");
        }
      });
       // select all cards
       let elements = document.querySelectorAll(".card");
       // loop through all cards
       elements.forEach((element) =>{
         // display all cards on all button click
         if(value == "all"){
           element.classList.remove("hide");
         }else{
           // display element based on category
           if(element.classList.contains(value)){
             element.classList.remove("hide");
         
         }else{
           element.classList.add("hide");
         }
       }
       });
    }

    // search button click
    document.getElementById("search").addEventListener("click",() =>{
     let searchInput = document.getElementById("search-input").value;
     let elements = document.querySelectorAll(".product-name");
     let cards = document.querySelectorAll(".card");

     elements.forEach((element,index) =>{
      if(element.innerText.includes(searchInput.toUpperCase())){
        cards[index].classList.remove("hide");
      }else{
        cards[index].classList.add("hide");
      }
     })
    })
// Initiallydisplay all products
window.onload = () =>{
  filterProduct("all");
}