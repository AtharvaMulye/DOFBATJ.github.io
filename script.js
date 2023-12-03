let currentLevel = 0;

const showIntro = () => {
  document.getElementById("intro").style.display = "block";
  document.addEventListener("click", function startLevels() {
    document.getElementById("intro").style.display = "none";
    document.removeEventListener("click", startLevels);
    document.getElementById("bgMusic").play();
    nextLevel();
  });
};

const showLevel = (level) => {
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
    const levelElement = document.getElementById(`level${level}`);
    levelElement.style.display = "block";

    const currentOverlay = document.getElementById(`overlay${level}`);
    currentOverlay.style.display = "block";

    currentOverlay.play();
    currentOverlay.playbackRate = 0.75;
  } else {
    const endingPage = document.getElementById("ending");
    endingPage.style.display = "block";
    endingPage.addEventListener("click", reloadPage);
  }
};

const nextLevel = () => {
  if (currentLevel < 5) {
    currentLevel++;
    showLevel(currentLevel);
  }
};

const prevLevel = () => {
  if (currentLevel > 1) {
    currentLevel--;
    showLevel(currentLevel);
  }
};

const reloadPage = () => {
  location.reload();
};

document.addEventListener("DOMContentLoaded", () => {
  showLevel(currentLevel);
});
