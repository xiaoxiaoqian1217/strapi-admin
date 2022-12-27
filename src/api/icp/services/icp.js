'use strict';

/**
 * icp service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::icp.icp');
