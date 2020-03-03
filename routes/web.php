<?php

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

Route::get('/', function () {
    return view('welcome');
});
Route::get('/dashboard', 'HomeController@dashboard')->name('dashboard');

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

Route::get('/analysis', 'BAController@index')->name('homeBA');

// START ROUTING FOR SUPPLY CHAIN MANAGEMENT
Route::get('/scm', 'SCMController@index')->name('scm');
Route::get('{path}','SCMController@index')->where( 'path', '([A-z\d-/_.]+)?' );
// END ROUTING FOR SUPPLY CHAIN MANAGEMENT