<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link rel="icon" href="https://elitelodgit.com/wp-content/uploads/2019/09/cropped-imageonline-co-transparentimage-11-32x32.png" sizes="32x32" />
    <link rel="icon" href="https://elitelodgit.com/wp-content/uploads/2019/09/cropped-imageonline-co-transparentimage-11-192x192.png" sizes="192x192" />
    <link rel="apple-touch-icon" href="https://elitelodgit.com/wp-content/uploads/2019/09/cropped-imageonline-co-transparentimage-11-180x180.png" />
    <meta name="msapplication-TileImage" content="https://elitelodgit.com/wp-content/uploads/2019/09/cropped-imageonline-co-transparentimage-11-270x270.png" />
    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    <link href="{{ asset('css/main.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app">

        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>
