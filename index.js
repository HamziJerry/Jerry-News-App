console.log("This is news website tutorial");

let source = "bbc-news";
let apiKey = "5f681dc0d18447fcbea5bafb4020db98";

let newsAccordion = document.getElementById("newsAccordion");

let xhr = new XMLHttpRequest();

xhr.open(
  "GET",
  `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`,
  true
);

xhr.onload = function () {
  if (this.status === 200) {
      let json = JSON.parse(this.responseText);
      let articles = json.articles;
      let newsHtml = "";
      articles.forEach(function(element, index) {
        let news = `<div class="accordion-item col-lg-6 my-3">
        <h2 class="accordion-header text-center" id="heading${index}">
            <img src="${element["urlToImage"]}" alt="news image" class="img-responsive img-fluid">
          <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
            <b>Breaking News #${index + 1}: </b>&nbsp;${element["title"]}
          </button>
        </h2>
        <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}" data-bs-parent="#accordionExample">
          <div class="accordion-body">
            <strong>${element["description"]}</strong> ${element["content"]} <a href='${element["url"]}' target ="_blank">Read more</a>
          </div>
        </div>
      </div>`;
      newsHtml += news;
      });
      newsAccordion.innerHTML = newsHtml;
  } else {
    console.log("There is some error plz check your code!");
  }
};

xhr.send();
