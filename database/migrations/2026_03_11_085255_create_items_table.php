<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('site', 50);
            $table->string('tre_num')->index();
            $table->string('line_no', 20);
            $table->string('item_type', 20);
            $table->dateTime('transaction_date');
            $table->string('invoice_no', 60);
            $table->string('tin', 30);
            $table->string('vendor_code', 20);
            $table->string('vendor_name', 200);
            $table->string('address_line1', 255);
            $table->string('address_line2', 255)->nullable();
            $table->string('address_line3', 255)->nullable();
            $table->boolean('with_vat');
            $table->decimal('receipt_total', 15, 2);
            $table->decimal('vatable_sales', 15, 2);
            $table->decimal('non_vat_sales', 15, 2);
            $table->decimal('vat_amount', 15, 2);
            $table->string('account_code', 20);
            $table->string('vat_class', 5);
            $table->string('remarks', 255)->nullable();
            $table->boolean('is_for_approval')->default(false);
            $table->decimal('amount_1', 15, 2)->nullable();
            $table->decimal('amount_2', 15, 2)->nullable();
            $table->decimal('amount_3', 15, 2)->nullable();
            $table->decimal('amount_4', 15, 2)->nullable();
            $table->decimal('amount_5', 15, 2)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('items');
    }
};
