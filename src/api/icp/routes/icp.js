'use strict';

/**
 * icp router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::icp.icp');
