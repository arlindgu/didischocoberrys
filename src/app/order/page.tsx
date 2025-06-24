"use client";

import Form from 'next/form';

export default function OrderPage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <Form action={() => console.log("TEST")} className="flex flex-col max-w-5xl gap-4 p-4">
                <h1 className="">Place Your Order</h1>
                <p className="">Fill out the form below to place your order.</p>
                <input
                    type="number"
                    min="1"
                    placeholder="Quantity"
                    className="p-2"
                />
                {/* Add form fields here */}
                <select className="p-2 outline-2 rounded-full font-chewy text-chocolate-950" defaultValue="">
                    <option value="" disabled>
                        Select Product
                    </option>
                    <option value="chocolate">Chocolate Berry</option>
                    <option value="strawberry">Strawberry Delight</option>
                    <option value="mix">Mixed Box</option>
                </select>
                <input type="text" placeholder="Your Name" className="p-2 rounded-full font-chewy text-chocolate-950" />
                <input type="email" placeholder="Your Email" className="p-2 rounded-full font-chewy text-chocolate-950" />
                <textarea placeholder="Your Order Details" className="p-2 rounded-2xl font-chewy text-chocolate-950 outline-2 resize-none h-64"></textarea>
                <button>
                    Submit Order
                </button>
            </Form>
        </div>
    );
}