/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                title: "'Raleway', sans-serif",
                body: "'Roboto', sans-serif"
            },
            backgroundImage: {
                'hero': "url('../public/images/hero-3.jpg')",
            },
            colors: {
                card:'#51A635bb',
                //card:'#0000ff',
                primary:'#51A635',
                secondary:'#51A63555',
                //primary:'#0000ff',
            
        },
        },
    },
    plugins: [],
};
