function tryWord(word, base) {
    // TODO: fix jeu sensible à la casse.
    if (word === base) {
        return true
    } else {
        let wellPlaced = [];
        let notInWord = [];
        let missplaced = [];

        let arrayBase = base.split('');
        let arrayWord = word.split('');

        for (let i = 0; i < arrayBase.length - 1; i++) {
            if (arrayBase[i] === arrayWord[i]) {
                wellPlaced.push(arrayWord[i]);

            } else if (arrayBase.includes(arrayWord[i]) === true) {
                missplaced.push(arrayWord[i])
                //verifier si les lettres sont dans le mot
                //si il est dans l'arraybase va dans missplaced
            }
        }

        for (const char of arrayWord) {
            if (arrayBase.includes(char) === false) {
                notInWord.push(char)
            }
        }


        return { wellPlaced: wellPlaced, missplaced: missplaced, notInWord: notInWord }
    }
}

function guess() {
    let base = 'aubergine'
    let word = document.getElementById("word").value
    let result = tryWord(word, base)
    document.getElementById("word").value = ''
    document.getElementById("try").innerText = word
    document.getElementById("well").innerText = 'Bien placé: ' + result.wellPlaced.join(', ')
    document.getElementById("miss").innerText = 'Mal placé: ' + result.missplaced.join(', ')
    document.getElementById("not").innerText = 'Pas dans le mot: ' + result.notInWord.join(', ')
    if (result.wellPlaced.length === base.length) {
        document.getElementById("win").innerText = 'Vous avez gagné'
    }
}