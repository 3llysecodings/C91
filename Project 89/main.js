function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    console.log("word in lowerCase = " + word);

    charAt1 = word.charAt(1);
    console.log(charAt1);

    length_divide_2 = Math.floor(word.length/2);
    charAt2 = word.charAt(length_divide_2);
    console.log(charAt3);

    removecharAt1 = word.replace(chatAt1, "_");
    removecharAt2 = remove_charAt1.replace(chatAt2, "_");
    removecharAt3 = remove_charAt2.replace(chatAt3, "_");
    console.log(remove_charAt3);

    question_word = "<h4 id='word_display'> Q. "+remove_charAt3+"</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question_word + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
    
}