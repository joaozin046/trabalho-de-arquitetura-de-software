class ReporterHTML {
    constructor(data) {
      this.data = data;
    }
  
    generateReport() {
      let html = `
      <!DOCTYPE HTML>
      <html>
        <head>
          <meta http-equiv="content-type" content="text/html; charset=utf-8" />
          <title>Relatório de Nomes de Cidades</title>
        </head>
        <body>
          <h1>Relatório de Nomes de Cidades</h1>
          <ul>
      `;      
        for (let i = 0; i < this.data.length; i++) {
          html += `     <li>${this.data[i]['Nome']}</li>\n`;
        }     
        html += `
          </ul>
        </body>
      </html>`;
        return html
    }
  }

export default ReporterHTML;