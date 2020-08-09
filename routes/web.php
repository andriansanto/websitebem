<?php

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

Auth::Routes();

Route::get('/','HomeController@index'); 

/**SLIDE SHOW HOME PAGE */

Route::get('/admin','AdminController@dashboard');
Route::post('/admin','AdminController@dashboard');

Route::get('/admin/slideshow','AdminController@slideshow');
Route::post('/admin/slideshow','AdminController@slideshow');

Route::delete('/admin/slideshow/{slideshow}','AdminController@destroy_slideshow');
Route::get('/admin/slideshow/{slideshow}/edit','AdminController@edit_slideshow');
Route::patch('/admin/slideshow/{slideshow}','AdminController@update_slideshow');

Route::get('/admin/add_slideshow','AdminController@create');
Route::post('/admin/add_slideshow','AdminController@store')->name('add.slideshow');

/**ABOUT US GENERASI */

Route::get('/admin/aboutus','AdminController@aboutus');
Route::post('/admin/aboutus','AdminController@aboutus');

Route::delete('/admin/aboutus/{generasi}','AdminController@destroy_gen');
Route::get('/admin/aboutus/{generasi}/edit','AdminController@edit_gen');
Route::patch('/admin/aboutus/{generasi}','AdminController@update_gen');

Route::get('/admin/add_gen','AdminController@create_gen');
Route::post('/admin/add_gen','AdminController@store_gen')->name('add.gen');

/**PAGES */

Route::get('/himpunan','HomeController@himpunan')->name('himpunan');
Route::post('/himpunan','HomeController@himpunan')->name('himpunan');

Route::get('/ukm','HomeController@ukm')->name('ukm');
Route::post('/ukm','HomeController@ukm')->name('ukm');

Route::get('/kegiatan-mahasiswa','HomeController@kegiatanMahasiswa')->name('kegiatan-mahasiswa');
Route::post('/kegiatan-mahasiswa','HomeController@kegiatanMahasiswa')->name('kegiatan-mahasiswa');

Route::get('/about-us','HomeController@aboutus')->name('about-us');
Route::post('/about-us','HomeController@aboutus')->name('about-us');
