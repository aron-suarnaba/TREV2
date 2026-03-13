<?php

use Database\Seeders\TreRegHdrSeeder;
use Illuminate\Foundation\Testing\RefreshDatabase;

uses(RefreshDatabase::class);

test('tre reg header seeder inserts rows into tre_reg_headers table', function () {
    $this->seed(TreRegHdrSeeder::class);

    $this->assertDatabaseHas('tre_reg_headers', [
        'tre_num' => 'TRE-PI-2026-02-001',
        'user_id' => 'normita.guzman@printwell.com.ph',
        'month' => 'FEBRUARY',
        'period' => 2,
        'quarter' => 1,
        'status' => 'E',
        'site' => 'PI',
        'is_for_approval' => false,
    ]);
});
