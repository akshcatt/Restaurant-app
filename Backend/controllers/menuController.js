import MenuItem from "../models/MenuItem.js";

export async function createMenuItem(req, res) {
    const { name, description, price, category } = req.body;

    try {
        const newItem = new MenuItem({
            name,
            description,
            price,
            category
        });

        const item = await newItem.save();

        res.json(item);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}

export async function getMenuItems(req, res) {
    try {
        const items = await find();

        res.json(items);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
}