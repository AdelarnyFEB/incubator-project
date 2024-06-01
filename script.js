const all_images = document.querySelectorAll(".imageContainer img");

for (let i = 0; i < all_images.length; i++) {
  const image = all_images[i];

  image.addEventListener("click", function (e) {
    const clicked_image = e.target.src;

    document.getElementById("preview-image").classList.add("visible");
    document.getElementById("image-to-preview").src = clicked_image;
  });
}

const exit_btn = document.getElementById("exit");
exit_btn.addEventListener("click", function () {
  document.getElementById("preview-image").classList.remove("visible");
});
