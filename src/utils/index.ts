export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function isValidHttpUrl(url: string): boolean {
  if (typeof url !== "string" || url.trim() === "") {
    return false;
  }

  let parsedUrl: URL;

  try {
    parsedUrl = new URL(url);
  } catch (error) {
    return false;
  }

  return parsedUrl.protocol === "http:" || parsedUrl.protocol === "https:";
}
