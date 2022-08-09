window.maxVelocity = 300;
window.friction = 0.001;
window.defaultSpeed = 2;
window.particleNumber = 100;
// window.i =
//   document.cookie &&
//   Number(document.cookie.slice(document.cookie.indexOf("=") + 1)) <
//     window.poemOriginal.length
//     ? Number(document.cookie.slice(document.cookie.indexOf("=") + 1))
//     : 0;
window.i = 0;
console.log(document.cookie);
let garamond;

function preload() {
  // garamond = loadFont("Garamond");
}

function setup() {
  window.poem = JSON.parse(JSON.stringify(window.poemOriginal));
  const cnv = createCanvas(windowWidth, windowHeight);

  window.particles = [];
  for (let i = 0; i < 100; i++) {
    const s = new Particle(random(windowWidth), random(windowHeight));
    window.particles.push(s);
  }

  for (let stanza of window.poem) {
    for (let line of stanza.filter((x) => x.text)) {
      // formatting correctly
      line.fontSize = line.w
        ? (line.w * (width / 100) * 2) / line.text.length
        : 24;
      line.renderX = line.p[0] * (width / 100);
      line.renderY = line.p[1] * (height / 100);
      line.renderSpread = line.spread * (width / 100);
    }
  }

  processCentroids();

  textFont("Palatino");
  textAlign(CENTER, CENTER);

  $("#edit").val(JSON.stringify(window.poemOriginal, null, 2));
}

function draw() {
  if (window.i >= window.poem.length) return;
  window.particles = window.particles.filter(
    (x) => x.pos.x >= 0 && x.pos.x <= width && x.pos.y >= 0 && x.pos.y <= height
  );
  if (window.particles.length < window.particleNumber) {
    window.particles.push(new Particle());
  } else {
    window.particles.splice(1, 1);
  }

  background("black");
  window.particles.forEach((x) => {
    x.calcHeading();
    x.move();
    x.show();
  });

  for (let line of poem[window.i]) {
    if (millis() % 1000) {
      const opacity = Number(line.o) || 80;
      fill(100, 100, 100, random(opacity / 2) + opacity / 2);
    }
    textSize(line.fontSize);
    text(line.text, line.renderX, line.renderY);
  }
}

function mouseClicked(ev) {
  if (ev.metaKey) {
    navigator.clipboard.writeText(
      `[${Math.floor((ev.clientX / width) * 100)}, ${Math.floor(
        (ev.clientY / height) * 100
      )}]`
    );
    return;
  }
  if (ev.shiftKey && window.i > 0) {
    window.i--;
  } else {
    window.i++;
  }
  if (window.i >= window.poem.length) {
    noLoop();
    document.cookie = "";
  } else {
    processCentroids();
    document.cookie = `i=${window.i}`;
  }
}

function processCentroids() {
  window.centroids = window.poem[window.i]
    .filter((el) => el.s)
    .map((el) => {
      return new Centroid(
        el.p,
        el.s,
        (el.sp || 100) * (width / 100),
        el.a,
        el.is ? el.is : el.w ? el.w / 2 : null
      );
    });
}

window.addEventListener("resize", setup);
