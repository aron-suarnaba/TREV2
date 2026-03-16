<?php

use App\Models\TreRegHdr;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('can create a tre reg hdr', function () {
    $user = User::factory()->create();

    $this->actingAs($user)
        ->post('/transactions', [
            'site' => 'PI',
            'tre_num' => 'PI-SPTRE-PI-2026-01-001',
            'user_id' => 'maria@example.com',
            'year' => 2026,
            'month' => 'MARCH',
            'period' => 1,
            'quarter' => 1,
            'status' => 'I',
            'is_for_approval' => true,
        ])
        ->assertRedirect('/transactions');

    $this->assertDatabaseHas('tre_reg_headers', [
        'tre_num' => 'PI-SPTRE-PI-2026-01-001',
        'user_id' => 'maria@example.com',
    ]);
});

it('can update a tre reg hdr', function () {
    $user = User::factory()->create();

    $transaction = TreRegHdr::factory()->create([
        'site' => 'PI',
        'tre_num' => 'PI-SPTRE-PI-2026-01-002',
        'user_id' => 'maria@example.com',
        'year' => 2026,
        'month' => 'MARCH',
        'period' => 1,
        'quarter' => 1,
        'status' => 'I',
        'is_for_approval' => false,
    ]);

    $this->actingAs($user)
        ->put("/transactions/{$transaction->id}", [
            'site' => 'PI',
            'tre_num' => 'PI-SPTRE-PI-2026-01-002',
            'user_id' => 'maria.updated@example.com',
            'year' => 2026,
            'month' => 'APRIL',
            'period' => 2,
            'quarter' => 2,
            'status' => 'A',
            'is_for_approval' => true,
        ])
        ->assertRedirect('/transactions');

    $this->assertDatabaseHas('tre_reg_headers', [
        'id' => $transaction->id,
        'user_id' => 'maria.updated@example.com',
        'status' => 'A',
    ]);
});

it('can delete a tre reg hdr', function () {
    $user = User::factory()->create();

    $transaction = TreRegHdr::factory()->create();

    $this->actingAs($user)
        ->delete("/transactions/{$transaction->id}")
        ->assertRedirect('/transactions');

    $this->assertSoftDeleted('tre_reg_headers', ['id' => $transaction->id]);
});
