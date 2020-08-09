<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SlideShow;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('base')->with(['slideshows' => SlideShow::all()]);
    }

    public function himpunan()
    {
        return view('himp');
    }

    public function ukm()
    {
        return view('ukm');
    }

    public function kegiatanMahasiswa()
    {
        return view('kegiatanMahasiswa');
    }

    public function aboutus()
    {
        return view('aboutus');
    }

    public function webteam()
    {
        return view('webteam');
    }
}
