import Order, { find, findById } from '../models/Order.js';

export async function createOrder(req, res) {
    const { tableNumber, items, totalAmount } = req.body;

    try {
        const newOrder = new Order({
            tableNumber,
            items,
            totalAmount,
            user: req.user.id
        });

        const order = await newOrder.save();

        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

export async function getOrders(req, res) {
    try {
        const orders = await find().populate('items.menuItem').populate('user', ['name', 'email']);

        res.json(orders);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

export async function updateOrderStatus(req, res) {
    const { status } = req.body;

    try {
        let order = await findById(req.params.id);

        if (!order) {
            return res.status(404).json({ msg: 'Order not found' });
        }

        order.status = status;

        await order.save();

        res.json(order);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}