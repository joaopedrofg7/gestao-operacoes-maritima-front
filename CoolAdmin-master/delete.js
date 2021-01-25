function fetchDataToFillTable() {
  //the address and port of your backend
  const url = new URL("http://localhost:3000/users/pedro")
  let myHeaders = new Headers()
  let myInit = { method: "DELETE", headers: myHeaders, mode: "cors", cache: "default" }
  fetch(url, myInit).then(function (response) {
    if (response.ok) {
      console.log("JSON recieved")
      //let divNova = document.createElement("div");
    } else {
      console.log("error message")
    }
  })
}
