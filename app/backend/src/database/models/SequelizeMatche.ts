import {
  CreationOptional,
  DataTypes,
  InferAttributes,
  InferCreationAttributes,
  Model,
} from 'sequelize';

import db from '.';
import SequelizeTeam from './SequelizeTeam';

export default class SequelizeMatche extends Model<
InferAttributes<SequelizeMatche>,
InferCreationAttributes<SequelizeMatche>
> {
  declare id: CreationOptional<number>;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

SequelizeMatche.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    homeTeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'teams', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    homeTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    awayTeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'teams', key: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    },
    awayTeamGoals: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    inProgress: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize: db,
    tableName: 'matches',
    modelName: 'Matche',
    underscored: true,
    timestamps: false,
  },
);

// (Matches) estão relacionadas a apenas uma equipe (Team).
// (Team) está relacionadas a muitas partidas (Matches)

SequelizeMatche.belongsTo(SequelizeTeam, {
  as: 'matchesHome',
  foreignKey: 'homeTeamId',
});

SequelizeTeam.hasMany(SequelizeMatche, {
  as: 'homeTeam',
  foreignKey: 'homeTeamId',
});

//

SequelizeMatche.belongsTo(SequelizeTeam, {
  as: 'matchesAway',
  foreignKey: 'awayTeamId',
});

SequelizeTeam.hasMany(SequelizeMatche, {
  as: 'awayTeam',
  foreignKey: 'awayTeamId',
});
