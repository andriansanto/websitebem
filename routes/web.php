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

/**ADMIN PANEL SLIDE SHOW HOME */

Route::get('/admin','AdminController@dashboard');
Route::post('/admin','AdminController@dashboard');

Route::get('/admin/slideshow','AdminController@slideshow');
Route::post('/admin/slideshow','AdminController@slideshow');

Route::delete('/admin/slideshow/{slideshow}','AdminController@destroy_slideshow');
Route::get('/admin/slideshow/{slideshow}/edit','AdminController@edit_slideshow');
Route::patch('/admin/slideshow/{slideshow}','AdminController@update_slideshow');

Route::get('/admin/add_slideshow','AdminController@create');
Route::post('/admin/add_slideshow','AdminController@store')->name('add.slideshow');

/**ADMIN PANEL GENERASI ABOUT US */

Route::get('/admin/aboutus','AdminController@aboutus');
Route::post('/admin/aboutus','AdminController@aboutus');

Route::delete('/admin/aboutus/{generasi}','AdminController@destroy_gen');
Route::get('/admin/aboutus/{generasi}/edit','AdminController@edit_gen');
Route::patch('/admin/aboutus/{generasi}','AdminController@update_gen');

Route::get('/admin/add_gen','AdminController@create_gen');
Route::post('/admin/add_gen','AdminController@store_gen')->name('add.gen');

/**ADMIN PANEL UKM */

Route::get('/admin/ukm','AdminController@ukm');
Route::post('/admin/ukm','AdminController@ukm');

Route::delete('/admin/ukm/{ukm}','AdminController@destroy_ukm');
Route::get('/admin/ukm/{ukm}/edit','AdminController@edit_ukm');
Route::patch('/admin/ukm/{ukm}','AdminController@update_ukm');

Route::get('/admin/add_ukm','AdminController@create_ukm');
Route::post('/admin/add_ukm','AdminController@store_ukm')->name('add.ukm');

/**ADMIN PANEL KEGIATAN */

Route::get('/admin/kegiatan','AdminController@kegiatan');
Route::post('/admin/kegiatan','AdminController@kegiatan');

Route::delete('/admin/kegiatan/{keg}','AdminController@destroy_kegiatan');
Route::get('/admin/kegiatan/{keg}/edit','AdminController@edit_kegiatan');
Route::patch('/admin/kegiatan/{keg}','AdminController@update_kegiatan');

Route::get('/admin/add_kegiatan','AdminController@create_kegiatan');
Route::post('/admin/add_kegiatan','AdminController@store_kegiatan')->name('add.keg');

/**ADMIN PANEL LSO */

Route::get('/admin/lso','AdminController@lso');
Route::post('/admin/lso','AdminController@lso');

Route::delete('/admin/lso/{lso}','AdminController@destroy_lso');
Route::get('/admin/lso/{lso}/edit','AdminController@edit_lso');
Route::patch('/admin/lso/{lso}','AdminController@update_lso');

Route::get('/admin/add_lso','AdminController@create_lso');
Route::post('/admin/add_lso','AdminController@store_lso')->name('add.lso');

/**PAGES */

Route::get('/himpunan','HomeController@himpunan')->name('himpunan');
Route::post('/himpunan','HomeController@himpunan')->name('himpunan');

Route::get('/ukm','HomeController@ukm')->name('ukm');
Route::post('/ukm','HomeController@ukm')->name('ukm');

Route::get('/kegiatan-mahasiswa','HomeController@kegiatanMahasiswa')->name('kegiatan-mahasiswa');
Route::post('/kegiatan-mahasiswa','HomeController@kegiatanMahasiswa')->name('kegiatan-mahasiswa');

Route::get('/about-us','HomeController@aboutus')->name('about-us');
Route::post('/about-us','HomeController@aboutus')->name('about-us');

Route::get('/web-team','HomeController@webteam')->name('web-team');
Route::post('/web-team','HomeController@webteam')->name('web-team');