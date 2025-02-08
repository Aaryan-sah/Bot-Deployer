async function handleSignup() {
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;

    try {
        await auth.createUserWithEmailAndPassword(email, password);
        alert("Signup Successful! Redirecting...");
        window.location.href = "dashboard.html";
    } catch (error) {
        alert(error.message);
    }
}

async function handleLogin() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        await auth.signInWithEmailAndPassword(email, password);
        window.location.href = "dashboard.html";
    } catch (error) {
        alert(error.message);
    }
}