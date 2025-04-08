function nameToHelicopter(){
    const textBox = document.getElementById("textBox");
    textBox.value = `Hello, ${textBox.value}`;
};

const nameButton = document.getElementById("nameButton");
nameButton.addEventListener("click", nameToHelicopter);