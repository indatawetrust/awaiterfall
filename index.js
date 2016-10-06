export default async function waterfall(val, ...funcs) {
  for (let func of funcs)
    val = await func(val)
  
  return val
}
