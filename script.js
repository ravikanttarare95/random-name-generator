const firstWords = [
  "Crazy",
  "Amazing",
  "Shree",
  "Om",
  "Bharat",
  "Raj",
  "Desi",
  "Swadeshi",
  "New",
  "Maa",
  "Indian",
  "Sai",
  "Liberty",
  "American",
  "Sunny",
  "Blue",
  "North",
  "Western",
  "Golden",
  "Urban",
  "Modern",
  "Classic",
];

const middleWords = [
  "Fashion",
  "Spice",
  "Grocery",
  "Textile",
  "Mobile",
  "Jewels",
  "Apna",
  "Furniture",
  "Curry",
  "Bazar",
  "Tech",
  "Pet",
  "Home",
  "Auto",
  "Style",
  "Food",
  "Gear",
  "Tire",
  "Market",
  "Coffee",
];

const lastWords = [
  "Center",
  "House",
  "Hub",
  "Store",
  "Emporium",
  "Palace",
  "Point",
  "Mart",
  "Corner",
  "Shop",
  "Place",
  "Warehouse",
];

function generateName() {
  let shopName = document.getElementById("name-container");
  let originalName = document.getElementById("original-name");
  let firstName = document.getElementById("p-1");
  let MiddleName = document.getElementById("p-2");
  let lastName = document.getElementById("p-3");

  // FirstName:
  let randomNum1 = Math.floor(Math.random() * firstWords.length);

  // MiddleName:
  let randomNum2 = Math.floor(Math.random() * middleWords.length);

  // LastName:
  let randomNum3 = Math.floor(Math.random() * lastWords.length);

  shopName.innerText = `${firstWords[randomNum1]} ${middleWords[randomNum2]} ${lastWords[randomNum3]}`;
}
