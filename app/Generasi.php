<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Generasi extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */


    protected $table = 'generasi';

    protected $fillable = [
        'name', 'photo'
    ];

}
