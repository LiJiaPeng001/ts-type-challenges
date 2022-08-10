import type { PluginOption } from "vite";
import fs from 'fs'
import path from 'path'

let folder = path.resolve(__dirname, "../playground/")

export default function (): PluginOption {
  return {
    name: "vite:html",
    async transformIndexHtml(html, event) {
      // let files = fs.readdirSync(folder, 'utf8')
      // let str = ""
      // files.forEach(url => {
      //   let codeStr = fs.readFileSync(folder + '/' + url, 'utf8')
      //   codeStr = codeStr.replace(/\n/gmi, "<br />")
      //   str += `
      //     <div class="code">
      //        <p>${url.slice(0, -3)}</p>
      //         ${codeStr}
      //     </div>
      //   `
      // })
      // html = html.replace(/\<div id="App"><\/div>/, `<div id="App">${str}</div>`)
      return html;
    },
  };
}
