import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({
    type: DataType.UUID,
    allowNull: false,
    primaryKey: true,
    defaultValue: DataType.UUIDV4,
  })
  id: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  username: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  email: string;

  @Column({
    type: DataType.ENUM('male', 'female'),
    allowNull: false,
  })
  gender: 'male' | 'female';

  @Column({
    type: DataType.ENUM('admin', 'user'),
    allowNull: false,
  })
  role: 'admin' | 'user';

  @Column({
    type: DataType.INTEGER,
  })
  age: number;
}
