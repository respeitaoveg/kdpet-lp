import type { Config } from 'tailwindcss'

// Default are on https://tailwindcss.nuxtjs.org/tailwind/config#default-configuration
export default <Partial<Config>>{
  content: [
    `/components/**/*.{vue,js,ts}`,
    `/layouts/**/*.vue`,
    `/pages/**/*.vue`,
    `/composables/**/*.{js,ts}`,
    `/plugins/**/*.{js,ts}`,
    `/utils/**/*.{js,ts}`,
    `/App.{js,ts,vue}`,
    `/app.{js,ts,vue}`,
    `/Error.{js,ts,vue}`,
    `/error.{js,ts,vue}`,
    `/app.config.{js,ts}`
  ],
  theme: {
		extend: {
			colors: {
				primary: '#0F45FB',
				secondary: '#000',
				dark: '#000',
				light: '#000'
			},
      backgroundColor: {
        primary: '#0F45FB'
      }
		},
		fontFamily: {
			'sans': 'system-ui'
		}
	},
  plugins: [],
}
