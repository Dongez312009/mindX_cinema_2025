document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault(); // Ngăn form reload

    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const verifyPassword = document.getElementById('verify-password').value;

    // Xoá lỗi cũ nếu có
    document.querySelectorAll('.error').forEach(el => el.remove());

    let isValid = true;

    // Kiểm tra username: 6-18 ký tự
    if (username.length < 6 || username.length > 18) {
        showError('username', 'Username phải từ 6 đến 18 ký tự');
        isValid = false;
    }

    // Kiểm tra email đúng định dạng
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('email', 'Email không hợp lệ');
        isValid = false;
    }

    // Kiểm tra password: 8-20 ký tự
    if (password.length < 8 || password.length > 20) {
        showError('password', 'Password phải từ 8 đến 20 ký tự');
        isValid = false;
    }

    // Kiểm tra verify password
    if (verifyPassword !== password) {
        showError('verify-password', 'Mật khẩu xác nhận không trùng khớp');
        isValid = false;
    }

    if (isValid) {
        alert('Đăng ký thành công!');
        // Xử lý tiếp nếu cần (lưu localStorage, chuyển trang...)
    }
});

// Hàm hiển thị lỗi
function showError(inputId, message) {
    const input = document.getElementById(inputId);
    const error = document.createElement('small');
    error.classList.add('error');
    error.style.color = 'red';
    error.textContent = message;
    input.parentElement.appendChild(error);
}