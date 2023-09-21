
module.exports = (sequelize,DataTypes) => {
    const todoModel = sequelize.define('todo',{
        text:{
            type:DataTypes.TEXT,
            allowNull:false  
        },
        isCompleted:{
            type :DataTypes.BOOLEAN,
            allowNull:false  
        },
        
    },
    {
        timestamps:false
    }
    )
    return todoModel;
}
