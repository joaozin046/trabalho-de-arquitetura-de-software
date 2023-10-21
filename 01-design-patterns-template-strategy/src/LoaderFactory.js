import fs from 'node:fs';

export default class LoaderFactory {
   
  _read (filename) {
    this._cities_json = fs.readFileSync(filename);
  }

  _parseJSON () {
    this._cities = JSON.parse(this._cities_json);
  }

  createLoader(filename) {
    this._read(filename);
    this._parseJSON();
    return this._cities;
  }
}

