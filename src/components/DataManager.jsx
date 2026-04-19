import React from 'react';
import { getAllData, saveMultipleData } from '../services/firebaseService';
import { exportToJSON, exportToCSV, exportToXML, exportToTSV, exportToSheetJS } from '../utils/exportUtils';
import * as XLSX from 'xlsx';
import './DataManager.css';

export const DataManager = () => {

  const handleExportJSON = async () => {
    const data = await getAllData();
    exportToJSON(data);
  };

  const handleExportCSV = async () => {
    const data = await getAllData();
    exportToCSV(data);
  };

  const handleExportXML = async () => {
    const data = await getAllData();
    exportToXML(data);
  };

  const handleExportTSV = async () => {
    const data = await getAllData();
    exportToTSV(data);
  };

  const handleExportXLSX = async () => {
    const data = await getAllData();
    exportToSheetJS(data, 'xlsx');
  };

  const handleExportODS = async () => {
    const data = await getAllData();
    exportToSheetJS(data, 'ods');
  };

  const handleExportXLS = async () => {
    const data = await getAllData();
    exportToSheetJS(data, 'xls');
  };

  const handleExportHTML = async () => {
    const data = await getAllData();
    exportToSheetJS(data, 'html');
  };

  const handleExportTXT = async () => {
    const data = await getAllData();
    exportToSheetJS(data, 'txt');
  };

  const processImport = async (dataArray) => {
    await saveMultipleData(dataArray);
    alert("Datos importados con éxito a Firebase");
  };

  const handleImportJSON = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      const data = JSON.parse(event.target.result);
      await processImport(data);
    };
    reader.readAsText(file);
  };

  const handleImportCSV = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      const text = event.target.result;
      const lines = text.split('\n').filter(line => line.trim() !== '');
      const headers = lines[0].split(',');
      const data = lines.slice(1).map(line => {
        const values = line.split('","').map(v => v.replace(/^"|"$/g, ''));
        return headers.reduce((obj, header, index) => {
          const key = header.trim();
          if (key === 'moves') {
            obj[key] = values[index] ? values[index].split('|') : [];
          } else {
            obj[key] = values[index];
          }
          return obj;
        }, {});
      });
      await processImport(data);
    };
    reader.readAsText(file);
  };

  const handleImportTSV = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      const text = event.target.result;
      const lines = text.split('\n').filter(line => line.trim() !== '');
      const headers = lines[0].split('\t');
      const data = lines.slice(1).map(line => {
        const values = line.split('\t').map(v => v.replace(/^"|"$/g, ''));
        return headers.reduce((obj, header, index) => {
          const key = header.trim();
          if (key === 'moves') {
            obj[key] = values[index] ? values[index].split('|') : [];
          } else {
            obj[key] = values[index];
          }
          return obj;
        }, {});
      });
      await processImport(data);
    };
    reader.readAsText(file);
  };

  const handleImportXML = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = async (event) => {
      const text = event.target.result;
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(text, "text/xml");
      const items = Array.from(xmlDoc.getElementsByTagName("build"));
      const data = items.map(item => {
        const obj = {};
        Array.from(item.children).forEach(child => {
          if (child.tagName === 'moves') {
            obj[child.tagName] = Array.from(child.children).map(c => c.textContent);
          } else {
            obj[child.tagName] = child.textContent;
          }
        });
        return obj;
      });
      await processImport(data);
    };
    reader.readAsText(file);
  };

  const handleImportSheetJS = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = async (event) => {
      const data = new Uint8Array(event.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet);

      const formattedData = json.map(item => {
        if (item.moves) {
          item.moves = item.moves.split('|');
        }
        return item;
      });

      await processImport(formattedData);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="data-manager-container">
      <section>
        <h2>Exportar Builds</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
          <button onClick={handleExportJSON}>Descargar JSON</button>
          <button onClick={handleExportCSV}>Descargar CSV</button>
          <button onClick={handleExportXML}>Descargar XML</button>
          <button onClick={handleExportTSV}>Descargar TSV</button>
          <button onClick={handleExportXLSX}>Descargar XLSX</button>
          <button onClick={handleExportODS}>Descargar ODS</button>
          <button onClick={handleExportXLS}>Descargar XLS</button>
          <button onClick={handleExportHTML}>Descargar HTML</button>
          <button onClick={handleExportTXT}>Descargar TXT</button>
        </div>
      </section>

      <section>
        <h2>Importar Builds</h2>
        <div>
          <label>Importar JSON: </label>
          <input type="file" accept=".json" onChange={handleImportJSON} />
        </div>
        <div>
          <label>Importar CSV: </label>
          <input type="file" accept=".csv" onChange={handleImportCSV} />
        </div>
        <div>
          <label>Importar TSV: </label>
          <input type="file" accept=".tsv" onChange={handleImportTSV} />
        </div>
        <div>
          <label>Importar XML: </label>
          <input type="file" accept=".xml" onChange={handleImportXML} />
        </div>
        <div>
          <label>Importar Excel/Web (XLSX, ODS, XLS, HTML, TXT): </label>
          <input type="file" accept=".xlsx,.ods,.xls,.html,.txt" onChange={handleImportSheetJS} />
        </div>
      </section>
    </div>
  );
};