<?php

use App\Models\TreRegHdr;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

test('transactions page receives tre reg header data', function () {
    $user = User::factory()->create();

    $transaction = TreRegHdr::factory()->create([
        'site' => 'FP',
        'tre_num' => 'FP-SPTRE-FP-2026-01-001',
        'user_id' => 'joaquin.rusco@printwellpack.com',
        'year' => 2026,
        'month' => 'JANUARY',
        'period' => 1,
        'quarter' => 1,
        'status' => 'E',
        'is_for_approval' => false,
        'created_at' => now()->subDay(),
    ]);

    $this->actingAs($user)
        ->get('/transactions')
        ->assertInertia(fn (Assert $page) => $page
            ->component('Transactions')
            ->has('transactions.data', 1)
            ->where('transactions.data.0.treNumber', $transaction->tre_num)
            ->where('transactions.data.0.userid', $transaction->user_id)
            ->where('transactions.data.0.status', 'Exported')
            ->where('transactions.data.0.statusCode', 'E')
            ->where('transactions.data.0.year', 2026)
            ->where('transactions.data.0.month', 'JANUARY')
            ->where('transactions.data.0.period', 1)
            ->where('transactions.data.0.quarter', 1)
            ->where('transactions.data.0.site', 'FP')
        );
});
