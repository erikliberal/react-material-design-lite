module.exports=[{
  context: __dirname + "/library",
  entry: {mdl:"./mdl"},
  output: {
      path: __dirname + "/public/resources/js",
      filename: "[name].js",
      libraryTarget:"umd",
      library:"[name]"
  },
  target:"web",
  module:{
      loaders:[
          {test:/\.jsx$/, loader:"babel-loader"}
      ]
  },
  externals:[
    {"React":"React"},
    {"ReactDOM":"ReactDOM"}
  ]
}];
