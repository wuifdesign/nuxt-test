import type { H3Event } from 'h3'

export default cachedEventHandler(async (event) => {
  const { MY_KV } = event.context.cloudflare.env

  const key = 'v1:data'
  const cached = await MY_KV.get(key, { type: 'json' })

  if (cached) {
    return { source: 'kv', data: cached }
  }
  const value = await MY_KV.get('hello')

  const quote: any = await $fetch(`https://dummyjson.com/quotes/random`)

  await MY_KV.put(key, JSON.stringify(quote), {
    expirationTtl: 10
  })

  return { source: 'fetch', data: quote }
}, {
  maxAge: 5, // in sec
  staleMaxAge: 60, // serve stale while revalidating
  name: 'quote',
  getKey: (event: H3Event) => 'quote'
})
