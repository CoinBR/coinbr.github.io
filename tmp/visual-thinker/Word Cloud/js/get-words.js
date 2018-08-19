$(document).ready(function(){
	
	document.getElementById("genCloud").onclick = (function()
	{

		const EXCLUDED_WORDS = ["a", "ao", "e", "é", "em", "o", "ó", "ou", "da", "de", "do", "na", "nem", "no", "nós", "mim", "se", "ser", "que",
					"são", "pra", "por", "pro", "para", "pois", "eu", "você", "vocês", "vou", "tu", "um", "uma", "uns", "umas", "como",
					"ele", "ela", "eles", "elas", "através", "todo", "aqui", "muito", "pouco", "está", "estão", "esta", "sendo", "tendo",
					"além", "possam", "podem", "nesse", "nessa", "neste", "nesta", "ficar", "fica", "ficarem", "permite", "permitem",
					"seja", "sejam", "sejamos", "acontece", "acontecem", "acontecerão", "aconteceram", "mostrar", "mostra", "mostrando",
					"amostrado", "mesmo", "determina", "determinado", "determinada", "apenas", "espero", "esperava", "esperando", "espera",
					"salve", "lhe", "lá", "lo", "momento", "momentos", "momentâneo", "momentâneamente", "dar", "dou", "deu", "dão", "dói",
					"faço", "faça", "façam", "façamos", "farei", "feito", "só", "so", "aliás", "alias", "mas", "porém", "porem", "pq",
					"tô", "tou", "estou", "por", "que", "porque", "porquê", "quê", "então", "entao",
					];

		function camelizeWords(words){
			return words.map(function(word){
				const lowered = word.toLowerCase();
				return word.substring(0, 1).toUpperCase() + lowered.substring(1,999);
			});
		}

		const CAMELIZED_EXCLUDED_WORDS = camelizeWords(EXCLUDED_WORDS); 

		function filterWords(words){
			return words.filter(word => !CAMELIZED_EXCLUDED_WORDS.includes(word));
		};

		function getWords(){
			const txt = document.getElementById("answers").value;
			const txtSimplified = txt.replace(/[\r\n\t|\n|\r\t]/g," ");
			const filteredText = txtSimplified.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\r\n\t|\n|\r\t]/g,"");
			
			var words = filteredText.split(" ");
			const camelized = camelizeWords(words);
			return filterWords(camelized);
		}
		
		
		function createWeightedWordsArray(raw, words){
			if (raw === undefined || raw.length == 0){
				return words;
			}
			
			
			const occurrences = raw.filter(word => word === raw[0]);
			const newRaw = raw.filter(word => word !== raw[0]);
			
			if (occurrences[0] !== ""){
				words.push({
					word: raw[0],
					weight: occurrences.length
				});			
			}
			return createWeightedWordsArray(newRaw, words);
		}
		
		
		$("#wordCloud").jQWCloud({
			words: createWeightedWordsArray(getWords(), [])
		});
	});
});
