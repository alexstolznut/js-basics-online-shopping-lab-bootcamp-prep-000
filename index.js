var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  const name = itemName;
  const itemPrice = Math.floor(Math.random()*101);
  const object = new Object;
  object[name] = itemPrice;
  cart.push(object);
  console.log(`${Object.keys(object)} has been added to your cart.`);
  return cart;
}

function viewCart() {
  if(cart.length <=0) {
    console.log('Your shopping cart is empty.');
    return;
  } else {
    const object = Object.assign(cart);
    if(cart.length === 1) {
      const name = Object.keys(object[0]);
      const price = Object.values(object[0]);
      console.log(`In your cart, you have ${name} at $${price}.`);
      return;
    } else if(cart.length === 2) {
      // let string = 'In your cart, ';
      // for (var i = 0; i < cart.length; i = i + 1){
      //   let item = Object.keys(getCart()[i]);
      //   let price = Object.values(getCart()[i]);
      //   string += `you have ${item} at $${price}`;
      //   if(i < cart.length - 1) {
      //     string += ' and ';
      //   }
      // }
      // string += '.'
      // console.log(string);
      console.log(`In your cart, you have ${Object.keys(getCart()[0])} at ${Object.values(getCart()[0])} and ${Object.keys(getCart()[1])} at ${Object.values(getCart()[1])}.`)
      return;
    } else {
      let string = 'In your cart, ';
      for(var i = 0; i < cart.length; i = i + 1){
        string += `you have ${Object.keys(object[i])} at ${Object.values(object[i])}, `
        if(i < cart.length  ) {
          string += `and ${Object.keys(object[i])} at ${Object.values(object[i])}.`
          break;
        }
      }
        console.log(string);
        return
    }

  }
  // write your code here
}


function total() {
  // write your code here
  let total = 0;
  for(var i = 0; i < cart.length; i = i + 1) {
    total += parseInt(Object.values(getCart[i]));
  }
  return console.log(total);
}


function removeFromCart(item) {

  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

addToCart('Apple');
addToCart('banana');
viewCart();
total();
