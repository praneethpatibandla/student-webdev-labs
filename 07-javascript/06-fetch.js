const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");

const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();

    const loader = document.querySelector("#loading");
    if (loader) loader.remove();

    app.style.display = "flex";
    app.style.flexDirection = "column";
    app.style.alignItems = "center";

    data.forEach((book) => {
      const bookDiv = document.createElement("div");
      bookDiv.style.textAlign = "center";
      bookDiv.style.marginBottom = "2rem";

      const year = new Date(book.released).getFullYear();

      bookDiv.innerHTML = `
        <h2>${book.name}</h2>
        <p>by ${book.authors.join(", ")}</p>
        <p>${year}</p>
        <p>${book.numberOfPages} pages</p>
      `;

      app.appendChild(bookDiv);
    });
  } catch (error) {
    console.error("Failed to fetch books:", error);
    app.innerHTML = `<p class="text-danger">Failed to load books. Please try again later.</p>`;
  }
};

fetchData(url);
