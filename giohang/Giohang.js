var soLuong = 1;

function tangSL1() {
    soLuong++;
    document.getElementById('sl1').innerHTML = soLuong;
}
function giamSL1() {
    soLuong--;
    if (soLuong < 1) soLuong = 1;
    document.getElementById('sl1').innerHTML = soLuong;
}
var soLuong2 = 1;

function tangSL2() {
    soLuong2++;
    document.getElementById('sl2').innerHTML = soLuong2;
}
function giamSL2() {
    soLuong2--;
    if (soLuong2 < 1) soLuong2 = 1;
    document.getElementById('sl2').innerHTML = soLuong2;
}