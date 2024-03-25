$(function () {
    $('#ReturnUrlHash').val(location.hash);
   

    var $loginForm = $('#LoginForm');
   // $.validator.unobtrusive.parse($loginForm);

    $loginForm.validate({
        highlight: function (input) {
            $(input).parents('.form-line').addClass('error');
        },
        unhighlight: function (input) {
            $(input).parents('.form-line').removeClass('error');
        },
        errorPlacement: function (error, element) {
            $(element).parents('.input-group').append(error);
        }
    });

    $(document).on('click', '[data-action $=login]', function (e) {
        e.preventDefault();
        window.location.href = window.location.origin + "/Account/Login"
    });

    $(document).on('click', '[data-action $=register]', function (e) {
        e.preventDefault();
        window.location.href = window.location.origin + "/Account/Register"
    });

    $loginForm.submit(function (e) {
        e.preventDefault();

        if (!$loginForm.valid()) {
            return;
        }
        abp.ui.setBusy();
        abp.ajax({
            url: '/Account/Login?returnUrl=' + $('#ReturnUrl').val(),
            data: $loginForm.serialize(),
            contentType: 'application/x-www-form-urlencoded',
            success: function (content) {
                abp.ui.clearBusy();
                location.href = $('#ReturnUrl').val();
            },
            error: function (e) {
                abp.ui.clearBusy();
                console.log("error on login:", e)
            }
        }).always(function () {
            abp.ui.clearBusy();
        });
    });

    $('a.social-login-link').click(function () {
        var $a = $(this);
        var $form = $a.closest('form');
        $form.find('input[name=provider]').val($a.attr('data-provider'));
        $form.submit();
    });

    $loginForm.find('input[type=text]:first-child').focus();
});
