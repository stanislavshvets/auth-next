/** @type {import('next').NextConfig} */

const nextConfig = {
    images: {
        domains: ['lh3.googleusercontent.com'], // Додайте тут домен вашого хостингу зображень
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        // Відкинути певні модулі з пакетів для оптимізації завантаження
        config.module.rules.push({
            test: /ignore-me\.js$/, // Регулярний вираз для відповідних модулів
            loader: 'null-loader', // Використовуємо null-loader для відкидання модулів
        });

        return config;
    },
};

export default nextConfig;




