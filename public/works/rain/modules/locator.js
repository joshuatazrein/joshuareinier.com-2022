import { cssToPixels, pixelsToCss } from "./css.js";

export default function Locator(settings) {
  var line;
  var saveParameter;

  const setParameter = (parameter) => {
    if (!line) return;
    // html = strippedLine();
    switch (parameter) {
      case "scrollTop":
        navigator.clipboard.writeText(
          `scrollTop="${pixelsToCss(window.scrollY, "%", settings.height)}"`
        );
        break;
      case "duration":
        const scrollTop = cssToPixels(line.attr("scrollTop"), settings.height);
        if (scrollTop > window.scrollY) return;
        navigator.clipboard.writeText(
          `duration="${pixelsToCss(
            window.scrollY - scrollTop,
            "%",
            settings.height
          )}"`
        );
        break;
      case "left":
        saveParameter = "left";
        $(window).on("mousedown", clickParameter);
        break;
      case "top":
        saveParameter = "top";
        $(window).on("mousedown", clickParameter);
        break;
      default:
        break;
    }
  };

  const clickParameter = (ev) => {
    switch (saveParameter) {
      case "left":
        navigator.clipboard.writeText(`left: ${pixelsToCss(ev.clientX, "vw")}`);
        break;
      case "top":
        navigator.clipboard.writeText(`top: ${pixelsToCss(ev.clientY, "vh")};`);
        break;
      default:
        break;
    }
    saveParameter = undefined;
    $(window).off("click", clickParameter);
  };

  $("p").on("click", (ev) => {
    line = $(ev.target);
    textIndicator.text(line.text());
  });

  let locator = $('<div class="locator"></div>');

  var textIndicator = $("<span class='adjust'></span>");
  locator.append(textIndicator);

  let newChild = $(`<button>scrollTop</button>`);
  newChild.on("click", () => setParameter("scrollTop"));
  locator.append(newChild);

  newChild = $(`<button>duration</button>`);
  newChild.on("click", () => setParameter("duration"));
  locator.append(newChild);

  newChild = $(`<button>left</button>`);
  newChild.on("click", () => setParameter("left"));
  locator.append(newChild);

  newChild = $(`<button>top</button>`);
  newChild.on("click", () => setParameter("top"));
  locator.append(newChild);

  $(window).on("keydown", (ev) => {
    if (ev.key === "Escape") {
      line = undefined;
    }
  });

  return locator;
}
