const filterItem = document.querySelector(".items")
const filterImg = document.querySelectorAll(".img")

window.onload = () => {
   filterItem.onclick = (selectedItem) => {
      if (selectedItem.target.classList.contains("item")){
         filterItem.querySelector(".active").classList.remove("active");
         selectedItem.target.classList.add("active");
         let filterName = selectedItem.target.getAttribute("data-name");
         filterImg.forEach((image) => {
            let filterImages = image.getAttribute("data-name");
            if ((filterImages === filterName) || filterName === "all") {
               image.classList.remove("hide");
               image.classList.add("show");
            } else {
               image.classList.add("hide");
               image.classList.remove("show");
            }
         })
      }
   }

   for (let index = 0; index < filterImg.length; index++) {
      filterImg[index].setAttribute("onclick", "preview(this)");
   }
}


const previewBox = document.querySelector(".preview-box"),
   previewImg = previewBox.querySelector("img"),
   categoryName = previewBox.querySelector(".title p"),
   shadow = document.querySelector(".shadow"),
   closeIcon = previewBox.querySelector(".icon");

function preview(element) {
   let selectedPrevImg = element.querySelector("img").src;
   let selectedImgCategory = element.getAttribute("data-name");
   categoryName.textContent = selectedImgCategory;
   previewImg.src = selectedPrevImg;
   previewBox.classList.add("show");
   shadow.classList.add("show");
   closeIcon.onclick = () => {
      previewBox.classList.remove("show");
      shadow.classList.remove("show");
   }
}