document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');

    // ログインフォームがない場合は処理を終了
    if (!loginForm) return;

    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    // 保存された情報があれば自動入力
    emailInput.value = localStorage.getItem('userEmail') || '';
    passwordInput.value = localStorage.getItem('userPassword') || '';

    // フォーム送信時の処理
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // 入力値をlocalStorageに保存
        localStorage.setItem('userEmail', emailInput.value);
        localStorage.setItem('userPassword', passwordInput.value);

        // ログイン処理のシミュレーション
        console.log('ログイン情報が保存されました。');
        console.log('Email:', emailInput.value);
        console.log('Password:', passwordInput.value);
        alert('ログイン成功!（情報はlocalStorageに保存されました）');
    });
});