//js file the logic behind the calc . listeners for all the buttons 
//global booleans to avoid case like --> 9*. or 9.+ ...
var op_pressed = false;
var decimal_pressed = false;
var decimal_count = 0;
function loadPage() {//this function will load with the body to avoid undefind var
 

    var i;
    //setting up listeners for the operator buttons
    var operator_buttons = document.getElementsByClassName("key--operator");
    for (i = 0; i <  operator_buttons.length; i++)
        operator_buttons[i].addEventListener("click", click_op, false);
    //setting up listeners for the numbers buttons
    var nums_buttons = document.getElementsByClassName("num");
    for (i = 0; i <  nums_buttons.length; i++)
        nums_buttons[i].addEventListener("click", click_num, false);
    //setting up listener for the . button   (decimal button)
    var decimal_button = document.getElementsByClassName("decimal");
    for (i = 0; i <  decimal_button.length; i++)
        decimal_button[i].addEventListener("click", click_decimal, false);
    //setting up listener for the . button
    var clear_button = document.getElementsByClassName("clear");
    for (i = 0; i <  clear_button.length; i++)
        clear_button[i].addEventListener("click", click_clear, false);
    //setting up listener for the = button 
    var equal_button = document.getElementsByClassName("key--equal");
    for (i = 0; i <  equal_button.length; i++)
        equal_button [i].addEventListener("click", click_equal, false);
      
}
//case = pressed 
var click_equal = function(e)
{
    const display = document.querySelector('.calculator__display');//eturns the first Element within the document that match .calculator__display
    var result= eval(display.textContent);//calculate the math expression 
    display.textContent =result;//display the result
    decimal_pressed = false;//free the . + / * - buttons
    //update the booleans
    decimal_count = 0;
    
}
var click_clear = function(e)//clear the display 
{
    const display = document.querySelector('.calculator__display');
    display.textContent = '0';
    decimal_count = 0;
    
}
var  click_decimal = function(e)//place the . on the screen 
{
  
    if(decimal_count==1)
    {
        return;
    }
    if(decimal_pressed==false)
    {
        return;
    }
    else
    {
          //get the button typed on
        var button_clicked = e.target.innerText;
        const display = document.querySelector('.calculator__display');
        display.textContent = display.textContent + button_clicked ;
        decimal_pressed = false;//update the booleans
        op_pressed = false;
        decimal_count++;
    }
} 
var  click_op = function(e)// + - / * operators
{
    if(op_pressed ==false)
    {
        return;
    }
    else
    {
        //get the button typed on
        var button_clicked = e.target.innerText;
        const display = document.querySelector('.calculator__display');
        display.textContent = display.textContent + button_clicked ;
        op_pressed  = false;//update the booleans
        decimal_pressed = false;
        decimal_count = 0;
        
    }
}
var  click_num = function(e) // 0 1 2 3 ... 
{
   
    //get the button typed on
    var button_clicked = e.target.innerText;
    
    const display = document.querySelector('.calculator__display');
   
    if(display.textContent=='0')
    {
        display.textContent = button_clicked;
    }
    else 
    {
        display.textContent = display.textContent +button_clicked;
    }
    op_pressed = true;//update the booleans
    decimal_pressed=true;
    

    
}