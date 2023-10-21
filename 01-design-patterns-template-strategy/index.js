import ReporterFactory from './src/ReporterFactory.js';
import LoaderProxy from './src/LoaderProxy.js';

const [cmd, script, param1] = process.argv;
const filename = './data/cidades-2.json';

const loaderProxy = new LoaderProxy(filename);
const loadedData = loaderProxy.loadData();

const reporterFactory = new ReporterFactory(param1, loadedData);
const reporter = reporterFactory.createReporter();
const report = reporter.generateReport();

console.log(report);