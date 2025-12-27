import type { H3Event } from 'h3'
import type { KVNamespace } from '@cloudflare/workers-types'

export const getKvCached = async <T>(event: H3Event, key: string, fetch: () => Promise<T>) => {
  if(!event.context.cloudflare) {
    return fetch()
  }

  const MY_KV = event.context.cloudflare.env.MY_KV as KVNamespace
  const cached = await MY_KV.get(key, {type: 'json'})
  if (cached) {
    return {source: 'kv', data: cached}
  }
  const quote: any = await fetch()
  await MY_KV.put(key, JSON.stringify(quote), {expirationTtl: 60})
  return {source: 'fetch', data: quote}
}
