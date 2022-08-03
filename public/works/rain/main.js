import {
  cssConcat,
  cssMultiply,
  cssToPixels,
  percentToDecimal,
  pixelsToCss,
  stripSpaces,
} from "./modules/css.js";

import {
  calculateConstant,
  calculateSlope,
  getKey,
} from "./modules/transition.js";

import { randomRange, volumeCurve } from "./modules/math.js";

const settings = {
  height: 15000,
  style: {
    "background-color": "#353E58",
    color: "white",
    "font-family": "Palatino",
  },
  keyframes: {
    default: {
      from: {
        top: "100vh",
        opacity: "1",
        left: "*1",
        scale: "1.5",
      },
      to: {
        top: "-50px",
        left: "50vw",
        opacity: "0.5",
        scale: "0",
      },
    },
    grow: {
      from: {
        top: "50vh",
        left: "50vw",
        opacity: "1",
        scale: "0",
      },
      to: {
        top: "50vh",
        opacity: "0",
        left: "*1",
        scale: "3",
      },
    },
    rest: {
      "0%": { opacity: "0" },
      "50%": { opacity: "*1" },
      "100%": { opacity: "0" },
    },
    "slide-in-out": {
      "0%": { top: "-150px", opacity: "0" },
      "30%-70%": { top: "*1", opacity: "*1" },
      "100%": { top: "*1", opacity: "0" },
    },
    "left-right": {
      from: {
        left: "-150px",
      },
      to: {
        left: "100vw",
      },
    },
    "right-left": {
      from: {
        left: "100vw",
      },
      to: {
        left: "-150px",
      },
    },
    "top-bottom": {
      from: {
        top: "-150px",
      },
      to: {
        top: "100vh",
      },
    },
    "bottom-top": {
      from: {
        top: "100vh",
      },
      to: {
        top: "-150px",
      },
    },
    shake: {
      from: {
        top: "-2px",
        left: "-2px",
      },
      to: {
        top: "+3px",
        left: "+3px",
      },
    },
    flicker: {
      from: {
        opacity: "*0.5",
      },
      to: {
        opacity: "*1.6",
      },
    },
  },

  defaults: {
    style: {
      "font-size": "24px",
      "text-align": "center",
      width: "0px",
      "white-space": "nowrap",
    },
    transition: "default",
    duration: "100vh",
    "animation-duration": "50",
  },

  audioDefaults: {
    volume: 1,
    duration: "5%",
  },
};

function start() {
  const scroller = new Scroller();
  // const locator = Locator(settings);
  // $("body").append(locator);
  $(".start-screen").hide();
}

class Scroller {
  constructor() {
    if (document.cookie.includes("scroll")) {
      const scroll = document.cookie.slice(7);
      $(window).on("load", () => window.scroll(0, scroll));
    }
    $("#poem").css(
      "height",
      pixelsToCss(settings.height + window.innerHeight, "px")
    );
    if (settings.style) {
      for (let key of Object.keys(settings.style)) {
        $("body").css(key, settings.style[key]);
      }
    }
    this.sounds = $("audio")
      .toArray()
      .map((el) => {
        el = $(el);
        const start = cssToPixels(el.attr("scrollTop"), settings.height);
        return {
          start: start,
          end:
            start +
            cssToPixels(
              el.attr("duration") || settings.audioDefaults.duration,
              settings.height
            ),
          volume: Number(el.attr("volume") || settings.audioDefaults.volume),
          sound: el[0],
        };
      });

    this.lines = $("p")
      .toArray()
      .map((el) => {
        el = $(el);
        const left = pixelsToCss(cssToPixels(el.css("left")), "vw");
        if (el.attr("scrolledStyle")) {
          el.attr(
            "scrolledStyle",
            el.attr("scrolledStyle") + "; left: " + left
          );
        } else {
          el.attr("scrolledStyle", "left: " + left);
        }
        el.css("left", "");
        const start = cssToPixels(el.attr("scrollTop"), settings.height);
        const end =
          start +
          cssToPixels(
            el.attr("duration") || settings.defaults.duration,
            settings.height
          );
        const transitionName = el.attr("transition");
        if (settings.defaults.style) {
          for (let styleName of Object.keys(settings.defaults.style).filter(
            (x) => !(el.attr("style") && el.attr("style").includes(x))
          )) {
            el.css(styleName, settings.defaults.style[styleName]);
          }
        }
        if (el.attr("width")) {
          // makes width appropriate to font sizes
          // TODO: add letter-spacing adjustment
          const characterWidth =
            cssToPixels(el.attr("width")) / el.text().length;

          el.css(
            "font-size",
            pixelsToCss(characterWidth * 3, "px")
            // each letter is about a third the font size wide
          );
        }

        el.css("position", "fixed");
        el.hide();

        return {
          start: start,
          end: end,
          keyframes:
            typeof transitionName === "object"
              ? transitionName
              : settings.keyframes[transitionName] ||
                settings.keyframes[settings.defaults.transition],
          item: el,
        };
      });
    this.animations = [];

    $(window).on("scroll", this.handleScroll);
    window.requestAnimationFrame(this.handleAnimationFrame);
    this.sounds.forEach((x) => {
      x.sound.play();
      x.sound.volume = 0;
    });
    this.handleScroll();
  }

  startElement = (el) => {
    el = $(el);
    el.show();
    if (el.attr("animation")) {
      const animation = el.attr("animation").split(" ");
      const name = animation[0];
      console.log(animation);
      this.animations.push({
        item: el,
        animation: animation[0],
        fire: 0,
      });
    }
  };

  stopElement = (el) => {
    el = $(el);
    el.hide();
    if (el.attr("animation")) {
      this.animations.splice(
        this.animations.find((x) => x.item[0] === el[0]),
        1
      );
    }
  };

  handleAnimationFrame = (timestamp) => {
    this.animations.forEach((x) => {
      const keyframes = settings.keyframes[x.animation];
      if (timestamp > x.fire) {
        // fire the animation
        for (let key of Object.keys(keyframes.from)) {
          if (keyframes.from[key].includes("*")) {
            const value = pixelsToCss(
              randomRange(
                cssToPixels(cssMultiply(keyframes.from[key], x.item.css(key))),
                cssToPixels(cssMultiply(keyframes.to[key], x.item.css(key)))
              )
            );
            x.item.css(key, value);
          } else {
            const value = pixelsToCss(
              randomRange(
                cssToPixels(keyframes.from[key]),
                cssToPixels(keyframes.to[key])
              )
            );
            x.item.css(key, cssConcat(value, x.item.css(key)));
          }
        }
        x.fire =
          timestamp +
          Math.floor(Math.random() * settings.defaults["animation-duration"]);
      }
    });
    requestAnimationFrame(this.handleAnimationFrame);
  };

  fadeout = (sound, max) => {
    for (let i = 0.1; i <= 1; i += 0.1) {
      // fade out sound
      setTimeout(() => (sound.volume = max - i * max), i * 1000);
    }
  };

  handleScroll = () => {
    // if (window.scrollY > settings.height) {
    //   // window.location = "./index.html";
    // }

    document.cookie = `scroll=${window.scrollY};`;
    const scroll = window.scrollY;

    // sounds
    this.sounds.forEach((el) => {
      if (scroll > el.start && scroll < el.end) {
        const progress = (scroll - el.start) / (el.end - el.start);
        el.sound.volume = volumeCurve(progress, 0.3, 1, 0.7);
        if (!el.playing) {
          el.playing = true;
          el.sound.currentTime = 0;
        }
      } else {
        if (el.playing) {
          // fade it out
          this.fadeout(el.sound, el.sound.volume);
          el.playing = false;
        }
      }
    });

    // lines
    this.lines.forEach((el) => {
      if (el.start > scroll || el.end < scroll) {
        if (el.item.is(":visible")) this.stopElement(el.item);
        return;
      }
      const keyframes = el.keyframes;
      const progress = (scroll - el.start) / (el.end - el.start);
      el = el.item;
      if (!el.is(":visible")) {
        this.startElement(el);
      }

      const currentStyle = {};
      if (el.attr("scrolledStyle")) {
        for (let styleName of el.attr("scrolledStyle").split(";")) {
          const styleList = styleName.split(":");
          if (styleList.length === 1) continue;
          currentStyle[stripSpaces(styleList[0])] = stripSpaces(styleList[1]);
        }
      }

      const processStyle = (animatedStyle) => {
        for (let styleName of Object.keys(animatedStyle)) {
          el.css(styleName, animatedStyle[styleName]);
        }
      };

      if (keyframes.from) {
        processStyle(
          calculateSlope(keyframes.from, keyframes.to, progress, currentStyle)
        );
      } else if (keyframes["0%"]) {
        // make a list of percentages (will be mapped back to the keys)
        let keyframesSorted = [];
        for (let key of Object.keys(keyframes)) {
          if (key.includes("-")) {
            const split = key.split("-");
            keyframesSorted.push(percentToDecimal(split[0]));
            keyframesSorted.push(percentToDecimal(split[1]));
          } else {
            keyframesSorted.push(percentToDecimal(key));
          }
        }
        keyframesSorted = keyframesSorted.sort();

        // find the proper progress
        for (let i = 1; i < keyframesSorted.length; i++) {
          if (
            progress > keyframesSorted[i - 1] &&
            progress < keyframesSorted[i]
          ) {
            if (
              getKey(keyframesSorted[i - 1], keyframes) ===
              getKey(keyframesSorted[i], keyframes)
            ) {
              // it's in a static percentage, just set settings
              processStyle(
                calculateConstant(
                  keyframes[getKey(keyframesSorted[i - 1], keyframes)],
                  currentStyle
                )
              );
            } else {
              // it's in between so do the linear thing with this one
              processStyle(
                calculateSlope(
                  keyframes[getKey(keyframesSorted[i - 1], keyframes)],
                  keyframes[getKey(keyframesSorted[i], keyframes)],
                  (progress - keyframesSorted[i - 1]) /
                    (keyframesSorted[i] - keyframesSorted[i - 1]),
                  currentStyle
                )
              );
            }
          }
        }
      }
    });
  };
}

$("#start-button").on("click", start);
