import moment from 'moment';
import uuidv4 from 'uuid/v4';
import db from '../db';

const Tas = {
  /**
   * Get all ctcs
   * @param {object} req
   * @param {object} res
   * @returns {object} ctc array
   */
  async getCtcs(req, res) {
    const query = 'SELECT DISTINCT ctc FROM station';
    try {
      const result = await db.query(query);
      return res.status(200).send(result.rows);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async getSystems(req, res) {
    if (!req.body.ctc) {
      return res.status(400).send({ message: 'Provide a CTC to view systems' });
    }
    const query = 'SELECT DISTINCT system FROM station WHERE ctc = $1 ORDER BY system';
    try {
      const result = await db.query(query, [req.body.ctc]);
      return res.status(200).send(result.rows);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async getStations(req, res) {
    if (!req.body.ctc || !req.body.system) {
      return res.status(400).send({ message: 'Provide a CTC to view systems' });
    }
    const query = 'SELECT code FROM station WHERE ctc = $1 AND system = $2';
    try {
      const result = await db.query(query, [req.body.ctc, req.body.system]);
      return res.status(200).send(result.rows);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async getObjects(req, res) {
    if (!req.body.ctc || !req.body.system || !req.body.station) {
      return res.status(400).send({ message: 'Incomplete information supplied' });
    }
    const query = 'SELECT * from object WHERE station = $1';
    try {
      const result = await db.query(query, [req.body.station]);
      return res.status(200).send(result.rows);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async getConfig(req, res) {
    if (!req.body.station) {
      return res.status(400).send({ message: 'Incomplete information supplied' });
    }
    const query = 'SELECT config from station WHERE code = $1';
    try {
      const result = await db.query(query, [req.body.station]);
      return res.status(200).send(result.rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async updateModel(req, res) {
    const query = `Update object set bits = jsonb_set(bits, '{indications, ${req.body.bit}}', '${req.body.value}', FALSE) WHERE id = $1`;
    const args = [
      req.body.element,
    ];
    try {
      await db.query(query, args);
      return res.status(200).send({ message: 'API has updated element' });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  async connect(req, res) {
    if (!req.body.ctc || !req.body.system || !req.body.station) {
      return res.status(400).send({ message: 'Incomplete information supplied' });
    }
    const query = 'SELECT count(*) from object WHERE station = $1';
    try {
      const result = await db.query(query, [req.body.station]);
      return res.status(200).send(result.rows[0]);
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

export default Tas;
