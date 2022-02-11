function reverseString() {
    let input_obj = document.querySelector('.input-text')
    let new_str = input_obj.value;
    console.log(new_str);
    let reverseStr = "";
    for(let i = 1; i < (new_str.length + 1); i++){
        reverseStr = reverseStr + new_str[new_str.length-i];
        console.log(reverseStr); 
        document.querySelector('.output-text').innerText = reverseStr;
    }
}
document.querySelector('.reverse-btn').addEventListener('click',reverseString);
