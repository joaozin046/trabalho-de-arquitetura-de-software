class ReporterCSV {
    constructor(data) {
      this.data = data;
    }
  
    generateReport() {
        let csv = 'Nome das cidades\n'; 
        for (let i = 0; i < this.data.length; i++) {
            csv += `${this.data[i]['Nome']}\n`;
        }

        return csv;
    }
}

export default ReporterCSV;