var appState = {
  view: 'catalog',
  catalog: {
    items: [
      {
        itemId: 1,
        brand: 'Ludwig',
        name: 'Black Beauty',
        price: 749.99,
        description: 'A snare drum for people with too many drumsticks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/ubY0QA'
      },
      {
        itemId: 2,
        name: 'Darbuka',
        brand: 'Vatan',
        price: 79.99,
        description: 'A hand drum for people who like belly dancing.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Turkey',
        imageUrl: 'https://n11scdn.akamaized.net/a1/450/kitap-muzik-film-oyun/telli-calgilar/imc-comlek-darbuka-vatan-ozel-dovme-vd-3024__1290705093369308.jpg'
      },
      {
        itemId: 3,
        name: 'Djembe',
        brand: 'Remo',
        price: 49.99,
        description: 'A hand drum for people with dreadlocks.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'West Africa',
        imageUrl: 'https://goo.gl/iKtU8x'
      },
      {
        itemId: 4,
        name: 'Hi-Hats',
        brand: 'Paiste',
        price: 400,
        description: 'A set of hats for people who spare no expense.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Switzerland',
        imageUrl: 'https://goo.gl/LV9l8O'
      },
      {
        itemId: 5,
        name: 'Giant Step',
        brand: 'Sonor',
        price: 599,
        description: 'A pedal for metal drummers with only one foot.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Germany',
        imageUrl: 'https://goo.gl/zsFo1q'
      },
      {
        itemId: 6,
        name: 'Travis Barker Signature',
        brand: 'Zildjian',
        price: 24.99,
        description: 'A set of drumsticks from the 90s.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'United States',
        imageUrl: 'https://goo.gl/Cro3tL'
      },
      {
        itemId: 7,
        name: 'Bodhran',
        brand: 'Meinl',
        price: 129.99,
        description: 'A frame drum for people who like to jig.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Ireland',
        imageUrl: 'https://goo.gl/YNb74O'
      },
      {
        itemId: 8,
        name: 'TR-09',
        brand: 'Roland',
        price: 399,
        description: 'A drum machine for people with no desk space.',
        details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        origin: 'Japan',
        imageUrl: 'https://goo.gl/gJYUxz'
      }
    ]
  },
  details: {
    item: null
  },
  cart: []
}

document.querySelector('[data-view="catalog"]').addEventListener('click', function (event) {
  var $itemBox = event.target.closest('[data-item-id]')
  if (!$itemBox) return
  var number = parseInt($itemBox.getAttribute('data-item-id'), 10)
  var currentItem = findItem(number, appState.catalog.items)
  appState.details.item = currentItem
  appState.view = 'details'
  renderApp(appState)
})

document.querySelector('[data-view="details"]').addEventListener('click', function (event) {
  let currentItem = appState.details.item
  if (event.target.id === 'add-to-cart') {
    appState.cart.push(currentItem)
    renderApp(appState)
  }
})

document.querySelector('[data-view="details"]').addEventListener('click', function (event) {
  if (event.target.id === 'back') {
    appState.view = 'catalog'
    renderApp(appState)
  }
})

function renderItem(item) {
  var $item =
    createElement('div', { class: 'card border p-4 mb-4', style: 'height: 29rem', 'data-item-id': item.itemId }, [
      createElement('div', { style: 'height: 18rem' }, [
        createElement('img', { class: 'card-img-top', src: item.imageUrl, alt: 'Card image cap' }, [])
      ]),
      createElement('div', null, [
        createElement('div', { class: 'card-body p-1' }, [
          createElement('h4', { class: 'card-title' }, [item.name]),
          createElement('div', null, [
            createElement('h5', { class: 'card-text' }, [item.brand]),
            createElement('p', { class: 'card-text' }, ['$' + item.price])
          ])
        ])
      ])
    ])
  return $item
}

function renderGrid(gridElements) {
  var $header = createElement('h1', { class: 'text-center mx-auto m-3 display-1', style: 'width: 500px' }, ['JAMAZON'])
  var $container = createElement('div', { class: 'container' }, [])
  $container.appendChild($header)
  var $row = createElement('div', { class: 'row m-3', style: 'height: auto' }, [])
  for (var i = 0; i < gridElements.length; i++) {
    var $item = gridElements[i]
    var $column = createElement('div', { class: 'col-sm-4' }, [renderItem($item)])
    $row.appendChild($column)
  }
  $container.appendChild($row)
  return $container
}

function renderItemDescription(item) {
  var $itemDescription =
    createElement('div', { class: 'd-flex justify-content-center' }, [
      createElement('div', { class: 'row' }, [
        createElement('div', null, [
          createElement('div', { class: 'row no-gutters', style: 'width:900px' }, [
            createElement('div', { class: 'col-lg-5 mt-5' }, [
              createElement('img', { class: 'img-responsive w-100', src: item.imageUrl }, [])
            ]),
            createElement('div', { class: 'col' }, [
              createElement('div', { class: 'card-body' }, [
                createElement('h1', { class: 'card-title' }, [item.name]),
                createElement('h4', null, ['Brand: ' + item.brand]),
                createElement('h4', null, ['Origin: ' + item.origin]),
                createElement('h6', null, [item.description]),
                createElement('p', { class: 'card-text' }, ['$' + item.price]),
                createElement('button', { id: 'add-to-cart', class: 'btn btn-dark' }, ['Add to Cart']),
                createElement('button', { id: 'back', class: 'btn btn-dark m-2' }, ['Back'])
              ])
            ])
          ])
        ])
      ])
    ])
  return $itemDescription
}

function findItem(itemId, catalogList) {
  for (var i = 0; i < catalogList.length; i++) {
    var item = catalogList[i]
    if (item.itemId === itemId) {
      return item
    }
  }
}

function showView(view) {
  var $views = document.querySelectorAll('[data-view]')
  for (var i = 0; i < $views.length; i++) {
    var $view = $views[i]
    if ($view.getAttribute('data-view') === view) {
      $view.classList.remove('hidden')
    }
    else {
      $view.classList.add('hidden')
    }
  }
}

function renderCartCount(cart) {
  var cartCount = createElement('div', { style: 'height: 30px' }, [
    createElement('div', { class: 'p-5 float-right' }, ['Cart (' + cart.length + ')'])
  ])
  return cartCount
}

function renderCartItem(cartItem) {
  var cartElement = createElement('div', { class: 'd-flex justify-content-center m-auto', style: 'width: 30rem' }, [
    createElement('div', { class: 'row border', style: 'height: 9.5rem' }, [
      createElement('div', { class: 'col-sm-4 ' }, [
        createElement('img', { class: 'img-thumbnail border-0', src: cartItem.imageUrl }, [])
      ]),
      createElement('div', null, [
        createElement('div', { class: 'card-body' }, [
          createElement('h5', null, [cartItem.name]),
          createElement('h6', null, ['Brand: ' + cartItem.brand]),
          createElement('p', null, ['$' + cartItem.price])
        ])
      ])
    ])
  ])
  return cartElement
}

function renderCartPage(cart) {
  var sum = 0
  var count = 0
  var $header = createElement('h1', { class: 'text-center mx-auto m-3 display-1', style: 'width: 500px' }, ['Cart'])
  var $container = createElement('div', { class: 'container' }, [])
  $container.appendChild($header)
  for (var i = 0; i < cart.length; i++) {
    $container.appendChild(renderCartItem(cart[i]))
    sum += cart[i].price
    count += 1
    console.log(sum)
  }
  var countTotal = createElement('div', {class: 'text-right mt-3 mr-3'}, [count + ' Items'])
  var costTotal = createElement('div', {class: 'text-right mr-3'}, ['Total: $' + sum])
  $container.appendChild(countTotal)
  $container.appendChild(costTotal)
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
  var $view = document.querySelector('[data-view="' + state.view + '"]')
  $view.innerHTML = ''
  if (state.view === 'details') {

    $view.appendChild(renderCartCount(state.cart))
    $view.appendChild(renderItemDescription(state.details.item))
  }
  else {
    $view.appendChild(renderGrid(state.catalog.items))
  }
  showView(state.view)
}

renderApp(appState)

console.log(renderCartItem(appState.catalog.items[2]))

console.log(renderCartPage)
