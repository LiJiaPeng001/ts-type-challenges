import "./main.css"

const files: any = import.meta.globEager("./playground/*/*.ts");
const types: any = {};

for (const key in files) {
  if (Object.prototype.hasOwnProperty.call(files, key)) {
    let name = key.replace(/(\.\/|\/index.vue)/g, "");
    types[name] = files[key].default;
  }
}

export default types;
