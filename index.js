module.exports = function() {
  const hexToRgb = hex => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return (
      result && {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      }
    );
  };

  return function({ addUtilities, theme }) {
    let colors = theme("colors", []);
    let opacities = theme("opacity", []);
    const newColors = {};

    for (const [key, value] of Object.entries(colors)) {
      const colorGroup = typeof value === "string" ? { [key]: value } : value;
      for (const [colorName, colorValue] of Object.entries(colorGroup)) {
        let rgb = hexToRgb(colorValue);
        if (rgb) {
          for (const o in opacities) {
            const colorVariant =
              typeof value === "string" || colorName === "default"
                ? key
                : `${key}-${colorName}`;
            newColors[`.bg-${colorVariant}-alpha-${o}`] = {
              "background-color": `rgba(${rgb.r},${rgb.g},${rgb.b}, ${opacities[o]})`
            };
          }
        }
      }
    }
    addUtilities(newColors);
  };
};
