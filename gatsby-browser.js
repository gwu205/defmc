// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"

// TailwindCSS
// Read more on how to add other base styles https://tailwindcss.com/docs/adding-base-styles
// Extracting components https://tailwindcss.com/docs/extracting-components
// Or adding new utilities https://tailwindcss.com/docs/adding-new-utilities
import "tailwindcss/base.css"
import "tailwindcss/components.css"
import "tailwindcss/utilities.css"

// Import custom fonts
import "@fontsource/dm-sans/400.css"
import "@fontsource/dm-sans/700.css"

// Markdown formatting, uses Tailwind @apply primitive to apply Tailwind's utility classes to
// elements created by the Markdown parser
import "./src/markdown.css"

// Global styles and Tailwind @include
import "./src/global.css"

// Slick slider
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
