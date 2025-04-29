let shop = document.getElementById("products");

let basket = JSON.parse(localStorage.getItem("data")) || [];
// let shopItemsData = [
//     {
//         id:"pr1",
//         img:"img/PORTUGAL.jpg", 
//         name:"PORTUGAL", 
//         price:"103"
//     },
//     {
//         id:"pr2",
//         img:"https://github.com/shadmansaalim/nike-shoes/blob/main/images/Daco_1703273%201.png?raw=true",
//         name:"AIR MAX", 
//         price:"359"
//     },
//     {
//         id:"pr3",
//         img:"img/pant1.jpg", 
//         name:"JORDAN 23 Engineered",
//         price:"48"
//     },
//     {
//         id:"pr4",
//         img:"img/lakers.jpg",
//         name:"LAKERS", 
//         price:"242"
//     },
//     {
//         id:"pr5",
//         img:"img/hoddie.jpg", 
//         name:"JACKET", 
//         price:"103"
//     },
//     {
//         id:"pr6",
//         img:"img/women.jpg", 
//         name:"AIR T-SHIRT",
//         price:"250"
//     }
//   ];

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
      <div id=product-id-${id} class="product">
      <div class="image">
          <img src=${img} alt="">
      </div>
      <div class="namePrice">
          <h3>${name}</h3>
          <span>$${price}</span>
      </div>
      <div class="buy">

          <button onclick="decrement(${id})"><i class="bi bi-dash-lg"></i></button>
          <div id=${id} class="quantity">${search.item === undefined ? 0 : search.item}</div>
          <button onclick="increment(${id})"><i class="bi bi-plus-lg"></i></button>
      </div>
  </div>
    `;
    })
    .join(""));
};

generateShop();

let increment = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) {
      basket.push({
        id: selectedItem.id,
        item: 1,
      });
    } else {
      search.item += 1;
    }
  
    // console.log(basket);
    update(selectedItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
  };
  let decrement = (id) => {
    let selectedItem = id;
    let search = basket.find((x) => x.id === selectedItem.id);
  
    if (search === undefined) return;
    else if (search.item === 0) return;
    else {
      search.item -= 1;
    }
    update(selectedItem.id);
    basket = basket.filter((x) => x.item !== 0);
    // console.log(basket);
    localStorage.setItem("data", JSON.stringify(basket));
  };
  let update = (id) => {
    let search = basket.find((x) => x.id === id);
    // console.log(search.item);
    document.getElementById(id).innerHTML = search.item;
    calculation();
  };
  
  let calculation = () => {
    let cartIcon = document.getElementById("cartAmount");
    cartIcon.innerHTML = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
  };
  
  calculation();