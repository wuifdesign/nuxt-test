import { getKvCached } from '~~/server/utils/get-kv-cached'

export default defineEventHandler(async (event) => {
  return getKvCached(event, 'quote', () => {
    return $fetch(`https://dummyjson.com/quotes/random`)
  })
})
