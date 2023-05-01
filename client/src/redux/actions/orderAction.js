import axios from 'axios';
import { backendUrl } from '../store';

export const orderPlant = (amount) => async (dispatch) => {
    try {
        dispatch({ type: "orderPlantRequest" });

        const { data: { key } }
            = await axios.get('http://localhost:5000/api/get-key', {
                withCredentials: true
            });

        const { data: { order } } = await axios.post(`${backendUrl}/order-plant`, {
            amount
        }, {
            withCredentials: true
        });

        const options = {
            key: key,
            amount: order.amount,
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order.id,
            callback_url: `${backendUrl}/order-verification`,
            prefill: {
                name: "Bishnudev Khutia",
                email: "khutia.bishnudev@example.com",
                contact: "9000090000"
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#3399cc"
            }
        };

        const razorpay = new window.Razorpay(options);
        razorpay.open();

        dispatch({ type: "orderPlantSuccess", payload: order });
    } catch (error) {
        dispatch({ type: "orderPlantFailed", payload: error.response.data.message });
    }
}