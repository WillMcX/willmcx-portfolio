const isProd = process.env.NODE_ENV === 'production';

module.exports = {
    output: 'export',
    assetPrefix: isProd ? '/portfolio-site/' : '',
    basePath: '/portfolio-site',
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};
