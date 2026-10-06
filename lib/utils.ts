export const cn = (...v: (string | false | null | undefined)[]) =>
  v.filter(Boolean).join(" ");
export const money = (n: number) => `Rs. ${n.toLocaleString("en-PK")}`;
export const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
