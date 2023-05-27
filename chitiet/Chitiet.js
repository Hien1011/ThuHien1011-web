var soLuong = 1;
var macDinh = document.getElementById('mainIMG').src;
function tangSL() {
    soLuong++;
    document.getElementById('sl').innerHTML = soLuong;
}
function giamSL() {
    soLuong--;
    if (soLuong < 1) soLuong = 1;
    document.getElementById('sl').innerHTML = soLuong;
}
function doiAnh(picture){
    var temp = picture.src;
   
    document.getElementById('mainIMG').src=temp;
}
function undo(){
    document.getElementById('mainIMG').src = macDinh;
}