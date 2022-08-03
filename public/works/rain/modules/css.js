export function percentToDecimal(string) {
  return Number(string.match(/^[0-9\.]*/)[0]) / 100;
}

export function pixelsToCss(number, unit, max = 1) {
  if (unit === "px") {
    return Math.floor(number) + "px";
  } else if (unit === "%") {
    return Math.floor((number / max) * 100000) / 1000 + unit;
  } else if (unit === "vw") {
    return Math.floor((number / window.innerWidth) * 1000) / 10 + unit;
  } else if (unit === "vh") {
    return Math.floor((number / window.innerHeight) * 1000) / 10 + unit;
  } else if (!unit) {
    return String(number);
  }
}

export function cssToNumber(string) {
  if (string[0] === "+") string = string.slice(1);
  return Number(string.match(/^[-0-9\.]*/)[0]);
}

export function cssToUnit(string) {
  return string.match(/[a-z]*$/)[0];
}

export function cssToPixels(string, max) {
  if (string.match(/[a-z%]+/) === null) {
    return Number(string);
  } else if (string.endsWith("px")) {
    return cssToNumber(string);
  } else if (string.endsWith("%")) {
    return (cssToNumber(string) / 100) * max;
  } else if (string.endsWith("vh")) {
    return (cssToNumber(string) / 100) * window.innerHeight;
  } else if (string.endsWith("vw")) {
    return (cssToNumber(string) / 100) * window.innerWidth;
  } else if (string.endsWith("em")) {
    return (cssToNumber(string) / 100) * max;
  }
}

export function cssConcat(animatedStyle, originalStyle, styleName) {
  // add them both to each other
  if (["opacity"].includes(styleName)) {
    return pixelsToCss(cssToPixels(animatedStyle) * cssToPixels(originalStyle));
  } else {
    return pixelsToCss(
      cssToPixels(animatedStyle) + cssToPixels(originalStyle),
      "px"
    );
  }
}

export function cssMultiply(multiplier, originalStyle) {
  multiplier = Number(multiplier.slice(1));
  return pixelsToCss(
    cssToPixels(originalStyle) * multiplier,
    cssToUnit(originalStyle)
  );
}

export function stripSpaces(string) {
  return string.replace(/\s/g, "");
}
