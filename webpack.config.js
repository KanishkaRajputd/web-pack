const path=require("path");

module.exports={
    entry:"./src/index.js",
    //change the name of dist and ./dist/main.js
    output:{

        path: path.resolve(".","build"),
        filename:"bundle.js",
    },
    mode:"development",
    module:{
        rules:[{ test:/\.css$/,use:["style-loader","css-loader"]}]
    },
}      