import handleStategyMinify from "./parseToImg.js";
import * as fs from 'fs';
import path from 'path';

function readDirectory(path) {
    return new Promise((resolve, reject) => {
        fs.readdir(path, (err, paths) => {
            if (err) {
                reject(err)
            } else {
                resolve(paths)
            }
        });
    });
}

async function execute() {
    try {
        console.log("- Processing...");
        const allFiles = await readDirectory(path.resolve("image/origin"));

        const filteredFiles = allFiles.filter((el) => {
            if (el.endsWith(".png") || el.endsWith(".jpg")) return el;
        })



        for await (let file of filteredFiles) {
            await handleStategyMinify(file);
        }

        console.log(" - Image compressed successfully!")
    } catch (e) {
        console.error("Erro ao minificar: " + e.toString());
    }

}

await execute()