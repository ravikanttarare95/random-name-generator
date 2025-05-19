function generateName() {
  let shopName = document.getElementById("name-container");
  let originalName = document.getElementById("original-name");
  let p1 = document.getElementById("p-1");
  let p2 = document.getElementById("p-2");
  let p3 = document.getElementById("p-3");
  // Adjectives:
  let randomNum1 = Math.floor(Math.random() * 3) + 1;
  console.log(`${randomNum1}`);
  switch (randomNum1) {
    case 1: {
      p1.innerText = `Crazy`;
      break;
    }

    case 2: {
      p1.innerText = `Amazing`;
      break;
    }

    case 3: {
      p1.innerText = `Fire`;
      break;
    }
  }

  // Shop Name:
  let randomNum2 = Math.floor(Math.random() * 3) + 1;
  console.log(`${randomNum2}`);
  switch (randomNum2) {
    case 1: {
      p2.innerText = `Engine`;
      break;
    }

    case 2: {
      p2.innerText = `Food`;
      break;
    }

    case 3: {
      p2.innerText = `Garments`;
      break;
    }
  }

  // Another Name:
  let randomNum3 = Math.floor(Math.random() * 3) + 1;
  console.log(`${randomNum3}`);
  switch (randomNum3) {
    case 1: {
      p3.innerText = `Bros`;
      break;
    }

    case 2: {
      p3.innerText = `Limited`;
      break;
    }

    case 3: {
      p3.innerText = `Hub`;
      break;
    }
  }
  originalName.style.display = "none";
}
