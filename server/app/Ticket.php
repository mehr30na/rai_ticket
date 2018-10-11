<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    //
    protected $fillable = [
        'user_id',
        'type',
        'title',
        'description',
        'response',
        'orderPriority',
        'orderStatus',
        'readStatus',
    ];


}
