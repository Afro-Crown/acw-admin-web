export default function unmaskCurrency(str: string) {
  return str.replace(/[^\d,]/g, "");
}

// same of unmask but permit the comma
