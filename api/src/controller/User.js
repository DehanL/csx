import moment from 'moment';
import uuidv4 from 'uuid/v4';
import db from '../db';
import Helper from './Helper';

const User = {
  /**
   * Create A User
   * @param {object} req
   * @param {object} res
   * @returns {object} reflection object
   */
  async register(req, res) {
    if (!req.body.id || !req.body.password || !req.body.firstname || !req.body.lastname || !req.body.role) {
      console.log(req.body);
      return res.status(400).send({ message: 'Create method- Some values are missing' });
    }

    const hashPassword = Helper.hashPassword(req.body.password);

    const createQuery = `INSERT INTO
      public.account(id, firstname, lastname, role, password)
      VALUES($1, $2, $3, $4, $5)
      returning *`;
    const values = [
      // uuidv4(),
      req.body.id,
      req.body.firstname,
      req.body.lastname,
      req.body.role,
      hashPassword,
      // moment(new Date()),
      // moment(new Date())
    ];

    try {
      const { rows } = await db.query(createQuery, values);
      const token = Helper.generateToken(rows[0].id);
      return res.status(201).send({ token });
    } catch (error) {
      if (error.routine === '_bt_check_unique') {
        return res.status(400).send({ message: 'User with that ID already exist' });
      }
      return res.status(400).send(error);
    }
  },
  /**
   * Login
   * @param {object} req
   * @param {object} res
   * @returns {object} user object
   */
  async login(req, res) {
    if (!req.body.id || !req.body.password) {
      console.log(req.body);
      return res.status(400).send({ message: 'Some values are missing' });
    }
    const text = 'SELECT * FROM public.account WHERE id = $1';
    try {
      const { rows } = await db.query(text, [req.body.id]);
      if (!rows[0]) {
        return res.status(400).send({ message: 'The credentials you provided is incorrect' });
      }
      if (!Helper.comparePassword(rows[0].password, req.body.password)) {
        return res.status(400).send({ message: 'The credentials you provided is incorrect' });
      }
      const token = Helper.generateToken(rows[0].id);
      const id = rows[0].id;
      return res.status(200).send({ token, id });
    } catch (error) {
      return res.status(400).send(error);
    }
  },
};

export default User;
