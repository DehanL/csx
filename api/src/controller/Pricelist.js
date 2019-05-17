import db from '../db';

const Pricelist = {
  /**
   * Get Pricelist
   * @param {object} req
   * @param {object} res
   * @returns {object} pricelist array
   */
  async getAll(req, res) {
    const findAllQuery = 'SELECT * FROM pricelist';
    try {
      const { rows, rowCount } = await db.query(findAllQuery);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
  /**
   * Get Some
   * @param {object} req
   * @param {object} res
   * @returns {object} pricelist array
   */
  async getSome(req, res) {
    const findSomeQuery = 'SELECT * FROM pricelist WHERE price < 10';
    try {
      const { rows, rowCount } = await db.query(findSomeQuery, [req.params.amount]);
      return res.status(200).send({ rows, rowCount });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

export default Pricelist;
