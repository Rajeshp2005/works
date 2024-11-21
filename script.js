const video = document.getElementById("myVideo");
video.playbackRate = 4;

function loading() {
  var tl = gsap.timeline();
  tl.to("#yellow1", {
    top: "-100%",
    delay: 0.4,
    duration: 0.7,
    ease: "expo.out",
  });
  tl.from(
    "#yellow2",
    {
      top: "100%",
      delay: 0.8,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );
  tl.to(
    "#loader h1",
    {
      delay: 0.6,
      duration: 0.7,
      color: "black",
    },
    "anim"
  );
  tl.to("#loader", {
    opacity: 0,
  });

  tl.to("#loader", {
    display: "none",
  });
  tl.from("#part2 a", {
    duration: 0.8,
    opacity: 0,
    scale: 2.5,
    stagger: 0.1,
  });
}
loading();

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
  
});
document.querySelector("#footer button").addEventListener("click", () => {
  scroll.scrollTo(0);
});

var elem = document.querySelectorAll(".elem");
var page2 = document.querySelector("#page2");
elem.forEach((ele) => {
  ele.addEventListener("mouseenter", () => {
    var bgImage = ele.getAttribute("data-img");
    page2.style.backgroundImage = `url(${bgImage})`;
  });
  ele.addEventListener("mouseleave", () => {
    page2.style.backgroundImage = ""; // Reset to the original state
  });
});
