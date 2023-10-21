import ReporterHTML from "./ReporterHTML.js";
import ReporterTXT from "./ReporterTXT.js";
import ReporterCSV from "./ReporterCSV.js";
import ReporterXML from "./ReporterXML.js";

export default class ReporterFactory {

    constructor(format, data) {
      this.format = format;
      this.data = data;
    } 
    
    createReporter() {
      switch (this.format) {
        case 'html':
          return new ReporterHTML(this.data);
        case 'txt':
          return new ReporterTXT(this.data);
        case 'csv':
          return new ReporterCSV(this.data);
        case 'xml':
          return new ReporterXML(this.data);
        default:
          throw new Error('Unsupported format');
      }
    }
  }