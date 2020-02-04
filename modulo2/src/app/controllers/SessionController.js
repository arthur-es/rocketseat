import jsonwebtoken from 'jsonwebtoken';
import * as Yup from 'yup';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
    const schema = Yup.object.shape({
      email: Yup.string()
        .email()
        .required(),
      password: Yup.string().required(),
    });
    if (!(await schema.isValid(req.body))) {
      return res
        .status(401)
        .json({ error: 'validation failed at session store' });
    }
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(404).json({ error: 'User doesnt exits.' });
    }
    if (!(await user.checkPassword(password))) {
      return res.json({ error: 'Password is wrong!' });
    }
    const { id, name } = user;
    return res.status(200).json({
      user: { id, name, email },
      token: jsonwebtoken.sign(
        {
          id,
        },
        authConfig.secret,
        {
          expiresIn: authConfig.expiresIn,
        }
      ),
    });
  }
}

export default new SessionController();
