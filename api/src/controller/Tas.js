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
      const { rows, rowCount } = await db.query(query);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

export default Tas;
