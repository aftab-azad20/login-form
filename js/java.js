$(document).ready(function (){
    var strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    var mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

    $("input[type='password']").keyup(function() {
        let value = $(this).val()
        if (strongRegex.test(value)) {
            $(".box-form").css('box-shadow', '20px 20px 13px 8px rgb(148 241 139 / 43%)')


        } else if (mediumRegex.test(value)) {
            $(".box-form").css('box-shadow', '20px 20px 13px 8px rgb(215 213 65 / 43%)')

        } else {
            $(".box-form").css("box-shadow", "20px 20px 13px 8px rgb(215 65 65 / 43%)")

        }

    })

    $("#register").click(function (){
        $("#wallpaper").css('display','none')
        $("#forget").css('display','none')
        $("#sign").fadeIn(1000)
    })
    $("#close").click(function (){
        $("#sign").fadeOut(1000,function (){ $("#wallpaper").fadeIn(1000)})

    })




    $(".forget-password").click(function (){
        $("#wallpaper").css('display','none')
        $("#sign").css('display','none')
        $("#forget").fadeIn(1000)
    })
    $("#close1").click(function (){
        $("#forget").fadeOut(1000,function (){ $("#wallpaper").fadeIn(1000)})

    })
     $('body').click(function (){
        $(".box-form").css('box-shadow', 'none')
        $(".forms-lgg").css('box-shadow', 'none')
    })


	    $(".forget-password-lgg").click(function (){
        $(".login-lgg").css('display','none')
        $(".forget-lgg").fadeIn(1000)
    })


    $("#register-lgg").click(function (){
        $(".login-lgg").css('display','none')
        $(".signup-lgg").fadeIn(1000)
    })

    $(".close-lgg1").click(function (){
        $(".forget-lgg").fadeOut(1000,function (){ $(".login-lgg").fadeIn(1000)})

    })
    $(".close-lgg2").click(function (){
        $(".signup-lgg").fadeOut(1000,function (){ $(".login-lgg").fadeIn(1000)})

    })

    $(".form-lgg[type='password']").keyup(function() {
        let value = $(this).val()
        if (strongRegex.test(value)) {
            $(".forms-lgg").css('box-shadow', '20px 20px 13px 8px rgb(148 241 139 / 43%)')


        } else if (mediumRegex.test(value)) {
            $(".forms-lgg").css('box-shadow', '20px 20px 13px 8px rgb(215 213 65 / 43%)')

        } else {
            $(".forms-lgg").css("box-shadow", "20px 20px 13px 8px rgb(215 65 65 / 43%)")

        }

    })

})