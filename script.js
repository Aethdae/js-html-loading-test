const doc = document;
const main = doc.getElementById("mainContent");

function loadPage(pageToLoad) {
  //Create a request to get a promise
  fetch(pageToLoad)
    //Ensure the promise returns ok before getting text
    .then((response) => {
      console.log(response);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.text();
    })
    //Use the text from ^ response as the page html
    .then((text) => {
      main.innerHTML = text;
    });
}
