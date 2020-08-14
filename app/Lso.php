<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Lso extends Model
{
    /**
     * The table associated with the model.
     *
     * @var string
     */


    protected $table = 'lso';

    protected $fillable = [
        'name', 'photo', 'info1', 'info2', 'info3', 'ig', 'link'
    ];

}
