<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ukm extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */


    protected $table = 'ukm';

    protected $fillable = [
        'name', 'photo', 'info', 'ig', 'link', 'hari', 'jam', 'tagline', 'bidang'
    ];

}
