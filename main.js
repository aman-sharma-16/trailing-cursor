const cursorBox = document.getElementById("cursor-box");
const trailDiv = document.querySelectorAll(".trailDiv");
let mouse = {
  x: 0,
  y: 0,
};

const trailLength = trailDiv.length;

trailDiv.forEach((trail, index) => {
  trail.x = 0;
  trail.y = 0;
});

function moveTrail() {
  let x = mouse.x;
  let y = mouse.y;

  trailDiv.forEach((trail, index) => {
    trail.style.left = x - 18 + "px";
    trail.style.top = y - 18 + "px";
    trail.x = x;
    trail.y = y;
    trail.style.scale = 1 - index / trailLength;

    const nextTrailDiv = trailDiv[index + 1] || trailDiv[0];
    x += (nextTrailDiv.x - x) * 0.3;
    y += (nextTrailDiv.y - y) * 0.3;
  });
  requestAnimationFrame(moveTrail);
}

moveTrail();

cursorBox.addEventListener("mouseenter" || "touchstart", () => {
  trailDiv.forEach((trail) => {
    trail.style.display = "block";
  });
});

cursorBox.addEventListener("mousemove" || "touchmove", (e) => {
  mouse.x = e.clientX;
  mouse.y = e.clientY;
});

cursorBox.addEventListener("mouseleave" || "touchend", () => {
  trailDiv.forEach((trail) => {
    trail.style.display = "none";
  });
});
