# awaiterfall
simple async waterfall.

###### install runkoa

npm install awaiterfall

```javascript
const awaiterfall = require('awaiterfall')

const upper = _ => Promise.resolve(_.toUpperCase())
const reverse = _ => Promise.resolve(_.split('').reverse().join(''))
const space = _  => Promise.resolve(_.replace(/ {0,}/g,' '))
    
const promise = awaiterfall("tpircsavaj", upper, reverse, space)

promise.then((_) => {
    console.log(_) // prints " J A V A S C R I P T "
})
```
