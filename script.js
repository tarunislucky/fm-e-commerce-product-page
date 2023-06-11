// Elements ///////////////////////////////////////

//menu elements
const openMenuIcon = document.querySelector(".menu-icon");
const closeMenuIcon = document.querySelector(".close-menu-icon");
const navigation = document.querySelector(".navigation");

//image carausal elements
const prevImg = document.querySelector(".prev-img")
const nextImg = document.querySelector(".next-img");
const imageContainer = document.querySelector(".product-image--current");
const productImgThumbs = document.querySelectorAll(".product-image-thumb")
const imageThumbs = document.querySelectorAll(".thumb-img");

// image carousal state
const array = [1, 2, 3, 4];
let pointer = 0;

//functions
const openMenu = () => {
  navigation.classList.add("overlay", "sidemenu");
  document.body.style.overflow = 'hidden';
}
const closeMenu = () => {
  console.log("yay")
  navigation.classList.remove("overlay", "sidemenu");
  document.body.style.overflow = 'auto';
}
const updateProductImage = () => {
  imageContainer.innerHTML = "";
  imageContainer.innerHTML = `<img src='images/image-product-${array[pointer]}.jpg' alt='product-image'>`;
}
const updateThumbs = (img) => {
  productImgThumbs.forEach(thumb => {
    thumb.classList.remove("current-thumb");
  })
  img.closest(".product-image-thumb").classList.add("current-thumb");
}

// listeners ////////////////////////////

//open menu
openMenuIcon.addEventListener("click", openMenu)
//close menu
closeMenuIcon.addEventListener("click", closeMenu)
//close overlat
document.addEventListener("click", (e) => {
  e.target.classList.contains("overlay") && closeMenu();
})

//image slider behavior
//on prevBtn click
prevImg.addEventListener("click", (e) => {
  //if it's the first element
  if (pointer === 0) {
    pointer = array.length;
  }
  pointer--;
  updateProductImage();
})
// on next btn click
nextImg.addEventListener("click", (e) => {
  //if it's the last element
  if (pointer === array.length - 1) {
    pointer = -1;
  }
  pointer++;
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

