class HTMLReporter {
    constructor(data) {
      this.data = data;
    }
  
    generateReport() {
        let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
        xml += `<report>\n`;
        xml += `  <title>Relatório de Nomes de Cidades</title>\n`;
        xml += `  <cities>\n`;
      
        for (let i = 0; i < this.data.length; i++) {
          xml += `    <city>${this.data[i]['Nome']}</city>\n`;
        }
      
        xml += `  </cities>\n`;
        xml += `</report>\n`;
      
        return xml;
    }
  }

export default HTMLReporter;