import LoaderFactory from './LoaderFactory.js';

export default class LoaderProxy {
  constructor(filename) {
    this.filename = filename;
    this.loaderFactory = null;
  }

  loadData() {
    if (!this.loaderFactory) {
      console.log('carregando....');
      this.loaderFactory = new LoaderFactory(this.filename);
    } else {
      console.log('dados pego do cache');
    }
    return this.loaderFactory.createLoader(this.filename);
  }
}