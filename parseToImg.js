import sharp from "sharp";

async function minifyPNG(urlImage) {
    try {
        sharp(`image/origin/${urlImage}`)
            .resize({ width: 300, height: 300, fit: 'cover' })
            .rotate()
            .jpeg({ quality: 98 })
            .toFile(`image/destiny/${urlImage}`);
    } catch (e) {
        console.error(`Error to compress ${urlImage}`);
    }
}

async function minifyJPEG(urlImage) {
    try {
        sharp(`image/origin/${urlImage}`)
            .resize({ width: 300, height: 300, fit: 'cover' })
            .rotate()
            .jpeg({ quality: 98 })
            .toFile(`image/destiny/${urlImage}`);
    } catch (e) {
        console.error(`Error to compress ${urlImage}`);
    }
}

export default async function handleStategyMinify(urlImage) {
    console.log(urlImage)
    if (urlImage.endsWith('png')) {
        await minifyPNG(urlImage);
    }

    else if (urlImage.endsWith('jpg')) {
        await minifyJPEG(urlImage);
    }

    else {
        //Mover para o destino sem comprimir
    }
}


