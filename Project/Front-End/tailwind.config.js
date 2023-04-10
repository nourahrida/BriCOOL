// /** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");

// module.exports = withMT({
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//     // "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
//     // "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
//     "./public/index.html",
//   ],
//   theme: {
//     extend: {
//         keyframes: {
//             rippleAni: {
//                 "0%, 100%": { transform: "translate(0px, 0px)" },
//                 "33%": { transform: "translate(5px, -5px)" },
//                 "66%": { transform: "translate(-5px, 5px)" }
//             },
//             ripple2Ani: {
//                 "0%, 100%": { transform: "translate(0px, 0px)" },
//                 "33%": { transform: "translate(-5px, -5px)" },
//                 "66%": { transform: "translate(5px, 5px)" }
//             }
//         },
//         animation: {
//             ripple: "rippleAni 3s linear infinite",
//             ripple2: "ripple2Ani 4s linear infinite"
//         }
//     }
// },
//     plugins: [require("@tailwindcss/forms"), require("tailwind-scrollbar")]
// });


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}', "./node_modules/flowbite/**/*.js", "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html", './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
    theme: {
        fontFamily: {
            Satisfy: ["Satisfy"],
            Julee_cursive: ["Julee", "cursive"],

        },
        extend: {
            keyframes: {
                rippleAni: {
                    "0%, 100%": { transform: "translate(0px, 0px)" },
                    "33%": { transform: "translate(5px, -5px)" },
                    "66%": { transform: "translate(-5px, 5px)" }
                },
                ripple2Ani: {
                    "0%, 100%": { transform: "translate(0px, 0px)" },
                    "33%": { transform: "translate(-5px, -5px)" },
                    "66%": { transform: "translate(5px, 5px)" }
                }
            },
            animation: {
                ripple: "rippleAni 3s linear infinite",
                ripple2: "ripple2Ani 4s linear infinite"
            }
        }
    },
    plugins: [require('flowbite/plugin'), require('tw-elements/dist/plugin'), require("@tailwindcss/forms"), require("tailwind-scrollbar")]
};
