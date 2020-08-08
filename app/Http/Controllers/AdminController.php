<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\SlideShow;

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

        $slideshowFilename = strtolower(str_replace(" ","-",$request->name));
        
        if($request->hasFile('photo')) {
            $file = $request->file('photo');
            $filename = '/assets/img/'.time() . '.' . $_FILES['photo']['name'];
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

        SlideShow::destroy($slideshow->id);
        return redirect('/admin/slideshow')->with('status', 'Slide show berhasil dihapus !');
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
            $filename = '/assets/img/'.time() . '.' . $_FILES['photo']['name'];
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
}
