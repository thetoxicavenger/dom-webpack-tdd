require('./normalize.css')
require('./main.css')

const lib = require('./lib')

lib.dom.onLoad('https://jsonplaceholder.typicode.com/todos')

