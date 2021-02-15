// collect all the variables
const bookName = document.querySelector(".book");
const authorName = document.querySelector(".author");
const isbnName = document.querySelector(".isbn");
const btn = document.querySelector(".btn");
const pera = document.querySelector(".pera");
const bookList = document.getElementById("bookList");

// crate an event
btn.addEventListener("click", (e) => {
  // prevent default activities
  e.preventDefault();
  if (
    //   validation
    bookName.value === "" ||
    authorName.value === "" ||
    isbnName.value === ""
  ) {
    // if===true then execute the code
    pera.classList.add("msg");
    pera.innerText = "please give your information";
    // after 3sec error message will be vanish
    setTimeout(() => {
      pera.remove();
    }, 3000);
  } else {
    // create new table row
    const newRow = document.createElement("tr");

    const newTH = document.createElement("td");
    newTH.innerText = bookName.value;
    newRow.appendChild(newTH);

    const newAuthor = document.createElement("td");
    newAuthor.innerText = authorName.value;
    newRow.appendChild(newAuthor);

    const newISBN = document.createElement("td");
    newISBN.innerText = isbnName.value;
    newRow.appendChild(newISBN);

    bookList.appendChild(newRow);

    //   clear fields
    bookName.value = "";
    authorName.value = "";
    isbnName.value = "";
  }
});