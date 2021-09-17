w3.slideshow(".adBanner");

        function openS() {
            document.getElementById("menu").style.display = "block";

        }

        function closeS() {
            document.getElementById("menu").style.display = "none";
        }

        let scrollBtn = document.querySelector(".yuqoriga a");

        window.onscroll = function () {
            if (document.documentElement.scrollTop > 20) {
                scrollBtn.style.display = "block";
            } else {
                scrollBtn.style.display = "none";
            }
        };

        let navbarLinklar = document.querySelectorAll(".linklar a");

        for (var i = 0; i < navbarLinklar.length; i++) {
            navbarLinklar[i].addEventListener("click", function () {
                document.getElementById("menu").style.display = "none";
            });
        }