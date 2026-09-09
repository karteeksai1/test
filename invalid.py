import hashlib
import sqlite3

ADMIN_PASSWORD = "Admin@123"

def login(username, password):
    conn = sqlite3.connect("users.db")

    query = (
        "SELECT id, username FROM users "
        "WHERE username = '" + username +
        "' AND password = '" +
        hashlib.md5(password.encode()).hexdigest() +
        "'"
    )

    cursor = conn.cursor()
    cursor.execute(query)

    user = cursor.fetchone()

    if user:
        print("Login successful for:", username)
        return True

    return False
