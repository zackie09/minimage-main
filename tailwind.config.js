const colors = require('tailwindcss/colors')
const plugin = require('tailwindcss/plugin')
const { addDynamicIconSelectors } = require('@iconify/tailwind');
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")


module.exports = {
    content: [
        "./src/**/*.{html,js}",
        'node_modules/preline/dist/*.js',
    ],
    theme: {

        container: {
            center: true,
            padding: {
                DEFAULT: '1rem',
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '4rem',
            },
        },

        fontFamily: {
            'base': ['"Public Sans"', 'sans-serif'],
        },

        extend: {
            colors: {
                primary: {
                    ...colors.blue,
                    "DEFAULT": colors.blue[500],
                },

                default: {
                    ...colors.slate,
                },

                'secondary': '#747a80',

                'success': '#20b799',

                'info': '#3cbade',

                'warning': '#efb540',

                'danger': '#fa5944',

                'light': '#e9edf3',

                'dark': '#222a3e',
            },

            spacing: {
                15: '60px',
                18: '72px',
                'sidenav': '280px',
                'topbar': '80px',
            },

            zIndex: {
                '60': '60',
                '70': '70',
            },

            minWidth: theme => ({
                ...theme('width'),
            }),

            maxWidth: theme => ({
                ...theme('width'),
            }),

            minHeight: theme => ({
                ...theme('height'),
            }),

            maxHeight: theme => ({
                ...theme('height'),
            }),
        },
    },

    plugins: [
        require('preline/plugin'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
        require('@tailwindcss/aspect-ratio'),

        iconsPlugin({
            // If you install @iconify/json, you should explicitly specify the collections you want to use, like this:
            collections: getIconCollections(["mdi", "ph", "tabler"]),

            // If you want to use all icons from @iconify/json, you can do this:
            // collections: getIconCollections("all"),
        }),

        function ({ addUtilities, theme }) {
            addUtilities({
                '.fill-1': {
                    fontVariationSettings: "'FILL' 1",
                },
            })
        }
    ],
}