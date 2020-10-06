const container = document.querySelector(".books-area-recommended");

const books = [{
    number: "1",
    dueDate: "2020",
    name: "A Novel by Abi Maxwell",
    image: "img/books/book3.jpeg",
    alt: "The Den: A Novel by Abi Maxwell",
    link: "https://www.penguinrandomhouse.com/books/594974/the-den-by-abi-maxwell/?ref=berlinebot",
    price: "$25.95",
    reviews: "25",
    star: "fa fa-star",
    star1: "fa fa-star",
    star2: "fa fa-star",
    star3: "fa fa-star",
    star4: "fa fa-star-half-empty"
  },
  {
    number: "2",
    dueDate: "2020",
    name: "Leesa Cross-Smith",
    image: "img/books/book4.jpg",
    alt: "Every Kiss a War",
    link: "https://www.amazon.com/Every-Kiss-War-Leesa-Cross-Smith-ebook/dp/B00MU9YR8U/ref=berlinebot?ie=UTF8&qid=1550096491&sr=96491&sr=8-1&keywords=every+kiss+a+war&linkCode=sl1&tag=berlinebot&linkId=&language=en_US",
    price: "$ --",
    reviews: "12",
    star: "fa fa-star",
    star1: "fa fa-star",
    star2: "fa fa-star",
    star3: "fa fa-star-half-empty",
    star4: ""
  },
  {
    number: "3",
    dueDate: "2020",
    name: "Letters to Nelson Algren",
    image: "img/books/book5.jpg",
    alt: "A Transatlantic Love Affair: Letters to Nelson Algren",
    link: "https://www.indiebound.org/book/9781565845602?aff=berlinebot",
    price: "$24.95",
    reviews: "15",
    star: "fa fa-star",
    star1: "fa fa-star",
    star2: "fa fa-star",
    star3: "fa fa-star",
    star4: ""
  },
  {
    number: "4",
    dueDate: "2020",
    name: "Jenny Offill: Dept. of Speculation",
    image: "img/books/book6.jpg",
    alt: "Jenny Offill: Dept. of Speculation",
    link: "https://www.indiebound.org/book/9780385350815?aff=berlinebot",
    price: "$--",
    reviews: "5",
    star: "fa fa-star",
    star1: "fa fa-star",
    star2: "fa fa-star",
    star3: "fa fa-star",
    star4: ""
  },
  {
    number: "5",
    dueDate: "2020",
    name: " by Jonathan Harries ",
    image: "img/books/book7.jpg",
    alt: "Infatuation by Jonathan Harries",
    link: "https://www.indiebound.org/book/9781499904512?aff=berlinebot",
    price: "$14.95",
    reviews: "12",
    star: "fa fa-star",
    star1: "fa fa-star",
    star2: "fa fa-star-half-empty",
    star3: "",
    star4: ""
  },
  {
    number: "6",
    dueDate: "2020",
    name: "Cory Copeland",
    image: "img/books/book8.jpg",
    alt: "Love or Infatuation? by Cory Copeland",
    link: "https://www.indiebound.org/book/9781608139286?aff=berlinebot",
    price: "$19.95",
    reviews: "6",
    star: "fa fa-star",
    star1: "fa fa-star",
    star2: "fa fa-star",
    star3: "fa fa-star",
    star4: "fa fa-star"
  },
  {
    number: "7",
    dueDate: "2020",
    name: "Alexander Chee",
    image: "img/books/book9.jpg",
    alt: "How to Write an Autobiographical Novel by Alexander Chee",
    link: "https://www.indiebound.org/book/9781328764522?aff=berlinebot",
    price: "$15.99",
    reviews: "25",
    star: "fa fa-star",
    star1: "fa fa-star",
    star2: "fa fa-star",
    star3: "",
    star4: ""
  },
  {
    number: "8",
    dueDate: "20-08-2020",
    name: "Olly Wesley",
    image: "img/books/book2.jpg",
    alt: "Queensman",
    link: "https://wattpad.com/story/187325548",
    price: "$--",
    reviews: "--",
    star: "fa fa-star-half-empty",
    star1: "fa fa-star-empty",
    star2: "fa fa-star-empty",
    star3: "fa fa-star-empty",
    star4: "fa fa-star-empty"
  },
  {
    number: "9",
    dueDate: "20-08-2020",
    name: "Olly Wesley",
    image: "img/books/book1.jpg",
    alt: "Cipher Code",
    link: "https://wattpad.com/story/121315249",
    price: "$--",
    reviews: "--",
    star: "fa fa-star-half-empty",
    star1: "fa fa-star-empty",
    star2: "fa fa-star-empty",
    star3: "fa fa-star-empty",
    star4: "fa fa-star-empty"
  }
];

const showBooks = () => {
  let output = "";
  books.forEach(
    ({
      number,
      dueDate,
      name,
      image,
      alt,
      link,
      price,
      reviews,
      star,
      star1,
      star2,
      star3,
      star4
    }) =>
    (output += `
        <div class="books-area">
        <div class="single-popular-books">
            <div class="thumb">
                <a rel="noreferer noopener" target="_blank" href="${link}">
                    <img class="f-img img-fluid mx-auto" src="${image}" alt="${alt}" />
                </a>
            </div>
            <div class="details">
                <div class="d-flex justify-content-between mb-20">
                    <p class="name">${name}</p>
                    <p class="value">${price}
                        <sup class="asterisk text-ccc tip">*</sup>
                    </p>
                </div>
                <a rel="noreferer noopener" target="_blank" href="${link}">
                    <h4>${alt}</h4>
                </a>
                <div class="bottom d-flex mt-15">
                    <ul class="list">
                        <li>
                            <a href="#"><i class="${star}"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="${star1}"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="${star2}"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="${star3}"></i></a>
                        </li>
                        <li>
                            <a href="#"><i class="${star4}"></i></a>
                        </li>
                    </ul>
                    <p class="ml-20">${reviews} Reviews<sup class="asterisk">*</sup></p>
                </div>
            </div>
        </div>
    </div>
              `)
  );
  container.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", showBooks);
if ("serviceWorker" in navigator) {
  window.addEventListener("load", function () {
    navigator.serviceWorker
      .register("js/serviceWorker.min.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err));
  });
}