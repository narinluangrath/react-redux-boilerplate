const path = require( 'path' )

const dist = path.join( __dirname, '/dist/' )

module.exports = {
  entry : './src/main.js',
  output : { 
    path : dist, 
    publicPath : '/',
    filename : 'main.js' 
  },
  module : {
    rules : [
      { 
        test : /\.jsx?$/,
        exclude : /node_modules/,
        use : 'babel-loader'
      },
      { 
        test : /\.scss/,
        use : [ 'style-loader', 'css-loader', 'sass-loader' ]
      },
      { 
        test : /\.css/,
        use : [ 'style-loader', 'css-loader' ]
      },
      { 
        test : /\.svg/,
        use : 'svg-loader'
      },
    ]
  },
  resolve : {
    extensions : [ '.js', '.json', '.jsx' ]
  },
  devServer : {
    historyApiFallback : true,
    port : 8080,
    publicPath : '/',
    contentBase : dist,
    watchOptions : {
      aggregateTimeout : 300,
      poll : 1000
    }
  },
  node: {
    fs: 'empty'
  },
}