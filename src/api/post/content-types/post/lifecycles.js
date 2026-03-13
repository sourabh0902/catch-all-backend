module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    if (data.isFeatured === true) {
      await strapi.db.query('api::post.post').updateMany({
        where: { isFeatured: true },
        data: { isFeatured: false },
      });
    }
  },

  async beforeUpdate(event) {
    const { data } = event.params;
    if (data.isFeatured === true) {
      await strapi.db.query('api::post.post').updateMany({
        where: { isFeatured: true },
        data: { isFeatured: false },
      });
    }
  },
};
