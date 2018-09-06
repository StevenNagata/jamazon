
var catelog = [
  {
    name: '1',
    brand: 'yo',
    price: '$3',
    src: 'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png'
  },
  {
    name: '2',
    brand: 'yo',
    price: '$3',
    src: 'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png'
  },
  {
    name: '3',
    brand: 'yo',
    price: '$3',
    src: 'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png'
  },
  {
    name: '4',
    brand: 'yo',
    price: '$3',
    src: 'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png'
  },
  {
    name: '5',
    brand: 'yo',
    price: '$3',
    src: 'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png'
  },
  {
    name: '6',
    brand: 'yo',
    price: '$3',
    src: 'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png'
  },
  {
    name: '7',
    brand: 'yo',
    price: '$3',
    src: 'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png'
  },
  {
    name: '8',
    brand: 'yo',
    price: '$3',
    src: 'https://cdn.bulbagarden.net/upload/thumb/0/0d/025Pikachu.png/250px-025Pikachu.png'
  }
]

var itemsPerCol = 3

function renderItem(item) {
  var $item =
    createElement('div', { class: 'card', style: 'width: 18rem' }, [
      createElement('img', { class: 'card-img-top', src: item.src, alt: 'Card image cap' }, []),
      createElement('div', { class: 'card-body' }, [
        createElement('h3', { class: 'card-title' }, [item.name]),
        createElement('h5', { class: 'card-text' }, [item.brand]),
        createElement('p', { class: 'card-text' }, [item.price]),
        createElement('button', { class: 'btn btn-primary', id: 'add-to-cart' }, ['Add to Cart'])
      ])
    ])
  return $item
}

function renderGrid(gridElements) {
  var $header = createElement('h1', {class: 'header'}, ['JAMAZON'])
  var $container = createElement('div', { class: 'container' }, [])
  $container.appendChild($header)
  for (var j = 0; j < gridElements.length / itemsPerCol; j++) {
    var $row = createElement('div', { class: 'row' }, [])
    for (var i = 0; i < itemsPerCol; i++) {
      if (i + (j * itemsPerCol) === gridElements.length) {
        break
      }
      var $item = gridElements[i + (j * itemsPerCol)]
      var $column = createElement('div', { class: 'col-sm-4' }, [
        renderItem($item)
      ])
      $row.appendChild($column)
    }
    $container.appendChild($row)
  }
  return $container
}

function createElement(tagName, attributes, children) {
  var $tag = document.createElement(tagName)
  for (var i in attributes) {
    $tag.setAttribute(i, attributes[i])
  }
  for (var j = 0; j < children.length; j++) {
    if (children[j].nodeType === undefined) {
      $tag.textContent = children[j]
    }
    else {
      $tag.appendChild(children[j])
    }
  }
  return $tag
}

console.log(renderGrid(catelog))
document.body.appendChild(renderGrid(catelog))
