$("body").append("<h1>Counter</h1>")
let counter = 0
$("body").append(`<h1 class='counter'>${counter}<h1`)
$("body").append("<button class='increase'>Increase</button>")
$(".increase").click(() => {
    counter++
    $(".counter").text(`${counter}`)
})
$("body").append("<button class='decrease'>Decrease</button>")
$(".decrease").click(() => {
    counter--
    $(".counter").text(`${counter}`)
})