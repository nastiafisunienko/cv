$(document).ready(function(){

    function handleScroll(scrollThreshold, elementsToModify) {
        $(window).scroll(function() {
            if ($(window).scrollTop() > scrollThreshold) { 

                elementsToModify.scrollIn();
            } else {

                elementsToModify.scrollOut();
            }
        });
    }

    const elements = {
        scrollIn: function() {
            $("#header-index a").css("color", "white").css("transition", "0.5s")
            $("#header-index p").css("color", "white").css("transition", "0.5s")
            $("#calabaza").css("backgroundColor", "rgb(8, 63, 119)").css("transition", "0.8s")
            $('#wrapper1').css("flexBasis", "30%").css("transition", "0.8s")
            $("#nav a").css("fontSize", "2em").css("transition", "0.8s")
            $("#img").css("opacity", "0").css("transition", "0.8s")
            $("#wrapper1 #header #logo #calabaza p").css("color", "white").css("transition", "0.8s")
        },
        scrollOut: function() {
            $("#header-index a").css("color", "black").css("transition", "0.5s")
            $("#header-index p").css("color", "black").css("transition", "0.5s")
            $("#calabaza").css("backgroundColor", "white").css("transition", "0.8s")
            $('#wrapper1').css("flexBasis", "50%").css("transition", "0.8s")
            $("#nav a").css("fontSize", "1.6em").css("transition", "0.8s")
            $("#img").css("opacity", "1").css("transition", "0.8s")
            $("#wrapper1 #header #logo #calabaza p").css("color", "rgb(8, 63, 119)").css("transition", "0.8s")
            


        }
    };

    const el = {
        scrollIn: function() {
            $('#wrapper1').css("flexBasis", "0%").css("transition", "0.8s")
            $('#wrapper2').css("flexBasis", "100%").css("transition", "0.8s")
            $('#wrapper2').css("backgroundColor", "black").css("transition", "0.8s")
        },

        scrollOut: function() { 
            $('#wrapper1').css("flexBasis", "50%").css("transition", "0.8s")
            $('#wrapper2').css("flexBasis", "50%").css("transition", "0.8s")
            $('#wrapper2').css("backgroundColor", "white").css("transition", "0.8s")
        }

    }

    handleScroll(20, elements);

    //handleScroll(500, el)

    let cards = document.querySelectorAll(".card");

cards.forEach(card => {
    // Handle card click: activate
    card.addEventListener("click", () => {
        card.classList.toggle("active-cards");
    });

    // Handle close button click: deactivate
    let closeButton = card.querySelector(".close");
    if (closeButton) {
        closeButton.addEventListener("click", (event) => {
            event.stopPropagation(); // Prevent re-triggering the card click
            card.classList.remove("active-cards");
        });
    }
});



});
