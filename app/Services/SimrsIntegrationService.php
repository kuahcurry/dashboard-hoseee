<?php

namespace App\Services;

use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class SimrsIntegrationService
{
    protected string $baseUrl;
    protected string $apiKey;
    protected int $cacheTtl;

    public function __construct()
    {
        $this->baseUrl = config('services.simrs.base_url');
        $this->apiKey = config('services.simrs.api_key');
        $this->cacheTtl = (int) config('services.simrs.cache_ttl', 30);
    }

    /**
     * Data Operasional Dokter Hari Ini (Jadwal, Pasien, Antrean, Tindakan)
     */
    public function getDoctorClinicalData(string $doctorCode = 'DR-SPJP-01'): array
    {
        $cacheKey = "simrs_doctor_clinical_{$doctorCode}";

        return Cache::remember($cacheKey, 15, function () {
            return [
                'profile' => [
                    'code' => 'DR-SPJP-01',
                    'name' => 'dr. Surya Pratama, Sp.JP(K)',
                    'sip' => 'SIP.449.1/082/SIP-DS/2023',
                    'specialty' => 'Spesialis Jantung & Pembuluh Darah',
                    'room' => 'Ruang Poli Jantung (Poli 05, Lantai 2)',
                    'avatar' => 'SP',
                ],
                'summary' => [
                    'today_patients' => 28,
                    'waiting' => 6,
                    'in_progress' => 1,
                    'completed' => 15,
                    'inpatient_count' => 6,
                    'surgeries_today' => 2,
                    'unread_alerts' => 2,
                ],
                'critical_alerts' => [
                    [
                        'id' => 'alt-1',
                        'type' => 'critical',
                        'patient_name' => 'Tn. Bambang Sutrisno (RM: 00-48-21)',
                        'message' => 'Troponin I CITO: 1.45 ng/mL (Kritis) di IGD Bed 02',
                        'time' => '10 mnt lalu',
                        'action' => 'Review EKG & Instruksi',
                    ],
                    [
                        'id' => 'alt-2',
                        'type' => 'approval',
                        'patient_name' => 'Ny. Endang Rahayu (RM: 00-47-89)',
                        'message' => 'Permintaan persetujuan tindakan Kateterisasi Jantung (Cath Lab)',
                        'time' => '25 mnt lalu',
                        'action' => 'Approval Tindakan',
                    ]
                ],
                'schedule' => [
                    [
                        'time' => '08:00 - 11:30',
                        'activity' => 'Praktik Poliklinik Eksekutif',
                        'location' => 'Ruang Poli 05 (Poli Jantung)',
                        'status' => 'Berlangsung',
                        'status_class' => 'badge-green',
                        'details' => '18 Pasien terdaftar • 6 Menunggu • 1 Sedang Dilayani',
                        'is_ongoing' => true,
                    ],
                    [
                        'time' => '12:00 - 13:00',
                        'activity' => 'Visit Pasien Rawat Inap',
                        'location' => 'Bangsal Al-Ikhlas (VIP) & ICU',
                        'status' => 'Terjadwal',
                        'status_class' => 'badge-blue',
                        'details' => '6 Pasien rawat inap tanggung jawab DPJP',
                        'is_ongoing' => false,
                    ],
                    [
                        'time' => '13:30 - 15:30',
                        'activity' => 'Tindakan Operasi / Cath Lab',
                        'location' => 'Kamar Operasi OK 03 (Bedah Vaskular)',
                        'status' => 'Persiapan',
                        'status_class' => 'badge-amber',
                        'details' => '2 Tindakan (PCI Stent Angioplasti)',
                        'is_ongoing' => false,
                    ],
                    [
                        'time' => '16:00 - 17:00',
                        'activity' => 'Rapat Komite Medik',
                        'location' => 'Ruang Pertemuan Lt. 3',
                        'status' => 'Mendatang',
                        'status_class' => 'badge-blue',
                        'details' => 'Audit Kasus STEMI Door-to-Balloon Time',
                        'is_ongoing' => false,
                    ]
                ],
                'patients' => [
                    [
                        'id' => 'p-101',
                        'name' => 'H. Suwandi',
                        'mrn' => '00-49-102',
                        'age' => 62,
                        'gender' => 'Laki-laki',
                        'unit' => 'Poli Jantung',
                        'room' => 'Poli 05',
                        'diagnosis' => 'I20.0 - Unstable Angina Pectoris',
                        'category' => 'poli',
                        'priority' => 'urgent',
                        'status' => 'sedang-ditangani',
                        'status_label' => 'Sedang Dilayani',
                        'notes' => 'Nyeri dada substernal menjalar ke lengan kiri sejak pagi',
                        'bpjs_status' => 'SEP Aktif (V-Claim Bridged)',
                        'lab_status' => 'EKG: ST-Depresi V4-V6 • Enzim Normal',
                    ],
                    [
                        'id' => 'p-102',
                        'name' => 'Ibu Marwiyah',
                        'mrn' => '00-48-994',
                        'age' => 54,
                        'gender' => 'Perempuan',
                        'unit' => 'Poli Jantung',
                        'room' => 'Poli 05',
                        'diagnosis' => 'I10 - Essential Primary Hypertension',
                        'category' => 'poli',
                        'priority' => 'normal',
                        'status' => 'menunggu',
                        'status_label' => 'Antrean #07 (Menunggu)',
                        'notes' => 'Kontrol rutin obat antihipertensi bulanan',
                        'bpjs_status' => 'SEP Terverifikasi',
                        'lab_status' => 'Hasil Lab Kimia Darah Siap',
                    ],
                    [
                        'id' => 'p-103',
                        'name' => 'Bpk. Tri Wibowo',
                        'mrn' => '00-45-772',
                        'age' => 48,
                        'gender' => 'Laki-laki',
                        'unit' => 'Poli Jantung',
                        'room' => 'Poli 05',
                        'diagnosis' => 'I50.9 - Heart Failure, Unspecified',
                        'category' => 'poli',
                        'priority' => 'urgent',
                        'status' => 'menunggu',
                        'status_label' => 'Antrean #08 (Menunggu)',
                        'notes' => 'Orthopnea, edema tungkai ringan',
                        'bpjs_status' => 'SEP Terverifikasi',
                        'lab_status' => 'Foto Toraks: Kardiomegali ringan',
                    ],
                    [
                        'id' => 'p-104',
                        'name' => 'Ny. Siti Aminah',
                        'mrn' => '00-42-311',
                        'age' => 58,
                        'gender' => 'Perempuan',
                        'unit' => 'Rawat Inap',
                        'room' => 'Bangsal Al-Ikhlas (Kamar VIP 02)',
                        'diagnosis' => 'I21.0 - Acute Transmural Myocardial Infarction',
                        'category' => 'rawat-inap',
                        'priority' => 'emergency',
                        'status' => 'rawat-inap',
                        'status_label' => 'Hari Perawatan Ke-3',
                        'notes' => 'Post-STEMI anterior, rencana evaluasi ekokardiografi',
                        'bpjs_status' => 'Klaim INA-CBG Siap',
                        'lab_status' => 'Troponin I Tren Menurun (0.21 ng/mL)',
                    ],
                    [
                        'id' => 'p-105',
                        'name' => 'Tn. Agus Santoso',
                        'mrn' => '00-44-118',
                        'age' => 65,
                        'gender' => 'Laki-laki',
                        'unit' => 'Kamar Operasi (Cath Lab)',
                        'room' => 'OK 03 Bedah Vaskular',
                        'diagnosis' => 'I25.1 - Coronary Artery Disease (CAD 2VD)',
                        'category' => 'operasi',
                        'priority' => 'urgent',
                        'status' => 'persiapan-operasi',
                        'status_label' => 'Persiapan OK (13:30)',
                        'notes' => 'Rencana PCI LAD + LCx',
                        'bpjs_status' => 'Approval Penjaminan Operasi OK',
                        'lab_status' => 'Pre-Op Anestesi: ACC (Grade II)',
                    ]
                ],
                'operations' => [
                    [
                        'or_room' => 'Kamar Operasi OK 03',
                        'patient_name' => 'Tn. Agus Santoso',
                        'mrn' => '00-44-118',
                        'procedure' => 'Percutaneous Coronary Intervention (PCI 2 Stent)',
                        'operator' => 'dr. Surya Pratama, Sp.JP(K)',
                        'anesthetist' => 'dr. Hendra, Sp.An',
                        'start_time' => '13:30 WIB (~90 Menit)',
                        'prep_status' => '95% (Pre-Holding & Obat Siap)',
                        'room_status' => 'Sterilisasi Selesai (Ready)',
                        'pre_op' => 'Clearance ACC',
                        'status' => 'Menunggu Jadwal',
                    ],
                    [
                        'or_room' => 'Kamar Operasi OK 03',
                        'patient_name' => 'Ibu Rusmini',
                        'mrn' => '00-46-921',
                        'procedure' => 'Diagnostic Coronary Angiography (DCA)',
                        'operator' => 'dr. Surya Pratama, Sp.JP(K)',
                        'anesthetist' => 'dr. Hendra, Sp.An',
                        'start_time' => '15:00 WIB (~45 Menit)',
                        'prep_status' => 'Inform Consent Lengkap',
                        'room_status' => 'Antrean Ke-2 OK 03',
                        'pre_op' => 'Clearance ACC',
                        'status' => 'Terjadwal',
                    ]
                ],
                'analytics' => [
                    'monthly_patients' => 412,
                    'weekly_patients' => 104,
                    'surgeries_this_month' => 18,
                    'avg_consultation_time' => '11.4 Menit',
                    'queue_wait_avg' => '22 Menit (Target SIMRS < 30m)',
                    'top_cases' => [
                        ['case' => 'Penyakit Jantung Koroner (CAD)', 'count' => 184, 'percent' => 45],
                        ['case' => 'Hipertensi Esensial', 'count' => 122, 'percent' => 30],
                        ['case' => 'Gagal Jantung Kronik (CHF)', 'count' => 68, 'percent' => 16],
                        ['case' => 'Aritmia / Fibrilasi Atrium', 'count' => 38, 'percent' => 9],
                    ]
                ]
            ];
        });
    }

    /**
     * Data Kinerja Manajemen Rumah Sakit (Executive, BOR, Target, Flow)
     */
    public function getManagementExecutiveData(): array
    {
        $cacheKey = "simrs_management_executive";

        return Cache::remember($cacheKey, 30, function () {
            return [
                'overview' => [
                    'date' => 'Selasa, 29 September 2026',
                    'hospital_name' => 'RS PKU Muhammadiyah Gombong',
                    'director_greeting' => 'dr. H. Direktur Utama, M.Kes',
                    'operational' => [
                        'total_patients_today' => 642,
                        'outpatients' => 472,
                        'inpatients' => 128,
                        'emergency_igd' => 42,
                        'surgeries' => 28,
                        'discharged' => 34,
                        'total_queue_active' => 58,
                        'beds_total' => 220,
                        'beds_occupied' => 185,
                        'beds_available' => 35,
                        'bor_percent' => 84.1,
                    ],
                    'financial' => [
                        'revenue_today' => 'Rp 528.400.000',
                        'revenue_mtd' => 'Rp 14.820.000.000',
                        'target_revenue_mtd' => 'Rp 15.200.000.000',
                        'achievement_percent' => 97.5,
                        'forecast_month_end' => 'Rp 15.650.000.000',
                        'cost_operating' => 'Rp 9.850.000.000',
                        'gross_margin' => '32.4%',
                    ],
                    'quality' => [
                        'alos' => '3.6 Hari',
                        'readmission_rate' => '1.8%',
                        'satisfaction' => '93.8%',
                        'incidents' => 0,
                    ]
                ],
                'paradigm' => [
                    'happening' => [
                        'headline' => 'BOR Ruang ICU Mencapai 91.7% (11 dari 12 Bed Terisi)',
                        'detail' => 'Peningkatan rujukan kasus gawat kardiovaskular dan respiratory dari IGD dalam 48 jam terakhir.'
                    ],
                    'why' => [
                        'headline' => 'Peningkatan Kasus STEMI & Pneumonia Geriatri',
                        'detail' => 'Waktu tinggal (ALOS) ICU rata-rata 4.8 hari memperlambat transisi bed ke bangsal HCU.'
                    ],
                    'attention' => [
                        'headline' => 'Aktivasi Protokol Step-down ke HCU & Buka 2 Bed Cadangan',
                        'detail' => 'Direktur dianjurkan menginstruksikan tim DPJP ICU melakukan audit step-down pasien stabil hari ini.'
                    ]
                ],
                'bed_matrix' => [
                    'total' => 220,
                    'occupied' => 185,
                    'available' => 35,
                    'cleaning' => 8,
                    'maintenance' => 4,
                    'reserved' => 12,
                    'bor' => 84.1,
                    'units' => [
                        ['unit' => 'ICU / ICCU', 'total' => 12, 'occupied' => 11, 'available' => 1, 'bor' => 91.7, 'status' => 'Critical'],
                        ['unit' => 'HCU', 'total' => 8, 'occupied' => 7, 'available' => 1, 'bor' => 87.5, 'status' => 'High'],
                        ['unit' => 'VIP & VVIP', 'total' => 24, 'occupied' => 20, 'available' => 4, 'bor' => 83.3, 'status' => 'Normal'],
                        ['unit' => 'Kelas 1', 'total' => 40, 'occupied' => 34, 'available' => 6, 'bor' => 85.0, 'status' => 'Normal'],
                        ['unit' => 'Kelas 2', 'total' => 56, 'occupied' => 48, 'available' => 8, 'bor' => 85.7, 'status' => 'Normal'],
                        ['unit' => 'Kelas 3 (BPJS)', 'total' => 80, 'occupied' => 65, 'available' => 15, 'bor' => 81.3, 'status' => 'Normal'],
                    ]
                ],
                'patient_flow' => [
                    ['stage' => 'Pendaftaran / Registrasi', 'count' => 48, 'avg_wait' => '6 mnt', 'avg_service' => '4 mnt', 'bottleneck' => false],
                    ['stage' => 'Triase / Skrining Klinis', 'count' => 24, 'avg_wait' => '5 mnt', 'avg_service' => '7 mnt', 'bottleneck' => false],
                    ['stage' => 'Poliklinik Dokter', 'count' => 182, 'avg_wait' => '24 mnt', 'avg_service' => '12 mnt', 'bottleneck' => false],
                    ['stage' => 'Penunjang (Lab & Radiologi)', 'count' => 64, 'avg_wait' => '38 mnt', 'avg_service' => '15 mnt', 'bottleneck' => true, 'reason' => 'Lonjakan sampel CITO di jam 10-11'],
                    ['stage' => 'Farmasi / Resep Obat', 'count' => 92, 'avg_wait' => '32 mnt', 'avg_service' => '10 mnt', 'bottleneck' => true, 'reason' => 'Antrean telaah racikan non-kronis'],
                    ['stage' => 'Kasir & Billing BPJS', 'count' => 36, 'avg_wait' => '8 mnt', 'avg_service' => '5 mnt', 'bottleneck' => false],
                ],
                'daily_targets' => [
                    ['kpi' => 'Pasien Rawat Jalan', 'target' => 500, 'actual' => 472, 'achievement' => 94.4, 'unit' => 'Pasien'],
                    ['kpi' => 'Jumlah Operasi (OK)', 'target' => 30, 'actual' => 28, 'achievement' => 93.3, 'unit' => 'Tindakan'],
                    ['kpi' => 'Revenue Harian', 'target' => 500, 'actual' => 528.4, 'achievement' => 105.7, 'unit' => 'Juta Rp'],
                    ['kpi' => 'Bed Occupancy (BOR)', 'target' => 80.0, 'actual' => 84.1, 'achievement' => 105.1, 'unit' => '%'],
                    ['kpi' => 'SLA Farmasi Jadi', 'target' => 15, 'actual' => 18, 'achievement' => 83.3, 'unit' => 'Menit'],
                ],
                'revenue_departments' => [
                    ['dept' => 'Farmasi & Obat', 'revenue' => 'Rp 4.450 M', 'percent' => 30],
                    ['dept' => 'Rawat Inap & ICU', 'revenue' => 'Rp 3.550 M', 'percent' => 24],
                    ['dept' => 'Kamar Operasi (OK/Cath)', 'revenue' => 'Rp 2.960 M', 'percent' => 20],
                    ['dept' => 'Rawat Jalan / Poliklinik', 'revenue' => 'Rp 1.780 M', 'percent' => 12],
                    ['dept' => 'Laboratorium Patologi', 'revenue' => 'Rp 1.180 M', 'percent' => 8],
                    ['dept' => 'Radiologi & CT-Scan', 'revenue' => 'Rp 890 M', 'percent' => 6],
                ],
                'charts_data' => [
                    'patient_trend_7d' => [
                        'labels' => ['Rab 23/9', 'Kam 24/9', 'Jum 25/9', 'Sab 26/9', 'Min 27/9', 'Sen 28/9', 'Sel 29/9'],
                        'outpatients' => [432, 468, 485, 395, 215, 492, 472],
                        'inpatients' => [118, 122, 125, 121, 116, 124, 128],
                        'emergency' => [38, 42, 35, 46, 52, 44, 42],
                    ],
                    'bed_capacity_breakdown' => [
                        'labels' => ['ICU / ICCU', 'HCU', 'VIP & VVIP', 'Kelas 1', 'Kelas 2', 'Kelas 3'],
                        'occupied' => [11, 7, 20, 34, 48, 65],
                        'available' => [1, 1, 4, 6, 8, 15],
                        'total' => [12, 8, 24, 40, 56, 80],
                        'bor_percent' => [91.7, 87.5, 83.3, 85.0, 85.7, 81.3],
                    ],
                    'revenue_monthly_trend' => [
                        'labels' => ['Minggu 1', 'Minggu 2', 'Minggu 3', 'Minggu 4 (Berjalan)'],
                        'actual' => [3.72, 3.85, 3.65, 3.60],
                        'target' => [3.80, 3.80, 3.80, 3.80],
                    ],
                    'payer_mix' => [
                        'labels' => ['BPJS PBI', 'BPJS Non-PBI', 'Mandiri / Umum', 'Asuransi Swasta / Korporasi', 'Jasa Raharja / Lainnya'],
                        'percentages' => [48, 28, 14, 8, 2],
                        'counts' => [308, 180, 90, 51, 13],
                    ],
                    'service_sla_wait_times' => [
                        'labels' => ['Pendaftaran', 'Skrining/Triase', 'Poli Dokter', 'Lab CITO', 'Farmasi Racikan', 'Kasir BPJS'],
                        'actual_minutes' => [6, 5, 24, 38, 32, 8],
                        'target_minutes' => [10, 8, 25, 20, 15, 10],
                    ]
                ]
            ];
        });
    }
}
