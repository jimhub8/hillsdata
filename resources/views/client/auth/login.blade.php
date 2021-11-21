@extends('layouts.auth')

@section('content')
    <div class="lg:flex">

        <div class="hidden lg:flex items-center justify-center bg-indigo-100 flex-1 h-screen">
            <div class="max-w-xs transform duration-200 hover:scale-110 cursor-pointer">
                <img src="/site/login.png" alt="">
            </div>
        </div>
        <div class="lg:w-1/2 xl:max-w-screen-sm">
            <div class="py-12 bg-indigo-100 lg:bg-white flex justify-center lg:justify-start lg:px-12">
                <div class="cursor-pointer flex items-center">
                    <div>
                        <img src="/logo/logo.png" alt="" width="120">
                    </div>
                </div>
            </div>
            <div class="mt-10 px-12 sm:px-24 md:px-48 lg:px-12 lg:mt-16 xl:px-24 xl:max-w-2xl">
                <h2 class="text-center text-4xl font-display font-semibold lg:text-left xl:text-5xl
                    xl:text-bold"
                    style="color: #E3193A;">Log in</h2>
                <div class="mt-12">
                    <form method="POST" action="{{ route('client.login') }}" aria-label="{{ __('Login') }}">
                        @csrf
                        <div>
                            <div class="text-sm font-bold text-gray-700 tracking-wide">Email Address</div>
                            <input
                                class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                id="email" type="email" placeholder="mike@gmail.com" autocomplete="email" autofocus required
                                name="email">


                            @error('email')
                                <span class="invalid-feedback" role="alert">
                                    <strong style="color: #E3193A;">{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="mt-8">
                            <div class="flex justify-between items-center">
                                <div class="text-sm font-bold text-gray-700 tracking-wide">
                                    Password
                                </div>
                                <div>
                                    <a class="text-xs font-display font-semibold text-indigo-600 hover:text-indigo-800
                                        cursor-pointer"
                                        style="color: #E3193A;">
                                        Forgot Password?
                                    </a>
                                </div>
                            </div>

                            <input
                                class="w-full text-lg py-2 border-b border-gray-300 focus:outline-none focus:border-indigo-500"
                                type="password" placeholder="Enter your password" required autocomplete="current-password"
                                name="password">
                            @error('password')
                                <span class="invalid-feedback" role="alert">
                                    <strong style="color: #E3193A;">{{ $message }}</strong>
                                </span>
                            @enderror
                        </div>
                        <div class="mt-10">
                            <button
                                class="bg-indigo-500 text-gray-100 p-4 w-full rounded-full tracking-wide
                                font-semibold font-display focus:outline-none focus:shadow-outline hover:bg-indigo-600
                                shadow-lg"
                                style="background: #E3193A;">
                                Log In
                            </button>
                        </div>
                    </form>

                    <div class="mt-12 text-sm font-display font-semibold text-gray-700 text-center">
                        Login as
                        <a class="cursor-pointer text-indigo-600 hover:text-indigo-800" style="color: #E3193A;" href="/login">Staff</a> <small>or </small>
                        <a class="cursor-pointer text-indigo-600 hover:text-indigo-800" style="color: #E3193A;" href="/investigatorhome">Investigator</a>
                    </div>

                </div>
            </div>
        </div>
    </div>
@endsection
