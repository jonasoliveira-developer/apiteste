import {DataTypes, Model } from 'sequelize';
import {sequelize} from '../instances/pg';

export interface FraseInstance extends Model {
    id:number
    autor:string
    txt:string
}

export const Frase = sequelize.define<FraseInstance>('Frase', {
    id:{
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER
    },
    autor: {
       type: DataTypes.STRING
    },
    txt:{
        type: DataTypes.STRING
    }
 
},{
    tableName:'poemas' ,
    timestamps:false       
})

