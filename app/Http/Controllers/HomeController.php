<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SlideShow;
use App\Contact;

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
        return view('base')->with(['contacts' => Contact::all()]);;
    }

    public function himpunan()
    {
        return view('himp')->with(['contacts' => Contact::all()]);;
    }

    public function ukm()
    {
        return view('ukm')->with(['contacts' => Contact::all()]);;
    }

    public function kegiatanMahasiswa()
    {
        return view('kegiatanMahasiswa')->with(['contacts' => Contact::all()]);;
    }

    public function aboutus()
    {
        return view('aboutus')->with(['contacts' => Contact::all()]);;
    }

    public function webteam()
    {
        return view('webteam')->with(['contacts' => Contact::all()]);;
    }
}
