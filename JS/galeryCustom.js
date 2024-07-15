function loadImages() {
  const contentMap = {
    "nase-kone": window.naseKone,
    "akcia-v-skolke": window.akciaVSkolke,
    "skolka-na-farme": window.skolkaNaFarme,
    "cas-na-farme": window.casNaFarme,
  };

  document.querySelectorAll(".nav a").forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      const contentId = event.target.getAttribute("data-content");
      loadContent(contentId);
    });
  });

  function loadContent(contentId) {
    const selectedImages = contentMap[contentId];
    const contentDiv = document.getElementById("content");
    contentDiv.innerHTML = "";
    selectedImages.forEach((image) => {
      const imgElement = document.createElement("img");
      imgElement.src = image.src;
      imgElement.alt = image.alt;
      imgElement.loading = "lazy";
      imgElement.className = "gallery-item";
      contentDiv.appendChild(imgElement);
    });

    // Get the modal
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal
    var modalImg = document.getElementById("modal-img");
    var captionText = document.getElementById("caption");

    // Get the dynamically loaded images and add click event listeners
    const loadedImages = document.querySelectorAll("#content .gallery-item");
    loadedImages.forEach((image) => {
      image.addEventListener("click", function () {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
      });
    });

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // Close the modal when clicking outside the modal content
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }
}

// Call the function to load images when the page loads
window.onload = loadImages;
