const { exec } = require("child_process");

let translateForm: HTMLElement = document.getElementById('translate_form');
let results: HTMLElement = document.getElementById('results');

translateForm.addEventListener('submit', (event) => {
  window.event.preventDefault();

  let inputText = document.getElementById('input_text') as HTMLInputElement
  let inputLanguage = document.getElementById('input_language') as HTMLInputElement
  let outputLanguage = document.getElementById('output_language') as HTMLInputElement

  exec(`trans '${inputText.value}' -brief ${inputLanguage.value}:${outputLanguage.value}`, (error: Error, stdout: string, stderr: Error) => {
    if(error) {
      console.log(`error: ${error.message}`);
      return;
    } else if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }

    results.innerHTML = stdout;
  })
})

