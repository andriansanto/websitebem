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
        $slideshow->photo = "/assets/img/img1.jpg";
        $slideshow->save();

        $slideshow = new App\SlideShow;
        $slideshow->name = "photo2";
        $slideshow->photo = "/assets/img/img2.jpg";
        $slideshow->save();

        $slideshow = new App\SlideShow;
        $slideshow->name = "photo3";
        $slideshow->photo = "/assets/img/img3.jpg";
        $slideshow->save();
    }
}
