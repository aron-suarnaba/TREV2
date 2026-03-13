<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Item extends Model
{
    /** @use HasFactory<\Database\Factories\ItemFactory> */
    use HasFactory;

    protected $fillable = [
        'site',
        'tre_num',
        'line_no',
        'item_type',
        'transaction_date',
        'invoice_no',
        'tin',
        'vendor_code',
        'vendor_name',
        'address_line1',
        'address_line2',
        'address_line3',
        'with_vat',
        'receipt_total',
        'vatable_sales',
        'non_vat_sales',
        'vat_amount',
        'account_code',
        'vat_class',
        'remarks',
        'is_for_approval',
        'amount_1',
        'amount_2',
        'amount_3',
        'amount_4',
        'amount_5',
    ];

    protected $casts = [
        'transaction_date' => 'datetime',
        'with_vat' => 'boolean',
        'is_for_approval' => 'boolean',
        'receipt_total' => 'decimal:2',
        'vatable_sales' => 'decimal:2',
        'non_vat_sales' => 'decimal:2',
        'vat_amount' => 'decimal:2',
        'amount_1' => 'decimal:2',
        'amount_2' => 'decimal:2',
        'amount_3' => 'decimal:2',
        'amount_4' => 'decimal:2',
        'amount_5' => 'decimal:2',
    ];
}
