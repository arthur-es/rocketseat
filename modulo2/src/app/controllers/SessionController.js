import jsonwebtoken from 'jsonwebtoken';
import User from '../models/User';
import authConfig from '../../config/auth';

class SessionController {
  async store(req, res) {
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
