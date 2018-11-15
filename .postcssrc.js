const purgecss = require("@fullhuman/postcss-purgecss");
const isDev = process.argv.indexOf("serve") !== -1;

class TailwindExtractor {
    static extract(content) {
        return content.match(/[A-Za-z0-9-_:/]+/g) || [];
    }
}

module.exports = {
    plugins: [
        require("tailwindcss")("./src/tailwind/tailwind.js"),
        isDev
            ? ""
            : purgecss({
                content: [
                    "./public/**/*.html",
                    "./src/**/*.vue",
                    "./src/!**/!*.scss"
                ],
                extractors: [
                    {
                        extractor: TailwindExtractor,
                        extensions: ["html", "js", "vue"]
                    }
                ]
            }),
        require("autoprefixer")
    ]
};
