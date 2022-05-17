var api = {};

var frases = [
	{_id: 0, texto:'Ninguém disse que seria fácil mas também ninguém nunca disse que seria tão difícil', tempo: 17 },
	{_id: 1, texto:'Meu nome é Bond, James Bond',tempo: 5 },
	{_id: 2, texto:'Nunca me diga as probabilidades.', tempo: 4 },
	{_id: 3, texto:'Carpe diem. Aproveitem o dia, garotos. Façam suas vidas serem extraordinárias.', tempo: 15 },
	{_id: 4, texto:'Ninguém disse que seria fácil mas também ninguém nunca disse que seria tão difícil.', tempo: 15 },
	{_id: 5, texto:'É por isso que o Super-Homem trabalha sozinho', tempo: 8 },
	{_id: 6, texto:'Você se lembrará quando isso tudo acabar e tudo se perder pelo caminho', tempo: 12 },
	{_id: 7, texto:'Não vale a pena mergulhar nos sonhos e esquecer de viver.', tempo: 10 },
	{_id: 8, texto:'Vamos colocar um sorriso nesse rosto', tempo: 7},
	{_id: 9, texto:'O medo é o caminho para o lado negro. O medo leva a raiva, a raiva leva ao ódio, o ódio leva ao sofrimento.', tempo: 20},

	];

api.lista = function(req, res) {

	setTimeout(function(){
		if(req.query.id) return res.json(frases[req.query.id]);

		res.json(frases);
	},1500);

};

module.exports = api;
