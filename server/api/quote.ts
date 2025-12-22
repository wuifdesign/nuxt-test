import { getKvCached } from '~~/server/utils/get-kv-cached'

export default cachedEventHandler(async (event) => {
  return getKvCached(event, 'quote', () => {
    return $fetch(`https://dummyjson.com/quotes/random`)
  })
}, {
  maxAge: 5, // in sec
  staleMaxAge: 60, // serve stale while revalidating
  name: 'quote',
})
