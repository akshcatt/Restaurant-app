import { Schema, model } from 'mongoose';

const OrderSchema = new Schema({
    tableNumber: {
        type: Number,
        required: true
    },
    items: [
        {
            menuItem: {
                type: Schema.Types.ObjectId,
                ref: 'MenuItem',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }
    ],
    status: {
        type: String,
        enum: ['pending', 'preparing', 'delivered'],
        default: 'pending'
    },
    totalAmount: {
        type: Number,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

const Order = model('Order', OrderSchema);

export default Order;
