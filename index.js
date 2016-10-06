const waterfall = async function (input, ...funcs) {
  const list = []

  for (let func of funcs)
    if (!list.length)
      list.push(await func(input))
    else
      list.push(await func(list.shift()))
  
  return list.pop()
}

export default waterfall
