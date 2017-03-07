//USER: admin PASS: admin

/*Javier Camargo: No es conveniente tener las credenciales de la base de datos abiertas al publico, tanto a nivel de repositorio como accesibles por codigo
Una recomendacion es definir el url conection como variable de entorno*/
module.exports.url = 'mongodb://admin:admin@ds117830.mlab.com:17830/footscores';
module.exports.user = 'admin';
module.exports.password = 'admin';
module.exports.setConfig = function() {
  process.env.MONGOOSE_CONNECT = module.exports.url;
};
