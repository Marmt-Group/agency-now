import autoprefixer from 'autoprefixer'
import helmet from 'helmet'

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
    serverMiddleware: [
        helmet({
            referrerPolicy: { policy: 'strict-origin-when-cross-origin' }
        }),
        '~/api/contact'
    ],
    /*
    ** Headers of the page
    */
    head: {
        title: 'Marmt | A Front-end engineer ran agency and staffing partner.',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Marmt is a Front-end engineer ran agency by two experienced silicon valley engineers with agency backgrounds. In addition we staff your company with experienced front-end engineers.' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'manifest', href: '/manifest.webmanifest' }
        ]
    },
    /*
   * Customize the progress bar color
   */
    loading: { color: 'blue', height: '5px' },
    /*
    ** Include static css files
    */
    css: [
        // Load a Node.js module directly (here it's a Sass file)
        'bulma',
        '~/assets/css/fonts.min.css',
        // SCSS file in the project
        '~/assets/scss/core_flashy.scss',
        '~/assets/scss/main.scss'
    ],
    plugins: [
        { src: '~/plugins/agency.js', ssr: false }
    ],
    /*
    ** Build configuration
    */
    build: {
        // optimization
        optimization: {
            splitChunks: {
                cacheGroups: {
                    default: false,
                    vendors: false,
                    // vendor chunk
                    vendor: {
                        // async + async chunks
                        chunks: 'all',
                        // import file path containing node_modules
                        test: /node_modules/
                    }
                }
            }
        },
        extractCSS: true,
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        },
        postcss: {
            autoprefixer,
            plugins: {
                'postcss-custom-properties': false
            }
        }
    },
    modules: [
        ['@nuxtjs/browserconfig', { 
            browserconfig: {
                TileColor: '#396aab',
                square150x150logo: { '@': { src: '/mstile-150x150.png' } }
            }
        }],
        ['@nuxtjs/google-analytics', {
            id: 'UA-126450118-1',
            disabled: () => document.cookie.indexOf('ga_optout=true') !== -1,
            debug: {
                sendHitTask: isProd
            },
            set: [
                { field: 'anonymizeIp', value: true }
            ]
        }],
        ['nuxt-google-maps-module', {
            key: 'AIzaSyCoWg3GUfqHFnEfMXZ97H9gfEE_KLuqayU', // Google maps key
        }],
        '@nuxtjs/axios'
    ]
}