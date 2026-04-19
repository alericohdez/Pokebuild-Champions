import * as XLSX from 'xlsx';

const formatForSheet = (data) => {
  return data.map(item => {
    const formatted = { ...item };
    for (let key in formatted) {
      if (Array.isArray(formatted[key])) {
        formatted[key] = formatted[key].join('|');
      }
    }
    return formatted;
  });
};

const downloadFile = (blob, fileName) => {
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = fileName;
  link.click();
  URL.revokeObjectURL(link.href);
};

export const exportToJSON = (data) => {
  if (!data || data.length === 0) return;
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  downloadFile(blob, 'pokemon_builds.json');
};

export const exportToCSV = (data) => {
  if (!data || data.length === 0) return;
  const headers = Object.keys(data[0]).join(",");
  const rows = data.map(obj => {
    return Object.values(obj).map(val => Array.isArray(val) ? `"${val.join('|')}"` : `"${val}"`).join(",");
  }).join("\n");
  const blob = new Blob([`${headers}\n${rows}`], { type: 'text/csv' });
  downloadFile(blob, 'pokemon_builds.csv');
};

export const exportToTSV = (data) => {
  if (!data || data.length === 0) return;
  const headers = Object.keys(data[0]).join("\t");
  const rows = data.map(obj => {
    return Object.values(obj).map(val => Array.isArray(val) ? `${val.join('|')}` : `${val}`).join("\t");
  }).join("\n");
  const blob = new Blob([`${headers}\n${rows}`], { type: 'text/tab-separated-values' });
  downloadFile(blob, 'pokemon_builds.tsv');
};

export const exportToXML = (data) => {
  if (!data || data.length === 0) return;
  let xml = '<?xml version="1.0" encoding="UTF-8"?><builds>';
  data.forEach(item => {
    xml += '<build>';
    for (let key in item) {
      if (Array.isArray(item[key])) {
        xml += `<${key}>${item[key].map(m => `<move>${m}</move>`).join('')}</${key}>`;
      } else {
        xml += `<${key}>${item[key]}</${key}>`;
      }
    }
    xml += '</build>';
  });
  xml += '</builds>';
  const blob = new Blob([xml], { type: 'text/xml' });
  downloadFile(blob, 'pokemon_builds.xml');
};

export const exportToSheetJS = (data, extension) => {
  if (!data || data.length === 0) return;
  const cleanData = formatForSheet(data);
  const ws = XLSX.utils.json_to_sheet(cleanData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Builds");
  XLSX.writeFile(wb, `pokemon_builds.${extension}`);
};