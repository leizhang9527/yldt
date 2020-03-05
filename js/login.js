function showLogin() {
    $(".theme-popover").css('display','block');
}

function hiddenLogin() {
    $(".theme-popover").css('display','none');
}

function merSubMit_login(){
    var userName = $("#consumer_name_login").val();
    var userPwd = $("#consumer_passwordm_login").val();
    if(userName === "" || userPwd === ""){
        alertMsg('用户名密码不能为空!');
        return;
    }
    var isCookie = $("#mer_cookie_login").is(':checked');


};
//企业会员登录
function torSubMit_login(){
    var userName = $("#exhibitor_name_login").val();
    var userPwd = $("#exhibitor_passwordm_login").val();
    if(userName === "" || userPwd === ""){
        alertMsg('用户名密码不能为空!');
        return;
    }
};