// Mock Data tailored for RS PKU Muhammadiyah Gombong
// Reflecting all features from Dashboard Features.pdf

export const doctorData = {
  profile: {
    name: "dr. Surya Pratama, Sp.JP(K)",
    sip: "SIP.449.1/082/SIP-DS/2023",
    specialty: "Spesialis Jantung & Pembuluh Darah",
    avatar: "SP",
    clinicRoom: "Ruang Poli Jantung (Poli 05, Lantai 2)",
  },
  
  criticalAlerts: [
    {
      id: "alt-1",
      type: "critical",
      patientName: "Tn. Bambang Sutrisno (RM: 00-48-21)",
      message: "Troponin I CITO: 1.45 ng/mL (Kritis) di IGD Bed 02",
      time: "10 mnt lalu",
      action: "Review EKG & Instruksi",
    },
    {
      id: "alt-2",
      type: "approval",
      patientName: "Ny. Endang Rahayu (RM: 00-47-89)",
      message: "Permintaan persetujuan tindakan Kateterisasi Jantung (Cath Lab)",
      time: "25 mnt lalu",
      action: "Approval Tindakan",
    }
  ],

  summaryKpis: {
    todayPatients: 28,
    waiting: 6,
    inProgress: 1,
    completed: 15,
    inpatientCount: 6,
    surgeriesToday: 2,
    unreadAlerts: 2,
  },

  scheduleToday: [
    {
      id: "sch-1",
      time: "08:00 - 11:30",
      activity: "Praktik Poliklinik Eksekutif",
      type: "poli",
      location: "Ruang Poli 05 (Poli Jantung)",
      status: "Berlangsung",
      statusClass: "badge-green",
      details: "18 Pasien terdaftar • 6 Menunggu • 1 Sedang Dilayani",
      isOngoing: true,
    },
    {
      id: "sch-2",
      time: "12:00 - 13:00",
      activity: "Visit Pasien Rawat Inap",
      type: "visit",
      location: "Bangsal Al-Ikhlas (VIP) & ICU",
      status: "Terjadwal",
      statusClass: "badge-blue",
      details: "6 Pasien rawat inap tanggung jawab DPJP",
      isOngoing: false,
    },
    {
      id: "sch-3",
      time: "13:30 - 15:30",
      activity: "Tindakan Operasi / Cath Lab",
      type: "operasi",
      location: "Kamar Operasi OK 03 (Bedah Vaskular)",
      status: "Persiapan",
      statusClass: "badge-amber",
      details: "2 Tindakan (PCI Stent Angioplasti)",
      isOngoing: false,
    },
    {
      id: "sch-4",
      time: "16:00 - 17:00",
      activity: "Rapat Komite Medik & Audit Klinis",
      type: "meeting",
      location: "Ruang Pertemuan Lt. 3",
      status: "Mendatang",
      statusClass: "badge-blue",
      details: "Pembahasan Kasus STEMI Door-to-Balloon Time",
      isOngoing: false,
    }
  ],

  patients: [
    {
      id: "p-101",
      name: "H. Suwandi",
      mrn: "00-49-102",
      age: 62,
      gender: "Laki-laki",
      unit: "Poli Jantung",
      room: "Poli 05",
      diagnosis: "I20.0 - Unstable Angina Pectoris",
      category: "poli",
      priority: "urgent",
      status: "sedang-ditangani",
      statusLabel: "Sedang Dilayani",
      registeredAt: "08:15",
      notes: "Keluhan nyeri dada substernal menjalar ke lengan kiri",
      bpjsStatus: "SEP Aktif (V-Claim Bridged)",
      labStatus: "EKG: ST-Depresi V4-V6 • Enzim Jantung Normal",
    },
    {
      id: "p-102",
      name: "Ibu Marwiyah",
      mrn: "00-48-994",
      age: 54,
      gender: "Perempuan",
      unit: "Poli Jantung",
      room: "Poli 05",
      diagnosis: "I10 - Essential Primary Hypertension",
      category: "poli",
      priority: "normal",
      status: "menunggu",
      statusLabel: "Antrean #07 (Menunggu)",
      registeredAt: "08:30",
      notes: "Kontrol rutin obat antihipertensi bulanan",
      bpjsStatus: "SEP Terverifikasi",
      labStatus: "Hasil Lab Kimia Darah Siap",
    },
    {
      id: "p-103",
      name: "Bpk. Tri Wibowo",
      mrn: "00-45-772",
      age: 48,
      gender: "Laki-laki",
      unit: "Poli Jantung",
      room: "Poli 05",
      diagnosis: "I50.9 - Heart Failure, Unspecified",
      category: "poli",
      priority: "urgent",
      status: "menunggu",
      statusLabel: "Antrean #08 (Menunggu)",
      registeredAt: "08:45",
      notes: "Sesak nafas saat berbaring (orthopnea), edema tungkai ringan",
      bpjsStatus: "SEP Terverifikasi",
      labStatus: "Foto Toraks: Kardiomegali ringan",
    },
    {
      id: "p-104",
      name: "Ny. Siti Aminah",
      mrn: "00-42-311",
      age: 58,
      gender: "Perempuan",
      unit: "Rawat Inap",
      room: "Bangsal Al-Ikhlas (Kamar VIP 02)",
      diagnosis: "I21.0 - Acute Transmural Myocardial Infarction",
      category: "rawat-inap",
      priority: "emergency",
      status: "rawat-inap",
      statusLabel: "Hari Perawatan Ke-3",
      registeredAt: "27 Sep 2026",
      notes: "Post-STEMI anterior, rencana evaluasi ekokardiografi lanjutan",
      bpjsStatus: "Klaim INA-CBG Siap",
      labStatus: "Troponin I Tren Menurun (0.21 ng/mL)",
    },
    {
      id: "p-105",
      name: "Tn. Agus Santoso",
      mrn: "00-44-118",
      age: 65,
      gender: "Laki-laki",
      unit: "Kamar Operasi (Cath Lab)",
      room: "OK 03 Bedah Vaskular",
      diagnosis: "I25.1 - Coronary Artery Disease (CAD 2VD)",
      category: "operasi",
      priority: "urgent",
      status: "persiapan-operasi",
      statusLabel: "Persiapan OK (13:30)",
      registeredAt: "29 Sep 2026",
      notes: "Rencana Percutaneous Coronary Intervention (PCI LAD + LCx)",
      bpjsStatus: "Approval Penjaminan Operasi OK",
      labStatus: "Pre-Op Clearance Anestesi: ACC (Grade II)",
    }
  ],

  operations: [
    {
      id: "op-1",
      orRoom: "Kamar Operasi OK 03",
      patientName: "Tn. Agus Santoso",
      mrn: "00-44-118",
      procedure: "Percutaneous Coronary Intervention (PCI 2 Stent)",
      operator: "dr. Surya Pratama, Sp.JP(K)",
      anesthetist: "dr. Hendra, Sp.An",
      scrubNurse: "Ners Rina & Ners Fajar",
      startTime: "13:30 WIB",
      estDuration: "90 Menit",
      prepStatus: "95% (Pasien di Pre-Holding, Obat Siap)",
      orRoomStatus: "Sterilisasi Selesai (Ready)",
      preOpStatus: "Clearance ACC",
      procedureStatus: "Menunggu Jadwal",
    },
    {
      id: "op-2",
      orRoom: "Kamar Operasi OK 03",
      patientName: "Ibu Rusmini",
      mrn: "00-46-921",
      procedure: "Diagnostic Coronary Angiography (DCA)",
      operator: "dr. Surya Pratama, Sp.JP(K)",
      anesthetist: "dr. Hendra, Sp.An",
      scrubNurse: "Ners Rina",
      startTime: "15:00 WIB",
      estDuration: "45 Menit",
      prepStatus: "Inform Consent Lengkap",
      orRoomStatus: "Dijadwalkan Setelah Op 1",
      preOpStatus: "Clearance ACC",
      procedureStatus: "Terjadwal",
    }
  ],

  personalAnalytics: {
    monthlyPatients: 412,
    weeklyPatients: 104,
    dailyAvg: 26,
    surgeriesThisMonth: 18,
    avgConsultationTime: "11.4 Menit",
    queueWaitAvg: "22 Menit (Target SIMRS < 30 Menit)",
    topCases: [
      { case: "Penyakit Jantung Koroner (CAD)", count: 184, percent: 45 },
      { case: "Hipertensi Esensial Grade 1-2", count: 122, percent: 30 },
      { case: "Gagal Jantung Kronik (CHF)", count: 68, percent: 16 },
      { case: "Aritmia / Fibrilasi Atrium", count: 38, percent: 9 },
    ]
  }
};

export const managementData = {
  executiveOverview: {
    date: "Selasa, 29 September 2026",
    hospitalName: "RS PKU Muhammadiyah Gombong",
    directorGreeting: "Selamat Siang, dr. H. Direktur Utama, M.Kes",
    
    // Operational KPIs
    operational: {
      totalPatientsToday: 642,
      outpatients: 472, // Rawat Jalan
      inpatients: 128,  // Rawat Inap
      emergencyIGD: 42, // IGD
      surgeries: 28,    // Operasi
      discharged: 34,   // Pasien Pulang
      totalQueueActive: 58,
      bedsTotal: 220,
      bedsOccupied: 185,
      bedsAvailable: 35,
      borPercent: 84.1, // Bed Occupancy Rate
    },

    // Financial KPIs
    financial: {
      revenueToday: "Rp 528.400.000",
      revenueMtd: "Rp 14.820.000.000", // Bulan berjalan
      revenueYtd: "Rp 128.450.000.000",
      targetRevenueMtd: "Rp 15.200.000.000",
      achievementPercent: 97.5,
      forecastMonthEnd: "Rp 15.650.000.000",
      grossMarginPercent: 32.4,
      costOperating: "Rp 9.850.000.000",
    },

    // Quality KPIs
    quality: {
      alos: "3.6 Hari", // Average Length of Stay (Standar Kemenkes 3-5 hari)
      readmissionRate: "1.8%", // Target < 3%
      cancellationRate: "2.4%",
      noShowRate: "4.1%",
      patientSatisfaction: "93.8%",
      complaintsUnresolved: 2,
      clinicalIncidents: 0,
    }
  },

  // Paradigm: What is happening -> Why -> What needs attention
  strategicParadigm: {
    happening: {
      headline: "BOR Ruang ICU Mencapai 91.7% (11 dari 12 Bed Terisi)",
      detail: "Terjadi peningkatan rujukan kasus gawat nafas dan kardiovaskular dari IGD dalam 48 jam terakhir."
    },
    why: {
      headline: "Peningkatan Rujukan Pasien STEMI & Pneumonia Geriatri",
      detail: "Waktu tinggal (ALOS) pasien ICU rata-rata 4.8 hari, menghambat throughput bed transisi ke HCU/Rawat Inap."
    },
    attention: {
      headline: "Rekomendasi Tindakan: Fast-Track Discharge ke HCU & Konversi 2 Bed Cadangan",
      detail: "Direktur dianjurkan mengaktifkan protokol stepping-down pasien stabil ke ruang HCU Lantai 3 untuk membuka kapasitas ICU."
    }
  },

  bedMatrix: {
    total: 220,
    occupied: 185,
    available: 35,
    cleaning: 8,
    maintenance: 4,
    reserved: 12,
    bor: 84.1,
    byUnit: [
      { unit: "ICU / ICCU", total: 12, occupied: 11, available: 1, bor: 91.7, status: "Critical" },
      { unit: "HCU", total: 8, occupied: 7, available: 1, bor: 87.5, status: "High" },
      { unit: "VIP & VVIP", total: 24, occupied: 20, available: 4, bor: 83.3, status: "Normal" },
      { unit: "Kelas 1", total: 40, occupied: 34, available: 6, bor: 85.0, status: "Normal" },
      { unit: "Kelas 2", total: 56, occupied: 48, available: 8, bor: 85.7, status: "Normal" },
      { unit: "Kelas 3 (BPJS PBI)", total: 80, occupied: 65, available: 15, bor: 81.3, status: "Normal" },
    ]
  },

  patientFlow: [
    { stage: "Pendaftaran / Registrasi", count: 48, avgWait: "6 mnt", avgService: "4 mnt", bottleneck: false },
    { stage: "Triase / Skrining Klinis", count: 24, avgWait: "5 mnt", avgService: "7 mnt", bottleneck: false },
    { stage: "Poliklinik Dokter", count: 182, avgWait: "24 mnt", avgService: "12 mnt", bottleneck: false },
    { stage: "Pemeriksaan Penunjang (Lab/Rad)", count: 64, avgWait: "38 mnt", avgService: "15 mnt", bottleneck: true, reason: "Lonjakan CITO Hematologi di jam 10-11" },
    { stage: "Farmasi / Pengambilan Obat", count: 92, avgWait: "32 mnt", avgService: "10 mnt", bottleneck: true, reason: "Antrean telaah resep racikan non-kronis" },
    { stage: "Kasir & Billing BPJS", count: 36, avgWait: "8 mnt", avgService: "5 mnt", bottleneck: false },
  ],

  dailyTargetComparison: [
    { kpi: "Pasien Rawat Jalan", target: 500, actual: 472, achievement: 94.4, unit: "Pasien" },
    { kpi: "Jumlah Operasi (OK)", target: 30, actual: 28, achievement: 93.3, unit: "Tindakan" },
    { kpi: "Revenue Harian", target: 500, actual: 528.4, achievement: 105.7, unit: "Juta Rupiah" },
    { kpi: "Bed Occupancy Rate (BOR)", target: 80.0, actual: 84.1, achievement: 105.1, unit: "%" },
    { kpi: "SLA Farmasi Obat Jadi", target: 15, actual: 18, achievement: 83.3, unit: "Menit (Target <15m)" },
  ],

  revenueByDepartment: [
    { dept: "Farmasi & Obat", revenue: "Rp 4.450 M", percent: 30 },
    { dept: "Rawat Inap & ICU", revenue: "Rp 3.550 M", percent: 24 },
    { dept: "Kamar Operasi (OK/Cath)", revenue: "Rp 2.960 M", percent: 20 },
    { dept: "Rawat Jalan / Poliklinik", revenue: "Rp 1.780 M", percent: 12 },
    { dept: "Laboratorium Patologi", revenue: "Rp 1.180 M", percent: 8 },
    { dept: "Radiologi & CT-Scan", revenue: "Rp 890 M", percent: 6 },
  ],

  payerInsuranceBreakdown: {
    totalRevenue: "Rp 14.82 M",
    bpjsShare: 72,       // 72% BPJS Kesehatan
    insurancePrivate: 18, // 18% Asuransi Swasta & Perusahaan
    generalCash: 10,     // 10% Pasien Umum Mandiri
    claims: {
      submitted: 1420,
      approved: 1290,
      pending: 95,
      rejected: 35,
      outstandingAmount: "Rp 3.840.000.000",
      aging: [
        { bracket: "0 - 30 Hari", count: 820, value: "Rp 2.45 M", risk: "Low" },
        { bracket: "31 - 60 Hari", count: 420, value: "Rp 980 Jt", risk: "Normal" },
        { bracket: "61 - 90 Hari", count: 140, value: "Rp 310 Jt", risk: "Medium" },
        { bracket: "> 90 Hari (Perlu Audit)", count: 40, value: "Rp 100 Jt", risk: "High (Perlu Resubmit)" },
      ]
    }
  },

  operatingRoomAnalytics: {
    totalTheaters: 5,
    utilizationRate: 86.4,
    totalSurgeriesMonth: 412,
    onTimeStartRate: 89.2,
    cancellations: 6,
    avgDurationMinutes: 84,
    revenuePerOR: "Rp 592 Jt / Kamar OK",
    rooms: [
      { name: "OK 01 (Bedah Umum)", status: "Active", surgery: "Appendectomy Laparoskopi", operator: "dr. Ahmad, Sp.B" },
      { name: "OK 02 (Kebidanan & Obgyn)", status: "Active", surgery: "Sectio Caesarea ERACS", operator: "dr. Maya, Sp.OG" },
      { name: "OK 03 (Cath Lab / Vaskular)", status: "Active", surgery: "PCI Stent Jantung", operator: "dr. Surya, Sp.JP" },
      { name: "OK 04 (Orthopedi)", status: "Sterilisasi", surgery: "Next: ORIF Fraktur Femur", operator: "dr. Dani, Sp.OT" },
      { name: "OK 05 (Mata & THT)", status: "Available", surgery: "Standby CITO", operator: "-" },
    ]
  },

  doctorWorkforceAnalytics: {
    activeDoctors: 46,
    specialistDoctors: 34,
    generalPractitioners: 12,
    nursingStaff: 178,
    staffingRatio: "1 : 4 (Perawat : Bed)",
    shiftCoverage: "100%",
    overtimeHoursTotal: 142,
    topDoctorVolume: [
      { name: "dr. Surya Pratama, Sp.JP(K)", unit: "Jantung", patients: 412, surgeries: 28 },
      { name: "dr. Maya Indah, Sp.OG", unit: "Kebidanan", patients: 388, surgeries: 42 },
      { name: "dr. Hendra Kurniawan, Sp.A", unit: "Anak", patients: 440, surgeries: 0 },
      { name: "dr. Bambang Irawan, Sp.PD", unit: "Penyakit Dalam", patients: 405, surgeries: 4 },
    ]
  }
};
