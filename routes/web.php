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


Route::get('/admin','AdminController@dashboard');
Route::post('/admin','AdminController@dashboard');

Route::get('/admin/slideshow','AdminController@slideshow');
Route::post('/admin/slideshow','AdminController@slideshow');

Route::delete('/admin/slideshow/{slideshow}','AdminController@destroy_slideshow');
Route::get('/admin/slideshow/{slideshow}/edit','AdminController@edit_slideshow');
Route::patch('/admin/slideshow/{slideshow}','AdminController@update_slideshow');

Route::get('/admin/add_slideshow','AdminController@create');
Route::post('/admin/add_slideshow','AdminController@store')->name('add.slideshow');

Route::get('/himpunan','HomeController@himpunan')->name('himpunan');
Route::post('/himpunan','HomeController@himpunan')->name('himpunan');

Route::get('/ukm','HomeController@ukm')->name('ukm');
Route::post('/ukm','HomeController@ukm')->name('ukm');

Route::get('/kegiatan-mahasiswa','HomeController@kegiatanMahasiswa')->name('kegiatan-mahasiswa');
Route::post('/kegiatan-mahasiswa','HomeController@kegiatanMahasiswa')->name('kegiatan-mahasiswa');

Route::get('/about-us','HomeController@aboutus')->name('about-us');
Route::post('/about-us','HomeController@aboutus')->name('about-us');
