const { exec } = require("child_process");
let translateForm = document.getElementById('translate_form');
let results = document.getElementById('results');
translateForm.addEventListener('submit', (event) => {
    window.event.preventDefault();
    let inputText = document.getElementById('input_text');
    let inputLanguage = document.getElementById('input_language');
    let outputLanguage = document.getElementById('output_language');
    exec(`trans '${inputText.value}' -brief ${inputLanguage.value}:${outputLanguage.value}`, (error, stdout, stderr) => {
        if (error) {
            console.log(`error: ${error.message}`);
            return;
        }
        else if (stderr) {
            console.log(`stderr: ${stderr}`);
            return;
        }
        results.innerHTML = stdout;
    });
});
