export default cachedEventHandler(async (event) => {
  const quote: any = await $fetch(`https://dummyjson.com/quotes/random`)

  console.log(quote)

  return quote
}, {
  maxAge: 10, // in sec
  staleMaxAge: 60, // serve stale while revalidating
  name: 'quote',
})
