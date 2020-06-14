var tags = ["header", "footer", "main", "div", "p"]
var classes = ['class1', 'class2', 'class3', 'class4', 'class5']
var style = document.head.appendChild(document.createElement ('style'))
for (var clas of classes) {
    style.appendChild (
        document.createTextNode (`.${clas} { color: blue; }`)
    )
}
for (var i = 0; i < tags.length; i++) {
  var tag = document.createElement(tags[i])
  document.body.appendChild(tag)
  tag.className = classes[i]
}