export default defineI18nConfig(() => {
  return {
    fallbackLocale: 'en',
    messageResolver: (obj: any, path) => {
      const msg = path.split('.').reduce((o, k) => o?.[k], obj) as any
      if(msg === '' || msg?.loc?.source === '') {
        return undefined
      }
      return msg
    }
  }
})
