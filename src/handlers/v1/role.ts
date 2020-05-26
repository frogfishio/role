import { Engine } from '@frogfish/kona';

let logger;

export default class RoleHandler {
  constructor(private _engine: Engine, user) {
    logger = _engine.log.log('service:role');
  }

  async get(req, res, next) {
    try {
      return res.json(await this._engine.role.get(req.path.split('/')[3]));
    } catch (err) {
      require('@frogfish/kona/util').error(err, res, logger, 'svc_role_get');
    }
  }

  async post(req, res, next) {
    try {
      return res.json(await this._engine.role.create(req.body));
    } catch (err) {
      require('@frogfish/kona/util').error(err, res, logger, 'svc_role_post');
    }
  }

  async delete(req, res, next) {
    try {
      return res.json(await this._engine.role.remove(req.path.split('/')[3]));
    } catch (err) {
      require('@frogfish/kona/util').error(err, res, logger, 'svc_role_del');
    }
  }

  async patch(req, res, next) {
    try {
      return res.json(await this._engine.role.update(req.path.split('/')[3], req.body));
    } catch (err) {
      require('@frogfish/kona/util').error(err, res, logger, 'svc_role_patch');
    }
  }
}
