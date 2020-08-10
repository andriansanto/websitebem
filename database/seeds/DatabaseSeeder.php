<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $user = new App\User;
        $user->name = "BEM UMN";
        $user->email = "bem@umn.ac.id";
        $user->password = Hash::make("@dedicatetocreategen10");
        $user->save();

        $slideshow = new App\SlideShow;
        $slideshow->name = "photo1";
        $slideshow->photo = "assets/img/img1.jpg";
        $slideshow->save();

        $slideshow = new App\SlideShow;
        $slideshow->name = "photo2";
        $slideshow->photo = "assets/img/img2.jpg";
        $slideshow->save();

        $slideshow = new App\SlideShow;
        $slideshow->name = "photo3";
        $slideshow->photo = "assets/img/img3.jpg";
        $slideshow->save();

        /**ABOUT US GENERASI */

        $generasi = new App\Generasi;
        $generasi->name = "gen x";
        $generasi->photo = "assets/aboutus/au10.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen ix";
        $generasi->photo = "assets/aboutus/au9.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen viii";
        $generasi->photo = "assets/aboutus/au8.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen vii";
        $generasi->photo = "assets/aboutus/au7.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen vi";
        $generasi->photo = "assets/aboutus/au6.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen v";
        $generasi->photo = "assets/aboutus/au5.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen iv";
        $generasi->photo = "assets/aboutus/au4.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen iii";
        $generasi->photo = "assets/aboutus/au3.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen ii";
        $generasi->photo = "assets/aboutus/au2.png";
        $generasi->save();

        $generasi = new App\Generasi;
        $generasi->name = "gen i";
        $generasi->photo = "assets/aboutus/au1.png";
        $generasi->save();
    }
}
