import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Department = db.define('Department', {

    name: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    enabled: {
        type: DataTypes.BOOLEAN
    },
}, {
    timestamps: false
});

export default Department;