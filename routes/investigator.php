<?php
use Illuminate\Support\Facades\Route;

Route::group(['namespace' => 'Investigator'], function() {
    Route::get('/', 'HomeController@index')->name('investigator.dashboard');

    // Login
    Route::get('login', 'Auth\LoginController@showLoginForm')->name('investigator.login');
    Route::post('login', 'Auth\LoginController@login');
    Route::post('logout', 'Auth\LoginController@logout')->name('investigator.logout');

    // Register
    Route::get('register', 'Auth\RegisterController@showRegistrationForm')->name('investigator.register');
    Route::post('register', 'Auth\RegisterController@register');

    // Passwords
    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail')->name('investigator.password.email');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');
    Route::get('password/reset', 'Auth\ForgotPasswordController@showLinkRequestForm')->name('investigator.password.request');
    Route::get('password/reset/{token}', 'Auth\ResetPasswordController@showResetForm')->name('investigator.password.reset');

    // Must verify email
    Route::get('email/resend','Auth\VerificationController@resend')->name('investigator.verification.resend');
    Route::get('email/verify','Auth\VerificationController@show')->name('investigator.verification.notice');
    Route::get('email/verify/{id}/{hash}','Auth\VerificationController@verify')->name('investigator.verification.verify');
});
