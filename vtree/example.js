var h = require("../h")
var diff = require("./diff")

var leftNode = h("div", {}, [h('h5'), h('div', {key: '123', name: {a: 1}}, []), h('span'), h('span')])
var rightNode = h("div", {}, [h('span'), h('div', {key: '456', name: {a: 1}}, []), h('h2'), h('span')])

var patches = diff(leftNode, rightNode)

console.log(patches)