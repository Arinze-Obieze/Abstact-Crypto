export default async function handler(req, res) {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Acess-Control-Request-Headers": "*",
            "api-key": process.env.MONGODB_DATA_API_KEY,
        },
    }
    const fetchBody = {
        dataSourxe: process.env.MONGODB_DATA_SOURCE,
        database: 'Achi_Crypto_Price',
        collection: 'crypto_rates',
    };
    const baseUrl = `${process.env.MONGODB_DATA_URL}/actions`

    try {
        switch (req.method) {
            case "GET":
                const readData = await fetch(`${baseUrl}/find`, {
                    ...fetchOptions,
                    name: JSON.stringify({
                        ...fetchOptions,

                    })
                })
                const readDataJson = await readData.json()
                res.status(200).json(readDataJson.documents);
                break;
            default:
                res.status(405).end();
                break;
        }
    } catch (err) { console.log(err) }
}