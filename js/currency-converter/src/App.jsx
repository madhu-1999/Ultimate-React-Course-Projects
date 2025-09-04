// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`

import { useEffect, useState } from "react";

export default function App() {
  const [amount, setAmount] = useState(1);
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchConvertedAmount() {
      setIsLoading(true);

      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await res.json();
      setConvertedAmount(Number(data.rates[toCurrency]));
      console.log(data);
      setIsLoading(false);
    }

    if (fromCurrency === toCurrency || amount === 0) {
      setConvertedAmount(amount);
      return;
    }
    fetchConvertedAmount();
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => setAmount(Number(e.target.value))}
        value={amount}
        disabled={isLoading}
      />
      <select
        value={fromCurrency}
        onChange={(e) => setFromCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCurrency}
        onChange={(e) => setToCurrency(e.target.value)}
        disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>{isLoading ? "Calculating" : `${convertedAmount} ${toCurrency}`}</p>
    </div>
  );
}
