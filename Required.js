var _head = document.head
var container = document.body
var tags = ["header", "footer", "main", "div", "p"]
var classes = ['class1', 'class2', 'class3', 'class4', 'class5']
var style = _head.appendChild(document.createElement ('style'))
for (let clas of classes) {
    style.appendChild (
        document.createTextNode (`.${clas} { color: blue; }`)
    )
}
for (let tag of tags) {
    container.appendChild(document.createElement(tag))

}