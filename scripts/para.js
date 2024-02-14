function calculateParaArea(){
    const paraBase = document.getElementById('para-base');
    const paraValueBase = paraBase.value;
    const base = parseFloat(paraValueBase);
    console.log(base);

    const paraHeight = document.getElementById('para-height');
    const paraValueHeight = paraHeight.value;
    const height = parseFloat(paraValueHeight);
    console.log(height);

    const paraArea = base * height;
    console.log("The para are is", paraArea);

    const paraAreaSpan = document.getElementById('para-area');
    paraAreaSpan.innerText = paraArea;

}