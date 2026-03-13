<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TreRegHdr>
 */
class TreRegHdrFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $site = fake()->randomElement(['FP', 'PI']);
        $year = fake()->numberBetween(2024, 2027);
        $month = fake()->randomElement([
            'JANUARY',
            'FEBRUARY',
            'MARCH',
            'APRIL',
            'MAY',
            'JUNE',
            'JULY',
            'AUGUST',
            'SEPTEMBER',
            'OCTOBER',
            'NOVEMBER',
            'DECEMBER',
        ]);

        return [
            'site' => $site,
            'tre_num' => $site.'-SPTRE-'.$site.'-'.$year.'-'.fake()->numerify('##-###'),
            'user_id' => fake()->unique()->safeEmail(),
            'year' => $year,
            'month' => $month,
            'period' => fake()->numberBetween(1, 3),
            'quarter' => fake()->numberBetween(1, 4),
            'status' => fake()->randomElement(['E', 'I', 'A']),
            'is_for_approval' => fake()->boolean(),
            'created_at' => fake()->dateTimeBetween('-2 months', 'now'),
            'updated_at' => now(),
        ];
    }
}
