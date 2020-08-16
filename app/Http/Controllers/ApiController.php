<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\SlideShow;
use App\Ukm;
use App\Kegiatan;
use App\Lso;
use App\Himpunan;
use App\Generasi;

class ApiController extends Controller{

    public function slideshow(slideShow $slideshow){
        $slideshows = $slideshow->all();

        return response()->json($slideshows);
    }

    public function ukm_or(Ukm $ukm){
        $ukms = Ukm::where('bidang', 'olahraga')->get();

        return response()->json($ukms);
    }

    public function ukm_sainsos(Ukm $ukm){
        $ukms = Ukm::where('bidang', 'sainsos')->get();

        return response()->json($ukms);
    }

    public function ukm_senbud(Ukm $ukm){
        $ukms = Ukm::where('bidang', 'senbud')->get();

        return response()->json($ukms);
    }

    public function kegiatan(Kegiatan $kegiatan){
        $kegiatans = $kegiatan->all();

        return response()->json($kegiatans);
    }

    public function lso(Lso $lso){
        $lsos = $lso->all();

        return response()->json($lsos);
    }

    public function generasi(Generasi $generasi){
        $generasis = $generasi->all();

        return response()->json($generasis);
    }

    public function himpunan(Himpunan $himpunan){
        $himpunans = $himpunan->all();

        return response()->json($himpunans);
    }

}