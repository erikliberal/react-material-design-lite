module.exports={
  context: __dirname + "/library",
  entry: {mdl:"./mdl"},
  output: {
      path: __dirname + "/public/resources/js",
      filename: "[name].js",
      libraryTarget:"umd",
      library:"[name]"
  },
  externals:[
    {"React":"React"},
    {"ReactDOM":"ReactDOM"}
  ]
}, ()=>{
  console.log('Done packing ', arguments.length);
};
