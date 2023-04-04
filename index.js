// console.log("hello world!") 

const images = document.querySelectorAll('.image');
const popups = document.querySelectorAll('.popup');

images.forEach(image => {
  const popup = image.querySelector('.popup');
  
  image.addEventListener('click', function() {
    if (popup.style.display === 'none') {
      popup.style.display = 'block';
    } else {
      popup.style.display = 'none';
    }
  });
});



x = ["cheese","Зеле", "茄子", "Käsekuchen","डट दिखाओ","Csíz","Appelsin","Buncis","Säg omelett","เป๊ปซี่","Скажи 'изюм","김치",]

I = 0 

function myTest(){
    document.getElementById("cheese").innerHTML = x [I]

    I = I+1

    if (I>11) {
        I = 0
    }
};


// defining my list
let itemsList = [ 

]

//defining my variables
let Placeholder = document.getElementById("placeholder");

// defining the variables for my model
// they are all already inside my HTML code
let quicklook = document.getElementById('quicklook');
let quickLookImage = document.getElementById('quicklook-image');
let quickLookCountry = document.getElementById('country');
let quickLookPrice = document.getElementById('price');
let quickLookColor = document.getElementById('color');
let quickLookSection = document.getElementById('section');

for (let i = 0; i < itemsList.length; i++) {
    //looping my images for the background
    let img = document.createElement('img');

    img.src = itemsList[i].image;
    img.id = 'stampPlaceholder' + [i+1];

    Placeholder.append(img);

    //this is where the "quicklook" or "modal" code begins!
    //add a click event listener to each stamp image
    img.addEventListener('click', (event) => {

        // Get the clicked stamp's information, I'm creating a mini array called "stampInfo"
        let stampInfo = itemsList[i];

        quicklook.style.display="block";

        quickLookImage.src = stampInfo.Image;
        quickLookCountry.innerHTML = 'Country: ${stampInfo.country}';
        // quickLookPrice.innerHtml = 'Price: ${stampInfo.price ? '$' + stampInfo.price_in_USD: 'N/A'}';
        quickLookColor.innerHTML = 'Color: ${stampInfo.color}';
        quickLookSection.innerHTML = 'Catergory: ${stampInfo.catergory}';
    });
}

//so that my quic look goes away when clicking the cross, it's a function that i already defined in my HTML
function hideQuickLook() {
    quicklook.style.display = "none"
}



