import { useState, useEffect, useCallback } from "react";
import axios from "axios";

export const useCurrency = () => {
  const [data, setData] = useState();
  const query = "&symbols=CAD,IDR,JPY,CHF,EUR,GBP,USD";
  const getData = useCallback(async () => {
    await axios
      .get(
        `${process.env.REACT_APP_URL}?apikey=${process.env.REACT_APP_YOUR_APIKEY}${query}`
      )
      .then((res) => {
        const dataRates = [];
        Object.keys(res.data.rates).map((i) => {
          // weBuy => nilainya 5% lebih besar dari Exchange Rate
          const hasilWebuy = parseFloat(res.data.rates[i]) + 0.05;
          // weSell => nilainya 5% lebih kecil dari Exchange Rate
          const hasilWeSell = parseFloat(res.data.rates[i]) - 0.05;
          // Exhange Rate => adalah nilai yang didapat dari API
          dataRates.push({
            currency: i,
            exchangerate: res.data.rates[i],
            webuy: hasilWebuy,
            weshell: hasilWeSell,
          });
          setData(dataRates);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return { data };
};
