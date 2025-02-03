export default function unmask(str: string) {
  return str.replace(/\D/g, "");
}
