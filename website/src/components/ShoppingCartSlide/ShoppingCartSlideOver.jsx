import React, { useState } from "react";

const ShoppingCartSlideOver = ({ onClose }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Strawberry Cake",
      description: "Extra cream and topping",
      quantity: 2,
      price: 20000,
      image: "https://via.placeholder.com/80",
    },
    {
      id: 2,
      name: "Strawberry Cake",
      description: "Extra cream and topping",
      quantity: 1,
      price: 20000,
      image: "https://via.placeholder.com/80",
    },
    // ... thêm các sản phẩm khác
  ]);

  const [isClosing, setIsClosing] = useState(false);

  const handleDelete = (id) => {
    const updatedItems = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedItems);
  };

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
      setIsClosing(false); // Reset trạng thái đóng
    }, 300); // Thời gian phù hợp với duration của transition
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div
      className={`absolute right-0 top-0 w-full max-w-md bg-white shadow-xl transition-transform transform duration-300 ${
        isClosing ? "translate-x-full" : "translate-x-0"
      }`}
    >
      <div className="px-4 py-5 border-b border-gray-200 flex items-center justify-between">
        {/* Nút Quay lại */}
        <button onClick={handleClose} className="text-gray-600 hover:text-gray-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <h2 className="text-lg font-medium">Cart</h2>
        <span>{cartItems.length} Items</span>
      </div>

      {/* Nội dung của giỏ hàng */}
      <div className="p-4 space-y-4 overflow-y-auto" style={{ maxHeight: "60vh" }}>
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center bg-white rounded-lg shadow-md p-3 space-x-4"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-16 w-16 object-cover rounded-md"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
              <p className="font-semibold">
                {item.quantity} × {item.price.toLocaleString("vi-VN")}đ
              </p>
            </div>
            <button onClick={() => handleDelete(item.id)} className="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6" />
                <path d="M19 6l-2 14H7L5 6m5-4h4a2 2 0 0 1 2 2H8a2 2 0 0 1 2-2z" />
                <line x1="10" y1="11" x2="10" y2="17" />
                <line x1="14" y1="11" x2="14" y2="17" />
              </svg>
            </button>
          </div>
        ))}
      </div>

      {/* Footer của giỏ hàng */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <label className="text-sm">Offers</label>
          <input type="text" placeholder="Add code" className="border rounded-md p-1" />
        </div>

        <div className="border p-4 rounded-lg space-y-2">
          <div className="flex justify-between">
            <span>Order</span>
            <span>{calculateTotal().toLocaleString("vi-VN")}đ</span>
          </div>
          <div className="flex justify-between">
            <span>Offers</span>
            <span>0 đ</span>
          </div>
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>{calculateTotal().toLocaleString("vi-VN")}đ</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartSlideOver;
