const configs = require("./configs.json");

module.exports = {
    images: {
        domains: [configs.STRAPI_DOMAIN, configs.AWS_S3_DOMAIN],
    },
    trailingSlash: true,
};
