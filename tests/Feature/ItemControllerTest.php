<?php

use App\Models\Item;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

it('can create an item', function () {
    $user = User::factory()->create();

    $payload = Item::factory()->make([
        'site' => 'PI-SP',
        'tre_num' => 'TRE-PI-2026-01-001',
        'line_no' => '001',
        'item_type' => 'REP',
        'transaction_date' => '2026-03-01',
        'invoice_no' => 'INV-001',
        'tin' => '010-805-447-00002',
        'vendor_code' => 'ZP12345',
        'vendor_name' => 'Cavallino, Inc.',
        'address_line1' => '123 Main St',
        'with_vat' => true,
        'receipt_total' => 1500.25,
        'vatable_sales' => 1200.00,
        'non_vat_sales' => 300.25,
        'vat_amount' => 144.00,
        'account_code' => 'ACCT01',
        'vat_class' => 'V',
        'is_for_approval' => false,
    ])->toArray();

    $this->actingAs($user)
        ->post('/items', $payload)
        ->assertRedirect('/items');

    $this->assertDatabaseHas('items', [
        'invoice_no' => 'INV-001',
        'vendor_name' => 'Cavallino, Inc.',
    ]);
});

it('can update an item', function () {
    $user = User::factory()->create();

    $item = Item::factory()->create([
        'invoice_no' => 'INV-002',
        'vendor_name' => 'Vendor A',
    ]);

    $payload = Item::factory()->make([
        'invoice_no' => 'INV-UPDATED',
        'vendor_name' => 'Vendor Updated',
    ])->toArray();

    $this->actingAs($user)
        ->put("/items/{$item->id}", $payload)
        ->assertRedirect('/items');

    $this->assertDatabaseHas('items', [
        'id' => $item->id,
        'invoice_no' => 'INV-UPDATED',
        'vendor_name' => 'Vendor Updated',
    ]);
});

it('can delete an item', function () {
    $user = User::factory()->create();

    $item = Item::factory()->create();

    $this->actingAs($user)
        ->delete("/items/{$item->id}")
        ->assertRedirect('/items');

    $this->assertDatabaseMissing('items', [
        'id' => $item->id,
    ]);
});
