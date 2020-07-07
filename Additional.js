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

var style = document.createElement('style');
style.type = 'text/css';
style.innerHTML = '.redBack { background-color: red!important; }';
document.getElementsByTagName('head')[0].appendChild(style);

var button = document.body.appendChild(document.createElement('button'))
button.innerText = 'click'
button.onclick = function(event) {
    var elems = document.body.getElementsByTagName('div')
        for(var i=0; i<elems.length; i++) {
        elems[i].className = 'redBack'
    }
}