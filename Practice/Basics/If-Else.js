let first_Number = 5;
let second_Number = 5;
let third_Number = 5;
if (first_Number==second_Number&&first_Number==third_Number){
    console.log('All Numbers Are Equal');
}else if (first_Number==second_Number&&first_Number!=third_Number){
    console.log('First number and second number are Equal. Third number is not Equal');
}else if (first_Number==third_Number&&first_Number!=second_Number){
    console.log('First number and third number are Equal. Second number is not Equal');
}else if (second_Number==third_Number&&first_Number!=second_Number){
    console.log('Second number and third number are Equal. First number is not Equal');
}else{
    console.log('All Numbers are not equal')
}


        