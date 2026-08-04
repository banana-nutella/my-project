async function handleButtonClick() {
    const textareaElement = document.getElementById("worksheetInput");
    const enteredText = textareaElement.value;

    const response = await fetch("/api/simplify", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({text: enteredText})
    });
    const output = await response.json();
    const simplifiedText = output.simplifiedText;
    console.log(simplifiedText);
}