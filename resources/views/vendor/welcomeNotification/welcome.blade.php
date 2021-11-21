
<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <!-- Fonts -->
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">

        <!-- Styles -->
        {{-- <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"> --}}

        <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">

        <!-- Scripts -->
        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.7.3/dist/alpine.js" defer></script>
    </head>
    <body>
        <div class="font-sans text-gray-900 antialiased">
            <div class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
                <div class="max-w-md space-y-8" style="width: 40%">
                    <div>
                        <img class="mx-auto h-12 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                            alt="Workflow">
                        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
                        <p class="mt-2 text-center text-sm text-gray-600">

                            <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500">
                                Setup your account
                            </a>
                        </p>
                    </div>
                    <form class="mt-8 space-y-6" action="#" method="POST">
                        @csrf
                        <input type="hidden" name="email" value="{{ $user->email }}" />
                        <div class="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label for="email-address" class="sr-only">Password</label>
                                <!-- <input id="email-address" name="email" type="email" autocomplete="email" required
                                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Email address">
             -->

                                <input id="password" type="password"
                                    class="@error('password') is-invalid @enderror appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    name="password" required autocomplete="new-password" placeholder="Password">

                                @error('password')
                                <span style="color: red">
                                    <strong>{{ $message }}</strong>
                                </span>
                                @enderror

                            </div>
                            <div>
                                <label for="password" class="sr-only">Confirm Password</label>
                                <!-- <input id="password" name="password" type="password" autocomplete="current-password" required
                                    class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    placeholder="Password"> -->


                                <input id="password-confirm" type="password" name="password_confirmation" required
                                    autocomplete="new-password" class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password confirmation">
                            </div>
                        </div>


                        <div>
                            <button type="submit"
                                class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" style="background: #161e2e">
                                Confirm
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </body>
</html>
