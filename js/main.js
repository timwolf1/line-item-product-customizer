const domElements = {
    engravePromptCheckbox: "engraveCheck",
    engraveQtyContainer: "qtyInputContainer",
    engraveQtyInput: "engraveQtyInput",
    engraveQtyBtn: "engraveQtyConfirm",
    itemCustomizerContainer: "customizationBox-container"
};

document.getElementById(domElements.engravePromptCheckbox).addEventListener("change", event => {
    if (event.target.checked) {
        document.getElementById(domElements.engraveQtyContainer).style.visibility = "visible";
    } else {
        document.getElementById(domElements.engraveQtyContainer).style.visibility = "hidden";
    }
});

document.getElementById(domElements.engraveQtyBtn).addEventListener("click", event => {
    console.log(event);
});