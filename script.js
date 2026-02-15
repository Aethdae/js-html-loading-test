const doc = document;
const main = doc.getElementById("mainContent");

function loadPage(pageToLoad) {
  const myRequest = new Request(pageToLoad);
  fetch(myRequest)
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    .then((text) => {
      main.innerHTML = text;
    });
}
