import type { H3Event } from 'h3'
import type { KVNamespace } from '@cloudflare/workers-types'

export default cachedEventHandler(async (event) => {
  const MY_KV = event.context.cloudflare.env.MY_KV as KVNamespace

  const key = 'v1:data'
  const cached = await MY_KV.get(key, { type: 'json' })

  if (cached) {
    return { source: 'kv', data: cached }
  }
  const value = await MY_KV.get('hello')

  const quote: any = await $fetch(`https://dummyjson.com/quotes/random`)

  await MY_KV.put(key, JSON.stringify(quote), {
    expirationTtl: 60
  })

  return { source: 'fetch', data: quote }
}, {
  maxAge: 5, // in sec
  staleMaxAge: 60, // serve stale while revalidating
  name: 'quote',
  getKey: (event: H3Event) => 'quote'
})
