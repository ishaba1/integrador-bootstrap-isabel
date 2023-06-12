const headerTemplate = `
    <nav class="navbar navbar-expand-lg bg-info navbar-dark font text-titulo">
        <a class="navbar-brand" href="#nosotros">
        <img  class="img-fluid" src="/assets/img/logo.webp" style="width: 250px; height: 100px" alt="logo"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto text-center h6 mb-20 p-5">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="../../index.html">Inicio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../../index.html">Nosotros</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="../../index.html" role="button" data-bs-toggle="dropdown" aria-expanded="false">Servicios</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="../../index.html" style="font-size: small;">Servicio de Limpieza Básico</a></li>
                        <li><a class="dropdown-item" href="../../index.html" style="font-size: small;">Servicio de Limpieza a Detalle</a></li>
                        <li><hr class="dropdown-divider"></li>
                        <li><a class="dropdown-item" href="../../index.html" style="font-size: small;">Servicios Especiales</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="../../index.html">Contácto</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="/assets/pages/promociones.html">Promociones</a>
                </li>
            </ul>
        </div>
    </nav>`;

const footerTemplate = `
<section id="información">
        <div class="row aling-items-end justify-content-end bg-info text-white p-5 pb-3">
            <div class="col-xs-12 col-md-6 col-lg-3">
                <div class="mb-2">
                    <p class="h5">Oficina Principal</p>
                    <p>Av. Directorio 0000 </p>
                    <p>Buenos Aires, Argentina</p>
                    <p>Telf: 911 0000 0000 </p>
                </div>  
            </div>
            <div class="col-xs-12 col-md-6 col-lg-3">
                <div class="mb-2 ">
                    <p class="h5">Links</p>
                    <a class="text-white text-decoration-none" href="./assets/pages/terminos-condiciones.html">Términos y Condiciones</a>
                </div>
                <div class="mb-2">
                    <a class="text-white text-decoration-none" href="#">Política y Privacidad</a>
                </div>
                </div>
            <div class="col-xs-12 col-md-6 col-lg-3">
                <div class="mb-2">
                    <p class="h5">Nuestras Redes Sociales</p>
                    <a class="text-white text-decoration-none" href="https://web.facebook.com/purifikas.limpieza" target="_blank">Facebook</a>
                </div>
                <div class="mb-2">
                    <a class="text-white text-decoration-none" href="https://www.instagram.com/purifikas/?hl=es" target="_blank">Instagram</a>
                </div>
                <div class="mb-2">
                    <a class="text-white text-decoration-none" href="https://twitter.com">Twitter</a>
                </div>
            </div>  
            <div class="col-xs-12 col-md-6 col-lg-3">
                <div class="mb-2">
                    <p class="h5">Horario de Atención</p>
                    <p>Lunes - Viernes: 8 Am - 6 Pm</p>
                    <p>Sábado: 9 Am - 5 Pm</p>
                    <p>Domingos: Reservar</p>
                </div>  
            </div>
            <div class="col-xs-12">
                <p class="text-white text-center pt-2">Copyright - Derechos Reservados © 2023</p>
            </div>
        </div>
</section>  `;

const header = document.getElementsByTagName("header")[0];
const footer = document.getElementsByTagName("footer")[0];

header.innerHTML = headerTemplate;
footer.innerHTML = footerTemplate;

