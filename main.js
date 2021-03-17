const axios = require('axios');
process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = 0;

const getData = async () => {
    const data = await axios.get('https://mobile-api.coolblue-production.eu/v14/products?id=865867', {
        headers: {
            'Host': 'mobile-api.coolblue-production.eu',
            'accept': 'application/json; charset=UTF-8',
            'content-type': 'application/json',
            'x-coolblue-sourceidentifier': 'D4CD6FF8-490F-4B3D-BFB1-2C583A254CEF',
            'user-agent': 'coolblue-shopping-app/2.1.0 (iOS: 14.5, model: iPhone)',
            'accept-language': 'nl-BE',
        }
    })

    switch (data.data[0].availabilityState) {
        case 2:
            console.log("Status: product: " + data.data[0].productName + " available (availability: 2)");
        case 3:
            console.log("Status: product: " + data.data[0].productName + " unavailable (availability: 3)");
            break;
        default:
            console.log("Availability unknown");
    }
    return data;
};

const run = async () => {
    await getData();
}

run();