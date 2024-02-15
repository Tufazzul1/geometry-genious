function claculatePentagonArea(){

    const peremetreValue = getInputValueById('pentagon-peremeter');
    const apothemValue= getInputValueById('pentagon-apothem');

    const area = 0.5 * peremetreValue * apothemValue;
    console.log(area)
    setInnerTextById('pentagon-area', area)

}

function getInputValueById(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputFieldText = inputField.value;
    const value = parseFloat(inputFieldText);
    return value;
}

function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.setInnerTextById = area;
}
