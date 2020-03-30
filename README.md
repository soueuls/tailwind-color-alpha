> Automatic alpha variants for your Tailwind CSS colors based on your opacity config

## Why?

Tailwind only supports opacity but sometimes you need to apply semi-transparent background/border or text.

You could tweak your Tailwind configuration like this

```javascript
module.exports = {
  theme: {
    colors: {
      primary: "#2b2e4a",
      "primary-10": "rgba(43,46,74, 0.1)",
      "primary-20": "rgba(43,46,74, 0.2)",
      "primary-75": "rgba(43,46,74, 0.75)"
      // ...
    }
    // ...
  }
};
```

But it's repetitive, confusing and error prone. We can do better.

## Install

`npm install --save-dev tailwind-color-alpha`

```javascript
module.exports = {
  // ...
  plugins: [require("tailwind-color-alpha")()]
};
```

The plugin will automatically use your colors and opacity config to generate all the corresponding rgba values for your text, background, border, fill and stroke utility classes respecting your variant settings for each.

## Examples

```javascript
module.exports = {
  theme: {
    colors: {
      primary: "#2b2e4a"
    },
    opacity: {
      "25": ".25",
      "50": "0.5"
    }
  }
};
```

The configuration above yields the following utilities:

```css
.bg-primary-alpha-25 {
  background-color: rgba(43, 46, 74, 0.25);
}
.bg-primary-alpha-50 {
  background-color: rgba(43, 46, 74, 0.5);
}
.text-primary-alpha-25 {
  color: rgba(43, 46, 74, 0.25);
}
.text-primary-alpha-50 {
  color: rgba(43, 46, 74, 0.5);
}
.text-primary-alpha-25 {
  border-color: rgba(43, 46, 74, 0.25);
}
.text-primary-alpha-25 {
  border-color: rgba(43, 46, 74, 0.5);
}
.hover\:text-primary-alpha-25:hover {
  color: rgba(43, 46, 74, 0.25);
}
.focus\:text-primary-alpha-50:focus {
  color: rgba(43, 46, 74, 0.5);
}

/* and more... */
```

Notice that a color named `red.default` will end up generating `text-red` and so we follow Tailwind's convention with `bg-red-alpha-${opacity}`
