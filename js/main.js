//..........CURD...........//
// Elenents
var productNameInput = document.getElementById("productName");
var productPriceInput = document.getElementById("productPrice");
var productCategoryInput = document.getElementById("productCategory");
var productDescriptionInput = document.getElementById("productDescription");
var productImageInput = document.getElementById("productImage");
var searchProductInput = document.getElementById("searchProduct");

// List Of Objects
var productList = [];
productList = JSON.parse(localStorage.getItem("productList"));
display();
// Function To Add Product
function addProduct() {
if(validName() && validPrice() && validCategory() && validDescription()){
    var imgName = productImageInput.files[0]? productImageInput.files[0].name : "portfolio-3.jpg";
  // Object
  var product = {
    name: productNameInput.value,
    price: productPriceInput.value,
    category: productCategoryInput.value,
    description: productDescriptionInput.value,
    image: `../images/${imgName}`
  };
  productList.push(product);
  localStorage.setItem("productList", JSON.stringify(productList));
  display();
  clear();

  console.log(productList);
}
}

// Function Clear Value in Outputs
function clear() {
  productNameInput.value = "";
  productPriceInput.value = "";
  productCategoryInput.value = "";
  productDescriptionInput.value = "";
  productImageInput.value = "";
    var inputs = [productNameInput, productPriceInput, productCategoryInput, productDescriptionInput];
  inputs.forEach(input => {
    input.classList.remove('is-valid', 'is-invalid');
  });

  document.getElementById("alertMsg").classList.add('d-none');
  document.getElementById("alertPriceMsg").classList.add('d-none');
  document.getElementById("alertCategoryMsg").classList.add('d-none');
  document.getElementById("alertDesMsg").classList.add('d-none');
}

// Function To Display Cards
function display() {
  var box = "";
  for (var i = 0; i < productList.length; i++) {
    box += `                <div class="my-card col-md-6 col-lg-4 col-xl-3">
                    <div class="inner rounded-3 overflow-hidden shadow-sm">
                        <img src="${productList[i].image}" class="w-100" alt="${productList[i].name}">
                <div class="card-info p-2">
                    <span class="badge rounded-pill text-bg-info text-white">Index :${i}</span>
                            <h5>Product Name :${productList[i].name}</h5>
                        <p>Price :${productList[i].price}</p>
                        <p>Category :${productList[i].category}</p>
                        <p>Description :${productList[i].description}</p>
                </div>
                <div class="card-footer border-top bg-body-tertiary p-2 d-flex justify-content-center gap-2">
                    <button class="btn btn-outline-warning">Update <i class="fa-solid fa-pen-to-square"></i></button>
                    <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete <i class="fa-solid fa-trash"></i></button>

                </div>
                    </div>

                </div>`;
  }
  document.getElementById("my-row").innerHTML = box;
}

// Delete Card
function deleteProduct(index) {
  productList.splice(index, 1);
  display();
  localStorage.setItem("productList", JSON.stringify(productList));
}

// Search Function
function searchProduct() {
  var box = "";
  for (var i = 0; i < productList.length; i++) {
    if (
      productList[i].name
        .toLowerCase()
        .includes(searchProductInput.value.toLowerCase()) ||
      productList[i].category
        .toLowerCase()
        .includes(searchProductInput.value.toLowerCase()) ||
      productList[i].description
        .toLowerCase()
        .includes(searchProductInput.value.toLowerCase()) ||
      productList[i].price.includes(searchProductInput.value)
    ) {
      box += `                <div class="my-card col-md-6 col-lg-4 col-xl-3">
                    <div class="inner rounded-3 overflow-hidden shadow-sm">
                        <img src="${productList[i].image}" class="w-100" alt="${productList[i].name}">
                <div class="card-info p-2">
                    <span class="badge rounded-pill text-bg-info text-white">Index :${i}</span>
                            <h5>Product Name :${productList[i].name}</h5>
                        <p>Price :${productList[i].price}</p>
                        <p>Category :${productList[i].category}</p>
                        <p>Description :${productList[i].description}</p>
                </div>
                <div class="card-footer border-top bg-body-tertiary p-2 d-flex justify-content-center gap-2">
                    <button class="btn btn-outline-warning">Update <i class="fa-solid fa-pen-to-square"></i></button>
                    <button onclick="deleteProduct(${i})" class="btn btn-outline-danger">Delete <i class="fa-solid fa-trash"></i></button>

                </div>
                    </div>

                </div>`;
    }
  }
  document.getElementById("my-row").innerHTML = box;
}

// Check Vaildation
function validName(){
  var alertMsg = document.getElementById("alertMsg");
  var regex = /^[A-Z][a-z]{2,20}$/
  if(regex.test(productNameInput.value)){
    productNameInput.classList.remove('is-invalid');
   productNameInput.classList.add('is-valid');
  alertMsg.classList.add('d-none');
  return true;
  }
  else{
   productNameInput.classList.remove('is-valid');
   productNameInput.classList.add('is-invalid');
  alertMsg.classList.remove('d-none');
  return false;
  }
}
function validPrice(){
  var alertPriceMsg = document.getElementById("alertPriceMsg");
  var regex = /^\d{2,3}[\.\d]{1,3}?$/
  if(regex.test(productPriceInput.value)){
    productPriceInput.classList.remove('is-invalid');
   productPriceInput.classList.add('is-valid');
  alertPriceMsg.classList.add('d-none');
  return true;
  }
  else{
   productPriceInput.classList.remove('is-valid');
   productPriceInput.classList.add('is-invalid');
  alertPriceMsg.classList.remove('d-none');
  return false;
  }
}
function validCategory(){
  var alertCategoryMsg = document.getElementById("alertCategoryMsg");
  var regex = /^[A-Z][a-z]{2,20}$/
  if(regex.test(productCategoryInput.value)){
    productCategoryInput.classList.remove('is-invalid');
   productCategoryInput.classList.add('is-valid');
  alertCategoryMsg.classList.add('d-none');
  return true;
  }
  else{
   productCategoryInput.classList.remove('is-valid');
   productCategoryInput.classList.add('is-invalid');
  alertCategoryMsg.classList.remove('d-none');
  return false;
  }
}
function validDescription(){
    var alertDesMsg = document.getElementById("alertDesMsg");
  var regex = /^.{10,}$/
  if(regex.test(productDescriptionInput.value.trim())){
    productDescriptionInput.classList.remove('is-invalid');
   productDescriptionInput.classList.add('is-valid');
  alertDesMsg.classList.add('d-none');
  return true;
  }
  else{
   productDescriptionInput.classList.remove('is-valid');
   productDescriptionInput.classList.add('is-invalid');
  alertDesMsg.classList.remove('d-none');
  return false;
  }
}