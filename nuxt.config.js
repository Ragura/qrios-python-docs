import theme from '@nuxt/content-theme-docs'

export default theme({
  docs: {
    primaryColor: '#E24F55'
  },
  i18n: {
    locales: () => [{
      code: 'nl',
      iso: 'nl-BE',
      file: 'nl-BE.json',
      name: 'Nederlands'
    }],
    defaultLocale: 'nl',
    langDir: "i18n/"
  },
})
