import {
  cssConcat,
  cssMultiply,
  cssToPixels,
  cssToUnit,
  pixelsToCss,
} from "./css.js";

export const calculateSlope = (from, to, progress, currentStyle) => {
  // TODO: get default styles and calculate "to" coordinates
  // TODO: add nonlinear styles (only calculate opacity, size, position, change the rest spontaneously)
  // TODO: add bezier curves in vanilla JS

  // const ease = bezier(0.5, 0, 0.5, 1);
  for (let styleName of Object.keys(from)) {
    let difference;
    // if animation is done with multipliers, use those instead
    const start = from[styleName].includes("*")
      ? cssMultiply(from[styleName], currentStyle[styleName])
      : from[styleName];
    const end = to[styleName].includes("*")
      ? cssMultiply(to[styleName], currentStyle[styleName])
      : to[styleName];
    if (Object.keys(to).includes(styleName)) {
      const b = cssToPixels(start);
      const c = cssToPixels(end);
      const m = c - b;
      difference = m * progress + b;
      if (styleName === "left") {
      }
      if (cssToUnit(from[styleName]) !== "") difference += "px";
    } else {
      difference = from[styleName];
    }
    if (
      from[styleName].includes("*") ||
      to[styleName].includes("*") ||
      !currentStyle[styleName]
    ) {
      currentStyle[styleName] = String(difference);
    } else if (currentStyle[styleName]) {
      currentStyle[styleName] = cssConcat(
        String(difference),
        currentStyle[styleName],
        styleName
      );
    }
  }
  return currentStyle;
};

export const calculateConstant = (from, currentStyle) => {
  for (let styleName of Object.keys(from)) {
    if (from[styleName].includes("*")) {
      currentStyle[styleName] = cssMultiply(
        from[styleName],
        currentStyle[styleName]
      );
    } else if (
      currentStyle[styleName] &&
      currentStyle[styleName].match(/[+-]/)
    ) {
      currentStyle[styleName] = cssConcat(
        from[styleName],
        currentStyle[styleName]
      );
    } else {
      currentStyle[styleName] = from[styleName];
    }
  }
  return currentStyle;
};

export const getKey = (key, keyframes) => {
  const keyString = pixelsToCss(key, "%");
  if (!keyframes[keyString]) {
    return Object.keys(keyframes).find((x) => x.includes(keyString));
  } else {
    return keyString;
  }
};
