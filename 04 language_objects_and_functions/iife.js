//Immediately Invoke Function Executable
//Self-Executing Anonymous Function
(function(){
    console.log('Classic version');
})();

((function(){
    console.log('Crockford version');
})());

+function(){
    console.log('Unary version');
}();

!function(){
    console.log('Facebook version');
}();