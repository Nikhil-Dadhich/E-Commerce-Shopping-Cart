let shop = document.getElementById("nikhil");

let shopItemsData = [
    {
      id: "jfhgbvnscs",
      name: "Casual Shirt",
      price: 45,
      img: "add1.png",
    },
  ];
  console.log("SI");
  let generateShop = () => {
    return (shop.innerHTML = shopItemsData
      .map((x) => {
        let { id, name, price, img } = x;
      //   let search = basket.find((x) => x.id === id) || [];
    //     return `
    //     <div id=product-id-${id} class="product">
    //     <div class="image">
    //         <img src=${img} alt="">
    //     </div>
    //     <div class="namePrice">
    //         <h3>${name}</h3>
    //         <span>$ ${price}</span>
    //     </div>
    //     <div class="bay">
    //         <button> bay now </button>
    //     </div>
    // </div>
    //   `;
    return`<p>HOLLA AMO TALE TALE U</p>`;
    
      })
      .join(""));
  };
  
  generateShop();