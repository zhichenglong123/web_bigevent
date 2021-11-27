$(function () {
    //点击"去注册账号"的链接
    $('#link_reg').on('click', function () {
        $('.login-box').hide()
        $('.reg-box').show()
    })

    //点击"去登陆"的链接
    $('#link_login').on('click', function () {
        $('.login-box').show()
        $('.reg-box').hide()
    })
})

//监听注册表单的提交事件
$('#reg').on('click', function (e) {
    //1.阻止默认的提交行为
    e.prevenDefault()
    //2.发起Ajax的post请求
    $.post('http://ajax.frontend.itheima.net/api/reguser', {
        username:$('#form_reg[name=username]').val(),password:$('#form_reg[name=password]').val()
    }, function (res) {
        console.log(res);
    })
})