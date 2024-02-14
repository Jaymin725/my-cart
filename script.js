const products = [
  {
    name: "Camera",
    img: "https://i.pinimg.com/564x/63/b6/33/63b6331d21033db512e1960b04a2e94c.jpg",
    price: 199.99,
  },
  {
    name: "Speaker",
    img: "https://i.pinimg.com/736x/97/2b/36/972b368a0bf15b856dc529302f667887.jpg",
    price: 599.99,
  },
  {
    name: "Watch",
    img: "https://i.pinimg.com/564x/a4/97/fe/a497feba5a9203400fd886e20933b0a8.jpg",
    price: 149.99,
  },
  {
    name: "Video Game",
    img: "https://i.pinimg.com/564x/5c/f6/52/5cf6522dde30054e4c09e7ef6c6ee1c6.jpg",
    price: 399.99,
  },
];

let cart = JSON.parse(localStorage.getItem("cart"));

const product_list = document.getElementById("product-list");
const cart_count = document.getElementById("cart-count");

//
product_list.innerHTML = "";

if (cart == null) {
  cart = [];
}

function addToCart(index) {
  if (cart.some(item => item.id == index)) {
    index = cart.findIndex(item => item.id == index);
    cart[index].qty++;
  } else {
    cart.push({ id: index, product: products[index], qty: 1 });
  }

  cart_count.textContent = cart.length;

  console.table(cart.map(item => [item.product.name, item.qty]));

  updateCart();
}

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

products.forEach((item, index) => {
  product_list.innerHTML += `<div
  class="group/card relative w-1/4 aspect-square overflow-hidden border rounded-xl hover:p-3 hover:shadow-lg hover:shadow-indigo-300 transition-all duration-300">
  <!-- Card Media -->
  <div class="w-full h-full overflow-hidden rounded-md">
    <img
      class="group-hover/card:brightness-75 w-full h-full object-cover object-center transition-all duration-500"
      src="${item.img}" alt="">
  </div>
  <!-- Card Body -->
  <div
    class="group-hover/card:bottom-0 absolute -bottom-full left-0 flex justify-between items-center mt-2 p-3 w-full bg-white border-t rounded-t-xl transition-all duration-300">
    <!-- Product Name -->
    <h3 class="text-xl text-truncate font-semibold">${item.name}</h3>
    <!-- Product Price -->
    <div class="*:p-2 inline-flex items-center overflow-hidden border divide-x rounded-lg">
      <button class="group hover:bg-indigo-500 transition" onclick="addToCart(${index})">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="group-hover:fill-white w-6 h-6 transition">
          <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
        </svg>              
      </button>
      <span class="font-semibold">$${item.price}</span>
    </div>
  </div>
</div>`;
});
