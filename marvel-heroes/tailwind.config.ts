import type { Config } from "tailwindcss";
import withMT from "@material-tailwind/react/utils/withMT";

module.exports = withMT({
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'roboto': ['var(--font-roboto)'],
        'bebas-neue': ['var(--font-bebas-neue)'],
        'archivo-black': [ 'var(--font-archivo-black)'],
      }
    },
  },
  plugins: [],
});
