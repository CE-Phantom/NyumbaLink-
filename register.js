// =========================================
// NYUMBALINK v2.0
// REGISTRATION ROLE SELECTION
// =========================================


// Get all role cards
const roleCards = document.querySelectorAll(".role-card");


// =========================================
// ROLE CARD CLICK
// =========================================

roleCards.forEach(function (card) {

    card.addEventListener("click", function () {

        const selectedRole = card.dataset.role;


        // Make sure a valid role was selected

        if (
            selectedRole !== "landlord" &&
            selectedRole !== "tenant"
        ) {

            console.error("Invalid registration role.");

            return;

        }


        // =====================================
        // TEMPORARILY REMEMBER THE ROLE
        // =====================================

        /*
            This is only being used to carry the
            user's selection to the next page.

            It is NOT storing a password or
            sensitive information.
        */

        sessionStorage.setItem(
            "registrationRole",
            selectedRole
        );


        // =====================================
        // GO TO THE CORRECT REGISTRATION PAGE
        // =====================================

        if (selectedRole === "landlord") {

            window.location.href =
                "landlord-register.html";

        }


        if (selectedRole === "tenant") {

            window.location.href =
                "tenant-register.html";

        }

    });

});
