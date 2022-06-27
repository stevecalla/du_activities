let inputText = document.getElementById("searchText");

window.addEventListener("load", clearAndLoadPhotos(photoDetails));
inputText.addEventListener("input", getInput);

function clearAndLoadPhotos(photoList) {
  clearPhotos();
  loadPhotoDetails(photoList);
  if (photoList.length === 37) {
    loadVideo();
  }
}

function clearPhotos() {
  document.querySelector(".container").innerHTML = "";
}

function createRandomOrder(photos) {
  let numberOfPhotos = photos.length;
  let displayPosition = [];
  for (let i = 0; displayPosition.length < numberOfPhotos; i++) {
    let ranNum = Math.floor(Math.random() * numberOfPhotos);
    if (!displayPosition.includes(ranNum)) {
      displayPosition.push(ranNum);
    }
  }
  return displayPosition;
}

function loadPhotoDetails(photoList) {
  // console.log(photoList);
  let displayPhotos = createRandomOrder(photoList);
  for (let i = 0; i < photoList.length; i++) {
    // console.log(i);
    let position = displayPhotos[i];
    document.querySelector(".container").innerHTML += `
      <div class="${photoList[position].size} photo-container">  
        <a download="${
          photoList[position].address
        }" href="./assets/images/${
      photoList[position].address
    }" title="Logo title" target="_blank">
        <p class="title-location">${photoList[position].caption}</p>
        <img
        src="./assets/images/${photoList[position].address}"
        alt="${photoList[position].caption}"
        loading="lazy"
        />
      </div>
      `;
  }
}

function loadVideo() {
  document.querySelector(".container").innerHTML += `
  <div class="video photo-container">  
    <a download="" href="" title="Logo title" target="_blank">
    <p class="title-location">Video of Bessie retrieving ball</p>
    <video
      id="dog-video"
      width="400"
      controls
      loading="lazy"
      alt="Bessie the dog"
      >
        <source src="./assets/images/IMG_4500.mp4" type="video/mp4" />
      </video>
  </div>
  `;
}

function filterImages(searchText) {
  let searchInput = searchText.toLowerCase();
  let filteredPhotos = [];
  for (let i = 0; i < photoDetails.length; i++) {
    if (photoDetails[i].caption.toLowerCase().includes(searchInput)) {
      filteredPhotos.push(photoDetails[i]);
    }
  }
  clearPhotos();
  loadPhotoDetails(filteredPhotos);
}

function getInput() {
  let searchText = inputText.value;
  if (searchText.length > 1) {
    filterImages(searchText);
  }
}

