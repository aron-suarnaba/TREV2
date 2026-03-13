<?php

namespace Database\Seeders;

use Carbon\Carbon;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TreRegHdrSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $rows = [
            ['PI-SP', 'TRE-PI-2026-02-001', 'normita.guzman@printwell.com.ph', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-01-11 16:45:34.163'],
            ['PI-SP', 'TRE-PI-2026-03-001', 'normita.guzman@printwell.com.ph', 2026, 'MARCH', 3, 1, 'I', 'True', '2026-01-12 17:08:33.273'],
            ['PI-SP', 'TRE-PI-2026-02-002', 'rosemarie.picart@printwell.com.ph', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-01-21 23:30:32.130'],
            ['PI-SP', 'TRE-PI-2026-02-003', 'marcial.amaro@printwell.com.ph', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-01-22 23:47:38.527'],
            ['PI-SP', 'TRE-PI-2026-02-004', 'elaineyam168@yahoo.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-01-28 01:10:18.993'],
            ['PI-SP', 'TRE-PI-2026-02-005', 'joselito.lasan@printwell.com.ph', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-01-29 17:25:04.750'],
            ['PI-SP', 'TRE-PI-2026-02-006', 'randolph.capili@printwell.com.ph', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-03 23:15:06.533'],
            ['PI-SP', 'TRE-PI-2026-03-002', 'marcial.amaro@printwell.com.ph', 2026, 'MARCH', 3, 1, 'I', 'True', '2026-02-05 23:58:46.447'],
            ['PI-SP', 'TRE-PI-2026-02-007', 'eng-stn1@printwell.com.ph', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-08 18:57:38.050'],
            ['PI-SP', 'TRE-PI-2026-02-008', 'mrcerilo.gerapat@gmail.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-08 18:58:13.300'],
            ['PI-SP', 'TRE-PI-2026-02-009', 'marte.sardes@printwell.com.ph', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-09 03:16:36.227'],
            ['PI-SP', 'TRE-PI-2026-03-003', 'marte.sardes@printwell.com.ph', 2026, 'MARCH', 3, 1, 'I', 'True', '2026-02-09 03:28:09.990'],
            ['PI-SP', 'TRE-PI-2026-02-010', 'printwellchris02042012@gmail.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-12 04:06:52.440'],
            ['PI-SP', 'TRE-PI-2026-02-011', 'roelguerta@gmail.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-13 06:06:21.837'],
            ['PI-SP', 'TRE-PI-2026-02-012', 'lexter.apelado@printwell.com.ph', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-13 16:35:19.443'],
            ['PI-SP', 'TRE-PI-2026-03-004', 'rosemarie.picart@printwell.com.ph', 2026, 'MARCH', 3, 1, 'I', 'True', '2026-02-13 22:57:28.357'],
            ['PI-SP', 'TRE-PI-2026-02-013', 'carizajoanna.valdez@printwell.com.ph', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-16 02:27:47.513'],
            ['PI-SP', 'TRE-PI-2026-03-005', 'carizajoanna.valdez@printwell.com.ph', 2026, 'MARCH', 3, 1, 'I', 'True', '2026-02-16 02:49:40.930'],
            ['PI-SP', 'TRE-PI-2026-03-006', 'printwellchris02042012@gmail.com', 2026, 'MARCH', 3, 1, 'I', 'True', '2026-02-17 20:05:06.097'],
            ['PI-SP', 'TRE-PI-2026-03-007', 'joselito.lasan@printwell.com.ph', 2026, 'MARCH', 3, 1, 'I', 'True', '2026-02-18 19:46:53.587'],
            ['PI-SP', 'TRE-PI-2026-02-014', 'marivic.bajar@printwell.com.ph', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-18 19:56:28.570'],
            ['PI-SP', 'TRE-PI-2026-02-015', 'olive.larosa@printwell.com.ph', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-19 01:24:33.930'],
            ['PI-SP', 'TRE-PI-2026-02-016', 'freddie.saguid@printwell.com.ph', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-19 01:56:17.477'],
            ['PI-SP', 'TRE-PI-2026-02-017', 'nelsonguzman1971@gmail.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-19 18:42:50.750'],
            ['PI-SP', 'TRE-PI-2026-03-008', 'itadmin2@printwell.com', 2026, 'MARCH', 3, 1, 'I', 'NULL', '2026-02-19 23:06:37.853'],
            ['PI-SP', 'TRE-PI-2026-02-018', 'ariel.villaroman@printwell.com.ph', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-20 01:50:13.693'],
            ['PI-SP', 'TRE-PI-2026-02-019', 'joemiguel176@gmail.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-20 06:11:59.380'],
            ['PI-SP', 'TRE-PI-2026-03-009', 'nelsonguzman1971@gmail.com', 2026, 'MARCH', 3, 1, 'I', 'NULL', '2026-02-21 22:09:34.897'],
            ['PI-SP', 'TRE-PI-2026-02-020', 'loloy.ico@gmail.com', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-23 07:19:00.477'],
            ['PI-SP', 'TRE-PI-2026-03-010', 'freddie.saguid@printwell.com.ph', 2026, 'MARCH', 3, 1, 'I', 'True', '2026-02-23 16:58:15.167'],
            ['PI-SP', 'TRE-PI-2026-02-021', 'annabelle.nartates@printwell.com.ph', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-23 22:50:51.890'],
            ['PI-SP', 'TRE-PI-2026-03-011', 'elaineyam168@yahoo.com', 2026, 'MARCH', 3, 1, 'I', 'True', '2026-02-23 23:57:13.263'],
            ['PI-SP', 'TRE-PI-2026-02-022', 'flora.deuna@printwell.com.ph', 2026, 'FEBRUARY', 2, 1, 'E', 'False', '2026-02-25 00:40:21.063'],
            ['PI-SP', 'TRE-PI-2026-03-012', 'randolph.capili@printwell.com.ph', 2026, 'MARCH', 3, 1, 'I', 'True', '2026-02-26 16:24:03.230'],
            ['PI-SP', 'TRE-PI-2026-03-013', 'eng-stn1@printwell.com.ph', 2026, 'MARCH', 3, 1, 'I', 'True', '2026-02-27 20:00:47.570'],
            ['PI-SP', 'TRE-PI-2026-03-014', 'mrcerilo.gerapat@gmail.com', 2026, 'MARCH', 3, 1, 'I', 'True', '2026-02-27 20:14:51.487'],
            ['PI-SP', 'TRE-PI-2026-05-001', 'itadmin@printwell.com', 2026, 'MAY', 5, 2, 'I', 'NULL', '2026-03-04 21:46:04.650'],
            ['PI-SP', 'TRE-PI-2026-03-015', 'aron.suarnaba@printwell.com.ph', 2026, 'MARCH', 3, 1, 'I', 'NULL', '2026-03-06 00:33:35.907'],
            ['PI-SP', 'TRE-PI-2026-03-016', 'joemiguel176@gmail.com', 2026, 'MARCH', 3, 1, 'I', 'True', '2026-03-09 07:04:45.047'],
        ];

        $insertData = [];

        foreach ($rows as $row) {
            $isForApproval = match ($row[8]) {
                'True' => true,
                'False' => false,
                default => false, // Handles the 'NULL' strings in your data
            };

            $insertData[] = [
                'tre_num' => $row[1],
                'user_id' => $row[2], // Email as user_id based on your logic
                'year' => $row[3],
                'month' => $row[4],
                'period' => $row[5],
                'quarter' => $row[6],
                'status' => $row[7],
                'is_for_approval' => $isForApproval,
                'created_at' => Carbon::parse($row[9]),
                'updated_at' => Carbon::now(),
                // Extracts site from the prefix (e.g., PI from PI-SP)
                'site' => explode('-', $row[0])[0],
            ];
        }

        DB::table('tre_reg_headers')->insert($insertData);
    }
}
