// $(document).ready(function () {
//   // Activate tooltip
//   $('[data-toggle="tooltip"]').tooltip()

//   // Select/Deselect checkboxes
//   let checkbox = $('table tbody input[type="checkbox"]')
//   $("#selectAll").click(function () {
//     if (this.checked) {
//       checkbox.each(function () {
//         this.checked = true
//       })
//     } else {
//       checkbox.each(function () {
//         this.checked = false
//       })
//     }
//   })
//   checkbox.click(function () {
//     if (!this.checked) {
//       $("#selectAll").prop("checked", false)
//     }
//   })
// })

function fetchDataToFillTable() {
  alert("Page is loaded")

  //the address and port of your backend
  const url = new URL("http://localhost:3000/users")
  let myHeaders = new Headers()
  let myInit = { method: "GET", headers: myHeaders, mode: "cors", cache: "default" }
  fetch(url, myInit)
    .then(function (response) {
      if (response.ok) {
        console.log("JSON recieved")
        //let divNova = document.createElement("div");
      } else {
        console.log("error message")
      }
    })
    .then(function (reloadPage) {
      location.reload()
    })
    .catch(function (error) {
      console.log("There has been a problem with your fetch operation: " + error.message)
    })
}
