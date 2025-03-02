<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Schedule extends Model
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
     * @return BelongsTo<Modal>
     */
    public function modal(): BelongsTo
    {
        return $this->belongsTo(Modal::class);
    }
}
