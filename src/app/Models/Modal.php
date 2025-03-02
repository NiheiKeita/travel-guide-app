<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Modal extends Model
{
    use SoftDeletes;

    protected $guarded = [
        'id',
    ];

    /**
     * @return BelongTo<Travel>
     */
    public function travel(): BelongsTo
    {
        return $this->belongsTo(Travel::class);
    }
    /**
     * @return HasMany<Schedule>
     */
    public function schedules(): HasMany
    {
        return $this->hasMany(Schedule::class);
    }
    /**
     * @return HasMany<Card>
     */
    public function cards(): HasMany
    {
        return $this->hasMany(Card::class);
    }
}
