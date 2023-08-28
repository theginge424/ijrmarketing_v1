<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>IJR Marketing</title>

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="path/to/custom-styles.css">
    <link rel="stylesheet" href="path/to/fonts.css">

    <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;600;700&display=swap" rel="stylesheet">


    <script src="https://unpkg.com/@popperjs/core@2"></script>
    <script src="https://unpkg.com/tippy.js@6"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.7.1/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/parallax/3.1.0/parallax.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/hammer.js/2.0.8/hammer.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/modernizr/2.8.3/modernizr.min.js"></script>
</head>

    <!-- Add other necessary CSS and JS links here -->
</head>
<body>
    <section id="hero" class="w-100 h-100 position-relative">
        <!-- Background Image -->
        <div class="bg-fixed w-100 h-100 position-absolute"></div>

        <!-- Dynamic Layer -->
        <div class="position-absolute w-100 h-100">
            <div id="galaxyCursor"></div>
            <div class="stars"></div>
            <div class="planets"></div>
                <img srcset=
                    "path-to-planet1-xs.png 480w,
                    path-to-planet1-sm.png 768w,
                    path-to-planet1-md.png 992w,
                    path-to-planet1-lg.png 1200w,
                    path-to-planet1-xl.png 1920w"
                    sizes=
                        "(max-width: 575.98px) 480px,
                        (min-width: 576px) and (max-width: 767.98px) 768px,
                        (min-width: 768px) and (max-width: 991.98px) 992px,
                        (min-width: 992px) and (max-width: 1199.98px) 1200px,
                        (min-width: 1200px) 1920px"
                    src=
                        "path-to-planet1-xs.png
                        path-to-planet1-sm.png
                        path-to-planet1-md.png
                        path-to-planet1-lg.png
                        path-to-planet1-xl.png"
                    alt="Planet Image"
                    loading="lazy">
            <div class="nebula-clouds"></div>
            <div class="stardust-trail"></div>
            <div class="aurora-borealis"></div>
            <!-- Stars, Planets, Nebula Clouds, Stardust Trail, Gravitational Pull Effect, Aurora Borealis Effect go here -->
        </div>

        <audio id="ambientAudio" controls>
            <source src="path/to/ambient.mp3" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <button aria-label="Play or Pause" id="animationControl">Play/Pause</button>


        <!-- Typography -->
        <div class="d-flex justify-content-center align-items-center w-100 h-100 position-absolute">
            <div class="text-center">
                <h1 class="main-title">IJR Marketing</h1>
                <p class="tagline">Embark on Your Digital Odyssey</p>
                <button class="cta-button">Begin Journey</button>
            </div>
        </div>

        <!-- Audio Control -->
        <button class="audio-control position-absolute">🔊</button>
    </section>

    <!-- Add other sections of the website here -->

    <!-- JS Libraries and Custom Scripts -->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    <!-- Add other necessary JS libraries and custom scripts here -->
</body>
</html>
