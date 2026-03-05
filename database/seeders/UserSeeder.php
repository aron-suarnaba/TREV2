<?php

namespace Database\Seeders;

use App\Models\User;
use Hash;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        User::create([
            'name' => 'Admin User',
            'email' => 'user.admin@printwell.com.ph',
            'password' => Hash::make('password01'),
            'email_verified_at' => now(),
        ]);

        User::factory(5)->create();
    }
}
