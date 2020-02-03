import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // NÃO EXISTE NO BD
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
      },
      {
        sequelize,
      }
    );
    this.addHook('beforeSave', async user => {
      if (user.password) {
        console.log('Encriptando a senha...');

        user.password_hash = await bcrypt.hash(user.password, 8);
      } else {
        console.log('Não encriptou');
      }
    });

    return this;
  }
}

export default User;
