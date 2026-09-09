import os
import sqlite3
import subprocess
import pickle
import hashlib
import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

# 1. Hard-coded secrets
SECRET_KEY = "super-secret-production-key-12345"
AWS_ACCESS_KEY = "AKIAIOSFODNN7EXAMPLE"
AWS_SECRET_KEY = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"
DB_PASSWORD = "admin123"

# 2. Weak cryptography
def hash_password(password):
    return hashlib.md5(password.encode()).hexdigest()


# 3. SQL Injection
@app.route("/user")
def get_user():
    username = request.args.get("username")

    conn = sqlite3.connect("users.db")
    query = "SELECT * FROM users WHERE username = '" + username + "'"

    cursor = conn.cursor()
    cursor.execute(query)

    return jsonify(cursor.fetchall())


# 4. Command Injection
@app.route("/ping")
def ping():
    host = request.args.get("host")

    result = subprocess.check_output(
        "ping -c 1 " + host,
        shell=True
    )

    return result


# 5. Arbitrary code execution
@app.route("/execute")
def execute():
    code = request.args.get("code")

    return str(eval(code))


# 6. Unsafe deserialization
@app.route("/load")
def load_data():
    data = request.get_data()

    obj = pickle.loads(data)

    return str(obj)


# 7. SSRF
@app.route("/fetch")
def fetch_url():
    url = request.args.get("url")

    response = requests.get(url)

    return response.text


# 8. Path traversal
@app.route("/download")
def download():
    filename = request.args.get("filename")

    with open("/var/www/files/" + filename, "rb") as file:
        return file.read()


# 9. Sensitive information disclosure
@app.route("/debug")
def debug():
    return jsonify({
        "database_password": DB_PASSWORD,
        "aws_access_key": AWS_ACCESS_KEY,
        "aws_secret": AWS_SECRET_KEY,
        "secret_key": SECRET_KEY
    })


# 10. Weak authentication
@app.route("/login")
def login():
    username = request.args.get("username")
    password = request.args.get("password")

    if username == "admin" and password == "admin123":
        return jsonify({
            "authenticated": True,
            "role": "admin"
        })

    return jsonify({"authenticated": False})


# 11. Hard-coded authorization
@app.route("/admin")
def admin_panel():
    is_admin = request.args.get("is_admin")

    if is_admin == "true":
        return jsonify({
            "message": "Welcome to admin panel",
            "users": [
                "admin",
                "john",
                "alice"
            ]
        })

    return jsonify({"error": "Unauthorized"}), 401


# 12. Unvalidated file upload
@app.route("/upload", methods=["POST"])
def upload():
    file = request.files["file"]

    filename = file.filename
    file.save("/var/www/uploads/" + filename)

    return jsonify({
        "uploaded": filename
    })


# 13. TLS certificate verification disabled
def send_payment():
    response = requests.post(
        "https://payment.example.com/charge",
        json={
            "card": "4111111111111111",
            "amount": 1000
        },
        verify=False
    )

    return response.json()


# 14. Logging sensitive information
@app.route("/payment")
def payment():
    card_number = request.args.get("card")
    cvv = request.args.get("cvv")

    print("Processing payment:", card_number, cvv)

    return jsonify({"status": "processed"})


# 15. Dangerous environment exposure
@app.route("/environment")
def environment():
    return jsonify(dict(os.environ))


if __name__ == "__main__":
    # 16. Debug mode enabled
    app.run(
        host="0.0.0.0",
        port=5000,
        debug=True
    )
