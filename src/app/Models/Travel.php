<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Travel extends Model
{
    protected $table = 'travels';
    use SoftDeletes;

    protected $guarded = [
        'id',
    ];
}
