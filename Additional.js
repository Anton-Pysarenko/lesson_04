var tags = [
    {
        tagName: 'div',
        attrs: {
            innerText: 'Hello student!',
            style: `width: 250px; height: 200px; border: solid 1px green; margin: 10px;`,
            onclick: function (event) {event.target.style.background = 'green'},
        }
    },
    {
        tagName: 'div',
        attrs: {
            innerText: 'Hello banana!',
            style: `width: 250px; height: 200px; border: solid 1px red; margin: 10px;`,
            onclick: function (event) {event.target.style.background = 'red'},
        }
    },
    {
        tagName: 'div',
        attrs: {
            innerText: 'Hello hero!',
            style: `width: 250px; height: 200px; border: solid 1px gray; margin: 10px;`,
            onclick: function (event) {event.target.style.background = 'gray'},
        }
    },
    {
        tagName: 'div',
        attrs: {
            innerText: 'Hello hell!',
            style: `width: 250px; height: 200px; border: solid 1px yellow; margin: 10px;`,
            onclick: function (event) {event.target.style.background = 'yellow'},
        }
    }
  ]
  
  for (var i = 0; i < tags.length; i++) {
    var tag = document.body.appendChild(document.createElement(tags[i].tagName))
    for (var key in tags[i].attrs) {
        tag[key] = tags[i].attrs[key]
    }
  }