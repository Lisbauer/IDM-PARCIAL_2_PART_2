document.addEventListener("DOMContentLoaded", () => {
  const productImage = document.getElementById("productImage");
  const thumbnails = document.querySelectorAll(
    ".galeria-imagenes .img-thumbnail"
  );

  thumbnails.forEach((thumbnail) => {
    thumbnail.addEventListener("click", () => {
      productImage.src = thumbnail.src;

      thumbnails.forEach((item) => {
        item.classList.remove("active");
      });

      thumbnail.classList.add("active");
    });
  });
});
