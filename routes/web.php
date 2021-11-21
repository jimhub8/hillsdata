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

Auth::routes();


// guard
// Route::group(['middleware' => ['auth', 'guard']], function () {

    Route::get('/', 'HomeController@index')->name('home');

    Route::resource('users', 'UserController');
    Route::resource('roles', 'RoleController');
    Route::resource('clients', 'ClientController');
    Route::resource('company', 'CompanyController');
    Route::resource('incidences', 'IncidenceController');
    Route::resource('incidence_documents', 'IncidenceDocumentsController');
    Route::resource('investigations', 'InvestigationController');
    Route::resource('divisions', 'DivisionController');
    Route::resource('vehicle', 'VehicleController');
    Route::resource('org', 'OrganizationController');
    Route::resource('incident_person', 'PersonController');


    Route::post('person_image/{id}', 'PersonController@person_image');
    Route::post('vehicle_image/{id}', 'VehicleController@vehicle_image');
    Route::post('org_image/{id}', 'OrganizationController@org_image');


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


// });



// });
