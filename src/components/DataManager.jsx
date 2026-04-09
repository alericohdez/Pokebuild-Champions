import React from 'react';
import { getAllData, saveMultipleData } from '../services/firebaseService';
import { exportToJSON, exportToCSV, exportToXML } from '../utils/exportUtils';
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

  return (
    <div className="data-manager-container">
      <section>
        <h2>Exportar Builds</h2>
        <button onClick={handleExportJSON}>Descargar JSON</button>
        <button onClick={handleExportCSV}>Descargar CSV</button>
        <button onClick={handleExportXML}>Descargar XML</button>
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
          <label>Importar XML: </label>
          <input type="file" accept=".xml" onChange={handleImportXML} />
        </div>
      </section>
    </div>
  );
};