<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ItemRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        return [
            'site' => ['required', 'string', 'max:50'],
            'tre_num' => ['required', 'string', 'max:255'],
            'line_no' => ['required', 'string', 'max:20'],
            'item_type' => ['required', 'string', 'max:20'],
            'transaction_date' => ['required', 'date'],
            'invoice_no' => ['required', 'string', 'max:60'],
            'tin' => ['required', 'string', 'max:30'],
            'vendor_code' => ['required', 'string', 'max:20'],
            'vendor_name' => ['required', 'string', 'max:200'],
            'address_line1' => ['required', 'string', 'max:255'],
            'address_line2' => ['nullable', 'string', 'max:255'],
            'address_line3' => ['nullable', 'string', 'max:255'],
            'with_vat' => ['required', 'boolean'],
            'receipt_total' => ['required', 'numeric'],
            'vatable_sales' => ['required', 'numeric'],
            'invoice_total' => ['nullable', 'numeric'],
            'non_vat_sales' => ['required', 'numeric'],
            'exempt_sales' => ['nullable', 'numeric'],
            'vat_amount' => ['required', 'numeric'],
            'account_code' => ['required', 'string', 'max:20'],
            'acctu3' => ['nullable', 'string', 'max:20'],
            'acctu4' => ['nullable', 'string', 'max:20'],
            'vat_class' => ['nullable', 'string', 'max:5'],
            'remarks' => ['nullable', 'string', 'max:255'],
            'is_for_approval' => ['required', 'boolean'],
            'del_charge' => ['nullable', 'numeric'],
            'scpwd_basis' => ['nullable', 'numeric'],
            'scpwd_disc' => ['nullable', 'numeric'],
        ];
    }
}
