import { query } from "$app/server";

export const testing1 = query('unchecked', async (length: number) => {
  // await new Promise(resolve => setTimeout(resolve, Math.random()*500))
  await new Promise(resolve => setTimeout(resolve, 500))
  return [...Array(length).keys()]
})

export const testing2 = query('unchecked', async (length: number) => {
  // await new Promise(resolve => setTimeout(resolve, Math.random()*500))
  await new Promise(resolve => setTimeout(resolve, 500))
  return [...Array(length).keys()]
})
