# How to use

Use `yarn install` to install the modules, put your images inside the origin folder, set the image in the `parseToImage.js` file. Example: 

```
sharp('path')
            .resize({ width: NEW_WIDTH, height: NEW_HEIGHT, fit: 'cover' })
            .rotate()
            .jpeg({ quality: YOUR_QUALITY }) // RANGE TO 0 FROM 100
            .toFile(`image/destiny/${urlImage}`);
```

To execute, use `yarn start` and the compressed images will go into the `image/destiny` folder
