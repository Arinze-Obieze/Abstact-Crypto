import { useEffect, useState } from 'react';

export default function Rates() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/api/mongodb'); // Replace '/api/example' with your actual API route URL
            setData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    // Render the fetched data
    return (
        <div>
            {data.map(item => (
                <div key={item._id}>{item.name}</div>
            ))}
        </div>
    );
}
