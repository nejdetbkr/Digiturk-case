const convertSlug = (name: string): string => {
  return name
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/:/g, "")
    .replace(/ç/g, "c")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/ö/g, "o")
    .replace(/ü/g, "u")
    .replace(/ğ/g, "g")
    .replace(/\?/g, "");
};

export default convertSlug;
