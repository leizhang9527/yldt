function goRegister() {
    window.location.href="../web/register.html";
}
function showPersonal() {
    $(".widget-list").attr('style','display: block');
    $(".widget-list1").attr('style','display: none');
    var t = document.getElementById('click1');
    t.classList.add("on");
    var t1 = document.getElementById('click2');
    t1.classList.remove("on");
}
function showProduct() {
    $(".widget-list1").attr('style','display: block');
    $(".widget-list").attr('style','display: none');
    var t = document.getElementById('click1');
    t.classList.remove("on");
    var t1 = document.getElementById('click2');
    t1.classList.add("on");
}