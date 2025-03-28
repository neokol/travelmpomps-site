module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            colors: {
                'primary': '#6f5bf3',
            },
            fontFamily: {
                'euclid-circular': ['Euclid Circular A', 'sans-serif'],
                'poppins': ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}