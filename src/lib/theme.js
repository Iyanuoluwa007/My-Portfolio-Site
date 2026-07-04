// Resolves a theme colour from the CSS variables declared in globals.css,
// so visual effects always follow the site palette instead of hardcoding.
export function getThemeRgb(varName, fallbackHex) {
  let hex = fallbackHex;
  if (typeof window !== "undefined") {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue(varName)
      .trim();
    if (value) hex = value;
  }
  let digits = hex.replace("#", "");
  if (digits.length === 3) {
    digits = digits.split("").map((c) => c + c).join("");
  }
  const int = parseInt(digits, 16);
  if (Number.isNaN(int)) return { r: 99, g: 102, b: 241 };
  return { r: (int >> 16) & 255, g: (int >> 8) & 255, b: int & 255 };
}
