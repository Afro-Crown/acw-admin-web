import { z } from "zod";

const currencyRegex = /^R\$ ?\d{1,3}(\.\d{3})*$/;

const currency = z.string().regex(currencyRegex, {
  message: "Insira um valor de moeda válido"
});

export default currency;
