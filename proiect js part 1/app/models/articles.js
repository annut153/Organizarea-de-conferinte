module.exports = (sequelize, DataTypes) => {
    const Articles = sequelize.define("Articles", {
      id: {
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("Pending", "Approved", "Rejected"),
        defaultValue: "Pending",
      },
      feedback: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    });
  
    Articles.associate = (models) => {
      Articles.belongsTo(models.Users, { as: "Author", foreignKey: "authorId" });
      Articles.belongsTo(models.Conferences, { foreignKey: "conferenceId" });
      Articles.belongsToMany(models.Users, {
        through: "ArticleReviewers", // Pivot table
        as: "Reviewers",
        foreignKey: "articleId",
      });
    };
  
    return Articles;
  };
  