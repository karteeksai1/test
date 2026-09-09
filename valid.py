from dataclasses import dataclass
from datetime import datetime


@dataclass
class User:
    user_id: int
    name: str
    email: str
    created_at: datetime


class UserService:
    def __init__(self):
        self._users: dict[int, User] = {}

    def add_user(self, user_id: int, name: str, email: str) -> None:
        if not name or not email:
            raise ValueError("Name and email are required")

        self._users[user_id] = User(
            user_id=user_id,
            name=name,
            email=email,
            created_at=datetime.now(),
        )

    def get_user(self, user_id: int) -> User | None:
        return self._users.get(user_id)

    def get_all_users(self) -> list[User]:
        return list(self._users.values())
