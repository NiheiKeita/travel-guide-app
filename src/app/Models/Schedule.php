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
     * @return BelongsTo<ScheduleGroup, $this>
     */
    public function scheduleGroups(): BelongsTo
    {
        return $this->belongsTo(ScheduleGroup::class);
    }

    /**
     * @return BelongsTo<Modal, $this>
     */
    public function modal(): BelongsTo
    {
        return $this->belongsTo(Modal::class);
    }
}
