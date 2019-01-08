const domElements = {
    engravePromptCheckbox: "engraveCheck",
    engraveQtyContainer: "qtyInputContainer",
    engraveQtyInput: "engraveQtyInput",
    engraveQtyBtn: "engraveQtyConfirm",
    itemCustomizerContainer: "customizationBox-container",
    itemCustomizerSpan: "customizationBox-span",
    addCustBoxLink: "addCustBoxLink"
};

let numOfItems = 0;

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

document.getElementById(domElements.addCustBoxLink).addEventListener("click", event => {
    event.preventDefault();
    numOfItems++;
    addCustomizationBox(numOfItems);
});

const addCustomizationBox = (num) => {
    const markup = `
        <div class="customizationBox-item" id="customizationBox-item-${num}">
            <p style="text-align: center">ITEM ${num}</p>
            <input type="text" placeholder="LINE 1" size="16" style="margin: 10px"><input type="checkbox">
            <input type="text" placeholder="LINE 2" size="16" style="margin: 10px"><input type="checkbox">
            <input type="text" placeholder="LINE 3" size="16" style="margin: 10px"><input type="checkbox">
        </div>
    `;

    document.getElementById(domElements.itemCustomizerSpan).insertAdjacentHTML("beforeend", markup);
};