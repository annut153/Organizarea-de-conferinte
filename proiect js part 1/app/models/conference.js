module.exports = (sequelize, DataTypes) => {
    const Conferences = sequelize.define("Conferences", {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    });
  
    Conferences.associate = (models) => {
      Conferences.hasMany(models.Articles, { foreignKey: "conferenceId" });
      Conferences.belongsToMany(models.Users, {
        through: "ConferenceUsers", // Pivot table
        as: "Organizers",
        foreignKey: "conferenceId",
      });
    };
  
    return Conferences;
  };
  