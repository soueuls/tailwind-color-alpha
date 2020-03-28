const Color = require("color");

module.exports = function() {
  const PREFIXES = {
    backgroundColor: ["bg"],
    borderColor: ["border", "border-t", "border-r", "border-b", "border-l"],
    fill: ["fill"],
    stroke: ["stroke"],
    textColor: ["text"]
  };

  const PROPERTIES = {
    backgroundColor: ["backgroundColor"],
    borderColor: [
      "borderColor",
      "borderTopColor",
      "borderRightColor",
      "borderBottomColor",
      "borderLeftColor"
    ],
    fill: ["fill"],
    stroke: ["stroke"],
    textColor: ["color"]
  };

  return function({ addUtilities, theme, variants }) {
    let colors = theme("colors", []);
    let opacities = theme("opacity", []);
    for (const [key, value] of Object.entries(colors)) {
      const colorGroup = typeof value === "string" ? { [key]: value } : value;
      for (const [colorName, colorValue] of Object.entries(colorGroup)) {
        for (const o in opacities) {
          const colorVariant =
            typeof value === "string" || colorName === "default"
              ? key
              : `${key}-${colorName}`;
          for (const [variant, properties] of Object.entries(PREFIXES)) {
            const newColors = {};
            properties.forEach((property, index) => {
              newColors[`.${property}-${colorVariant}-alpha-${o}`] = {
                [`${PROPERTIES[variant][index]}`]: Color(colorValue)
                  .alpha(opacities[o])
                  .string()
              };
            });
            addUtilities(newColors, variants(variant));
          }
        }
      }
    }
  };
};
