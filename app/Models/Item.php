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
        'acctu3',
        'acctu4',
        'vat_class',
        'remarks',
        'is_for_approval',
        'del_charge',
        'scpwd_basis',
        'scpwd_disc',
        'exempt_sales',
        'invoice_total',
    ];

    protected $casts = [
        'transaction_date' => 'datetime',
        'with_vat' => 'boolean',
        'is_for_approval' => 'boolean',
        'receipt_total' => 'decimal:2',
        'vatable_sales' => 'decimal:2',
        'invoice_total' => 'decimal:2',
        'non_vat_sales' => 'decimal:2',
        'exempt_sales' => 'decimal:2',
        'vat_amount' => 'decimal:2',
        'del_charge' => 'decimal:2',
        'scpwd_basis' => 'decimal:2',
        'scpwd_disc' => 'decimal:2',
    ];
}
