<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>{{ config('app.name', 'Laravel') }}</title>
    <link rel="icon"
        href="https://elitelodgit.com/wp-content/uploads/2019/09/cropped-imageonline-co-transparentimage-11-32x32.png"
        sizes="32x32" />
    <link rel="icon"
        href="https://elitelodgit.com/wp-content/uploads/2019/09/cropped-imageonline-co-transparentimage-11-192x192.png"
        sizes="192x192" />
    <link rel="apple-touch-icon"
        href="https://elitelodgit.com/wp-content/uploads/2019/09/cropped-imageonline-co-transparentimage-11-180x180.png" />
    <meta name="msapplication-TileImage"
        content="https://elitelodgit.com/wp-content/uploads/2019/09/cropped-imageonline-co-transparentimage-11-270x270.png" />

    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
</head>

<body class>
    <div id="app">
        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>

</html>
