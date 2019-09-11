import autoprefixer from 'autoprefixer'
import helmet from 'helmet'
import dotenv from 'dotenv'

const isProd = process.env.NODE_ENV === 'production'
let config

if (!isProd) {
    config = dotenv.config({ path: './.env' })
}

export default {
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
        title: 'Marmt | A remote first creative technology company.',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Marmt (mar·mot) is a remote geographically dispersed team of talented creative strategists, researchers, designers and developers.' }        ],
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
        { src: '~/plugins/agency', mode: 'client' }
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
        extend(config, ctx) {
            config.module.rules.push({
                test: /\.(ogg|mp3|wav|mpe?g)$/i,
                loader: 'file-loader',
                options: {
                    name: '[path][name].[ext]',
                },
            })
        },
        postcss: {
            autoprefixer,
            plugins: {
                'postcss-custom-properties': false
            },
            preset: {
                // Change the postcss-preset-env settings
                autoprefixer: {
                    grid: true
                }
            }
        }
    },
    modules: [
        ['@nuxtjs/google-analytics', {
            id: process.env.GANALYTICS,
            disabled: () => document.cookie.indexOf('ga_optout=true') !== -1,
            debug: {
                sendHitTask: isProd
            },
            set: [
                { field: 'anonymizeIp', value: true }
            ]
        }],
        ['nuxt-google-maps-module', {
            key: isProd ? process.env.GMAP_KEY : config.GMAP_KEY, // Google maps key
        }],
        '@nuxtjs/axios'
    ],
    axios: {
        proxyHeaders: false,
        credentials: true
    }
}