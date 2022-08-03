export function randomRange(min, max) {
  return Math.random() * (max - min) + min;
}

export function volumeCurve(progress, attack, sustain, release) {
  // attack: attack time
  // sustain: max volume
  // release: release time

  if (progress < attack) {
    return sustain * (1 / attack) * progress;
  } else if (progress > release) {
    // calculate reverse mx + b
    release = 1 - release;
    return sustain * ((-1 / release) * progress + 1 / release);
  } else {
    return sustain;
  }
}
