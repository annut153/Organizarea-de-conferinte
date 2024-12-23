module.exports = (sequelize, DataTypes) => {
    const ArticleReviewers = sequelize.define('ArticleReviewers', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      // Aici poți adăuga alte câmpuri dacă dorești să stochezi informații suplimentare (de exemplu, data alocării, feedback, etc.)
    });
  
    // Definirea relațiilor many-to-many
    ArticleReviewers.associate = (models) => {
      // Un articol poate avea mai mulți revieweri
      ArticleReviewers.belongsTo(models.Articles, {
        foreignKey: 'articleId',
        onDelete: 'CASCADE', // Când articolul este șters, și review-urile asociate sunt șterse
      });
  
      // Un reviewer poate avea mai multe articole
      ArticleReviewers.belongsTo(models.Users, {
        foreignKey: 'userId',
        onDelete: 'CASCADE', // Când un user este șters, și alocările acestuia ca reviewer sunt șterse
      });
    };
  
    return ArticleReviewers;
  };
  