export function convertAmountToBRL(amount: number): string {
  return amount.toLocaleString("pt-br", { minimumFractionDigits: 2 });
}
