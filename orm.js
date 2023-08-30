import Sequelize, { Model, DataTypes } from 'sequelize';

let sequelize = new Sequelize('postgresql://priscilaschleske@localhost:5432/sequelize_intro_db')

// class Department extends Model { }
// Department.init(
//     {
//         deptCode: {
//             type: DataTypes.STRING(5),
//             primaryKey: true,
//         },
//         deptName: {
//             type: DataTypes.STRING,
//             allowNull: false,
//             unique: true,
//         },
//         phone: {
//             type: DataTypes.STRING,
//         },
//         modelName: 'department',
//         sequelize: db,
//     }
// )

class TestingTable extends Model { }

TestingTable.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        myNumber: {
            type: DataTypes.INTEGER,
            field: 'my_number'
        }
    },
    {
        sequelize: sequelize,
        tableName: 'testing_table',
        timestamps: false
    }
)

await TestingTable.sync(/*{ force: true }*/)

TestingTable.create({ myNumber: 70 })

const allResults = await TestingTable.findAll({ raw: true })

console.log(allResults)

sequelize.close()