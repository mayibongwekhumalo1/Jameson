


// Menu button




const menuButton = document.getElementById("menuButton");
const menuModal = document.getElementById("menuModal");
const closeButton = document.querySelector(".close-btn");
const readMore = document.getElementById("readMore");
const OpenMenu = document.getElementById("openMenu");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");








//  open modal function
function openModal(){
    menuModal.style.display ="flex";
}

// close modal fuction
function closeModal(){
    menuModal.style.display="none";
}

// activating modal on click
menuButton.addEventListener("click",openModal);

OpenMenu.addEventListener("click",()=>{
    menuModal.style.display = "flex";
});

closeButton.addEventListener("click", closeModal);



// opening log in

readMore.addEventListener("click", () => {
    loginPopup.classList.add("active");
    overlay.classList.add("active");
});


// exiting modal 
window.addEventListener("click", (event) => {
    if (event.target === menuModal) {
        closeModal();
    }
});

// add on 
window.addEventListener("keydown", (event) => {
    if (event.key === "Tab") {
        closeModal();
    }
});


// 

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ['<i class="fa-solid fa-chevron-right"></i>', '<i class="fa-solid fa-chevron-left"></i>'],
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

// scroll to top button






// Reserved Whiskey section (cards)


const cardsData = [


    {
        image: "assets/images/whiskey/select.png",
        title: "Select Reserve",
        description: "Select Reserve is a tripple distilled blend of rich pot still and grain whiskey of sherry cask and bourbon barrels <br> <br>",
        buttonText: "Order Now"
    },


    
    {
        image: "assets/images/whiskey/limited.png",
        title: "Limited Reserve",
        description: "Matured for 18years in hand-selected oak cask from Europe and America, this rare whiskey is finished in first-fill bourbon barrels",
        buttonText: "Order Now"
    },

     
    {
        image: "assets/images/whiskey/golden.png",
        title: "Gold Reserve",
        description: "A rich chewy entru in the Jameson range, with three styles of pot still carefully balanced <br> <br>",
        buttonText: "Order Now"
    },


    
    {
        image: "assets/images/whiskey/special.png",
        title: "Special Reserve",
        description: "This is a smooth spicy 12 year old blended Iridh whiskey with a good content of pure postil.<br> <br> ",
        buttonText: "Order Now"
    }



];


// creating cards


function cardsRender(){
    const container = document.getElementById("cardsContainer");

    cardsData.forEach(card =>{

        const cardElement = document.createElement("div");
        cardElement.classList.add("card");


        cardElement.innerHTML = `
        <img src="${card.image}" alt="${card.title}">
        <div class ="starts">
        <i class="ri-star-fill"></i>
      <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-half-fill"></i>
        
        </div>
        <div class="card-content">
            <h2>${card.title}</h2>
            <p>${card.description}</p>
            <button class"">${card.buttonText}</button>
        </div>
    `;

    container.appendChild(cardElement);


    })
}


document.addEventListener("DOMContentLoaded", cardsRender());



// whiskey  section



const cardsData2 = [


    {
        image: "assets/images/whiskey2/caskmates.png",
        title: "Caskmates",
        description: "Jameson Caskmates Stout and IPA edition-triple distilled whiskey you love finished in craft beer barrels <br> <br>",
        buttonText: "Order Now"
    },


    
    {
        image: "assets/images/whiskey2/Blender’s Dog.png",
        title: "Blender’s Dog",
        description: "A rich,round ,creamy mouthfeel, whith the sweetness of butterscotch, giving way to the prinkle of the pot still spices",
        buttonText: "Order Now"
    },

     
    {
        image: "assets/images/whiskey2/Black Barrel.png",
        title: "Black Barrel",
        description: "Is our tribute to our cooper,who painstaking give their bourbon barrels on aadditional charring to reveal their untold richness",
        buttonText: "Order Now"
    },


    
    {
        image: "assets/images/whiskey2/Crested.png",
        title: "Crested",
        description: "Crested is the tribute to the first drops bottled at The BOw Street Distilled and it is Jameson's oldest distillery bottles brand",
        buttonText: "Order Now"
    }



];




function whiskeyRender(){
    const whiskeyCardContainer = document.getElementById("WhiskeyContainer");

    cardsData2.forEach(card =>{

        const cardDiv = document.createElement("div");
        cardDiv.classList.add("card");


        
        cardDiv.innerHTML = `
        <img src="${card.image}" alt="${card.title}">
        <div class="card-content">
        <div class ="starts" id="stars">
          <i class="ri-star-fill"></i>
      <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
       <i class="ri-star-half-fill"></i>
        </div>
            <h2>${card.title}</h2>
            <p>${card.description}</p>
            <button class"">${card.buttonText}</button>
        </div>
    `;

    
    whiskeyCardContainer.appendChild(cardDiv);
    })

}

document.addEventListener("DOMContentLoaded", whiskeyRender());

    

// testimonial cards



const testCards = [


    {
        image:"assets/images/testmonials/t1.png",
        comment:"Jameson Gold Reserve <br> Remakably,it lingers with the esessnce of milk chocolate and butterscotch. <br>  <br>  <br> ",
        name:"David Beckham"


    },


    
    {
        image:"assets/images/testmonials/t2.png",
        comment:"My go-to cocktail. <br> The best everyday <br> whiskey in the world  <br>  <br>  <br>  <br>",
        name:"Jadon Sancho"


    },

    
    {
        image:"assets/images/testmonials/t3.png",
        comment:"Excellent Irish sipping whiskey. But if you have to dilute there is nothing  better than Jameson and ginger ale  with a slice of lime! And if you are in  Northen Ireland, visit the didtillery great tour. ",
        name:"Serena Williams"


    },




];








function testmonialCardsRender(){
    const testContainer = document.getElementById("testimonialContainer");
    testContainer.style = 'width:100%; display: flex; justify-content: center; padding-top: 3rem; gap:20px; flex-wrap: wrap; min-height: 454px;';

    testCards.forEach(card =>{

        const testCard = document.createElement("div");
        testCard.classList.add("card");
        testCard.style ='width:300px;height:400px; display:flex;flex-direction: column;align-items:center; gap: 20px;padding:10px 20px; border-radius:0;'

        
        testCard.innerHTML = `
        <img src="${card.image}" alt="comment from client">
        <div class="card-content">
        <div class ="starts">
          <i class="ri-star-fill"></i>
      <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-half-fill"></i>
        </div>
           
            <p>${card.comment}</p>
            <span class"">${card.name}</span>
        </div>
    `;

    
    testContainer.appendChild(testCard);
    })

}

document.addEventListener("DOMContentLoaded", testmonialCardsRender());



const joinBtn = document.getElementById("submit");
const loginPopup = document.getElementById("login-popup");
const overlay = document.getElementById("overlay");



joinBtn.addEventListener("click", () => {
    loginPopup.classList.add("active");
    overlay.classList.add("active");
});

function closeLogin() {
    loginPopup.classList.remove("active");
    overlay.classList.remove("active");
}

