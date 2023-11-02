
(function(){
    function Start() 
    {
        console.log("App Started");
    }
    //window.addEventListener("load", Start);
    //})();
    document.addEventListener("DOMContentLoaded", function () {
        // Add an event listener to a button with an id of "myButton"
        var myButton = document.getElementById("myButton");
        myButton.addEventListener("click", function () {
            alert("Button clicked!");
        });
    });
})();


    