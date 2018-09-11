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
  cart: [],
  sort: null
}
var sortedList = []

document.querySelector('[data-view="catalog"]').addEventListener('click', function (event) {
  if (event.target.id === 'High-to-Low') {
    appState.sort = 'High-to-Low'
    sort(appState.sort)
    renderApp(appState)
  }
  else if (event.target.id === 'Low-to-High') {
    appState.sort = 'Low-to-High'
    sort(appState.sort)
    renderApp(appState)
  }
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

document.querySelector('body').addEventListener('click', function (event) {
  if (event.target.id === 'cart') {
    appState.view = 'cart'
    renderApp(appState)
  }
  if (event.target.id === 'back-to-shopping') {
    appState.view = 'catalog'
    renderApp(appState)
  }
}
)

document.querySelector('[data-view="cart"]').addEventListener('click', function (event) {
  if (event.target.id === 'checkout') {
    appState.view = 'checkout'
    renderApp(appState)
  }
})

document.querySelector('[data-view="checkout"]').addEventListener('click', function (event) {
  if (event.target.id === 'pay') {
    appState.view = 'confirmation'
    renderApp(appState)
  }
  else if (event.target.id === 'back') {
    appState.view = 'cart'
    renderApp(appState)
  }
})

document.querySelector('[data-view="confirmation"]').addEventListener('click', function (event) {
  if (event.target.id === 'close') {
    appState.view = 'catalog'
    appState.cart = []
    renderApp(appState)
  }
})

function sort(sortBy) {
  sortedList = appState.catalog.items.sort(function (obj1, obj2) {
    if (sortBy === 'Low-to-High') {
      return obj1.price - obj2.price
    }
    else if (sortBy === 'High-to-Low') {
      return obj2.price - obj1.price
    }
  })
  return sortedList
}

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
  var $sort = createElement('div', { class: 'dropdown' }, [
    createElement('button', { class: 'btn btn-secondary dropdown-toggle', type: 'button', id: 'dropdownMenuButton', 'data-toggle': 'dropdown', 'aria-haspopup': 'true', 'aria-expanded': 'false' }, ['Sort By Price:']),
    createElement('div', { class: 'dropdown-menu', 'aria-labelledby': 'dropdownMenuButton' }, [
      createElement('a', { id: 'Low-to-High', class: 'dropdown-item' }, ['Low-to-High']),
      createElement('a', { id: 'High-to-Low', class: 'dropdown-item' }, ['High-to-Low'])
    ])
  ])
  var $container = createElement('div', { class: 'container' }, [])
  $container.appendChild($header)
  $container.appendChild($sort)
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
                createElement('p', null, [item.details]),
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
    if ($view.getAttribute('data-view') === view || $view.getAttribute('data-view') === 'cart') {
      $view.classList.remove('hidden')
    }
    else {
      $view.classList.add('hidden')
    }
  }
}

function renderCartCount(cart) {
  var cartCount = createElement('div', null, [
    createElement('div', { id: 'cart', class: 'p-2 float-right' }, ['Cart (' + cart.length + ')'])
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
  for (var j = 0; j < cart.length; j++) {
    sum += cart[j].price
    count += 1
  }
  var $header = createElement('h1', { class: 'text-center mx-auto m-3 display-1', style: 'width: 500px' }, ['Cart'])
  var $container = createElement('div', { class: 'container' }, [])
  $container.appendChild($header)
  for (var i = 0; i < cart.length; i++) {
    $container.appendChild(renderCartItem(cart[i]))
  }
  var countTotal = createElement('div', { class: 'text-right mt-3 mr-3' }, [count + ' Items'])
  var costTotal = createElement('div', { class: 'text-right mr-3' }, ['Total: $' + Math.round(sum * 100) / 100])
  var continueShoppingOrCheckOut = createElement('div', { class: 'text-center' }, [
    createElement('button', { id: 'back-to-shopping', class: 'btn btn-dark m-2' }, ['Continue Shopping']),
    createElement('button', { id: 'checkout', class: 'btn btn-success m-2' }, ['Check Out'])
  ])

  $container.appendChild(countTotal)
  $container.appendChild(costTotal)
  $container.appendChild(continueShoppingOrCheckOut)
  return $container
}

function renderCheckout(cart) {
  var sum = 0
  var count = 0
  for (var j = 0; j < cart.length; j++) {
    sum += cart[j].price
    count += 1
  }
  var countTotal = createElement('div', { class: 'text-right mt-3 mr-3' }, [count + ' Items'])
  var costTotal = createElement('div', { class: 'text-right mr-3' }, ['Total: $' + Math.round(sum * 100) / 100])

  var $container = createElement('div', { class: 'container', style: 'width: 600px' }, [])
  var $header = createElement('h1', { class: 'text-center mx-auto m-3 display-1', style: 'width: 500px' }, ['Checkout'])
  var $checkoutForm = createElement('div', { class: 'container border' }, [
    createElement('h3', { class: 'd-flex justify-content-center p-4' }, ['Customer Information']),
    createElement('div', { class: 'form-group' }, [
      createElement('label', { for: 'NameInput' }, ['Name']),
      createElement('input', { class: 'form-control', placeholder: 'Enter full name' }, [])
    ]),
    createElement('div', { class: 'form-group' }, [
      createElement('label', { for: 'AddressInput' }, ['Address']),
      createElement('input', { class: 'form-control', placeholder: 'Enter address' }, [])
    ]),
    createElement('div', { class: 'form-group' }, [
      createElement('label', { for: 'CreditCardInput' }, ['Credit Card']),
      createElement('input', { class: 'form-control', placeholder: 'Enter credit card number' }, []),
      createElement('small', { class: 'form-text text-muted' }, ['We\'ll never share your information with anyone else.'])
    ]),
    createElement('div', { class: 'form-group' }, [
      createElement('label', { for: 'CvvInput' }, ['Credit Card CVV Number']),
      createElement('input', { class: 'form-control', placeholder: 'Enter credit card cvv number' }, [])
    ])
  ])
  var pay = createElement('div', { class: 'd-flex justify-content-center p-4' }, [
    createElement('button', { id: 'pay', class: 'btn btn-success m-1' }, ['Pay']),
    createElement('button', { id: 'back', class: 'btn btn-dark m-1' }, ['Back'])
  ])

  $container.appendChild($header)
  $checkoutForm.appendChild(countTotal)
  $checkoutForm.appendChild(costTotal)
  $checkoutForm.appendChild(pay)
  $container.appendChild($checkoutForm)
  return $container
}

function renderConfirmation() {
  var confirmation =
    createElement('div', { id: 'mymodal', role: 'dialog' }, [
      createElement('div', { class: 'modal-dialog', role: 'document' }, [
        createElement('div', { class: 'modal-content' }, [
          createElement('div', { class: 'modal-header' }, [
            createElement('h5', { class: 'modal-title' }, ['Purchase Confirmed']),
            createElement('div', { class: 'modal-body' }, [
              createElement('p', null, ['Thank you for your purchase!'])
            ])
          ]),
          createElement('div', { class: 'modal-footer' }, [
            createElement('button', { id: 'close', type: 'button', class: 'btn btn-primary' }, ['Close'])
          ])
        ])
      ])
    ])
  return confirmation
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
  var $cart = document.querySelector('[data-view="cart"]')
  $cart.innerHTML = ''
  $view.innerHTML = ''
  $view.appendChild(renderCartCount(state.cart))
  if (state.view === 'cart') {
    $view.appendChild(renderCartPage(state.cart))
  }
  else if (state.view === 'details') {
    $view.appendChild(renderItemDescription(state.details.item))
  }
  else if (state.view === 'checkout') {
    $view.appendChild(renderCheckout(state.cart))
  }
  else if (state.view === 'confirmation') {
    $view.innerHTML = ''
    $view.appendChild(renderConfirmation())
  }
  else {
    if (state.sort !== null) {
      $view.appendChild(renderGrid(sort(state.sort)))
    }
    else {
      $view.appendChild(renderGrid(state.catalog.items))
    }
  }
  showView(state.view)
}
renderApp(appState)
