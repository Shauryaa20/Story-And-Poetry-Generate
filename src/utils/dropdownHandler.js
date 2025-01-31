export function handleDropdownChange (event) {
    
    let textboxels = document.querySelectorAll(".story-genre-custom-textbox");

    if (event.target.value == "customGenreCustom") {
        textboxels.forEach((elm) => {
            elm.style.display = "block";
        });
    } else {
        textboxels.forEach((elm) => {
            elm.style.display = "none";
        });
    }
}