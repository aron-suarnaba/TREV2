<?php

namespace App\Http\Controllers;

use App\Models\TreRegHdr;
use Inertia\Inertia;
use Inertia\Response;

class TRERegHdrController extends Controller
{
    public function index(): Response
    {
        $transactions = TreRegHdr::query()
            ->select([
                'site',
                'tre_num',
                'user_id',
                'year',
                'month',
                'period',
                'quarter',
                'status',
                'is_for_approval',
                'created_at',
            ])
            ->latest('created_at')
            ->paginate(20)
            ->through(fn ($transaction) => [
                'site' => $transaction->site,
                'treNumber' => $transaction->tre_num,
                'userid' => $transaction->user_id,
                'date' => ucfirst(strtolower($transaction->month)).' '.$transaction->year,
                'status' => match ($transaction->status) {
                    'E' => 'Exported',
                    'I' => 'In Process',
                    'A' => 'Approved',
                    null => 'Unknown',
                    default => (string) $transaction->status,
                },
                'forApproval' => (bool) $transaction->is_for_approval,
                'createDate' => $transaction->created_at?->format('Y-m-d'),
            ]);

        return Inertia::render('Transactions', [
            'transactions' => $transactions,
        ]);
    }
}
