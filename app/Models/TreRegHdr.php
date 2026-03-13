<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TreRegHdr extends Model
{
    use HasFactory, SoftDeletes;

    // Table name is now tre_reg_headers (Laravel finds this automatically)

    protected $table = 'tre_reg_headers';

    protected $fillable = [
        'site',
        'tre_num',
        'user_id',
        'year',
        'month',
        'period',
        'quarter',
        'status',
        'is_for_approval',
    ];

    protected $casts = [
        'is_for_approval' => 'boolean',
        'year' => 'integer',
    ];
}
