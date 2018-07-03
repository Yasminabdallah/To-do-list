<?php

namespace App;

use Jenssegers\Mongodb\Eloquent\Model as Eloquent;

class Note extends Eloquent
{
    protected $connection = 'mongodb';

    protected $collection = 'lists';
    protected $fillable = [
        'description', 'starttime', 'endtime',
    ];
    
}
