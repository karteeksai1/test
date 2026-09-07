function calculateTotal(items) {
    return items.reduce((total, item) => {
        return total + item.price * item.quantity;
    }, 0);
}

function formatOrder(order) {
    return {
        id: order.id,
        customer: order.customer,
        total: Number(order.total.toFixed(2))
    };
}

function main() {
    const items = [
        { name: "Laptop", price: 50000, quantity: 1 },
        { name: "Mouse", price: 1000, quantity: 2 }
    ];

    const total = calculateTotal(items);

    const order = formatOrder({
        id: 101,
        customer: "Karteek",
        total: total
    });

    console.log(`Order #${order.id}`);
    console.log(`Customer: ${order.customer}`);
    console.log(`Total: ₹${order.total}`);
}

main();
