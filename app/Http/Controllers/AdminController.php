<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SlideShow;
use App\Generasi;
use App\Ukm;
use App\Kegiatan;
use App\Lso;

class AdminController extends Controller
{
    // public function __construct()
    // {
    //     $this->middleware('guest');
    // }

    public function dashboard(){
        return view('admin.dashboard');
    }

    public function slideshow(){
        return view('admin.slideshow')->with(['slideshows' => SlideShow::all()]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function edit_slideshow(SlideShow $slideshow)
    {
        return view('admin.edit-slideshow', compact('slideshow'));
    }

    public function update_slideshow(Request $request, SlideShow $slideshow)
    {
        $request->validate([
            'name' => 'required|max:255',
            'photo' => 'image|max:1000'
        ]);

        SlideShow::where('id', $slideshow->id)
        ->update([
            'name' => $request->name,
        ]);
        
        if($request->hasFile('photo')) {
            $file = $request->file('photo');
            $filename = 'assets/img/'.time() . '.' . $_FILES['photo']['name'];
            $target = 'assets/img';
            $file->move($target,$filename);
            $slideshow->photo = $filename;
        } else {
            return redirect('/admin/slideshow')->with('unstatus', 'Slide show berhasil diubah dengan gambar yang sama !');
            $slideshow->photo = '';
        }
        $slideshow->save();

        return redirect('/admin/slideshow')->with('status', 'Slide show berhasil diubah !');
    }

    public function destroy_slideshow(SlideShow $slideshow)
    {
        
        $path = SlideShow::find($slideshow->id)->photo;
        
        if(unlink($path)){
            SlideShow::destroy($slideshow->id);
            return redirect('/admin/slideshow')->with('status', 'Slide show berhasil dihapus !');
        }
        else{
            return redirect('/admin/slideshow')->with('status', 'Slide show gagal dihapus !');
        }
    }

    public function create()
    {
        return view('/admin/add-slideshow');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'photo' => 'required|image|max:1000'
        ]);

        $slideshow = new slideShow();
        $slideshow->name = $request->name;

        if($request->hasFile('photo')) {
            $file = $request->file('photo');
            $filename = 'assets/img/'.time() . '.' . $_FILES['photo']['name'];
            $target = 'assets/img';
            $file->move($target,$filename);
            $slideshow->photo = $filename;
        } else {
            return redirect('/admin')->with('unstatus', 'Slide show tidak berhasil ditambahkan !');
            $slideshow->photo = '';
        }
        $slideshow->save();

        return redirect('/admin')->with('status', 'Slide show berhasil ditambahkan !');
    }

    /**ABOUT US GENERASI */

    public function aboutus(){
        return view('admin.gen')->with(['gens' => Generasi::all()]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function edit_gen(Generasi $generasi)
    {
        return view('admin.edit-gen', compact('generasi'));
    }

    public function update_gen(Request $request, Generasi $generasi)
    {
        $request->validate([
            'name' => 'required|max:255',
            'photo' => 'image|max:1000'
        ]);

        Generasi::where('id', $generasi->id)
        ->update([
            'name' => $request->name,
        ]);
        
        if($request->hasFile('photo')) {
            $file = $request->file('photo');
            $filename = 'assets/img/'.time() . '.' . $_FILES['photo']['name'];
            $target = 'assets/img';
            $file->move($target,$filename);
            $generasi->photo = $filename;
        } else {
            return redirect('/admin/aboutus')->with('unstatus', 'Generasi berhasil diubah dengan gambar yang sama !');
            $generasi->photo = '';
        }
        $generasi->save();

        return redirect('/admin/aboutus')->with('status', 'Generasi berhasil diubah !');
    }

    public function destroy_gen(Generasi $generasi)
    {
        $path = Generasi::find($generasi->id)->photo;
        
        if(unlink($path)){
            Generasi::destroy($generasi->id);
            return redirect('/admin/aboutus')->with('status', 'Generasi berhasil dihapus !');
        }
        else{
            return redirect('/admin/aboutus')->with('status', 'Generasi gagal dihapus !');
        }

    }

    public function create_gen()
    {
        return view('/admin/add-gen');
    }

    public function store_gen(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'photo' => 'required|image|max:1000'
        ]);

        $generasi = new Generasi();
        $generasi->name = $request->name;

        if($request->hasFile('photo')) {
            $file = $request->file('photo');
            $filename = 'assets/img/'.time() . '.' . $_FILES['photo']['name'];
            $target = 'assets/img';
            $file->move($target,$filename);
            $generasi->photo = $filename;
        } else {
            return redirect('/admin')->with('unstatus', 'Generasi tidak berhasil ditambahkan !');
            $generasi->photo = '';
        }
        $generasi->save();

        return redirect('/admin')->with('status', 'Generasi berhasil ditambahkan !');
    }

    /**UKM */

    public function ukm(){
        return view('admin.ukm')->with(['ukms' => Ukm::all()]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function edit_ukm(Ukm $ukm)
    {
        return view('admin.edit-ukm', compact('ukm'));
    }

    public function update_ukm(Request $request, Ukm $ukm)
    {
        $request->validate([
            'name' => 'required|max:255',
            'photo' => 'image|max:1000',
            'info' => 'required',
            'hari' => 'required|max:255',
            'waktu' => 'required|max:255',
            'instagram' => 'required|max:255',
            'tagline' => 'required|max:255'
        ]);

        Ukm::where('id', $ukm->id)
        ->update([
            'name' => $request->name,
            'info' => $request->info,
            'hari' => $request->hari,
            'jam' => $request->waktu,
            'ig' => $request->instagram,
            'link' => "http://www.instagram.com/" . $request->instagram,
            'tagline' => $request->tagline
        ]);
        
        if($request->hasFile('photo')) {
                $file = $request->file('photo');

                $path = Ukm::find($ukm->id)->photo;
        
                unlink($path);

            if($ukm->bidang == "olahraga"){
                $filename = 'assets/ukmnobg/olahraga/'.time() . '.' . $_FILES['photo']['name'];
                $target = 'assets/ukmnobg/olahraga';
                $file->move($target,$filename);
                $ukm->photo = $filename;
            }
            else if($ukm->bidang == "sainsos"){
                $filename = 'assets/ukmnobg/sainsos/'.time() . '.' . $_FILES['photo']['name'];
                $target = 'assets/ukmnobg/sainsos';
                $file->move($target,$filename);
                $ukm->photo = $filename;
            }
            else if($ukm->bidang == "senbud"){
                $filename = 'assets/ukmnobg/senbud/'.time() . '.' . $_FILES['photo']['name'];
                $target = 'assets/ukmnobg/senbud';
                $file->move($target,$filename);
                $ukm->photo = $filename;
            }
        } else {
            return redirect('/admin/ukm')->with('unstatus', 'UKM berhasil diubah dengan gambar yang sama !');
            $ukm->photo = '';
        }
        $ukm->save();

        return redirect('/admin/ukm')->with('status', 'UKM berhasil diubah !');
    }

    public function destroy_ukm(Ukm $ukm)
    {
        $path = Ukm::find($ukm->id)->photo;
        
        if(unlink($path)){
            Ukm::destroy($ukm->id);
            return redirect('/admin/ukm')->with('status', 'UKM berhasil dihapus !');
        }
        else{
            return redirect('/admin/ukm')->with('status', 'UKM gagal dihapus !');
        }

    }

    public function create_ukm()
    {
        return view('/admin/add-ukm');
    }

    public function store_ukm(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'photo' => 'image|max:1000',
            'info' => 'required',
            'hari' => 'required|max:255',
            'waktu' => 'required|max:255',
            'instagram' => 'required|max:255',
            'tagline' => 'required|max:255',
            'bidang' => 'required',
        ]);

        $ukm = new Ukm();
        $ukm->name = $request->name;
        $ukm->info = $request->info;
        $ukm->hari = $request->hari;
        $ukm->jam = $request->waktu;
        $ukm->ig = $request->instagram;
        $ukm->link = "http://www.instagram.com/" . $request->instagram;
        $ukm->tagline = $request->tagline;
        $ukm->bidang = $request->bidang;

        if($request->hasFile('photo')) {
            $file = $request->file('photo');

        if($ukm->bidang == "olahraga"){
            $filename = 'assets/ukmnobg/olahraga/'.time() . '.' . $_FILES['photo']['name'];
            $target = 'assets/ukmnobg/olahraga';
            $file->move($target,$filename);
            $ukm->photo = $filename;
        }
        else if($ukm->bidang == "sainsos"){
            $filename = 'assets/ukmnobg/sainsos/'.time() . '.' . $_FILES['photo']['name'];
            $target = 'assets/ukmnobg/sainsos';
            $file->move($target,$filename);
            $ukm->photo = $filename;
        }
        else if($ukm->bidang == "senbud"){
            $filename = 'assets/ukmnobg/senbud/'.time() . '.' . $_FILES['photo']['name'];
            $target = 'assets/ukmnobg/senbud';
            $file->move($target,$filename);
            $ukm->photo = $filename;
        }
     } else {
            return redirect('/admin')->with('unstatus', 'UKM tidak berhasil ditambahkan !');
            $ukm->photo = '';
        }
        $ukm->save();

        return redirect('/admin')->with('status', 'UKM berhasil ditambahkan !');
    }


    /**KEGIATAN MAHASISWA */

    public function kegiatan(){
        return view('admin.keg')->with(['kegs' => Kegiatan::all()]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\hotel  $hotel
     * @return \Illuminate\Http\Response
     */
    public function edit_kegiatan(Kegiatan $keg)
    {
        return view('admin.edit-keg', compact('keg'));
    }

    public function update_kegiatan(Request $request, Kegiatan $keg)
    {
        $request->validate([
            'name' => 'required|max:255',
            'photo' => 'image|max:1000',
            'info' => 'required',
            'hari' => 'required|max:255',
            'waktu' => 'required|max:255',
            'instagram' => 'required|max:255',
            'tagline' => 'required|max:255'
        ]);

        Kegiatan::where('id', $keg->id)
        ->update([
            'name' => $request->name,
            'info' => $request->info,
            'ig' => $request->instagram,
            'link' => "http://www.instagram.com/" . $request->instagram
        ]);
        
        if($request->hasFile('photo')) {
                $file = $request->file('photo');

                $path = Kegiatan::find($keg->id)->photo;
        
                unlink($path);

                $filename = 'assets/kegiatan/'.time() . '.' . $_FILES['photo']['name'];
                $target = 'assets/kegiatan';
                $file->move($target,$filename);
                $keg->photo = $filename;
        } else {
            return redirect('/admin/kegiatan')->with('unstatus', 'Kegiatan berhasil diubah dengan gambar yang sama !');
            $keg->photo = '';
        }
        $keg->save();

        return redirect('/admin/kegiatan')->with('status', 'Kegiatan berhasil diubah !');
    }

    public function destroy_kegiatan(Kegiatan $keg)
    {
        $path = Kegiatan::find($keg->id)->photo;
        
        if(unlink($path)){
            Kegiatan::destroy($keg->id);
            return redirect('/admin/kegiatan')->with('status', 'Kegiatan berhasil dihapus !');
        }
        else{
            return redirect('/admin/kegiatan')->with('status', 'Kegiatan gagal dihapus !');
        }

    }

    public function create_kegiatan()
    {
        return view('/admin/add-keg');
    }

    public function store_kegiatan(Request $request)
    {
        $request->validate([
            'name' => 'required|max:255',
            'photo' => 'image|max:1000',
            'info' => 'required',
            'instagram' => 'required|max:255'
        
        ]);

        $keg = new Kegiatan();
        $keg->name = $request->name;
        $keg->info = $request->info;
        $keg->ig = $request->instagram;
        $keg->link = "http://www.instagram.com/" . $request->instagram;

        if($request->hasFile('photo')) {
            $file = $request->file('photo');

            $filename = 'assets/kegiatan/'.time() . '.' . $_FILES['photo']['name'];
            $target = 'assets/kegiatan';
            $file->move($target,$filename);
            $keg->photo = $filename;

     } else {
            return redirect('/admin')->with('unstatus', 'Kegiatan tidak berhasil ditambahkan !');
            $keg->photo = '';
        }
        $keg->save();

        return redirect('/admin')->with('status', 'Kegiatan berhasil ditambahkan !');
    }
}
