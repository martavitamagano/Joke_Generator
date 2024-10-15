

function handleClick(response) {
 

  new Typewriter("h1", {
  strings: (response.data.answer),
  autoStart: true,
  cursor: "",
  delay: "10",
});


}



let apiKey = "4foba0te46425f633e30d965f9ae409d";
let context =
  "be funny and have dark humor";
let prompt = "tell me a funny joke";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

axios.get(apiUrl).then(handleClick);



let buttonElement = document.querySelector("#buttonJoke");
buttonElement.addEventListener("click", handleClick);