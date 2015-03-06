    <script>
    $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
        $("#menu-toggle").toggleClass("toggled");
        if("#menu-toggle".hasclass("toggled") === true)
        $("#menu-toggle").html("hidden");
        //$("#menu-toggle, #toggled2").html("Toggle Menu");
    });
    </script>