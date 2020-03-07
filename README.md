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

The plugin will automatically use your colors and opacity config to generate all the corresponding rgba values

## Examples

```javascript
module.exports = {
  theme: {
    colors: {
      primary: "#2b2e4a",
      red: {
        default: "#e84545",
        darker: "#903749"
      }
    },
    opacity: {
      "25": ".25",
      "50": "0.5",
      "75": "0.75"
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
.bg-primary-alpha-75 {
  background-color: rgba(43, 46, 74, 0.75);
}

.bg-red-alpha-25 {
  background-color: rgba(232, 69, 69, 0.25);
}
.bg-red-alpha-50 {
  background-color: rgba(232, 69, 69, 0.5);
}
.bg-red-alpha-75 {
  background-color: rgba(232, 69, 69, 0.75);
}

.bg-red-darker-alpha-25 {
  background-color: rgba(144, 55, 73, 0.25);
}
.bg-red-darker-alpha-50 {
  background-color: rgba(144, 55, 73, 0.5);
}
.bg-red-darker-alpha-75 {
  background-color: rgba(144, 55, 73, 0.75);
}
```

Notice that a color named `red.default` will end up generating `text-red` and so we follow Tailwind's convention with `bg-red-alpha-${opacity}`
