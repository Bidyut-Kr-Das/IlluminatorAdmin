import { useState } from "react";

const useCalcDiscount = () => {
  const [price, setPrice] = useState<number>(0.0);
  const [discountPrice, setDiscountPrice] = useState<number>(0.0);
  const [finalPrice, setFinalPrice] = useState<number>(0.0);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let value;
    isNaN(parseFloat(e.target.value))
      ? (value = 0)
      : (value = parseFloat(e.target.value));

    setPrice(value);
    setFinalPrice(parseInt(`${value - (value * discountPrice) / 100}`));
  };

  const handleDiscountChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    let value;
    isNaN(parseFloat(e.target.value))
      ? (value = 0)
      : (value = parseFloat(e.target.value));
    setDiscountPrice(value);
    setFinalPrice(parseInt(`${price - (price * value) / 100}`));
  };

  return {
    price,
    discountPrice,
    finalPrice,
    handlePriceChange,
    handleDiscountChange,
    setFinalPrice
  };
};

export default useCalcDiscount;
