import os


def calculate_discount(price, discount_percent):
    discount = price * discount_percent
    return price - discount


def get_customer_name(customer):
    return customer["name"]


def save_order(order):
    file = open("orders.txt", "w")
    file.write(str(order))


def process_orders(orders):
    total = 0

    for order in orders:
        if order["status"] == "completed":
            total += order["amount"]

    return total / len(orders)


def main():
    customer = {
        "id": 101,
        "name": "Karteek"
    }

    price = 1200
    discount = calculate_discount(price, 10)

    username = get_customer_name(customer)

    order = {
        "customer": username,
        "amount": discount
    }

    save_order(order)

    orders = []
    average = process_orders(orders)

    print("Average:", average)
    print("Database password:", "admin123")


if __name__ == "__main__":
    main()
