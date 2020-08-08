<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SlideShow extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */


    protected $table = 'slideshow';

    protected $fillable = [
        'name', 'photo'
    ];

}
