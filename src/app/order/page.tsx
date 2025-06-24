"use client";

import Form from 'next/form';

export default function OrderPage() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen">
            <Form action={() => console.log("TEST")} className="flex flex-col max-w-5xl gap-4 p-4">
                <h1 className="text-2xl font-bold mb-4">Place Your Order</h1>
                <p className="text-lg mb-4">Fill out the form below to place your order.</p>
                <input
                    type="number"
                    min="1"
                    placeholder="Quantity"
                    className="p-2 border rounded mb-4"
                />
                {/* Add form fields here */}
                <select className="p-2 border rounded mb-4" defaultValue="">
                    <option value="" disabled>
                        Select Product
                    </option>
                    <option value="chocolate">Chocolate Berry</option>
                    <option value="strawberry">Strawberry Delight</option>
                    <option value="mix">Mixed Box</option>
                </select>
                <input type="text" placeholder="Your Name" className="p-2 border rounded mb-4" />
                <input type="email" placeholder="Your Email" className="p-2 border rounded mb-4" />
                <textarea placeholder="Your Order Details" className="p-2 border rounded mb-4" rows="4"></textarea>
                <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                    Submit Order
                </button>
            </Form>
        </div>
    );
}