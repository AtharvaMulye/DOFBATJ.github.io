let currentLevel = 0;

function showIntro() {
  document.getElementById("intro").style.display = "block";
  document.addEventListener("click", function startLevels() {
    document.getElementById("intro").style.display = "none";
    document.removeEventListener("click", startLevels);
    document.getElementById("bgMusic").play();
    nextLevel();
  });
}

function showLevel(level) {
  document.querySelectorAll(".page").forEach((page) => {
    page.style.display = "none";
  });

  document.querySelectorAll(".overlay").forEach((overlay) => {
    overlay.style.display = "none";
    overlay.pause();
    overlay.playbackRate = 1.0;
  });

  if (level === 0) {
    showIntro();
  } else if (level <= 4) {
    document.getElementById(`level${level}`).style.display = "block";
    const currentOverlay = document.getElementById(`overlay${level}`);
    currentOverlay.style.display = "block";

    currentOverlay.play();
    currentOverlay.playbackRate = 0.75;
  } else {
    const endingPage = document.getElementById("ending");
    endingPage.style.display = "block";
    endingPage.addEventListener("click", function reloadPage() {
      location.reload();
    });
  }
}

function nextLevel() {
  if (currentLevel < 5) {
    currentLevel++;
    showLevel(currentLevel);
  }
}

function prevLevel() {
  if (currentLevel > 1) {
    currentLevel--;
    showLevel(currentLevel);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  showLevel(currentLevel);
});
