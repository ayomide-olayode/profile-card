// Update current time every second
function updateTime() {
  const timeEl = document.getElementById("userTime");
  timeEl.textContent = Date.now();
}

updateTime();
setInterval(updateTime, 1000);

// Handle avatar upload
const uploadInput = document.getElementById("avatarUpload");
const avatarImage = document.getElementById("avatarImage");

uploadInput.addEventListener("change", (event) => {
  const file = event.target.files[0];
  if (file) {
    const imageURL = URL.createObjectURL(file);
    avatarImage.src = imageURL;
  }
});
const avatarURLInput = document.getElementById("avatarURL");

avatarURLInput.addEventListener("change", (event) => {
  const url = event.target.value.trim();
  if (url) {
    avatarImage.src = url;
  }
});
if (avatarURLInput) {
  avatarURLInput.addEventListener("change", (event) => {
    const url = event.target.value.trim();
    if (url.startsWith("http")) {
      avatarImage.src = url;
    } else {
      alert("Please enter a valid image URL starting with http or https");
    }
  });
}

