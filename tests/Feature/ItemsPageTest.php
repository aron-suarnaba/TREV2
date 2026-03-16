<?php

use App\Models\Item;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Inertia\Testing\AssertableInertia as Assert;

uses(RefreshDatabase::class);

test('items page receives item data', function () {
    $user = User::factory()->create();

    $item = Item::factory()->create([
        'invoice_no' => 'INV-100',
        'vendor_name' => 'Vendor Test',
        'item_type' => 'REP',
        'with_vat' => true,
        'tin' => '010-805-447-00002',
        'vatable_sales' => 1200.00,
        'vat_amount' => 144.00,
        'receipt_total' => 1500.25,
        'is_for_approval' => true,
        'transaction_date' => now()->subDay(),
    ]);

    $this->actingAs($user)
        ->get('/items')
        ->assertInertia(fn (Assert $page) => $page
            ->component('Items')
            ->has('items.data', 1)
            ->where('items.data.0.id', $item->id)
            ->where('items.data.0.invoiceNo', 'INV-100')
            ->where('items.data.0.vendorName', 'Vendor Test')
            ->where('items.data.0.itemType', 'REP')
            ->where('items.data.0.withVat', true)
            ->where('items.data.0.tin', '010-805-447-00002')
            ->where('items.data.0.isForApproval', true)
        );
});
