
   
<script type="text/javascript">
   var slideIndex = 1;
    showDivs(slideIndex);
    function plusDivs(n) {
        showDivs(slideIndex+=n);
    }
    function showDivs(n){
       
        var x = document.getElementsByClassName("slide");
        if (n > x.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = x.length
        }
         var i = 0;
        while(i<x.length) {
            x[i].style.display = "none";
            i++;
        }
        x[slideIndex-1].style.display = "block";
    }
