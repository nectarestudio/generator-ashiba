<script>
    jQuery(document).ready(function () { 
        jQuery.cookieCuttr({
            cookieAnalytics: false,
            cookieCutter: true,
            cookieDisable: '.comments',
            cookieDomain: "{{ $cookies['dominio'] }}",
            cookiePolicyLink: "/politica-de-cookies/",
            cookieMessage: "<p>Utilizamos cookies propias para mejorar su experiencia de navegación. Si continúa navegando, entendemos que acepta nuestra <a href=\'COOKIEPOLICYLINK\' title=\'política de cookies\'>política de cookies</a>.</p>",
            cookieAcceptButtonText: 'Cerrar'
        });
     });
</script>