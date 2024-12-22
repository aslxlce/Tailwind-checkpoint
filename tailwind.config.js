/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./**/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                bgColor: "#141414",
                primeColor: "#FFFFFF",
                subColor: "#98989A",
                buttonColor: "#FFD11A",
            },
            fontFamily: {
                Inter: ["Inter", "sans-serif"],
            },
        },
    },
    plugins: [],
};
