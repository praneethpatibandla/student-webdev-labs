$(document).ready(function () {
  const $app = $("#books");
  const $loading = $("#loading");
  const url = "https://anapioficeandfire.com/api/books/";

  $.getJSON(url)
    .done(function (data) {
      data.forEach(function (book) {
        const $bookDiv = $("<div>").css({
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        });

        const $title = $("<h2>").text(book.name);
        const $author = $("<p>").text(`by ${book.authors[0]}`);
        const $released = $("<p>").text(book.released.substr(0, 4));
        const $pages = $("<p>").text(`${book.numberOfPages} pages`);

        $bookDiv.append($title, $author, $released, $pages);
        $app.append($bookDiv);
      });
    })
    .fail(function () {
      $app.append($("<p>").text("An error occurred. Please try again."));
    })
    .always(function () {
      $loading.remove();
    });
});
