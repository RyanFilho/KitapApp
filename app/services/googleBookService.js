app.factory('googleBookService', ['$http', '$resource', function ($http, $resource) {
	googleBookServiceFactory = {};

	var _getBook = function (isbn, successCallBack) {

		isbn = _validarString(isbn);
		
		if (isbn) {
			var resource = $resource('https://www.googleapis.com/books/v1/:verb');			
			resource.get({verb:'volumes', q:'isbn:' + isbn}, function (response) {
				console.log(response);
				var dados = _validarResponse(response);
				successCallBack(dados);

			});
		}
	}

	var _validarString = function (string) {
		if(string){
			var novaString = string.replace(/-/g, '');
			if (novaString.length == 10 || novaString.length == 13){	
				return novaString;
			}
			else{
				return null;
			}
		}else{
			return null;
		}
		
	}

	googleBookServiceFactory.getBook = _getBook;

	return googleBookServiceFactory;

}]);