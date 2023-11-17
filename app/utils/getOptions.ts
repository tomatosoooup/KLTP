export function getOptions({ option }: { option: string }) {
  if (option === "first") {
    return [
      { type: "USDT", name: "TRC20", cur: "USDT" },
      { type: "USDT", name: "ERC20", cur: "USDT" },
      { type: "USDT", name: "BEP20", cur: "USDT" },
      { type: "USDC", name: "ERC20", cur: "USDC" },
      { type: "USDC", name: "BEP20", cur: "USDC" },
      { type: "BTC", name: "Bitcoin", cur: "BTC" },
      { type: "ETH", name: "ERC20", cur: "ETH" },
    ];
  }
  if (option === "second") {
    return [
      { type: "Cash", name: "EUR", cur: "EUR" },
      { type: "Cash", name: "USD", cur: "USDT" },
      { type: "Cash", name: "PLN", cur: "PLN" },
      { type: "BLIK", name: "PLN", cur: "PLN" },
      { type: "SEPA", name: "EUR", cur: "EUR" },
      { type: "SWIFT", name: "USD", cur: "USDT" },
      { type: "Bank Transfer", name: "PLN", cur: "PLN" },
      { type: "Card", name: "UAH", cur: "UAH" },
      { type: "ZEN", name: "EUR", cur: "EUR" },
      { type: "ZEN", name: "PLN", cur: "PLN" },
      { type: "Revolut", name: "EUR", cur: "EUR" },
      { type: "WISE", name: "EUR", cur: "EUR" },
      { type: "N26", name: "EUR", cur: "EUR" },
      { type: "Payoneer", name: "USD", cur: "USDT" },
      { type: "ADV Cash", name: "USD", cur: "USDT" },
      { type: "Wirex", name: "EUR", cur: "EUR" },
      { type: "Paysera", name: "EUR", cur: "EUR" },
      { type: "BCC", name: "EUR", cur: "EUR" },
    ];
  }
}
