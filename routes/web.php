<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Route::group(['middleware' => ['auth']], function () {


Route::get('welcome/{user}', 'WelcomeController@showWelcomeForm')->name('welcome');
Route::post('welcome/{user}', 'WelcomeController@savePassword');

// Route::get('wel', 'WelcomeController@wel');

Auth::routes();


// guard
Route::group(['middleware' => ['auth']], function () {
    Route::get('home', function () {
        return redirect('/');
    });

    Route::get('/', 'HomeController@index')->name('home');

    Route::resource('users', 'UserController');
    Route::resource('roles', 'RoleController');
    Route::resource('clients', 'ClientController');
    Route::resource('company', 'CompanyController');



    Route::patch('change_password/{id}', 'UserController@change_password')->name('change_password');
    Route::get('getUserPerm/{id}', 'UserController@getUserPerm')->name('getUserPerm');
    Route::post('userpermisions/{id}', 'UserController@userpermisions');
    Route::patch('undeletedUser/{id}', 'UserController@undeletedUser')->name('undeletedUser');
    Route::delete('force_user/{id}', 'UserController@force_user')->name('force_user');
    Route::get('deletedUsers', 'UserController@deletedUsers')->name('deletedUsers');
    Route::get('permissions/{guard}', 'RoleController@permissions');
    Route::any('getRolesPerm/{guard}/{id}', 'RoleController@getRolesPerm')->name('getRolesPerm');

    Route::post('company_logo', 'CompanyController@company_logo');

    Route::get('client_search/{search}', 'ClientController@client_search');

    Route::get('dashboard_data', 'DashboardController@dashboard_data');

});



// });
