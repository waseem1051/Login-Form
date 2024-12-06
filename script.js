$(document).ready(function() {
    $('#loginForm').on('submit', function(event) {
        event.preventDefault();
        
        let username = $('#username').val().trim();
        let password = $('#password').val().trim();
        let rememberMe = $('#rememberMe').is(':checked');
        let errorMessage = '';

        // Static values for authentication
        const validUsername = 'user';
        const validPassword = 'password';

        if (username === '') {
            errorMessage += 'Username is required. ';
        }

        if (password === '') {
            errorMessage += 'Password is required. ';
        }

        if (username !== validUsername || password !== validPassword) {
            errorMessage += 'Invalid username or password. ';
        }

        if (errorMessage) {
            $('#errorMessage').text(errorMessage).removeClass('d-none');
        } else {
            $('#errorMessage').addClass('d-none');
            //alert(`Logged in successfully! Remember Me: ${rememberMe}`);
            window.location.href = 'success.html';
        }
    });
});
