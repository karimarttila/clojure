import { writeFileSync } from "fs";
import autoprefixer from "autoprefixer";
import postcss from "rollup-plugin-postcss";

const generateStylesCljs = (_, json) => {
  const lines = ["(ns vega.frontend.styles)\n"];
  for (let [key, value] of Object.entries(json)) {
    lines.push(`(def ${key} "${value}")`);
  }
  writeFileSync("src/cljs/vega/frontend/styles.cljs", lines.join("\n"));
  console.log("=== Created styles.cljs ===");
};

export default [
  {
    input: "src/sass/main.scss",
    output: {
      file: "dev-resources/public/css/style.css",
      format: "es"
    },
    plugins: [
      postcss({
        plugins: [autoprefixer],
        extract: true,
        minimize: true,
        sourceMap: false,
        extensions: [".scss"],
        modules: {
          generateScopedName: "[local]"
          // getJSON: generateStylesCljs
        },
        autoModules: false
      })
    ]
  },
  {
    input: "src/sass/main.scss",
    output: {
      file: "target/shadow/prod/resources/public/css/style.css",
      format: "es"
    },
    plugins: [
      postcss({
        plugins: [autoprefixer],
        extract: true,
        minimize: true,
        sourceMap: false,
        extensions: [".scss"],
        modules: {
          generateScopedName: "[local]"
          // getJSON: generateStylesCljs
        },
        autoModules: false
      })
    ]
  }

];
