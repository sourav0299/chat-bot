import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
   theme: {
    extend: {
      colors: {
        chatgpt: {
          '50': '#ececf1',
          '100': '#d9d9e3',
          '200': '#353740',
          '300': '#40414f',
          '400': '#444654',
          '500': '#343541',
          '600': '#202123',
        },
      },
    },
  },
  plugins: [],
};
export default config;
