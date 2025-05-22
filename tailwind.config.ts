import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/neobrutalism/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Future neobrutalism specific theme extensions can go here
    },
  },
  plugins: [],
}
export default config
