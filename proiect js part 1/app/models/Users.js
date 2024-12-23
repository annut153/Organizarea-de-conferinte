module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define("Users", {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    
    role: {
      type: DataTypes.ENUM("organizer", "reviewer", "author"),
      allowNull: false,
    },
  });

  Users.associate = (models) => {
    // Relația many-to-many cu articole
    Users.belongsToMany(models.Articles, {
      through: models.ArticleReviewers, // Folosim pivot table-ul
      as: "ReviewedArticles", // Alias pentru articolele revizuite de un reviewer
      foreignKey: "userId",
    });
  };


    return Users;
  };