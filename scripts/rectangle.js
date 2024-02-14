function calculateRectangleArea(){
    // get length of the rectangle 
    const rectWidth = document.getElementById('rectangle-width');
    const rectWidthValue = rectWidth.value;
    const width = parseFloat(rectWidthValue);
    console.log(width);

    // get width of the rectangle 
    const rectLength  = document.getElementById('rectangle-length');
    const rectLengthValue = rectLength.value;
    const length = parseFloat(rectLengthValue);
    console.log(length);

    const area = length * width;
    console.log('The Area of the rectangle:', area);

    // display rectangle area 
    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;


}