
function transformToIncorrectEncoding() {
const input = document.getElementById('utf8-input-transform').value;
const encoder = new TextEncoder(); // Encode the input as UTF-8 bytes
const utf8Bytes = encoder.encode(input);
const decoder = new TextDecoder('windows-1252'); // Decode UTF-8 bytes as if they were Windows-1252
const incorrectlyEncodedText = decoder.decode(utf8Bytes);
document.getElementById('transformed-output').textContent = incorrectlyEncodedText;
}

function transformToCorrectEncoding() {
const input = document.getElementById('utf8-input-reverse').value;
// Mapping from incorrectly encoded characters to their correct form
const charMap = {
'Ã¡': 'á','Ã¢': 'â','Ã£': 'ã','Ã¤': 'ä','Ã¥': 'å','Ã¦': 'æ','Ã§': 'ç','Ã¨': 'è','Ã©': 'é','Ãª': 'ê','Ã«': 'ë','Ã¬': 'ì','Ã­': 'í','Ã®': 'î','Ã¯': 'ï','Ã°': 'ð','Ã±': 'ñ','Ã²': 'ò','Ã³': 'ó','Ã´': 'ô','Ãµ': 'õ','Ã¶': 'ö','Ã¸': 'ø','Ã¹': 'ù','Ãº': 'ú','Ã»': 'û','Ã¼': 'ü','Ã½': 'ý','Ã¾': 'þ','Ã¿': 'ÿ','Ã€': 'À','Ã': 'Á','Ã‚': 'Â','Ãƒ': 'Ã','Ã„': 'Ä','Ã…': 'Å','Ã†': 'Æ','Ã‡': 'Ç','Ãˆ': 'È','Ã‰': 'É','ÃŠ': 'Ê','Ã‹': 'Ë','ÃŒ': 'Ì','Ã': 'Í','ÃŽ': 'Î','Ã': 'Ï','Ã': 'Ð','Ã‘': 'Ñ','Ã’': 'Ò','Ã“': 'Ó','Ã”': 'Ô','Ã•': 'Õ','Ã–': 'Ö','Ã˜': 'Ø','Ã™': 'Ù','Ãš': 'Ú','Ã›': 'Û','Ãœ': 'Ü','Ã': 'Ý'
};

// Function to replace incorrect characters with correct ones
function replaceInString(str) {
let correctedString = str;
for (const [incorrect, correct] of Object.entries(charMap)) {
correctedString = correctedString.split(incorrect).join(correct);
}
return correctedString;
}

const correctedText = replaceInString(input);
document.getElementById('reversed-output').textContent = correctedText;
}

// Add event listeners for live updates
document.getElementById('utf8-input-transform').addEventListener('input', transformToIncorrectEncoding);
document.getElementById('utf8-input-reverse').addEventListener('input', transformToCorrectEncoding);

// Initial transformation
transformToIncorrectEncoding();
transformToCorrectEncoding();

