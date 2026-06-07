import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    const [data, setData] = useState({});

    useEffect(() => {

        fetch(
            `https://v6.exchangerate-api.com/v6/4c5d9038d1a1cecaa15e6504/latest/${currency}`
        )
        .then((res) => res.json())
        .then((res) => {
            setData(res.conversion_rates);
        })
        .catch((error) => {
            console.log(error);
        });

    }, [currency]);

    console.log(data);

    return data;
}

export default useCurrencyInfo;