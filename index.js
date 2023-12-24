function escopo() {

	const numero = document.querySelector('.form');
	const ordem = [1,2,3,4,5,6,7,8,9,10];
	const resposta = document.querySelector('.resposta');

	function crescente () {

		console.log(ordem);

	}


	function decrescente () {
			
		console.log(ordem.slice(0).reverse());
	}


	function receptor (evento) {

		evento.preventDefault();

		if (!resposta.value || !Number(resposta.value)) {

			alert("Insira um número válido!");

		}

		else if (resposta.value % 2 == 0) {

			crescente();

		}
				

		else if (resposta.value % 2 == 1) {

			decrescente();

		}
	}
	numero.addEventListener('submit', receptor);
}

escopo();