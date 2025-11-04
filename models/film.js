module.exports = (sequelize, DataTypes) => {
    const film = sequelize.define("film",{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true

        },
        nama_film :{
            type : DataTypes.STRING,
        },
        deskripsi : {
            type : DataTypes.STRING,
        },
        author : {
            type: DataTypes.STRING,
        }
    });
    return komik;
};
