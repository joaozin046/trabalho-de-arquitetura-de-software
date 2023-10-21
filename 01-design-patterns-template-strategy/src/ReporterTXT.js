class ReporterTXT {
    constructor(data) {
      this.data = data;
    }
  
    generateReport() {
    let txt = `Relatório de Nomes de Cidades
    =============================\n`;
      
      for (let i = 0; i < this.data.length; i++) {
        txt += `- ${this.data[i]['Nome']}\n`;
      }

    return txt;
    }
  }

export default ReporterTXT;