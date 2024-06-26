import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      primary: {
        '50': '#E0EBF5',
        '100': '#BDD4EA',
        '200': '#7CA8D5',
        '300': '#3E80C1',
        '400': '#29547F',
        '500': '#14293E',
        '600': '#102132',
        '700': '#0C1A27',
        '800': '#070F17',
        '900': '#04080C',
        '950': '#020508',
      },
      secondary: {
        '50': '#DCF3FF',
        '100': '#B9E7FE',
        '200': '#72CFFD',
        '300': '#2CB7FC',
        '400': '#0395DD',
        '500': '#026495',
        '600': '#025179',
        '700': '#013D5B',
        '800': '#01293C',
        '900': '#00141E',
        '950': '#000A0F',
      },
      accent: {
        '50': '#E8F5FC',
        '100': '#D2EBF9',
        '200': '#A5D6F3',
        '300': '#77C2EE',
        '400': '#4AAEE8',
        '500': '#1D99E1',
        '600': '#177BB5',
        '700': '#115C88',
        '800': '#0C3D5A',
        '900': '#061F2D',
        '950': '#030F17',
      },
    },
  },
  plugins: [],
}
export default config
