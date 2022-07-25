module.exports = (sequelize, DataTypes) => {
 const PostCategory = sequelize.define('PostCategory', {
    postId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, { timestamps: false }
 );
  
  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      through: PostCategory, foreignKey: 'postId',
      as: 'categories',
    });
    
    models.Category.belongsToMany(models.BlogPost, {
      through: PostCategory, foreignKey: 'categoryId',
    });
  }

  return PostCategory;
};
