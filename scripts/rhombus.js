function calculateRhombusArea(){
    const base = getInputValueById('rhombus-base');
    console.log("base value holo", base);

    const height = getInputValueById('rhombus-height');
    console.log('height vlaue is:',height )

    const area = base * height;
    console.log(area)

    setInnerTextById("rhombus-area", area)

    const areaA = document.getElementById('rhombus-area');
    areaA.innerText = area;

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValueText = inputField.value;
    const baseValue = parseFloat(inputValueText);
    return baseValue
}

function setInnerTextById (elementId, showArea){
    const element = document.getElementById(elementId)
    element.innerText = showArea;
}