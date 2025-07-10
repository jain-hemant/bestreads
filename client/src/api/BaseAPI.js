import axios from "axios";
async function FetchAPI({ endpoint, method = "GET", payload = {}, headers = {} }) {
    try {
        const baseURL = import.meta.env.VITE_API_URL;

        const axiosInstance = axios.create({
            baseURL,
            timeout: 10000,
            headers: {
                "Content-Type": "application/json",
                ...headers,
            },
        });

        const config = {
            url: endpoint,
            method,
            withCredentials: true,
        };

        // Attach data or params based on method
        if (["GET", "DELETE"].includes(method.toUpperCase())) {
            config.params = payload;
        } else {
            config.data = payload;
        }

        const response = await axiosInstance(config);
        return response.data;
    } catch (error) {
        console.error("API Error:", error?.response?.data || error.message);
        throw error;
    }
}

export default FetchAPI;
