import { createContext, useContext, useState, useEffect } from 'react';

/* 
Sử dụng Context API của React để quản lý trạng thái của giỏ hàng. 
Context này sẽ được sử dụng để chia sẻ dữ liệu và hành động giữa các component con trong ứng dụng.
Thông qua việc này, Context API cho phép bạn quản lý và chia sẻ dữ liệu giữa các component con một cách hiệu quả, 
giúp giảm thiểu sự phụ thuộc giữa các component và làm cho việc quản lý trạng thái của ứng dụng dễ dàng hơn.
*/

// Tạo một context mới
const ShoppingContext = createContext();
export default ShoppingContext;

// Hook custom để sử dụng Context trong các component. Hook này sẽ trả về giá trị của Context hiện tại.
export const useShoppingContext = () => useContext(ShoppingContext);

// Component Provider cung cấp dữ liệu cho các component con
export const ShoppingContextProvider = ({ children }) => {
    // useState() và useEffect(): Sử dụng để quản lý trạng thái (state) của danh sách sản phẩm trong giỏ hàng và lưu trữ dữ liệu vào localStorage.
    // State để lưu trữ danh sách sản phẩm trong giỏ hàng, ban đầu lấy từ localStorage
    const [cartItems, setCartItems] = useState(() => {
        const jsonCartData = localStorage.getItem('shopping_cart');
        return jsonCartData ? JSON.parse(jsonCartData) : [];
    });

    // useEffect để lưu danh sách sản phẩm vào localStorage mỗi khi thay đổi
    useEffect(() => {
        localStorage.setItem('shopping_cart', JSON.stringify(cartItems));
    }, [cartItems]);

    // Các hàm xử lý thêm, giảm số lượng và xóa sản phẩm trong giỏ hàng, được truyền vào giá trị của Provider để các component con có thể sử dụng.
    // Tính toán số lượng sản phẩm trong giỏ hàng
    const cartQty = cartItems.reduce((qty, item) => qty + item.qty, 0);

    // Tính toán tổng giá tiền của các sản phẩm trong giỏ hàng
    const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

    // Hàm tính toán tăng số lượng sản phẩm trong giỏ hàng
    const increaseQty = (_id) => {
        const currentCartItem = cartItems.find(item => item._id === _id);
        if (currentCartItem) {
            const newItems = cartItems.map(item => {
                if (item._id === _id) {
                    return { ...item, qty: item.qty + 1 };
                } else {
                    return item;
                }
            });
            setCartItems(newItems);
        }
    };

    // Hàm giảm số lượng sản phẩm trong giỏ hàng
    const decreaseQty = (_id) => {
        const currentCartItem = cartItems.find(item => item._id === _id);
        if (currentCartItem) {
            if (currentCartItem.qty === 1) {
                removeCartItem(_id);
            } else {
                const newItems = cartItems.map(item => {
                    if (item._id === _id) {
                        return { ...item, qty: item.qty - 1 };
                    } else {
                        return item;
                    }
                });
                setCartItems(newItems);
            }
        }
    };
    // Hàm thêm sản phẩm vào giỏ hàng
    const addCartItem = (product) => {
        const currentCartItem = cartItems.find(item => item._id === product._id);
        if (currentCartItem) {
            const newItems = cartItems.map(item => {
                if (item._id === product._id) {
                    return { ...item, qty: item.qty + 1 };
                } else {
                    return item;
                }
            });
            setCartItems(newItems);
        } else {
            const newItem = { ...product, qty: 1 };
            setCartItems([...cartItems, newItem]);
        }
    };

    // Hàm xóa sản phẩm khỏi giỏ hàng
    const removeCartItem = (_id) => {
        const newItems = cartItems.filter(item => item._id !== _id);
        setCartItems(newItems);
    };

    // Hàm xóa toàn bộ sản phẩm trong giỏ hàng
    const clearCart = () => {
        setCartItems([]);
    };

    // Trả về Provider của ShoppingContext với các giá trị và hàm xử lý
    // Component Provider của Context, cung cấp các giá trị và hàm xử lý cho các component con bên trong
    return (
        <ShoppingContext.Provider value={{ cartItems, cartQty, totalPrice, increaseQty, decreaseQty, addCartItem, removeCartItem, clearCart }}>
            {children}
        </ShoppingContext.Provider>
    );
};
