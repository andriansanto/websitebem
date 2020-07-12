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

Route::get('/', function () {
    return view('base');
});

Route::get('/himpunan','HomeController@himpunan')->name('himpunan');
Route::post('/himpunan','HomeController@himpunan')->name('himpunan');

Route::get('/ukm','HomeController@ukm')->name('ukm');
Route::post('/ukm','HomeController@ukm')->name('ukm');

Route::get('/kegiatan-mahasiswa','HomeController@kegiatanMahasiswa')->name('kegiatan-mahasiswa');
Route::post('/kegiatan-mahasiswa','HomeController@kegiatanMahasiswa')->name('kegiatan-mahasiswa');

Route::get('/about-us','HomeController@aboutus')->name('about-us');
Route::post('/about-us','HomeController@aboutus')->name('about-us');
