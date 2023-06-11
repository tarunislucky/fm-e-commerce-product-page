// 1. Elements ///////////////////////////////////////

// 1.1 menu elements
const openMenuIcon = document.querySelector(".menu-icon");
const closeMenuIcon = document.querySelector(".close-menu-icon");
const navigation = document.querySelector(".navigation");

//1.2 image carausal elements
const prevImg = document.querySelector(".prev-img")
const nextImg = document.querySelector(".next-img");
const imageContainer = document.querySelector(".product-image--current");
const productImgThumbs = document.querySelectorAll(".product-image-thumb")
const imageThumbs = document.querySelectorAll(".thumb-img");
const productImages = document.querySelectorAll(".product-image");

// 2. image carousal state
let imageCount = productImages.length;
let pointer = 0;

// 3. functions //////////////////////
// 3.1 menu functions
const openMenu = () => {
  navigation.classList.add("overlay", "sidemenu");
  document.body.style.overflow = 'hidden';
}
const closeMenu = () => {
  console.log("yay")
  navigation.classList.remove("overlay", "sidemenu");
  document.body.style.overflow = 'auto';
}
// 3.2 image carousal function
const updateProductImage = () => {
  productImages.forEach(img => {
    img.classList.remove("active");
  })
  productImages[pointer].classList.add("active");
}
const updateThumbs = (img) => {
  productImgThumbs.forEach(thumb => {
    thumb.classList.remove("current-thumb");
  })
  img.closest(".product-image-thumb").classList.add("current-thumb");
}

// 4. listeners ////////////////////////////
// 4.1 menu listeners
//open menu
openMenuIcon.addEventListener("click", openMenu)
//close menu
closeMenuIcon.addEventListener("click", closeMenu)
//close overlay
document.addEventListener("click", (e) => {
  e.target.classList.contains("overlay") && closeMenu();
})

//4.2 image slider listeners
//on prevBtn click
prevImg.addEventListener("click", (e) => {
  //if it's the first image
  if (pointer === 0) {
    pointer = imageCount - 1;
  } else {
    pointer--;
  }
  updateProductImage();
})
// on next btn click
nextImg.addEventListener("click", (e) => {
  //if it's the last image
  if (pointer === imageCount - 1) {
    pointer = 0;
  } else {
    pointer++;
  }
  updateProductImage();
});
// on image thumbnail clicks
imageThumbs.forEach(imgThumb => {
  imgThumb.addEventListener("click", (e) => {
    pointer = e.target.dataset.id - 1;
    updateProductImage();
    updateThumbs(e.target);
  })
});

