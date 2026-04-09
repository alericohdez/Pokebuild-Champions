export const exportToJSON = (data) => {
  const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(data, null, 2))}`;
  const link = document.createElement("a");
  link.href = jsonString;
  link.download = "pokemon_builds.json";
  link.click();
};

export const exportToCSV = (data) => {
  if (!data || data.length === 0) return;
  const headers = Object.keys(data[0]).join(",");
  const rows = data.map(obj => {
    return Object.entries(obj)
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return `"${value.join('|')}"`;
        }
        return `"${value}"`;
      })
      .join(",");
  }).join("\n");
  const csvString = `${headers}\n${rows}`;
  const link = document.createElement("a");
  link.href = `data:text/csv;charset=utf-8,${encodeURIComponent(csvString)}`;
  link.download = "pokemon_builds.csv";
  link.click();
};

export const exportToXML = (data) => {
  let xmlString = '<?xml version="1.0" encoding="UTF-8"?><builds>';
  data.forEach(item => {
    xmlString += '<build>';
    for (let key in item) {
      if (Array.isArray(item[key])) {
        xmlString += `<${key}>`;
        item[key].forEach(val => {
          xmlString += `<move>${val}</move>`;
        });
        xmlString += `</${key}>`;
      } else {
        xmlString += `<${key}>${item[key]}</${key}>`;
      }
    }
    xmlString += '</build>';
  });
  xmlString += '</builds>';
  const link = document.createElement("a");
  link.href = `data:text/xml;charset=utf-8,${encodeURIComponent(xmlString)}`;
  link.download = "pokemon_builds.xml";
  link.click();
};