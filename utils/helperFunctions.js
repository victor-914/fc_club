export function filterByCategory(data, catergory) {
  let filteredData = [];
  data.forEach((ele) => {
    if (ele.attributes.product_catergory === catergory) {
      filteredData.push(ele);
    }
  });
  return filteredData;
}

export function addCommasToNumber(number) {
  if (number === null || number === undefined) {
    return null;
  } else {
    const numStr = String(number);
    const parts = numStr.split(".");
    if (parts[0]) {
      parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return parts.join(".");
  }
}
