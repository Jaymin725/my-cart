let cart = JSON.parse(localStorage.getItem("cart"));

if (cart == null) {
  cart = [];
}

const cart_list = document.getElementById("cart-list");
const cart_count = document.getElementById("cart-count");

cart_count.textContent = cart.length;

function updateCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function incQty(index) {
  cart[index].qty++;
  updateCart();
  printCart();
}

function decQty(index) {
  if (cart[index].qty > 1) {
    cart[index].qty--;
  } else {
    cart.splice(index, 1);
    cart_count.textContent = cart.length;
  }

  updateCart();
  printCart();
}

function printCart() {
  cart_list.innerHTML = "";

  cart.forEach((item, index) => {
    cart_list.innerHTML += `<tr>
    <td>
      <div class="flex items-center gap-4">
        <img class="w-24 aspect-square object-cover object-center border-2 rounded-xl"
        src="${item.product.img}" alt="">
        <span>${item.product.name}</span>
      </div>
    </td>
    <td>
      <div class="flex justify-center items-center">
        <div class="*:flex *:justify-center *:items-center *:w-8 *:aspect-square flex overflow-hidden border-2 divide-x-2 rounded-xl">
          <button class="group hover:bg-indigo-500 transition" onclick="decQty(${index})">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="group-hover:fill-white w-5 h-5 transition">
              <path fill-rule="evenodd" d="M4 10a.75.75 0 0 1 .75-.75h10.5a.75.75 0 0 1 0 1.5H4.75A.75.75 0 0 1 4 10Z" clip-rule="evenodd" />
            </svg>                  
          </button>
          <span>${item.qty}</span>
          <button class="group hover:bg-indigo-500 transition" onclick="incQty(${index})">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="group-hover:fill-white w-5 h-5 transition">
              <path d="M10.75 4.75a.75.75 0 0 0-1.5 0v4.5h-4.5a.75.75 0 0 0 0 1.5h4.5v4.5a.75.75 0 0 0 1.5 0v-4.5h4.5a.75.75 0 0 0 0-1.5h-4.5v-4.5Z" />
            </svg>                  
          </button>
        </div>
      </div>
    </td>
    <td class="text-right">
      <span>$${item.product.price}</span>
    </td>
  </tr>`;
  });
}

printCart();
