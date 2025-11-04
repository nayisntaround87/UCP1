module.exports = (sequelize, DataTypes) => {
    const film = sequelize.define("film",{
        id : {
            type : DataTypes.INTEGER,
            autoIncrement : true,
            primaryKey : true

        },
        nama_film:{
            type : DataTypes.STRING,
        },
        deskripsi:{
            type : DataTypes.STRING,
        },
        sutradara:{
            type: DataTypes.STRING,
        },
        tahun_terbit:{
            type : DataTypes.INTEGER,
        },
        genre:{
            type : DataTypes.STRING,
        }
    });
    return film;
};
