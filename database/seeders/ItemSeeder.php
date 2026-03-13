<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\File;

class ItemSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $path = database_path('seeders/data/items.tsv');

        if (! File::exists($path)) {
            return;
        }

        $lines = preg_split('/\r?\n/', trim(File::get($path)));
        $insertData = [];

        $toBool = static function (string $value): bool {
            return $value === 'True';
        };

        $toDecimal = static function (string $value): ?float {
            $trimmed = trim($value);

            return $trimmed === '' ? null : (float) $trimmed;
        };

        foreach ($lines as $line) {
            if (trim($line) === '') {
                continue;
            }

            $columns = array_pad(explode("\t", $line), 27, '');

            [
                $site,
                $treNum,
                $lineNo,
                $itemType,
                $transactionDate,
                $invoiceNo,
                $tin,
                $vendorCode,
                $vendorName,
                $addressLine1,
                $addressLine2,
                $addressLine3,
                $withVat,
                $receiptTotal,
                $vatableSales,
                $nonVatSales,
                $vatAmount,
                $accountCode,
                $vatClass,
                $remarks,
                $isForApproval,
                $createdAt,
                $amount1,
                $amount2,
                $amount3,
                $amount4,
                $amount5,
            ] = $columns;

            $insertData[] = [
                'site' => trim($site),
                'tre_num' => trim($treNum),
                'line_no' => trim($lineNo),
                'item_type' => trim($itemType),
                'transaction_date' => Carbon::parse(trim($transactionDate)),
                'invoice_no' => trim($invoiceNo),
                'tin' => trim($tin),
                'vendor_code' => trim($vendorCode),
                'vendor_name' => trim($vendorName),
                'address_line1' => trim($addressLine1),
                'address_line2' => trim($addressLine2) !== '' ? trim($addressLine2) : null,
                'address_line3' => trim($addressLine3) !== '' ? trim($addressLine3) : null,
                'with_vat' => $toBool(trim($withVat)),
                'receipt_total' => $toDecimal($receiptTotal),
                'vatable_sales' => $toDecimal($vatableSales),
                'non_vat_sales' => $toDecimal($nonVatSales),
                'vat_amount' => $toDecimal($vatAmount),
                'account_code' => trim($accountCode),
                'vat_class' => trim($vatClass),
                'remarks' => trim($remarks) !== '' ? trim($remarks) : null,
                'is_for_approval' => $toBool(trim($isForApproval)),
                'created_at' => Carbon::parse(trim($createdAt)),
                'updated_at' => Carbon::now(),
                'amount_1' => $toDecimal($amount1),
                'amount_2' => $toDecimal($amount2),
                'amount_3' => $toDecimal($amount3),
                'amount_4' => $toDecimal($amount4),
                'amount_5' => $toDecimal($amount5),
            ];
        }

        DB::table('items')->insert($insertData);
    }
}
