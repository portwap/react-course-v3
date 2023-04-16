export const getTotals = (cart) => {
  let totalAmount = 0;
  let totalCost = 0;
  for (let { amount, price } of cart.values()) {
    totalAmount = amount + totalAmount;
    totalCost = (amount * price) + totalCost;
  }
  return { totalAmount, totalCost };
};
