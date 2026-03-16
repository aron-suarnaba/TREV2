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
        Schema::table('items', function (Blueprint $table) {
            $table->string('acctu3', 20)->nullable()->after('account_code');
            $table->string('acctu4', 20)->nullable()->after('acctu3');
            $table->decimal('del_charge', 15, 2)->nullable()->after('vat_amount');
            $table->decimal('scpwd_basis', 15, 2)->nullable()->after('del_charge');
            $table->decimal('scpwd_disc', 15, 2)->nullable()->after('scpwd_basis');
            $table->decimal('exempt_sales', 15, 2)->nullable()->after('non_vat_sales');
            $table->decimal('invoice_total', 15, 2)->nullable()->after('vatable_sales');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('items', function (Blueprint $table) {
            $table->dropColumn([
                'acctu3',
                'acctu4',
                'del_charge',
                'scpwd_basis',
                'scpwd_disc',
                'exempt_sales',
                'invoice_total',
            ]);
        });
    }
};
