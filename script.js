async function handleButtonClick() {
    const textareaElement = document.getElementById("worksheetInput");
    const enteredText = textareaElement.value;

    const gradelevelElement = document.getElementById("gradelevelInput");
    const gradeLevel = gradelevelElement.value;

    const response = await fetch("/api/simplify", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            text: enteredText, 
            gradeLevel: gradeLevel})
    });
    const output = await response.json();
    const simplifiedText = output.simplifiedText;
    const resultBoxElement = document.getElementById("resultBox")
    resultBoxElement.innerText = simplifiedText;
}