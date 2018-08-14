$(document).ready(function(){
	
	document.getElementById("genCloud").onclick = (function()
	{
		
		function getWords(){
			var txt = document.getElementById("answers").value;
			txt.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,""); // remove ponctuation
			txt.replace(/(\r\n\t|\n|\r\t)/gm,""); // remove line breaks
			
			var words = txt.split(" ");
			return words;
		}
		
		

		
		function createWeightedWordsArray(raw, words){
			if (raw === undefined || raw.length == 0){
				return words;
			}
			
			
			const occurrences = raw.filter(word => word === raw[0]);
			const newRaw = raw.filter(word => word !== raw[0]);
			
			words.push({
				word: raw[0],
				weight: occurrences.length
			});			
			return createWeightedWordsArray(newRaw, words);
		}
		
		
		$("#wordCloud").jQWCloud({
			words: createWeightedWordsArray(getWords(), [])
		});
	});
});