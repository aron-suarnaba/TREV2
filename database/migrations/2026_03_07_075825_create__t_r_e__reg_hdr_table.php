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
        Schema::create('tre_reg_headers', function (Blueprint $table) {
            $table->id();
            $table->string('site', 50);
            $table->string('tre_num')->unique();
            $table->string('user_id')->index();
            $table->year('year');
            $table->string('month', 20);
            $table->unsignedTinyInteger('period');
            $table->unsignedTinyInteger('quarter');
            $table->string('status')->default('I');
            $table->boolean('is_for_approval')->default(false);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tre_reg_headers');
    }
};
