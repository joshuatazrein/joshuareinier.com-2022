class Particle {
  constructor(x, y) {
    this.reset();
  }

  calcHeading() {
    // calculate the attractors and repulsors
    for (let centroid of window.centroids) {
      const distance = this.pos.dist(centroid.pos);
      if (distance < centroid.spread) {
        this.gravitate(
          centroid.pos,
          centroid.attraction,
          centroid.spread,
          centroid.angle
        );
      }
      if (distance < centroid.innerRepulsion) {
        this.gravitate(
          centroid.pos,
          -centroid.attraction,
          centroid.innerRepulsion
        );
      }
    }
  }

  gravitate(pos, attraction, spread, angle) {
    // calculate the hypotenuse between them
    let attractVector;
    if (angle) {
      // send it in a direction
      attractVector = p5.Vector.fromAngle(angle);
    } else {
      // send it towards the centroid
      attractVector = p5.Vector.sub(pos, this.pos);
    }
    const attractionAmount = map(attractVector.mag(), 0, spread, attraction, 0);
    attractVector.setMag(attractionAmount);
    this.vel.add(attractVector).limit(window.maxVelocity);
  }

  move() {
    if (
      this.pos.x > width ||
      this.pos.x < 0 ||
      this.pos.y > height ||
      this.pos.y < 0
    ) {
      this.reset();
    }

    if (this.vel.mag() > 0) {
      this.vel.setMag(this.vel.mag() * (1 - window.friction));
    }
    this.pos.add(this.vel);
  }

  reset() {
    const side = random(4);
    if (side < 1) {
      // left
      this.pos = createVector(0, random(height));
      this.vel = p5.Vector.fromAngle(range(-Math.PI, Math.PI));
      this.vel.setMag(window.defaultSpeed);
    } else if (side < 2) {
      // top
      this.pos = createVector(random(width), 0);
      this.vel = p5.Vector.fromAngle(range(-TWO_PI, 0));
      this.vel.setMag(window.defaultSpeed);
    } else if (side < 3) {
      // right
      this.pos = createVector(width, random(height));
      this.vel = p5.Vector.fromAngle(range(Math.PI, -Math.PI));
      this.vel.setMag(window.defaultSpeed);
    } else {
      // bottom
      this.pos = createVector(random(width), height);
      this.vel = p5.Vector.fromAngle(range(0, TWO_PI));
      this.vel.setMag(window.defaultSpeed);
    }
  }

  show() {
    colorMode(RGB, 100);
    fill(100, 100, 100, 7.5);
    circle(this.pos.x, this.pos.y, random(30) + 10);
    fill(100, 100, 100, 100);
    circle(this.pos.x, this.pos.y, 3);
  }
}

class Centroid {
  constructor(pos, attraction, spread, angle, innerRepulsion) {
    this.pos = createVector(pos[0] * (width / 100), pos[1] * (height / 100));
    this.attraction = attraction;
    this.spread = spread;
    if (angle !== undefined) {
      this.angle = map(mod(12, angle - 3), 0, 12, 0, TWO_PI);
    }
    this.innerRepulsion = innerRepulsion * (width / 100);
  }
}

function range(min, max) {
  return random(max - min) + min;
}

function mod(unit, number) {
  if (number > unit) number -= unit;
  else if (number < 0) number += unit;
  return number;
}
