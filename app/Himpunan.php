<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Himpunan extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */


    protected $table = 'himpunan';

    protected $fillable = [
        'name', 'photo', 'fakultas', 'info1', 'info2', 'ig', 'linkig', 'line', 'linkline', 'web'
    ];

}
