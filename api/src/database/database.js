import Sequelize from 'sequelize';

export const sequelize = new Sequelize(
    'bankaccount', 
    'postgres', 
    'russo09',
    {
    host: 'localhost',
    dialect: 'postgres'
    }
);