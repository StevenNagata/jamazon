var appState = {

  catelog: [
    {
      name: 'Tin Drum With an adjustable strap and two wooden drumsticks',
      brand: 'Schylling TD',
      price: '$15.39',
      src: 'https://images-na.ssl-images-amazon.com/images/I/61QFoKqP7YL._SX679_.jpg'
    },
    {
      name: 'Frontman 10G Electric Guitar Amplifier',
      brand: 'Fender',
      price: '$59.99',
      src: 'https://images-na.ssl-images-amazon.com/images/I/61WxwocahEL.jpg'
    },
    {
      name: 'S35 Acoustic Guitar, Natural',
      brand: 'Jasmine',
      price: '$92.44',
      src: 'http://www.jasmineguitars.com/pics/s35_lg.jpg'
    },
    {
      name: '351 Shape Classic Picks (12 Pack) for electric guitar, acoustic guitar, mandolin, and bass',
      brand: 'Fender',
      price: '$5.49',
      src: 'https://images-na.ssl-images-amazon.com/images/I/7132XMA%2BIML._SX679_.jpg'
    },
    {
      name: 'Music Instrument Cables,Electric & Bass Guitar Cord&FREE Stereo Audio Adapter,10 Feet Straight 1/4 Black',
      brand: 'SUNYIN',
      price: '$9.99',
      src: 'https://images-na.ssl-images-amazon.com/images/I/81H1B4C1B7L._SX679_.jpg'
    },
    {
      name: 'Premier Atlantic Electric Guitar - Antique White',
      brand: 'D\'Angelico',
      price: '$699.99',
      src: 'https://images.reverb.com/image/upload/s--QG6zb8n9--/a_exif,c_limit,e_unsharp_mask:80,f_auto,fl_progressive,g_south,h_620,q_90,w_620/v1527715868/hjwzufmtictsd69x54wj.jpg'
    },
    {
      name: 'Drum Sticks 5A Wood Tip Drumstick, Maple, 2 Pair',
      brand: 'ARLX',
      price: '$8.60',
      src: 'https://images-na.ssl-images-amazon.com/images/I/61aHKZPkw1L._SX679_.jpg'
    },
    {
      name: 'Noise Killer noise gate Guitar pedal',
      brand: 'Donner',
      price: '$37.00',
      src: 'https://images-na.ssl-images-amazon.com/images/I/81WFq0b1n6L._SX679_.jpg'
    }
  ]
}

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
  var $header = createElement('h1', { class: 'header' }, ['JAMAZON'])
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

function renderApp(state) {
  document.body.appendChild(renderGrid(state.catelog))
}

renderApp(appState)
