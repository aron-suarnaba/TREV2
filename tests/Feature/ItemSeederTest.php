<?php

use Database\Seeders\ItemSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('item seeder inserts rows into items table', function () {
    $this->seed(ItemSeeder::class);

    $this->assertDatabaseHas('items', [
        'tre_num' => 'TRE-PI-2026-03-016',
        'invoice_no' => '27843',
        'vendor_code' => 'ZPSUPER',
        'item_type' => 'REP',
    ]);
});
