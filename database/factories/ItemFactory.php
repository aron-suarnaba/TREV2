<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Item>
 */
class ItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $site = fake()->randomElement(['PI-SP', 'FP-SP']);
        $treNum = fake()->numerify('TRE-PI-####-##-###');

        return [
            'site' => $site,
            'tre_num' => $treNum,
            'line_no' => fake()->numerify('###'),
            'item_type' => fake()->randomElement(['REP', 'GAS', 'VRG']),
            'transaction_date' => fake()->dateTimeBetween('-2 months', 'now'),
            'invoice_no' => fake()->bothify('##########'),
            'tin' => fake()->numerify('###-###-###-#####'),
            'vendor_code' => fake()->bothify('ZP#####'),
            'vendor_name' => fake()->company(),
            'address_line1' => fake()->streetAddress(),
            'address_line2' => fake()->optional()->streetAddress(),
            'address_line3' => fake()->optional()->city(),
            'with_vat' => fake()->boolean(),
            'receipt_total' => fake()->randomFloat(2, 1, 10000),
            'vatable_sales' => fake()->randomFloat(2, 1, 10000),
            'non_vat_sales' => fake()->randomFloat(2, 0, 10000),
            'vat_amount' => fake()->randomFloat(2, 0, 2000),
            'account_code' => fake()->numerify('#####'),
            'vat_class' => fake()->randomElement(['V', 'N']),
            'remarks' => fake()->optional()->sentence(),
            'is_for_approval' => fake()->boolean(),
            'amount_1' => fake()->randomFloat(2, 0, 10000),
            'amount_2' => fake()->randomFloat(2, 0, 10000),
            'amount_3' => fake()->randomFloat(2, 0, 10000),
            'amount_4' => fake()->randomFloat(2, 0, 10000),
            'amount_5' => fake()->randomFloat(2, 0, 10000),
        ];
    }
}
