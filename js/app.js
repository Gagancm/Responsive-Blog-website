// {
//     const likeBtn = document.querySelector(".like__btn");
//     let likeIcon = document.querySelector("#icon_up"),
//       count = document.querySelector("#count_up");
    
    
    
//     let clicked = false;
    
    
//     likeBtn.addEventListener("click", () => {
//       if (!clicked) {
//         clicked = true;
//         likeIcon.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;
//         count.textContent++;
//       } else {
//         clicked = false;
//         likeIcon.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
//         count.textContent--;
//       }
//     });
// };

// {
//     const DislikeBtn = document.querySelector(".Dislike__btn");
//     let DislikeIcon = document.querySelector("#icon_down"),
//       count = document.querySelector("#count_down");
    
    
    
//     let clicked = false;
    
    
//     DislikeBtn.addEventListener("click", () => {
//       if (!clicked) {
//         clicked = true;
//         DislikeIcon.innerHTML = `<i class="fa-solid fa-thumbs-down"></i>`;
//         count.textContent++;
//       } else {
//         clicked = false;
//         DislikeIcon.innerHTML = `<i class="fa-regular fa-thumbs-down"></i>`;
//         count.textContent--;
//       }
//     });
// };


var likeBtn = document.querySelectorAll('.like__btn');
var DislikeBtn = document.querySelectorAll('.Dislike__btn');
console.log(likeBtn); //only the first one is selected
console.log(DislikeBtn); //both are selected

let clicked = false;

likeBtn.forEach(likeBtn => {

  let likeIcon = document.querySelector("#icon_up"),
      count = document.querySelector("#count_up");

  likeBtn.addEventListener("click", () => {
    if (!clicked) {
      clicked = true;
      likeIcon.innerHTML = `<i class="fa-solid fa-thumbs-up"></i>`;
      count.textContent++;
    } else {
      clicked = false;
      likeIcon.innerHTML = `<i class="fa-regular fa-thumbs-up"></i>`;
      count.textContent--;
    }
  });
});

DislikeBtn.forEach(DislikeBtn => {

  let DislikeIcon = document.querySelector("#icon_down"),
  count = document.querySelector("#count_down");

  DislikeBtn.addEventListener("click", () => {
    if (!clicked) {
      clicked = true;
      DislikeIcon.innerHTML = `<i class="fa-solid fa-thumbs-down"></i>`;
      count.textContent++;
    } else {
      clicked = false;
      DislikeIcon.innerHTML = `<i class="fa-regular fa-thumbs-down"></i>`;
      count.textContent--;
    }
  });

});

