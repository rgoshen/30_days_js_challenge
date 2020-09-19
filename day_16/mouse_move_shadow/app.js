const hero = document.querySelector(".hero");
const text = document.querySelector("h1");
const walk = 100; //100px

function shadow(e) {
  //   const width = hero.offsetWidth;
  //   const height = hero.offsetHeight;
  const { offsetWidth: width, offsetHeight: height } = hero;
  let { offsetX: x, offsetY: y } = e;

  // this helps when the e.target x and y values
  //reset themselves when the mouse encounters
  // the h1 child of hero (parent)
  if (this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // walk is 100 but the shadow should go between
  // -50 and 50
  const xWalk = Math.round((x / width) * walk - walk / 2);
  const yWalk = Math.round((y / height) * walk - walk / 2);

  text.style.textShadow = `${xWalk * 0.25}px ${yWalk * 0.25}px 3px yellow,
    ${xWalk * 0.5}px ${yWalk * 0.5}px 5px orange,
    ${xWalk * 0.75}px ${yWalk * 0.75}px 10px red`;
}

hero.addEventListener("mousemove", shadow);
