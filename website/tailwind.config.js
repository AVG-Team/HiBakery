/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                "Light-Apricot": {
                    50: "#FFF7F3",
                    100: "#FFEDE5",
                    200: "#FFD3BF",
                    300: "#FFBA99",
                    400: "#FFA073",
                    500: "#FFBE98", // Màu gốc
                    600: "#E69B70",
                    700: "#CC7857",
                    800: "#B35545",
                    900: "#99332E",
                },
                "Coral-Pink": {
                    50: "#FFEFF3",
                    100: "#FFDCE1",
                    200: "#FF9FB4",
                    300: "#FF6186",
                    400: "#FF2B59",
                    500: "#F05A7E", // Màu gốc
                    600: "#D34869",
                    700: "#B63554",
                    800: "#99223F",
                    900: "#7C102A",
                },
                "Royal-Blue": {
                    50: "#E8F0F7",
                    100: "#CCE0F0",
                    200: "#99C2E0",
                    300: "#66A3D1",
                    400: "#3385C1",
                    500: "#125B9A", // Màu gốc
                    600: "#0F5089",
                    700: "#0C4578",
                    800: "#083867",
                    900: "#052D56",
                },
                "Deep-Tea": {
                    50: "#E4F6F8",
                    100: "#C9EEF1",
                    200: "#94DEE3",
                    300: "#60CDD5",
                    400: "#2CBCC7",
                    500: "#0B8494", // Màu gốc
                    600: "#096E7A",
                    700: "#075860",
                    800: "#054246",
                    900: "#032C2C",
                },
            },
        },
    },
    plugins: [],
};
