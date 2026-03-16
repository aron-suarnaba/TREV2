<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class TreRegHdrRequest extends FormRequest
{
    public function authorize(): bool
    {
        return auth()->check();
    }

    public function rules(): array
    {
        $transaction = $this->route('transaction');
        $treRegHdrId = $transaction instanceof \App\Models\TreRegHdr ? $transaction->id : $transaction;

        return [
            'site' => ['required', 'string', 'max:50'],
            'tre_num' => [
                'required',
                'string',
                'max:255',
                Rule::unique('tre_reg_headers', 'tre_num')->ignore($treRegHdrId),
            ],
            'user_id' => ['required', 'string', 'max:255'],
            'year' => ['required', 'integer', 'between:1900,2100'],
            'month' => ['required', 'string', 'max:20'],
            'period' => ['required', 'integer', 'min:1', 'max:12'],
            'quarter' => ['required', 'integer', 'min:1', 'max:4'],
            'status' => ['required', 'string', Rule::in(['E', 'I', 'A'])],
            'is_for_approval' => ['required', 'boolean'],
        ];
    }

    public function messages(): array
    {
        return [
            'tre_num.unique' => 'TRE number already exists.',
        ];
    }
}
