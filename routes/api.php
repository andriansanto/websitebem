<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::get('slideshow','ApiController@slideshow');
Route::get('ukm-senbud','ApiController@ukm_senbud');
Route::get('ukm-or','ApiController@ukm_or');
Route::get('ukm-sainsos','ApiController@ukm_sainsos');
Route::get('gen','ApiController@generasi');
Route::get('himpunan','ApiController@himpunan');
Route::get('kegiatan','ApiController@kegiatan');
Route::get('lso','ApiController@lso');

