<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Hotel extends Model
{
    use SoftDeletes;

    protected $guarded = [
        'id',
    ];

    /**
     * @return BelongsToMany<Travel>
     */
    public function travels(): BelongsToMany
    {
        return $this->belongsToMany(Travel::class);
    }
    /**
     * @return MorphMany<Image>
     */
    public function images(): MorphMany
    {
        return $this->morphMany(Image::class, 'imageable');
    }
}
