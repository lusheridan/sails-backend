/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    title: {
      type: "String",
    },
    thumbnail: {
      type: "String",
    },
    price: {
      type: "Number",
    },
  },
};
