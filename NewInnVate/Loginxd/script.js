document.addEventListener('DOMContentLoaded', () => {
    const signInButton = document.getElementById('sign-in');
    const signUpButton = document.getElementById('sign-up');
    const registerForm = document.querySelector('.register');
    const loginForm = document.querySelector('.login');

    signInButton.addEventListener('click', () => {
        registerForm.classList.add('hide');
        loginForm.classList.remove('hide');
    });

    signUpButton.addEventListener('click', () => {
        loginForm.classList.add('hide');
        registerForm.classList.remove('hide');
    });
});
