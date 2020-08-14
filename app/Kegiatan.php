<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Kegiatan extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */


    protected $table = 'kegiatan';

    protected $fillable = [
        'name', 'photo', 'info', 'ig', 'link'
    ];

}
