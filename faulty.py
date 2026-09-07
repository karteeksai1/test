def calculate_discount(price, discount_percent):
    if price < 0:
        raise ValueError("Price cannot be negative")

    if not 0 <= discount_percent <= 100:
        raise ValueError("Discount must be between 0 and 100")

    discount = price * (discount_percent / 100)
    return price - discount


def format_order(order_id, customer_name, total):
    return {
        "order_id": order_id,
        "customer": customer_name,
        "total": round(total, 2)
    }


def main():
    price = 1200
    discount_percent = 10

    final_price = calculate_discount(price, discount_percent)

    order = format_order(
        order_id=101,
        customer_name="Karteek",
        total=final_price
    )

    print(f"Order #{order['order_id']}")
    print(f"Customer: {order['customer']}")
    print(f"Final price: ₹{order['total']}")


if __name__ == "__main__":
    main()
