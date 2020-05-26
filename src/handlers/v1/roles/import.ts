import { Engine } from '@frogfish/kona';

let logger;

export default class RolesHandler {
  constructor(private _engine: Engine, user) {
    logger = _engine.log.log('service:roles:import');
  }

  async post(req, res, next) {
    try {
      return res.json(await this._engine.role.find(req.query, req.path.split('/')[3], req.path.split('/')[4]));
    } catch (err) {
      require('@frogfish/kona/util').error(err, res, logger, 'svc_roles_import_post');
    }
  }
}
