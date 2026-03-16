<?php

namespace App\Http\Controllers;

use App\Http\Requests\TreRegHdrRequest;
use App\Models\TreRegHdr;
use Inertia\Inertia;
use Inertia\Response;

class TRERegHdrController extends Controller
{
    public function index(): Response
    {
        // 1. Start the query
        $query = TreRegHdr::query()
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
            // 2. Explicitly order by a unique column or created_at
            // SQL 2008 MUST have this for pagination to work
            ->orderBy('created_at', 'desc');

        $transactions = $query->paginate(20)
            ->through(fn ($transaction) => [
                'id' => $transaction->id,
                'site' => $transaction->site,
                'treNumber' => $transaction->tre_num,
                'userid' => $transaction->user_id,
                'year' => $transaction->year,
                'month' => $transaction->month,
                'period' => $transaction->period,
                'quarter' => $transaction->quarter,
                'statusCode' => $transaction->status,
                'date' => ucfirst(strtolower($transaction->month)).' '.$transaction->year,
                'status' => match ($transaction->status) {
                    'E' => 'Exported',
                    'I' => 'In Process',
                    'A' => 'Approved',
                    null => 'Unknown',
                    default => (string) $transaction->status,
                },
                'forApproval' => (bool) $transaction->is_for_approval,
                'isForApproval' => (bool) $transaction->is_for_approval,
                'createDate' => $transaction->created_at?->format('Y-m-d'),
            ]);

        return Inertia::render('Transactions', [
            'transactions' => $transactions,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('TransactionsForm', [
            'treRegHdr' => null,
            'mode' => 'create',
            'months' => [
                'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
                'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER',
            ],
            'statusOptions' => ['E', 'I', 'A'],
        ]);
    }

    public function store(TreRegHdrRequest $request)
    {
        TreRegHdr::create($request->validated());

        return to_route('transactions');
    }

    public function edit(TreRegHdr $transaction): Response
    {
        return Inertia::render('TransactionsForm', [
            'treRegHdr' => $transaction,
            'mode' => 'edit',
            'months' => [
                'JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY', 'JUNE',
                'JULY', 'AUGUST', 'SEPTEMBER', 'OCTOBER', 'NOVEMBER', 'DECEMBER',
            ],
            'statusOptions' => ['E', 'I', 'A'],
        ]);
    }

    public function update(TreRegHdrRequest $request, TreRegHdr $transaction)
    {
        $transaction->update($request->validated());

        return to_route('transactions');
    }

    public function destroy(TreRegHdr $transaction)
    {
        $transaction->delete();

        return to_route('transactions');
    }
}
