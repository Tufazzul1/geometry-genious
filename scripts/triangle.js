/* 
*Objective : Get base, height of a triangle .Calculate the area by using the provides formula and than display the area.
*step -1 : Get base value
*step -2 : added an id in the base input field 
*step -3 : Use getElementById to access the field
*step -4 : Get vvalue from the input feild. ( Value is string now)
*step -5 : convert the vlaue to a number by using parsefloat()
 */

function calculateTriangleArea(){
    // triangle base value
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBaseText = triangleBaseInput.value;
    const base = parseFloat(triangleBaseText)
    console.log(base);

    // get triangle height vlaue 
    const triangleHeightInput = document.getElementById('triangle-height');
    const triangleHeightText =  triangleHeightInput.value;
    const height = parseFloat(triangleHeightText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log('area of the triangle:', area);

    // display triangle area 
    const triangleAreaSpan = document.getElementById('triangle-area');
    triangleAreaSpan.innerText = area;
}