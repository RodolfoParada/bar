$(document).ready(function () {

    $(document).on("click", "#link-comuniquemonos", function () {
        $("#comuniquemonos").removeClass("d-none")
        $("#reserva").addClass("d-none")
    })

    $(document).on("click", "#link-reserva", function () {
        $("#comuniquemonos").addClass("d-none")
        $("#reserva").removeClass("d-none")
    })

    // $('#uno').html("Nimrodel Significa “dama de la cueva blanca”. Fue una elfa silvana que vivió durante la Tercera Edad del Sol en el bosque de Lothlórien.En honor a su nombre, se acuña Nimrodel al río que nace en las Montañas Nubladas");

    // $('#dos').htmñ("Nimrodel Pub Restaurant es un oasis de calma y diversión, lleno de rincones acogedores en donde se resalta la belleza de su decoración élfica.Es un lugar ideal para visitar solo o acompañado, disfrutar una tarde con amigos, terminar el día después del trabajo o almorzar con tu familia.Puedes probar nuestras tradicionales tablas, en todas sus variedades y que nos han otorgado reconocimiento dentro de la cultura gastronómica.También puedes disfrutar nuestras cervezas de fabricación propia, con sabores que te llevarán a un mágico mundo.")

})