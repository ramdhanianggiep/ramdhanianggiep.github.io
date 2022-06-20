function myFunction(){
    let text;
    text=document.getElementById('typenumber').value
    if (text==0){
        text= 'Invalid input';
    } else if (text%5 ==0 && text %3!=0) {
        text='Buzz!';
    } else if (text % 5 ==0 && text % 3 == 0) {
        text='FizzBuzz!';
    } else if(text % 3 == 0 && text %5!= 0) {
        text='Fizz';
    }

    document.getElementById('tugas').innerHTML=text;
    console.log(document.getElementById('typenumber').value);
}