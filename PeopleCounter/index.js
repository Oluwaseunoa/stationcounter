

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("count-el")
let count = 0;
let saveEl = document.getElementById("save-el")

const increment = () =>{
    count += 1
    countEl.textContent= count;
}   

const save = () =>{
    let countStr = count + " - " 
    saveEl.textContent += countStr
    countEl.textContent = 0;
    count = 0
}
