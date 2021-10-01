// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Chris Foster" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let menu = document.querySelectorAll(".menu")





let GingerBreadCell = document.querySelector('#qty-gb');
let GingerBreadCookies = localStorage.getItem('Ginger-Bread-Count')                             
if (GingerBreadCookies) {
    GingerBreadCell.textContent = GingerBreadCookies;
}
let ChocolateChipCell = document.querySelector('#qty-cc');
let ChocolateChipCookies = localStorage.getItem('Chocolate-Chip-Count')                             
if (ChocolateChipCookies) {
    ChocolateChipCell.textContent = ChocolateChipCookies;
}
let SugarSprinkleCell = document.querySelector('#qty-sugar');
let SugarSprinkleCookies = localStorage.getItem('Sugar-Sprinkle-Count')                             
if (SugarSprinkleCookies) {
    SugarSprinkleCell.textContent = SugarSprinkleCookies;
}








// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

// Event listener for clicks on the "+/-" buttons for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    let GingerBreadCount = parseInt(GingerBreadCell.textContent);
   GingerBreadCount = GingerBreadCount + 1;
    GingerBreadCell.textContent = GingerBreadCount;
    localStorage.setItem('Ginger-Bread-Count', GingerBreadCount);
    let totalCookiesCount = parseInt(totalCookiesCell.textContent);
    totalCookiesCount = totalCookiesCount + 1;
    console.log(totalCookiesCount)
    console.log(totalCookiesCell)
    totalCookiesCell.textContent = totalCookiesCount;
    localStorage.setItem('qty-total', totalCookiesCount);  
})



document.getElementById('minus-gb').addEventListener('click', function() {
    let GingerBreadCount = parseInt(GingerBreadCell.textContent);
    if(GingerBreadCount > 0)
   GingerBreadCount = GingerBreadCount - 1;
    GingerBreadCell.textContent = GingerBreadCount;
    localStorage.setItem('Ginger-Bread-Count', GingerBreadCount);
    let totalCookiesCount = parseInt(totalCookiesCell.textContent);
    if(GingerBreadCount > 0)
    totalCookiesCount = totalCookiesCount - 1;
    totalCookiesCell.textContent = totalCookiesCount;
    localStorage.setItem('qty-total', totalCookiesCount);  
})






// Event listener for clicks on the "+/-" buttons for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    let ChocolateChipCount = parseInt(ChocolateChipCell.textContent);
    ChocolateChipCount = ChocolateChipCount + 1;
     ChocolateChipCell.textContent = ChocolateChipCount;
     localStorage.setItem('Chocolate-Chip-Count', ChocolateChipCount);
     let totalCookiesCount = parseInt(totalCookiesCell.textContent);
     totalCookiesCount = totalCookiesCount + 1;
     totalCookiesCell.textContent = totalCookiesCount;
     localStorage.setItem('qty-total', totalCookiesCount);  
})
document.getElementById('minus-cc').addEventListener('click', function() {
    let ChocolateChipCount = parseInt(ChocolateChipCell.textContent);
    if(ChocolateChipCount > 0)
    ChocolateChipCount = ChocolateChipCount - 1;
     ChocolateChipCell.textContent = ChocolateChipCount;
     localStorage.setItem('Chocolate-Chip-Count', ChocolateChipCount);
     let totalCookiesCount = parseInt(totalCookiesCell.textContent);
     if(ChocolateChipCount > 0)
     totalCookiesCount = totalCookiesCount - 1;
     totalCookiesCell.textContent = totalCookiesCount;
     localStorage.setItem('qty-total', totalCookiesCount);  
    })







// Event listener for clicks on the "+/-" buttons for Sugar Sprinkle cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    let SugarSprinkleCount = parseInt(SugarSprinkleCell.textContent);
    SugarSprinkleCount = SugarSprinkleCount + 1;
     SugarSprinkleCell.textContent = SugarSprinkleCount;
     localStorage.setItem('Sugar-Sprinkle-Count', SugarSprinkleCount);
     let totalCookiesCount = parseInt(totalCookiesCell.textContent);
     totalCookiesCount = totalCookiesCount + 1;
     totalCookiesCell.textContent = totalCookiesCount;
     localStorage.setItem('qty-total', totalCookiesCount);  
})
document.getElementById('minus-sugar').addEventListener('click', function() {
    let SugarSprinkleCount = parseInt(SugarSprinkleCell.textContent);
    if(SugarSprinkleCount > 0)
    SugarSprinkleCount = SugarSprinkleCount - 1;
     SugarSprinkleCell.textContent = SugarSprinkleCount;
     localStorage.setItem('Sugar-Sprinkle-Count', SugarSprinkleCount);
     let totalCookiesCount = parseInt(totalCookiesCell.textContent);
     if(SugarSprinkleCount > 0)
     totalCookiesCount = totalCookiesCount - 1;
     totalCookiesCell.textContent = totalCookiesCount;
     localStorage.setItem('qty-total', totalCookiesCount);  
    })





    



let totalCookiesCell = document.querySelector("#qty-total");
let gingerBreadCount = parseInt(GingerBreadCell.textContent);
let chocolateChipCount = parseInt(ChocolateChipCell.textContent);
let sugarSprinkleCount = parseInt(SugarSprinkleCell.textContent);
let totalCookiesCount = gingerBreadCount + chocolateChipCount + sugarSprinkleCount
totalCookiesCell.textContent = totalCookiesCount;
// To-Do: Total Cookie Count is not visually resolving on site, but variable is correctly counted in-code
console.log(totalCookiesCount)



