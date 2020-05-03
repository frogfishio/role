import { Engine } from '@frogfish/kona';

let logger;

export default class RolesExportHandler {
  constructor(private _engine: Engine, user) {
    logger = _engine.log.log('service:roles:export');
  }

  async get(req, res, next) {
    try {
      const roles = await this._engine.role.find(
        req.query,
        req.path.split('/')[3],
        req.path.split('/')[4]
      );

      const buff = new Buffer(JSON.stringify(roles));

      res.status(200);
      res.set('Content-Type', 'application/octet-stream');
      res.set('Content-Disposition', 'attachment;filename="My Text File.txt"');
      res.write(buff);

      res.end();
    } catch (err) {
      err.send(res);
    }
  }
}
