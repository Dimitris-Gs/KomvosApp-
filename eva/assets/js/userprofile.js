const editProfile = document.getElementById("editform");
const btn = document.getElementById("toggle");
btn.onclick = function () {
  if (editProfile.style.display !== "none") {
    editProfile.style.display = "none";
  } else {
    editProfile.style.display = "block";
  }
};