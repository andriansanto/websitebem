<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>
    
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet">
    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('css/cms/fontawesome-5.12.1/css/fontawesome.min.css') }}">
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="../../css/default.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.lineicons.com/2.0/LineIcons.css">
    
</head>
<body>
    <div id="app">
    
        <nav class="navbar navbar-expand-md navbar-light bg-light shadow-sm fixed-top">
            <div class="container">
            <a class="navbar-brand d-flex" href="{{ url('/') }}">
                    <div><img src="/assets/bem2.png" style="height: 25px; border-right: 1px solid #333333;" class="pr-3"></div>
                    <div class="pl-3 text-umn">BEM UMN</div>
            </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @if(Auth::guard('web')->check())
                        <li class="nav-item">
                            <a class="nav-link" href="{{ route('logout') }}" onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                {{ __('Keluar') }}
                            </a>
                            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                @csrf
                            </form>
                        </li>
                            
                        @else
                        <li class="nav-item">
                                <a class="nav-link" href="{{ route('himpunan') }}">
                                    <div class="text-umn">
                                        HIMPUNAN
                                    </div>
                                </a>
                            </li>
                            
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('ukm') }}">
                                    <div class="text-umn">
                                        UKM
                                    </div>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('kegiatan-mahasiswa') }}">
                                    <div class="text-umn">
                                        KEGIATAN MAHASISWA
                                    </div>
                                </a>
                            </li>

                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('about-us') }}">
                                    <div class="text-umn">
                                        ABOUT US
                                    </div>
                                </a>
                            </li>
                        @endif
                    </ul>
                </div>
            </div>
        </nav>

        <main  style="padding-top: 0 !important;">
            @yield('content')
        </main>
    </div>
</body>

<style>
    .navbar-bg {
        box-shadow: 0 0rem 0.25rem rgba(255, 255, 255, 1) !important;
    }

    .navbar-bg.scrolled {
        background-color: white !important;
        transition: 150ms ease;
        box-shadow: 0 0.25rem 0.25rem rgba(0, 0, 0, 0.067) !important;
    }

    .text-umn {
        color: #233e57;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;

    }

    .title-umn {
        color: #233e57;
        font-weight: bold;
        font-family: 'Montserrat', sans-serif;
        padding-top: 20px;

    }
}

</style>

<script>
    $(window).scroll(function() {
        $('nav').toggleClass('scrolled', $(this).scrollTop() > 500);
    })

    $(window).scroll(function() {
        $('div').toggleClass('scrolledd', $(this).scrollTop() > 500);
    })
</script>

</html>
