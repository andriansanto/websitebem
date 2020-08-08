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
    }
}
