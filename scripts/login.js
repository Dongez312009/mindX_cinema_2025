document.querySelector('form').addEventListener('submit', function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;

    // Xoá lỗi cũ nếu có
    document.querySelectorAll('.error').forEach(el => el.remove());

    let isValid = true;

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

    if (isValid) {
        alert('Đăng nhập thành công!');
        // Xử lý đăng nhập tiếp theo nếu cần
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
