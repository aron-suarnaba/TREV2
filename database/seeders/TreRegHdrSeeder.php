<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class TreRegHdrSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $rows = [
            ['FP-SPTRE-FP-2026-01-001', 'joaquin.rusco@printwellpack.com', 2026, 'JANUARY', 1, 1, 'E', 'False', '2026-01-04 15:51:13.440'],
            ['FP-SPTRE-FP-2026-01-002', 'bernard.avilla@fortunepackaging.com', 2026, 'JANUARY', 1, 1, 'E', 'False', '2026-01-11 17:53:19.710'],
            ['FP-SPTRE-FP-2026-01-003', 'laarni.rull@fortunepackaging.com', 2026, 'JANUARY', 1, 1, 'E', 'False', '2026-01-13 00:59:02.293'],
            ['FP-SPTRE-FP-2026-01-004', 'ellamay.ubaldo@fortunepackaging.com', 2026, 'JANUARY', 1, 1, 'E', 'False', '2026-01-19 01:02:49.670'],
            ['FP-SPTRE-FP-2026-01-005', 'andrew.anastacio@fortunepackaging.com', 2026, 'JANUARY', 1, 1, 'E', 'False', '2026-01-19 22:43:27.183'],
            ['FP-SPTRE-FP-2026-01-006', 'ronaldo.capinpin@fortunepackaging.com', 2026, 'JANUARY', 1, 1, 'E', 'False', '2026-01-20 05:38:51.700'],
            ['FP-SPTRE-FP-2026-01-007', 'tiburcio.estioko@fortunepackaging.com', 2026, 'JANUARY', 1, 1, 'E', 'False', '2026-01-21 22:03:08.943'],
            ['FP-SPTRE-FP-2026-01-008', 'genevieve.roxas-chua@fortunepackaging.com', 2026, 'JANUARY', 1, 1, 'E', 'False', '2026-01-25 20:54:18.997'],
            ['FP-SPTRE-FP-2026-01-009', 'analyn.ilagan@fortunepackaging.com', 2026, 'JANUARY', 1, 1, 'E', 'False', '2026-01-26 18:15:30.640'],
            ['FP-SPTRE-FP-2026-02-001', 'ellamay.ubaldo@fortunepackaging.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-01-19 01:09:20.630'],
            ['FP-SPTRE-FP-2026-02-002', 'joaquin.rusco@printwellpack.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-01-25 17:35:31.007'],
            ['FP-SPTRE-FP-2026-02-003', 'genevieve.roxas-chua@fortunepackaging.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-01-25 22:55:15.717'],
            ['FP-SPTRE-FP-2026-02-004', 'laarni.rull@fortunepackaging.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-06 00:02:00.993'],
            ['FP-SPTRE-FP-2026-02-005', 'bernard.avilla@fortunepackaging.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-08 23:38:58.583'],
            ['FP-SPTRE-FP-2026-02-006', 'andrew.anastacio@fortunepackaging.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-17 18:57:34.950'],
            ['FP-SPTRE-FP-2026-02-007', 'tiburcio.estioko@fortunepackaging.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-19 02:33:23.330'],
            ['FP-SPTRE-FP-2026-02-008', 'ronaldo.capinpin@fortunepackaging.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-19 21:16:47.397'],
            ['FP-SPTRE-FP-2026-02-009', 'analyn.ilagan@fortunepackaging.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-26 01:38:04.913'],
            ['FP-SPTRE-FP-2026-03-001', 'joaquin.rusco@printwellpack.com', 2026, 'MARCH', 3, 1, 'I', 'NULL', '2026-02-15 19:23:41.263'],
            ['FP-SPTRE-FP-2026-03-002', 'genevieve.roxas-chua@fortunepackaging.com', 2026, 'MARCH', 3, 1, 'I', 'True', '2026-02-25 00:16:09.623'],
        ];

        $insertData = [];

        foreach ($rows as $row) {
            $insertData[] = [
                'treNum'        => $row[0],
                'userId'        => $row[1],
                'year'          => $row[2],
                'month'         => $row[3],
                'period'        => $row[4],
                'quarter'       => $row[5],
                'status'        => $row[6],
                // Handle boolean conversion from your text string
                'isForApproval' => $row[7] === 'True' ? true : ($row[7] === 'False' ? false : null),
                'created_at'    => Carbon::parse($row[8]),
                'updated_at'    => Carbon::now(),
                // Extracting Site from the treNum prefix (FP or PI)
                'Site'          => explode('-', $row[0])[0],
            ];
        }

        DB::table('TRE_RegHdr')->insert($insertData);
    }
}
