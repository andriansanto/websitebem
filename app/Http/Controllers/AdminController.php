<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SlideShow;
use App\Generasi;

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

        Generasi::destroy($generasi->id);
        return redirect('/admin/aboutus')->with('status', 'Generasi berhasil dihapus !');
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
            return redirect('/admin')->with('unstatus', 'Slide show tidak berhasil ditambahkan !');
            $generasi->photo = '';
        }
        $generasi->save();

        return redirect('/admin')->with('status', 'Slide show berhasil ditambahkan !');
    }
}
