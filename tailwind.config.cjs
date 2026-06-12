const plugin = require("tailwindcss/plugin");

function fluidFont(px, minRatio = 0.8) {
  const n = parseFloat(px)
  const min = n * minRatio
  return `clamp(${min}px, calc(${n}/19.2*1vw), ${n}px)`
}
/* --- vw function (外部可重複使用) --- */
function toVW(value) {
  const BASE_FONT_SIZE_PX = 16;
  const DESIGN_WIDTH_UNIT = 19.2;

  let px;
  let negative = false;

  if (typeof value === 'string' && value.startsWith('-')) {
    negative = true;
    value = value.slice(1);
  }

  if (typeof value === 'string' && value.endsWith('rem')) {
    const rem = parseFloat(value);
    if (isNaN(rem)) return value;

    px = rem * BASE_FONT_SIZE_PX;
  } else {
    px = parseFloat(value);
    if (isNaN(px)) return value;
  }

  if (negative) {
    px = -px;
  }

  return `calc(${px} / ${DESIGN_WIDTH_UNIT} * 1vw)`;
}

module.exports = {
  content: ['./*.php'],
  theme: {
    screens: {
      xl: { 'min': '1025px', 'max': '1700px' },
      lg: { 'max': '1024px' },
      md: { 'max': '767px' },
      sm: { 'max': '600px' },
    },
    fontFamily: {
      'ch': ['Noto Sans TC', 'sans-serif'],
      'en': ['Bevan', 'sans-serif'],
      'archivo': ['Archivo', 'serif'],
      'arial': ['Arial', 'serif'],
    },
    extend: {
      colors: {
        pink: {
          DEFAULT: '#D6A18E',
        },
        green: {
          DEFAULT: '#004D47',
          300: '#1D7068',
        },
        gray: {
          DEFAULT: '#EDEDED',
          300: '#4B4C4E',
        },
      },
      fontSize: {
        'xs': ['12px', '1.5'],
        'sm': ['14px', '1.5'],
        'base': ['16px', '1.5'],
        'lg': ['18px', '1.5'],
        'xl': ['20px', '1.5'],
      },
      letterSpacing: {
        'tighter': '-1px',
        'tight': '0',
        'normal': '1px',
        'wide': '3px',
        'wider': '6px',
        'widest': '9px',
      },
      lineHeight: {
        'snug': '1.4',
        'normal': '1.6',
        'relaxed': '1.8',
        'loose': '2',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
      },
      padding: {
        '1p': '1%',
        '2p': '2%',
        '3p': '3%',
        '4p': '4%',
        '5p': '5%',
        '6p': '6%',
        '7p': '7%',
        '8p': '8%',
        '9p': '9%',
        '10p': '10%',
        '11p': '11%',
        '12p': '12%',
        '13p': '13%',
        '14p': '14%',
        '15p': '15%',
        '16p': '16%',
        '17p': '17%',
        '18p': '18%',
        '19p': '19%',
        '20p': '20%',
      },
      margin: {
        '1p': '1%',
        '2p': '2%',
        '3p': '3%',
        '4p': '4%',
        '5p': '5%',
        '6p': '6%',
        '7p': '7%',
        '8p': '8%',
        '9p': '9%',
        '10p': '10%',
        '11p': '11%',
        '12p': '12%',
        '13p': '13%',
        '14p': '14%',
        '15p': '15%',
        '16p': '16%',
        '17p': '17%',
        '18p': '18%',
        '19p': '19%',
        '20p': '20%',
      },
      inset: {
        '1p': '1%',
        '2p': '2%',
        '3p': '3%',
        '4p': '4%',
        '5p': '5%',
        '6p': '6%',
        '7p': '7%',
        '8p': '8%',
        '9p': '9%',
        '10p': '10%',
        '11p': '11%',
        '12p': '12%',
        '13p': '13%',
        '14p': '14%',
        '15p': '15%',
        '16p': '16%',
        '17p': '17%',
        '18p': '18%',
        '19p': '19%',
        '20p': '20%',
      },
      borderWidth: {
        '3': '3px',
        '4': '4px',
        '5': '5px',
        '6': '6px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '11': '11px',
        '12': '12px',
      },
      transitionDelay: {
        '0': '0s',
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ matchUtilities, config }) {
      /* ============================================================
      #1: text-fluid (支援 text-fluid-lg / text-fluid-[16])
      ============================================================ */
      const allFontSizes = config("theme.fontSize")

      const sizeMap = Object.fromEntries(
        Object.entries(allFontSizes).map(([key, val]) => {
          const px = parseFloat(val[0])
          return [key, px]
        })
      )

      matchUtilities(
        {
          "vw-text": (value) => {
            const n = parseFloat(value)
            return {
              fontSize: fluidFont(n),
            }
          },
        },
        {
          values: {
            ...sizeMap, // ✔ 支援 text-fluid-lg
            ...{},      // ✔ 保留 arbitrary text-fluid-[16]
          },
        }
      )

      /* ============================================================
      #2: vw spacing utilities (vw-top / vw-mt / vw-pl ... )
      ============================================================ */
      const spacingScale = config("theme.spacing")
      const vwProperties = {
        "vw-top": "top",
        "vw-right": "right",
        "vw-bottom": "bottom",
        "vw-left": "left",

        "vw-m": "margin",
        "vw-mt": "marginTop",
        "vw-mr": "marginRight",
        "vw-mb": "marginBottom",
        "vw-ml": "marginLeft",
        "vw-mx": ["marginLeft", "marginRight"],
        "vw-my": ["marginTop", "marginBottom"],

        "vw-p": "padding",
        "vw-pt": "paddingTop",
        "vw-pr": "paddingRight",
        "vw-pb": "paddingBottom",
        "vw-pl": "paddingLeft",
        "vw-px": ["paddingLeft", "paddingRight"],
        "vw-py": ["paddingTop", "paddingBottom"],

        "vw-w": "width",
        "vw-h": "height",
        "vw-max-w": "maxWidth",
        "vw-max-h": "maxHeight",
        "vw-min-w": "minWidth",
        "vw-min-h": "minHeight",

        "vw-gap": "gap",
        "vw-gap-x": "columnGap",
        "vw-gap-y": "rowGap",

        "vw-space-x": "space-x",
        "vw-space-y": "space-y",

        "vw-translate-x": "--tw-translate-x",
        "vw-translate-y": "--tw-translate-y",

        "vw-basis": "flex-basis",

        "vw-rounded": "borderRadius",
        "vw-rounded-t": ["borderTopLeftRadius", "borderTopRightRadius"],
        "vw-rounded-r": ["borderTopRightRadius", "borderBottomRightRadius"],
        "vw-rounded-b": ["borderBottomLeftRadius", "borderBottomRightRadius"],
        "vw-rounded-l": ["borderTopLeftRadius", "borderBottomLeftRadius"],
        "vw-rounded-tl": "borderTopLeftRadius",
        "vw-rounded-tr": "borderTopRightRadius",
        "vw-rounded-bl": "borderBottomLeftRadius",
        "vw-rounded-br": "borderBottomRightRadius",
      };
      const allowNegative = new Set([
        "vw-top",
        "vw-right",
        "vw-bottom",
        "vw-left",

        "vw-m",
        "vw-mt",
        "vw-mr",
        "vw-mb",
        "vw-ml",
        "vw-mx",
        "vw-my",

        "vw-space-x",
        "vw-space-y",

        "vw-translate-x",
        "vw-translate-y",
      ]);

      matchUtilities(
        Object.fromEntries(
          Object.entries(vwProperties).map(([key, cssProp]) => [
            key,
            (value) => {
              const isNegative =
                typeof value === "string" && value.startsWith("-");

              if (isNegative && !allowNegative.has(key)) {
                return {};
              }

              const cssValue = toVW(value);

              // space-x
              if (cssProp === "space-x") {
                return {
                  "& > * + *": {
                    marginLeft: cssValue,
                  },
                };
              }

              // space-y
              if (cssProp === "space-y") {
                return {
                  "& > * + *": {
                    marginTop: cssValue,
                  },
                };
              }

              // translate-x
              if (cssProp === "--tw-translate-x") {
                return {
                  "--tw-translate-x": cssValue,
                  transform:
                    "translate(var(--tw-translate-x), var(--tw-translate-y))",
                };
              }

              // translate-y
              if (cssProp === "--tw-translate-y") {
                return {
                  "--tw-translate-y": cssValue,
                  transform:
                    "translate(var(--tw-translate-x), var(--tw-translate-y))",
                };
              }

              if (Array.isArray(cssProp)) {
                const obj = {};
                cssProp.forEach((prop) => {
                  obj[prop] = cssValue;
                });
                return obj;
              }

              return { [cssProp]: cssValue };
            },
          ])
        ),
        {
          values: spacingScale,
          supportsArbitraryValues: true,
          supportsNegativeValues: true,
        }
      );
    }),
  ],
};