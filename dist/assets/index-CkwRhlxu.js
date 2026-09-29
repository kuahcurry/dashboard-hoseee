(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e={profile:{name:`dr. Surya Pratama, Sp.JP(K)`,sip:`SIP.449.1/082/SIP-DS/2023`,specialty:`Spesialis Jantung & Pembuluh Darah`,avatar:`SP`,clinicRoom:`Ruang Poli Jantung (Poli 05, Lantai 2)`},criticalAlerts:[{id:`alt-1`,type:`critical`,patientName:`Tn. Bambang Sutrisno (RM: 00-48-21)`,message:`Troponin I CITO: 1.45 ng/mL (Kritis) di IGD Bed 02`,time:`10 mnt lalu`,action:`Review EKG & Instruksi`},{id:`alt-2`,type:`approval`,patientName:`Ny. Endang Rahayu (RM: 00-47-89)`,message:`Permintaan persetujuan tindakan Kateterisasi Jantung (Cath Lab)`,time:`25 mnt lalu`,action:`Approval Tindakan`}],summaryKpis:{todayPatients:28,waiting:6,inProgress:1,completed:15,inpatientCount:6,surgeriesToday:2,unreadAlerts:2},scheduleToday:[{id:`sch-1`,time:`08:00 - 11:30`,activity:`Praktik Poliklinik Eksekutif`,type:`poli`,location:`Ruang Poli 05 (Poli Jantung)`,status:`Berlangsung`,statusClass:`badge-green`,details:`18 Pasien terdaftar • 6 Menunggu • 1 Sedang Dilayani`,isOngoing:!0},{id:`sch-2`,time:`12:00 - 13:00`,activity:`Visit Pasien Rawat Inap`,type:`visit`,location:`Bangsal Al-Ikhlas (VIP) & ICU`,status:`Terjadwal`,statusClass:`badge-blue`,details:`6 Pasien rawat inap tanggung jawab DPJP`,isOngoing:!1},{id:`sch-3`,time:`13:30 - 15:30`,activity:`Tindakan Operasi / Cath Lab`,type:`operasi`,location:`Kamar Operasi OK 03 (Bedah Vaskular)`,status:`Persiapan`,statusClass:`badge-amber`,details:`2 Tindakan (PCI Stent Angioplasti)`,isOngoing:!1},{id:`sch-4`,time:`16:00 - 17:00`,activity:`Rapat Komite Medik & Audit Klinis`,type:`meeting`,location:`Ruang Pertemuan Lt. 3`,status:`Mendatang`,statusClass:`badge-blue`,details:`Pembahasan Kasus STEMI Door-to-Balloon Time`,isOngoing:!1}],patients:[{id:`p-101`,name:`H. Suwandi`,mrn:`00-49-102`,age:62,gender:`Laki-laki`,unit:`Poli Jantung`,room:`Poli 05`,diagnosis:`I20.0 - Unstable Angina Pectoris`,category:`poli`,priority:`urgent`,status:`sedang-ditangani`,statusLabel:`Sedang Dilayani`,registeredAt:`08:15`,notes:`Keluhan nyeri dada substernal menjalar ke lengan kiri`,bpjsStatus:`SEP Aktif (V-Claim Bridged)`,labStatus:`EKG: ST-Depresi V4-V6 • Enzim Jantung Normal`},{id:`p-102`,name:`Ibu Marwiyah`,mrn:`00-48-994`,age:54,gender:`Perempuan`,unit:`Poli Jantung`,room:`Poli 05`,diagnosis:`I10 - Essential Primary Hypertension`,category:`poli`,priority:`normal`,status:`menunggu`,statusLabel:`Antrean #07 (Menunggu)`,registeredAt:`08:30`,notes:`Kontrol rutin obat antihipertensi bulanan`,bpjsStatus:`SEP Terverifikasi`,labStatus:`Hasil Lab Kimia Darah Siap`},{id:`p-103`,name:`Bpk. Tri Wibowo`,mrn:`00-45-772`,age:48,gender:`Laki-laki`,unit:`Poli Jantung`,room:`Poli 05`,diagnosis:`I50.9 - Heart Failure, Unspecified`,category:`poli`,priority:`urgent`,status:`menunggu`,statusLabel:`Antrean #08 (Menunggu)`,registeredAt:`08:45`,notes:`Sesak nafas saat berbaring (orthopnea), edema tungkai ringan`,bpjsStatus:`SEP Terverifikasi`,labStatus:`Foto Toraks: Kardiomegali ringan`},{id:`p-104`,name:`Ny. Siti Aminah`,mrn:`00-42-311`,age:58,gender:`Perempuan`,unit:`Rawat Inap`,room:`Bangsal Al-Ikhlas (Kamar VIP 02)`,diagnosis:`I21.0 - Acute Transmural Myocardial Infarction`,category:`rawat-inap`,priority:`emergency`,status:`rawat-inap`,statusLabel:`Hari Perawatan Ke-3`,registeredAt:`27 Sep 2026`,notes:`Post-STEMI anterior, rencana evaluasi ekokardiografi lanjutan`,bpjsStatus:`Klaim INA-CBG Siap`,labStatus:`Troponin I Tren Menurun (0.21 ng/mL)`},{id:`p-105`,name:`Tn. Agus Santoso`,mrn:`00-44-118`,age:65,gender:`Laki-laki`,unit:`Kamar Operasi (Cath Lab)`,room:`OK 03 Bedah Vaskular`,diagnosis:`I25.1 - Coronary Artery Disease (CAD 2VD)`,category:`operasi`,priority:`urgent`,status:`persiapan-operasi`,statusLabel:`Persiapan OK (13:30)`,registeredAt:`29 Sep 2026`,notes:`Rencana Percutaneous Coronary Intervention (PCI LAD + LCx)`,bpjsStatus:`Approval Penjaminan Operasi OK`,labStatus:`Pre-Op Clearance Anestesi: ACC (Grade II)`}],operations:[{id:`op-1`,orRoom:`Kamar Operasi OK 03`,patientName:`Tn. Agus Santoso`,mrn:`00-44-118`,procedure:`Percutaneous Coronary Intervention (PCI 2 Stent)`,operator:`dr. Surya Pratama, Sp.JP(K)`,anesthetist:`dr. Hendra, Sp.An`,scrubNurse:`Ners Rina & Ners Fajar`,startTime:`13:30 WIB`,estDuration:`90 Menit`,prepStatus:`95% (Pasien di Pre-Holding, Obat Siap)`,orRoomStatus:`Sterilisasi Selesai (Ready)`,preOpStatus:`Clearance ACC`,procedureStatus:`Menunggu Jadwal`},{id:`op-2`,orRoom:`Kamar Operasi OK 03`,patientName:`Ibu Rusmini`,mrn:`00-46-921`,procedure:`Diagnostic Coronary Angiography (DCA)`,operator:`dr. Surya Pratama, Sp.JP(K)`,anesthetist:`dr. Hendra, Sp.An`,scrubNurse:`Ners Rina`,startTime:`15:00 WIB`,estDuration:`45 Menit`,prepStatus:`Inform Consent Lengkap`,orRoomStatus:`Dijadwalkan Setelah Op 1`,preOpStatus:`Clearance ACC`,procedureStatus:`Terjadwal`}],personalAnalytics:{monthlyPatients:412,weeklyPatients:104,dailyAvg:26,surgeriesThisMonth:18,avgConsultationTime:`11.4 Menit`,queueWaitAvg:`22 Menit (Target SIMRS < 30 Menit)`,topCases:[{case:`Penyakit Jantung Koroner (CAD)`,count:184,percent:45},{case:`Hipertensi Esensial Grade 1-2`,count:122,percent:30},{case:`Gagal Jantung Kronik (CHF)`,count:68,percent:16},{case:`Aritmia / Fibrilasi Atrium`,count:38,percent:9}]}},t={executiveOverview:{date:`Selasa, 29 September 2026`,hospitalName:`RS PKU Muhammadiyah Gombong`,directorGreeting:`Selamat Siang, dr. H. Direktur Utama, M.Kes`,operational:{totalPatientsToday:642,outpatients:472,inpatients:128,emergencyIGD:42,surgeries:28,discharged:34,totalQueueActive:58,bedsTotal:220,bedsOccupied:185,bedsAvailable:35,borPercent:84.1},financial:{revenueToday:`Rp 528.400.000`,revenueMtd:`Rp 14.820.000.000`,revenueYtd:`Rp 128.450.000.000`,targetRevenueMtd:`Rp 15.200.000.000`,achievementPercent:97.5,forecastMonthEnd:`Rp 15.650.000.000`,grossMarginPercent:32.4,costOperating:`Rp 9.850.000.000`},quality:{alos:`3.6 Hari`,readmissionRate:`1.8%`,cancellationRate:`2.4%`,noShowRate:`4.1%`,patientSatisfaction:`93.8%`,complaintsUnresolved:2,clinicalIncidents:0}},strategicParadigm:{happening:{headline:`BOR Ruang ICU Mencapai 91.7% (11 dari 12 Bed Terisi)`,detail:`Terjadi peningkatan rujukan kasus gawat nafas dan kardiovaskular dari IGD dalam 48 jam terakhir.`},why:{headline:`Peningkatan Rujukan Pasien STEMI & Pneumonia Geriatri`,detail:`Waktu tinggal (ALOS) pasien ICU rata-rata 4.8 hari, menghambat throughput bed transisi ke HCU/Rawat Inap.`},attention:{headline:`Rekomendasi Tindakan: Fast-Track Discharge ke HCU & Konversi 2 Bed Cadangan`,detail:`Direktur dianjurkan mengaktifkan protokol stepping-down pasien stabil ke ruang HCU Lantai 3 untuk membuka kapasitas ICU.`}},bedMatrix:{total:220,occupied:185,available:35,cleaning:8,maintenance:4,reserved:12,bor:84.1,byUnit:[{unit:`ICU / ICCU`,total:12,occupied:11,available:1,bor:91.7,status:`Critical`},{unit:`HCU`,total:8,occupied:7,available:1,bor:87.5,status:`High`},{unit:`VIP & VVIP`,total:24,occupied:20,available:4,bor:83.3,status:`Normal`},{unit:`Kelas 1`,total:40,occupied:34,available:6,bor:85,status:`Normal`},{unit:`Kelas 2`,total:56,occupied:48,available:8,bor:85.7,status:`Normal`},{unit:`Kelas 3 (BPJS PBI)`,total:80,occupied:65,available:15,bor:81.3,status:`Normal`}]},patientFlow:[{stage:`Pendaftaran / Registrasi`,count:48,avgWait:`6 mnt`,avgService:`4 mnt`,bottleneck:!1},{stage:`Triase / Skrining Klinis`,count:24,avgWait:`5 mnt`,avgService:`7 mnt`,bottleneck:!1},{stage:`Poliklinik Dokter`,count:182,avgWait:`24 mnt`,avgService:`12 mnt`,bottleneck:!1},{stage:`Pemeriksaan Penunjang (Lab/Rad)`,count:64,avgWait:`38 mnt`,avgService:`15 mnt`,bottleneck:!0,reason:`Lonjakan CITO Hematologi di jam 10-11`},{stage:`Farmasi / Pengambilan Obat`,count:92,avgWait:`32 mnt`,avgService:`10 mnt`,bottleneck:!0,reason:`Antrean telaah resep racikan non-kronis`},{stage:`Kasir & Billing BPJS`,count:36,avgWait:`8 mnt`,avgService:`5 mnt`,bottleneck:!1}],dailyTargetComparison:[{kpi:`Pasien Rawat Jalan`,target:500,actual:472,achievement:94.4,unit:`Pasien`},{kpi:`Jumlah Operasi (OK)`,target:30,actual:28,achievement:93.3,unit:`Tindakan`},{kpi:`Revenue Harian`,target:500,actual:528.4,achievement:105.7,unit:`Juta Rupiah`},{kpi:`Bed Occupancy Rate (BOR)`,target:80,actual:84.1,achievement:105.1,unit:`%`},{kpi:`SLA Farmasi Obat Jadi`,target:15,actual:18,achievement:83.3,unit:`Menit (Target <15m)`}],revenueByDepartment:[{dept:`Farmasi & Obat`,revenue:`Rp 4.450 M`,percent:30},{dept:`Rawat Inap & ICU`,revenue:`Rp 3.550 M`,percent:24},{dept:`Kamar Operasi (OK/Cath)`,revenue:`Rp 2.960 M`,percent:20},{dept:`Rawat Jalan / Poliklinik`,revenue:`Rp 1.780 M`,percent:12},{dept:`Laboratorium Patologi`,revenue:`Rp 1.180 M`,percent:8},{dept:`Radiologi & CT-Scan`,revenue:`Rp 890 M`,percent:6}],payerInsuranceBreakdown:{totalRevenue:`Rp 14.82 M`,bpjsShare:72,insurancePrivate:18,generalCash:10,claims:{submitted:1420,approved:1290,pending:95,rejected:35,outstandingAmount:`Rp 3.840.000.000`,aging:[{bracket:`0 - 30 Hari`,count:820,value:`Rp 2.45 M`,risk:`Low`},{bracket:`31 - 60 Hari`,count:420,value:`Rp 980 Jt`,risk:`Normal`},{bracket:`61 - 90 Hari`,count:140,value:`Rp 310 Jt`,risk:`Medium`},{bracket:`> 90 Hari (Perlu Audit)`,count:40,value:`Rp 100 Jt`,risk:`High (Perlu Resubmit)`}]}},operatingRoomAnalytics:{totalTheaters:5,utilizationRate:86.4,totalSurgeriesMonth:412,onTimeStartRate:89.2,cancellations:6,avgDurationMinutes:84,revenuePerOR:`Rp 592 Jt / Kamar OK`,rooms:[{name:`OK 01 (Bedah Umum)`,status:`Active`,surgery:`Appendectomy Laparoskopi`,operator:`dr. Ahmad, Sp.B`},{name:`OK 02 (Kebidanan & Obgyn)`,status:`Active`,surgery:`Sectio Caesarea ERACS`,operator:`dr. Maya, Sp.OG`},{name:`OK 03 (Cath Lab / Vaskular)`,status:`Active`,surgery:`PCI Stent Jantung`,operator:`dr. Surya, Sp.JP`},{name:`OK 04 (Orthopedi)`,status:`Sterilisasi`,surgery:`Next: ORIF Fraktur Femur`,operator:`dr. Dani, Sp.OT`},{name:`OK 05 (Mata & THT)`,status:`Available`,surgery:`Standby CITO`,operator:`-`}]},doctorWorkforceAnalytics:{activeDoctors:46,specialistDoctors:34,generalPractitioners:12,nursingStaff:178,staffingRatio:`1 : 4 (Perawat : Bed)`,shiftCoverage:`100%`,overtimeHoursTotal:142,topDoctorVolume:[{name:`dr. Surya Pratama, Sp.JP(K)`,unit:`Jantung`,patients:412,surgeries:28},{name:`dr. Maya Indah, Sp.OG`,unit:`Kebidanan`,patients:388,surgeries:42},{name:`dr. Hendra Kurniawan, Sp.A`,unit:`Anak`,patients:440,surgeries:0},{name:`dr. Bambang Irawan, Sp.PD`,unit:`Penyakit Dalam`,patients:405,surgeries:4}]}};function n(t,n,i){let{profile:a,criticalAlerts:o,summaryKpis:s,scheduleToday:c,patients:l,operations:u,personalAnalytics:d}=e;t.innerHTML=`
    <!-- Doctor Hero Banner -->
    <div class="hero-gradient-banner">
      <div class="hero-banner-content">
        <h2>${a.name}</h2>
        <p>${a.specialty} • ${a.clinicRoom} • <span style="font-family: var(--font-mono); font-size: 0.8rem; opacity:0.85;">${a.sip}</span></p>
      </div>
      <div class="hero-stat-pills">
        <div class="stat-pill">
          <span class="pill-val">${s.todayPatients}</span>
          <span class="pill-lbl">Total Pasien Hari Ini</span>
        </div>
        <div class="stat-pill">
          <span class="pill-val" style="color: #6ee7b7;">${s.waiting}</span>
          <span class="pill-lbl">Menunggu di Poli</span>
        </div>
        <div class="stat-pill">
          <span class="pill-val" style="color: #fde047;">${s.surgeriesToday}</span>
          <span class="pill-lbl">Tindakan OK</span>
        </div>
      </div>
    </div>

    <!-- Critical Alerts Notification Bar -->
    <div class="doctor-alert-bar">
      <div class="alert-item-group">
        <span class="alert-badge-pulse">CITO ALERT</span>
        <div class="alert-text-body">
          <strong>${o[0].patientName}:</strong> ${o[0].message} (${o[0].time})
        </div>
      </div>
      <div style="display: flex; gap: 8px;">
        <button class="btn-primary" id="btnReviewCito" style="font-size: 0.78rem; padding: 6px 12px;">
          ${o[0].action}
        </button>
      </div>
    </div>

    <!-- Quick Clinical Sub-Tabs -->
    <div class="clinical-tab-bar" id="doctorTabBar">
      <button class="clinical-tab-item active" data-tab="tab-overview">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
        Overview & Antrean
      </button>
      <button class="clinical-tab-item" data-tab="tab-schedule">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
        Jadwal Praktik & Kalender
        <span class="tab-badge">${c.length}</span>
      </button>
      <button class="clinical-tab-item" data-tab="tab-patients">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
        Daftar Pasien & RME
        <span class="tab-badge">${l.length}</span>
      </button>
      <button class="clinical-tab-item" data-tab="tab-operations">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 15-6-6-6 6"/></svg>
        Kamar Operasi (Cath Lab)
        <span class="tab-badge">${u.length}</span>
      </button>
      <button class="clinical-tab-item" data-tab="tab-analytics">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
        Personal Analytics
      </button>
    </div>

    <!-- TAB 1: OVERVIEW & QUEUE -->
    <div class="doctor-subtab-pane active" id="pane-tab-overview">
      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Pasien Menunggu</span>
            <div class="kpi-icon-wrap amber">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
            </div>
          </div>
          <div class="kpi-value">${s.waiting}</div>
          <div class="kpi-subtext">Est. waktu antre: <strong style="margin-left:3px;">~18 mnt</strong></div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Sedang Ditangani</span>
            <div class="kpi-icon-wrap blue">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
            </div>
          </div>
          <div class="kpi-value">${s.inProgress}</div>
          <div class="kpi-subtext">Ruang Poli 05 (H. Suwandi)</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Pasien Selesai</span>
            <div class="kpi-icon-wrap emerald">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            </div>
          </div>
          <div class="kpi-value">${s.completed}</div>
          <div class="kpi-subtext"><span class="kpi-delta up">↑ 60%</span> dari target hari ini</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Pasien Rawat Inap (DPJP)</span>
            <div class="kpi-icon-wrap purple">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
            </div>
          </div>
          <div class="kpi-value">${s.inpatientCount}</div>
          <div class="kpi-subtext">Jadwal visit jam 12:00 WIB</div>
        </div>
      </div>

      <!-- Quick Action Cards: Currently Handling Patient -->
      <div class="card-box" style="margin-bottom: 24px; border-left: 4px solid var(--blue-600);">
        <div class="card-box-header">
          <div class="card-box-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/></svg>
            Pasien Sedang Berada di Ruang Pemeriksaan (Live Session)
          </div>
          <span class="schedule-status-badge badge-green">Pemeriksaan Berlangsung</span>
        </div>
        
        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 20px;">
          <div>
            <h3 style="font-size: 1.15rem; color: var(--blue-950); margin-bottom: 4px;">
              ${l[0].name} <span style="font-weight: 500; font-size: 0.85rem; color: var(--text-muted);">(${l[0].age} Thn, ${l[0].gender})</span>
            </h3>
            <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 10px;">
              No. Rekam Medis: <strong style="font-family: var(--font-mono);">${l[0].mrn}</strong> • Penjamin: <span class="badge-blue" style="font-size: 0.72rem; padding: 2px 6px; border-radius: 4px;">${l[0].bpjsStatus}</span>
            </p>
            <div style="background: #f8fafc; border: 1px solid var(--border-subtle); padding: 12px; border-radius: 8px; font-size: 0.85rem;">
              <strong style="color: var(--blue-900);">Diagnosis Kerja:</strong> ${l[0].diagnosis}<br>
              <strong style="color: var(--blue-900);">Keluhan:</strong> ${l[0].notes}<br>
              <strong style="color: var(--blue-900);">Hasil Lab/Penunjang:</strong> ${l[0].labStatus}
            </div>
          </div>
          <div style="display: flex; flex-direction: column; justify-content: center; gap: 10px;">
            <button class="btn-primary" id="btnOpenRmeNow" data-patient-id="${l[0].id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
              Input SOAP / E-Resep (SIMRS)
            </button>
            <button class="btn-secondary" id="btnNextQueue">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" x2="19" y1="5" y2="19"/></svg>
              Selesaikan & Panggil Berikutnya
            </button>
          </div>
        </div>
      </div>

      <!-- Schedule Mini Preview & Waiting Queue -->
      <div class="dashboard-grid-2col">
        <div class="card-box">
          <div class="card-box-header">
            <div class="card-box-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
              Agenda Dokter Hari Ini
            </div>
            <button class="btn-secondary" style="font-size: 0.76rem; padding: 4px 10px;" id="btnSyncCalendar">
              Sinkronkan Kalender
            </button>
          </div>
          ${c.map(e=>`
            <div class="schedule-item ${e.isOngoing?`ongoing`:``}">
              <div class="schedule-time">
                ${e.time.split(` - `)[0]}
                <small>${e.time.split(` - `)[1]}</small>
              </div>
              <div class="schedule-content">
                <div class="schedule-title">
                  ${e.activity}
                  <span class="schedule-status-badge ${e.statusClass}">${e.status}</span>
                </div>
                <div class="schedule-location">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  ${e.location}
                </div>
                <div style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 4px;">
                  ${e.details}
                </div>
              </div>
            </div>
          `).join(``)}
        </div>

        <div class="card-box">
          <div class="card-box-header">
            <div class="card-box-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
              Antrean Poli Jantung Berikutnya
            </div>
            <span style="font-size: 0.75rem; color: var(--text-muted);">Real-time SIMRS Queue</span>
          </div>
          <div class="data-table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Pasien</th>
                  <th>Prioritas</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                ${l.slice(1,4).map((e,t)=>`
                  <tr>
                    <td>#0${t+7}</td>
                    <td>
                      <span class="patient-cell-name">${e.name}</span>
                      <span class="patient-cell-sub">${e.mrn} • ${e.age} Th</span>
                    </td>
                    <td><span class="priority-tag ${e.priority}">${e.priority}</span></td>
                    <td><span class="schedule-status-badge ${e.status===`menunggu`?`badge-amber`:`badge-green`}">${e.statusLabel}</span></td>
                    <td>
                      <button class="btn-secondary btn-patient-detail" data-id="${e.id}" style="font-size: 0.72rem; padding: 4px 8px;">
                        Buka RME
                      </button>
                    </td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <!-- TAB 2: SCHEDULE (FULL VIEW) -->
    <div class="doctor-subtab-pane" id="pane-tab-schedule" style="display: none;">
      <div class="card-box">
        <div class="card-box-header">
          <div class="card-box-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            Kalender Aktivitas Klinis Terintegrasi SIMRS & Smartphone
          </div>
          <div style="display: flex; gap: 8px;">
            <button class="btn-secondary" id="btnSyncGoogleCalendar">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
              Sinkron ke Smartphone (iCal/GCal)
            </button>
            <button class="btn-primary" id="btnReqScheduleChange">
              Ajukan Perubahan Jadwal
            </button>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
          ${c.map(e=>`
            <div class="schedule-item ${e.isOngoing?`ongoing`:``}" style="flex-direction: column; gap: 8px;">
              <div style="display: flex; justify-content: space-between; width: 100%;">
                <span class="schedule-time" style="font-size: 1rem;">${e.time}</span>
                <span class="schedule-status-badge ${e.statusClass}">${e.status}</span>
              </div>
              <h4 style="font-size: 1rem; color: var(--blue-950); margin: 4px 0;">${e.activity}</h4>
              <p style="font-size: 0.82rem; color: var(--text-muted); display:flex; align-items:center; gap: 5px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                ${e.location}
              </p>
              <div style="font-size: 0.78rem; background: #f8fafc; padding: 8px; border-radius: 6px; width: 100%; border: 1px solid var(--border-subtle);">
                ${e.details}
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>

    <!-- TAB 3: PATIENT LIST & RME -->
    <div class="doctor-subtab-pane" id="pane-tab-patients" style="display: none;">
      <div class="card-box">
        <div class="table-filter-bar">
          <div class="search-input-wrap">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" x2="16.65" y1="21" y2="16.65"/></svg>
            <input type="text" id="doctorPatientSearch" placeholder="Cari Nama Pasien / No. RM / Diagnosis...">
          </div>

          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
            <select class="filter-select" id="doctorFilterCategory">
              <option value="all">Semua Layanan (Poli, Ranap, OK)</option>
              <option value="poli">Poliklinik Jantung</option>
              <option value="rawat-inap">Pasien Rawat Inap (DPJP)</option>
              <option value="operasi">Jadwal Operasi / Tindakan</option>
            </select>

            <select class="filter-select" id="doctorFilterPriority">
              <option value="all">Semua Prioritas</option>
              <option value="emergency">Emergency / Cito</option>
              <option value="urgent">Urgent</option>
              <option value="normal">Normal</option>
            </select>
          </div>
        </div>

        <div class="data-table-container">
          <table class="data-table" id="doctorPatientsTable">
            <thead>
              <tr>
                <th>Pasien & No. RM</th>
                <th>Unit / Kamar</th>
                <th>Diagnosis Utama</th>
                <th>Penjamin BPJS / Asuransi</th>
                <th>Status Penunjang</th>
                <th>Prioritas</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody id="doctorPatientListBody">
              ${l.map(e=>`
                <tr data-category="${e.category}" data-priority="${e.priority}">
                  <td>
                    <span class="patient-cell-name">${e.name}</span>
                    <span class="patient-cell-sub">${e.mrn} • ${e.age} Th • ${e.gender}</span>
                  </td>
                  <td>
                    <span style="font-weight: 600; font-size: 0.82rem;">${e.unit}</span>
                    <small style="display:block; color: var(--text-muted); font-size: 0.72rem;">${e.room}</small>
                  </td>
                  <td><span style="font-size: 0.8rem; font-weight: 600;">${e.diagnosis}</span></td>
                  <td><span class="badge-blue" style="font-size: 0.72rem; padding: 2px 6px; border-radius: 4px;">${e.bpjsStatus}</span></td>
                  <td><span style="font-size: 0.75rem; color: var(--text-secondary);">${e.labStatus}</span></td>
                  <td><span class="priority-tag ${e.priority}">${e.priority}</span></td>
                  <td>
                    <button class="btn-primary btn-patient-detail" data-id="${e.id}" style="font-size: 0.72rem; padding: 4px 10px;">
                      Lihat RME
                    </button>
                  </td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- TAB 4: OPERATION DASHBOARD (CATH LAB / OK) -->
    <div class="doctor-subtab-pane" id="pane-tab-operations" style="display: none;">
      <div class="card-box" style="margin-bottom: 20px;">
        <div class="card-box-header">
          <div class="card-box-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg>
            Jadwal & Status Kamar Operasi Hari Ini (Cath Lab & OK 03)
          </div>
          <span class="schedule-status-badge badge-green">Live Bridging OK SimRS</span>
        </div>

        <div class="or-card-grid">
          ${u.map(e=>`
            <div class="or-card">
              <div class="or-card-header">
                <span class="or-card-name">${e.orRoom}</span>
                <span class="schedule-status-badge ${e.procedureStatus===`Terjadwal`?`badge-blue`:`badge-amber`}">${e.procedureStatus}</span>
              </div>
              <div style="margin-bottom: 12px;">
                <h4 style="font-size: 0.95rem; color: var(--blue-900); font-weight: 700;">${e.procedure}</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted);">Pasien: <strong>${e.patientName}</strong> (${e.mrn})</p>
              </div>

              <div class="or-detail-row">
                <span>Jadwal Mulai</span>
                <strong>${e.startTime} (~${e.estDuration})</strong>
              </div>
              <div class="or-detail-row">
                <span>Operator Utama</span>
                <span>${e.operator}</span>
              </div>
              <div class="or-detail-row">
                <span>Dokter Anestesi</span>
                <span>${e.anesthetist}</span>
              </div>
              <div class="or-detail-row">
                <span>Status Persiapan Pasien</span>
                <span style="color: #059669; font-weight: 600;">${e.prepStatus}</span>
              </div>
              <div class="or-detail-row">
                <span>Status Ruang OK</span>
                <span>${e.orRoomStatus}</span>
              </div>
              <div class="or-detail-row">
                <span>Pre-Op Assessment</span>
                <span class="schedule-status-badge badge-green" style="font-size: 0.68rem;">${e.preOpStatus}</span>
              </div>

              <div style="margin-top: 14px; display: flex; gap: 8px;">
                <button class="btn-primary" style="flex: 1; font-size: 0.75rem; padding: 6px;" onclick="alert('Checklist Safety Surgery (WHO Safe Surgery Saves Lives) Terverifikasi!')">
                  Checklist Safety WHO
                </button>
                <button class="btn-secondary" style="font-size: 0.75rem; padding: 6px;" onclick="alert('Membuka Rekam Anestesi & Monitor C-Arm Cath Lab')">
                  Monitor OK
                </button>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>

    <!-- TAB 5: PERSONAL ANALYTICS -->
    <div class="doctor-subtab-pane" id="pane-tab-analytics" style="display: none;">
      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Pasien Bulan Ini</span>
            <div class="kpi-icon-wrap blue">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </div>
          </div>
          <div class="kpi-value">${d.monthlyPatients}</div>
          <div class="kpi-subtext"><span class="kpi-delta up">↑ 8.4%</span> vs bulan lalu</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Tindakan PCI / Operasi</span>
            <div class="kpi-icon-wrap emerald">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
          </div>
          <div class="kpi-value">${d.surgeriesThisMonth}</div>
          <div class="kpi-subtext">Cath Lab & Vaskular</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Rata-rata Waktu Pelayanan</span>
            <div class="kpi-icon-wrap amber">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
            </div>
          </div>
          <div class="kpi-value">${d.avgConsultationTime}</div>
          <div class="kpi-subtext">Waktu efektif konsultasi</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Rata-rata Antrean Pasien</span>
            <div class="kpi-icon-wrap purple">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
          </div>
          <div class="kpi-value" style="font-size: 1.25rem;">${d.queueWaitAvg}</div>
          <div class="kpi-subtext"><span class="kpi-delta up">✓ Sesuai SLA</span></div>
        </div>
      </div>

      <div class="card-box">
        <div class="card-box-header">
          <div class="card-box-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
            Distribusi Kasus Terbanyak (10 Besar Penyakit Spesialis Jantung)
          </div>
        </div>
        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${d.topCases.map(e=>`
            <div>
              <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 4px;">
                <span style="font-weight: 600; color: var(--blue-950);">${e.case}</span>
                <span style="font-family: var(--font-mono); color: var(--text-muted);">${e.count} Kasus (${e.percent}%)</span>
              </div>
              <div class="target-progress-bar">
                <div class="target-progress-fill" style="width: ${e.percent}%;"></div>
              </div>
            </div>
          `).join(``)}
        </div>
      </div>
    </div>
  `,r(t,n,i)}function r(t,n,r){let i=t.querySelectorAll(`.clinical-tab-item`),a=t.querySelectorAll(`.doctor-subtab-pane`);i.forEach(e=>{e.addEventListener(`click`,()=>{i.forEach(e=>e.classList.remove(`active`)),a.forEach(e=>{e.classList.remove(`active`),e.style.display=`none`}),e.classList.add(`active`);let n=t.querySelector(`#pane-${e.dataset.tab}`);n&&(n.classList.add(`active`),n.style.display=`block`)})}),t.querySelectorAll(`.btn-patient-detail, #btnOpenRmeNow`).forEach(t=>{t.addEventListener(`click`,()=>{let r=t.dataset.id||t.dataset.patientId||`p-101`;n(e.patients.find(e=>e.id===r)||e.patients[0])})});let o=t.querySelector(`#btnNextQueue`);o&&o.addEventListener(`click`,()=>{r(`Memanggil Antrean Berikutnya (#07 Ibu Marwiyah) ke Ruang Poli 05 via Speaker SIMRS...`)});let s=t.querySelector(`#btnReviewCito`);s&&s.addEventListener(`click`,()=>{r(`Membuka Hasil Lab Cito Troponin I Tn. Bambang Sutrisno di IGD Bed 02.`)});let c=t.querySelector(`#doctorPatientSearch`),l=t.querySelector(`#doctorFilterCategory`),u=t.querySelector(`#doctorFilterPriority`),d=t.querySelectorAll(`#doctorPatientListBody tr`);function f(){let e=(c?.value||``).toLowerCase(),t=l?.value||`all`,n=u?.value||`all`;d.forEach(r=>{let i=r.innerText.toLowerCase(),a=!e||i.includes(e),o=t===`all`||r.dataset.category===t,s=n===`all`||r.dataset.priority===n;r.style.display=a&&o&&s?``:`none`})}c&&c.addEventListener(`input`,f),l&&l.addEventListener(`change`,f),u&&u.addEventListener(`change`,f)}function i(e,n){let{executiveOverview:r,strategicParadigm:i,bedMatrix:o,patientFlow:s,dailyTargetComparison:c,revenueByDepartment:l,payerInsuranceBreakdown:u,operatingRoomAnalytics:d,doctorWorkforceAnalytics:f}=t,{operational:p,financial:m,quality:h}=r;e.innerHTML=`
    <!-- Executive Management Header Banner -->
    <div class="hero-gradient-banner">
      <div class="hero-banner-content">
        <h2>${r.directorGreeting}</h2>
        <p>${r.hospitalName} • Executive Business Intelligence Portal • Data Terkini: <strong>${r.date}</strong></p>
      </div>
      <div class="hero-stat-pills">
        <div class="stat-pill">
          <span class="pill-val" style="color: #6ee7b7;">${m.revenueToday}</span>
          <span class="pill-lbl">Revenue Hari Ini</span>
        </div>
        <div class="stat-pill">
          <span class="pill-val">${p.borPercent}%</span>
          <span class="pill-lbl">Bed Occupancy (BOR)</span>
        </div>
        <div class="stat-pill">
          <span class="pill-val" style="color: #93c5fd;">${p.totalPatientsToday}</span>
          <span class="pill-lbl">Total Pasien Hari Ini</span>
        </div>
      </div>
    </div>

    <!-- Management Sub-Tabs -->
    <div class="clinical-tab-bar" id="mgmtTabBar">
      <button class="clinical-tab-item active" data-tab="mgmt-overview">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
        Executive Overview
      </button>
      <button class="clinical-tab-item" data-tab="mgmt-beds">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>
        Bed & Room Management
        <span class="tab-badge" style="background:#fee2e2; color:#b91c1c;">ICU Alert</span>
      </button>
      <button class="clinical-tab-item" data-tab="mgmt-flow">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/><line x1="9" x2="15" y1="12" y2="12"/></svg>
        Patient Flow & SLA
      </button>
      <button class="clinical-tab-item" data-tab="mgmt-finance">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        Revenue & Forecasting
      </button>
      <button class="clinical-tab-item" data-tab="mgmt-insurance">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        BPJS & Asuransi (Klaim)
      </button>
      <button class="clinical-tab-item" data-tab="mgmt-workforce">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
        SDM Medis & OK Analytics
      </button>
    </div>

    <!-- STRATEGIC PARADIGM: What is happening -> Why -> What needs attention -->
    <div class="paradigm-bar">
      <div class="paradigm-card happening">
        <div class="paradigm-step">Step 1: What is happening</div>
        <div class="paradigm-headline">${i.happening.headline}</div>
        <div class="paradigm-desc">${i.happening.detail}</div>
      </div>
      <div class="paradigm-card why">
        <div class="paradigm-step">Step 2: Why is it happening</div>
        <div class="paradigm-headline">${i.why.headline}</div>
        <div class="paradigm-desc">${i.why.detail}</div>
      </div>
      <div class="paradigm-card attention">
        <div class="paradigm-step">Step 3: What needs attention</div>
        <div class="paradigm-headline">${i.attention.headline}</div>
        <div class="paradigm-desc">${i.attention.detail}</div>
      </div>
    </div>

    <!-- TAB 1: EXECUTIVE OVERVIEW -->
    <div class="mgmt-subtab-pane active" id="pane-mgmt-overview">
      <!-- High Level Operational KPIs -->
      <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--blue-950); margin-bottom: 12px; display:flex; align-items:center; gap:8px;">
        <span style="width: 4px; height: 18px; background: var(--blue-600); border-radius: 2px;"></span>
        Indikator Kinerja Operasional Rumah Sakit (Operational KPIs)
      </h3>
      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Rawat Jalan (Poli)</span>
            <div class="kpi-icon-wrap blue">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            </div>
          </div>
          <div class="kpi-value">${p.outpatients}</div>
          <div class="kpi-subtext">Target: 500 <span class="kpi-delta down">(94.4%)</span></div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Rawat Inap Aktif</span>
            <div class="kpi-icon-wrap emerald">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
            </div>
          </div>
          <div class="kpi-value">${p.inpatients}</div>
          <div class="kpi-subtext">Discharge hari ini: <strong>${p.discharged} pasien</strong></div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Pasien IGD Masuk</span>
            <div class="kpi-icon-wrap rose">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
          </div>
          <div class="kpi-value">${p.emergencyIGD}</div>
          <div class="kpi-subtext"><span class="kpi-delta up">↑ 12%</span> vs rata-rata harian</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Bed Occupancy Rate (BOR)</span>
            <div class="kpi-icon-wrap purple">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
          </div>
          <div class="kpi-value">${p.borPercent}%</div>
          <div class="kpi-subtext">Tersedia: <strong>${p.bedsAvailable} Bed</strong> dari 220</div>
        </div>
      </div>

      <!-- Financial & Clinical Quality KPIs -->
      <div class="dashboard-grid-2col">
        <!-- Financial Snapshot -->
        <div class="card-box">
          <div class="card-box-header">
            <div class="card-box-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
              Financial Performance (Bulan Berjalan)
            </div>
            <span class="schedule-status-badge badge-green">Pencapaian: ${m.achievementPercent}%</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 14px;">
            <div style="background: #f8fafc; border: 1px solid var(--border-subtle); border-radius: 8px; padding: 14px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                <span style="font-size: 0.85rem; color: var(--text-secondary);">Realisasi Pendapatan MTD</span>
                <strong style="font-size: 1.1rem; color: var(--blue-950); font-family: var(--font-mono);">${m.revenueMtd}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">
                <span>Target Pendapatan Bulan Ini: ${m.targetRevenueMtd}</span>
                <span>Proyeksi Akhir Bulan: <strong>${m.forecastMonthEnd}</strong></span>
              </div>
              <div class="target-progress-bar">
                <div class="target-progress-fill" style="width: ${m.achievementPercent}%;"></div>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div style="padding: 12px; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: 8px;">
                <span style="font-size: 0.75rem; color: var(--text-muted);">Biaya Operasional (Opex)</span>
                <div style="font-size: 1.1rem; font-weight: 800; color: #dc2626; font-family: var(--font-mono); margin-top: 4px;">${m.costOperating}</div>
              </div>
              <div style="padding: 12px; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: 8px;">
                <span style="font-size: 0.75rem; color: var(--text-muted);">Gross Margin Profit</span>
                <div style="font-size: 1.1rem; font-weight: 800; color: #16a34a; font-family: var(--font-mono); margin-top: 4px;">${m.grossMarginPercent}%</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Clinical Quality & Safety -->
        <div class="card-box">
          <div class="card-box-header">
            <div class="card-box-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              Mutu & Keselamatan Pasien (Quality & Safety KPIs)
            </div>
            <span class="schedule-status-badge badge-blue">Standar Kemenkes RI</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <div style="padding: 12px; border: 1px solid var(--border-subtle); border-radius: 8px; background: #f8fafc;">
              <span style="font-size: 0.75rem; color: var(--text-muted);">Average Length of Stay (ALOS)</span>
              <div style="font-size: 1.3rem; font-weight: 800; color: var(--blue-950); font-family: var(--font-mono);">${h.alos}</div>
              <small style="font-size: 0.72rem; color: #059669;">Optimal (3.0 - 5.0 Hari)</small>
            </div>

            <div style="padding: 12px; border: 1px solid var(--border-subtle); border-radius: 8px; background: #f8fafc;">
              <span style="font-size: 0.75rem; color: var(--text-muted);">Readmission Rate (&lt;30 Hari)</span>
              <div style="font-size: 1.3rem; font-weight: 800; color: var(--blue-950); font-family: var(--font-mono);">${h.readmissionRate}</div>
              <small style="font-size: 0.72rem; color: #059669;">Target &lt; 3.0% (Tercapai)</small>
            </div>

            <div style="padding: 12px; border: 1px solid var(--border-subtle); border-radius: 8px; background: #f8fafc;">
              <span style="font-size: 0.75rem; color: var(--text-muted);">Patient Satisfaction (CSAT)</span>
              <div style="font-size: 1.3rem; font-weight: 800; color: #0284c7; font-family: var(--font-mono);">${h.patientSatisfaction}</div>
              <small style="font-size: 0.72rem; color: var(--text-muted);">Dari 842 Responden Survei</small>
            </div>

            <div style="padding: 12px; border: 1px solid var(--border-subtle); border-radius: 8px; background: #f8fafc;">
              <span style="font-size: 0.75rem; color: var(--text-muted);">Insiden Keselamatan Pasien</span>
              <div style="font-size: 1.3rem; font-weight: 800; color: #16a34a; font-family: var(--font-mono);">${h.clinicalIncidents} Kasus</div>
              <small style="font-size: 0.72rem; color: #059669;">Zero Incident Bulan Ini</small>
            </div>
          </div>
        </div>
      </div>

      <!-- Daily Target Comparison Table -->
      <div class="card-box">
        <div class="card-box-header">
          <div class="card-box-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
            Monitoring Target Harian Rumah Sakit (Actual vs Target)
          </div>
          <button class="btn-secondary" style="font-size: 0.76rem; padding: 4px 10px;" id="btnExportMgmtReport">
            Unduh Laporan Direksi (PDF)
          </button>
        </div>

        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Indikator Kinerja (KPI)</th>
                <th>Satuan</th>
                <th>Target</th>
                <th>Realisasi (Actual)</th>
                <th>Capaian (%)</th>
                <th>Status Kinerja</th>
              </tr>
            </thead>
            <tbody>
              ${c.map(e=>`
                <tr>
                  <td style="font-weight: 700; color: var(--blue-950);">${e.kpi}</td>
                  <td>${e.unit}</td>
                  <td style="font-family: var(--font-mono);">${e.target}</td>
                  <td style="font-family: var(--font-mono); font-weight: 700;">${e.actual}</td>
                  <td>
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="font-weight: 700; font-family: var(--font-mono); min-width: 48px;">${e.achievement}%</span>
                      <div class="target-progress-bar" style="max-width: 100px; margin: 0;">
                        <div class="target-progress-fill ${e.achievement>=100?`green`:e.achievement>=90?``:`amber`}" style="width: ${Math.min(e.achievement,100)}%;"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="schedule-status-badge ${e.achievement>=95?`badge-green`:e.achievement>=90?`badge-blue`:`badge-amber`}">
                      ${e.achievement>=100?`Melampaui Target`:e.achievement>=90?`Memenuhi Standar`:`Perlu Intervensi`}
                    </span>
                  </td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- TAB 2: BED & ROOM MANAGEMENT -->
    <div class="mgmt-subtab-pane" id="pane-mgmt-beds" style="display: none;">
      <div class="bed-matrix-grid">
        <div class="bed-stat-card">
          <div class="bed-stat-num">${o.total}</div>
          <div class="bed-stat-label">Total Kapasitas Bed</div>
        </div>
        <div class="bed-stat-card">
          <div class="bed-stat-num" style="color: #2563eb;">${o.occupied}</div>
          <div class="bed-stat-label">Bed Terisi (Pasien)</div>
        </div>
        <div class="bed-stat-card">
          <div class="bed-stat-num" style="color: #10b981;">${o.available}</div>
          <div class="bed-stat-label">Bed Siap Pakai</div>
        </div>
        <div class="bed-stat-card">
          <div class="bed-stat-num" style="color: #f59e0b;">${o.cleaning}</div>
          <div class="bed-stat-label">Sedang Dibersihkan</div>
        </div>
        <div class="bed-stat-card">
          <div class="bed-stat-num" style="color: #8b5cf6;">${o.reserved}</div>
          <div class="bed-stat-label">Reserved (Booking)</div>
        </div>
        <div class="bed-stat-card alert-high">
          <div class="bed-stat-num">${o.bor}%</div>
          <div class="bed-stat-label">Overall BOR Rumah Sakit</div>
        </div>
      </div>

      <div class="card-box">
        <div class="card-box-header">
          <div class="card-box-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
            Kapasitas & Utilisasi Bed per Unit Ruangan (Early Warning Bottleneck)
          </div>
          <span style="font-size: 0.78rem; color: var(--text-muted);">Data IoT Smart Bed & SIMRS Ranap</span>
        </div>

        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Unit Ruangan / Bangsal</th>
                <th>Total Bed</th>
                <th>Terisi</th>
                <th>Tersedia</th>
                <th>Tingkat Hunian (BOR)</th>
                <th>Status & Rekomendasi Manajerial</th>
              </tr>
            </thead>
            <tbody>
              ${o.byUnit.map(e=>`
                <tr style="${e.status===`Critical`?`background: #fff5f5;`:``}">
                  <td style="font-weight: 700; color: var(--blue-950);">${e.unit}</td>
                  <td style="font-family: var(--font-mono);">${e.total}</td>
                  <td style="font-family: var(--font-mono); font-weight: 700;">${e.occupied}</td>
                  <td style="font-family: var(--font-mono); color: #16a34a; font-weight: 700;">${e.available}</td>
                  <td>
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="font-weight: 700; font-family: var(--font-mono);">${e.bor}%</span>
                      <div class="target-progress-bar" style="max-width: 120px; margin: 0;">
                        <div class="target-progress-fill ${e.bor>90?`amber`:`green`}" style="width: ${e.bor}%; ${e.bor>90?`background:#ef4444;`:``}"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="schedule-status-badge ${e.status===`Critical`?`badge-red`:e.status===`High`?`badge-amber`:`badge-green`}">
                      ${e.status===`Critical`?`⚠️ Bottleneck Kritis (Segera Step-down ke HCU)`:e.status===`High`?`Kapasitas Menipis`:`Kapasitas Aman`}
                    </span>
                  </td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- TAB 3: PATIENT FLOW -->
    <div class="mgmt-subtab-pane" id="pane-mgmt-flow" style="display: none;">
      <div class="card-box" style="margin-bottom: 24px;">
        <div class="card-box-header">
          <div class="card-box-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
            Patient Flow Tracking & SLA Detection (Dari Datang Hingga Pulang)
          </div>
          <span style="font-size: 0.78rem; color: #b91c1c; font-weight: 700;">⚠️ 2 Titik Bottleneck Terdeteksi</span>
        </div>

        <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 20px;">
          Visualisasi real-time antrean pasien pada setiap simpul pelayanan untuk mendeteksi penumpukan sebelum timbul komplain.
        </p>

        <div class="flow-pipeline">
          ${s.map((e,t)=>`
            <div class="flow-step-box ${e.bottleneck?`bottleneck`:``}">
              <div class="flow-step-num">${e.count}</div>
              <div class="flow-step-name">${e.stage}</div>
              <div class="flow-time-pill">Wait: ${e.avgWait} • Svc: ${e.avgService}</div>
              ${e.bottleneck?`
                <div style="font-size: 0.7rem; color: #b91c1c; margin-top: 6px; font-weight: 600;">
                  ⚠️ ${e.reason}
                </div>
              `:``}
            </div>
          `).join(``)}
        </div>
      </div>
    </div>

    <!-- TAB 4: REVENUE & FORECASTING -->
    <div class="mgmt-subtab-pane" id="pane-mgmt-finance" style="display: none;">
      <div class="dashboard-grid-2col">
        <div class="card-box">
          <div class="card-box-header">
            <div class="card-box-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
              Kontribusi Pendapatan per Departemen / Layanan
            </div>
          </div>
          <div style="display: flex; flex-direction: column; gap: 14px;">
            ${l.map(e=>`
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 4px;">
                  <strong style="color: var(--blue-950);">${e.dept}</strong>
                  <span style="font-family: var(--font-mono); font-weight: 700;">${e.revenue} (${e.percent}%)</span>
                </div>
                <div class="target-progress-bar">
                  <div class="target-progress-fill" style="width: ${e.percent*2.5}%;"></div>
                </div>
              </div>
            `).join(``)}
          </div>
        </div>

        <div class="card-box">
          <div class="card-box-header">
            <div class="card-box-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
              Revenue Forecasting & Proyeksi Target (AI Engine)
            </div>
          </div>
          
          <div class="forecast-summary-box">
            <h4 style="font-size: 1rem; margin-bottom: 8px;">Target September 2026: Rp 15,20 Miliar</h4>
            <div class="forecast-row">
              <span>Realisasi Sampai Hari Ini:</span>
              <strong style="font-size: 1.1rem; font-family: var(--font-mono);">Rp 14,82 Miliar</strong>
            </div>
            <div class="forecast-row">
              <span>Estimasi Akhir Bulan (Forecast):</span>
              <strong style="font-size: 1.1rem; font-family: var(--font-mono); color: #6ee7b7;">Rp 15,65 Miliar</strong>
            </div>
            <div class="forecast-row">
              <span>Prediksi Deviasi:</span>
              <strong style="color: #6ee7b7;">+ Rp 450 Juta (+2.9%) Melampaui Target</strong>
            </div>
          </div>

          <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4;">
            Model forecasting memperhitungkan tren rujukan BPJS pekan ke-4, volume tindakan elektif Cath Lab, dan utilisasi farmasi rawat inap.
          </p>
        </div>
      </div>
    </div>

    <!-- TAB 5: INSURANCE & BPJS CLAIMS -->
    <div class="mgmt-subtab-pane" id="pane-mgmt-insurance" style="display: none;">
      <div class="kpi-grid">
        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Klaim Diajukan (Submitted)</span>
            <div class="kpi-icon-wrap blue"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></div>
          </div>
          <div class="kpi-value">${u.claims.submitted}</div>
          <div class="kpi-subtext">Total berkas SEP & INA-CBG</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Klaim Approved (Lolos Verif)</span>
            <div class="kpi-icon-wrap emerald"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
          </div>
          <div class="kpi-value">${u.claims.approved}</div>
          <div class="kpi-subtext">Approval rate: <strong style="color: #16a34a;">90.8%</strong></div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Pending Verifikasi BPJS</span>
            <div class="kpi-icon-wrap amber"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg></div>
          </div>
          <div class="kpi-value">${u.claims.pending}</div>
          <div class="kpi-subtext">Dalam review verifikator BPJS</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Outstanding / Aging Claim</span>
            <div class="kpi-icon-wrap rose"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
          </div>
          <div class="kpi-value" style="font-size: 1.3rem;">${u.claims.outstandingAmount}</div>
          <div class="kpi-subtext">Cash flow penagihan berjalan</div>
        </div>
      </div>

      <!-- Aging Claim Table -->
      <div class="card-box">
        <div class="card-box-header">
          <div class="card-box-title">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Analisis Penuaan Piutang Klaim BPJS (Aging Claim Analysis)
          </div>
        </div>

        <div class="data-table-container">
          <table class="data-table">
            <thead>
              <tr>
                <th>Rentang Waktu (Aging Bracket)</th>
                <th>Jumlah Berkas</th>
                <th>Estimasi Nilai Piutang</th>
                <th>Tingkat Risiko Cash Flow</th>
                <th>Aksi Kasir & Casemix</th>
              </tr>
            </thead>
            <tbody>
              ${u.claims.aging.map(e=>`
                <tr>
                  <td style="font-weight: 700; color: var(--blue-950);">${e.bracket}</td>
                  <td style="font-family: var(--font-mono);">${e.count} Berkas</td>
                  <td style="font-family: var(--font-mono); font-weight: 700;">${e.value}</td>
                  <td>
                    <span class="priority-tag ${e.risk.includes(`Low`)?`normal`:e.risk.includes(`High`)?`emergency`:`urgent`}">
                      ${e.risk}
                    </span>
                  </td>
                  <td>
                    <button class="btn-secondary" style="font-size: 0.72rem; padding: 4px 8px;" onclick="alert('Memverifikasi berkas kelengkapan koding ICD-10 & resume medis untuk percepatan pencairan klaim BPJS.')">
                      Audit Berkas
                    </button>
                  </td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- TAB 6: WORKFORCE & OR ANALYTICS -->
    <div class="mgmt-subtab-pane" id="pane-mgmt-workforce" style="display: none;">
      <div class="dashboard-grid-2col">
        <!-- OR Operating Room Analytics -->
        <div class="card-box">
          <div class="card-box-header">
            <div class="card-box-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
              Efisiensi Kamar Operasi (5 Kamar OK)
            </div>
            <span class="schedule-status-badge badge-green">Utilisasi OK: ${d.utilizationRate}%</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${d.rooms.map(e=>`
              <div style="border: 1px solid var(--border-subtle); padding: 12px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="font-weight: 700; color: var(--blue-950); font-size: 0.88rem;">${e.name}</div>
                  <div style="font-size: 0.76rem; color: var(--text-muted);">${e.surgery} • Operator: <strong>${e.operator}</strong></div>
                </div>
                <span class="schedule-status-badge ${e.status===`Active`?`badge-green`:e.status===`Sterilisasi`?`badge-amber`:`badge-blue`}">${e.status}</span>
              </div>
            `).join(``)}
          </div>
        </div>

        <!-- Doctor Volume Leaderboard -->
        <div class="card-box">
          <div class="card-box-header">
            <div class="card-box-title">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
              Produktivitas Dokter Spesialis (Volume Pelayanan)
            </div>
          </div>

          <div class="data-table-container">
            <table class="data-table">
              <thead>
                <tr>
                  <th>Dokter DPJP</th>
                  <th>Spesialisasi</th>
                  <th>Pasien MTD</th>
                  <th>Tindakan / OK</th>
                </tr>
              </thead>
              <tbody>
                ${f.topDoctorVolume.map(e=>`
                  <tr>
                    <td style="font-weight: 700;">${e.name}</td>
                    <td>${e.unit}</td>
                    <td style="font-family: var(--font-mono); font-weight: 700;">${e.patients}</td>
                    <td style="font-family: var(--font-mono);">${e.surgeries}</td>
                  </tr>
                `).join(``)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `,a(e,n)}function a(e,t){let n=e.querySelectorAll(`.clinical-tab-item`),r=e.querySelectorAll(`.mgmt-subtab-pane`);n.forEach(t=>{t.addEventListener(`click`,()=>{n.forEach(e=>e.classList.remove(`active`)),r.forEach(e=>{e.classList.remove(`active`),e.style.display=`none`}),t.classList.add(`active`);let i=e.querySelector(`#pane-${t.dataset.tab}`);i&&(i.classList.add(`active`),i.style.display=`block`)})});let i=e.querySelector(`#btnExportMgmtReport`);i&&i.addEventListener(`click`,()=>{t(`Menyiapkan Ringkasan Eksekutif Direksi RS PKU Muhammadiyah Gombong...`),setTimeout(()=>{t(`✓ Laporan Eksekutif siap diunduh (PDF terformat otomatis).`)},1e3)})}var o=document.getElementById(`doctorDashboardRoot`),s=document.getElementById(`managementDashboardRoot`),c=document.getElementById(`mainViewport`),l=document.getElementById(`btnRoleDoctor`),u=document.getElementById(`btnRoleManagement`),d=document.getElementById(`btnDesktopView`),f=document.getElementById(`btnMobileView`),p=document.getElementById(`userAvatar`),m=document.getElementById(`userName`),h=document.getElementById(`userUnit`),g=document.getElementById(`apiStatusBtn`),_=document.getElementById(`apiDrawer`),v=document.getElementById(`closeApiDrawer`),y=document.getElementById(`patientModalBackdrop`),b=document.getElementById(`patientModalDialog`),x=document.getElementById(`toastContainer`);function S(e,t=`info`){let n=document.createElement(`div`);n.className=`toast`,n.innerHTML=`
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
    <span>${e}</span>
  `,x.appendChild(n),setTimeout(()=>{n.style.opacity=`0`,n.style.transform=`translateY(10px)`,setTimeout(()=>n.remove(),250)},3500)}function C(e){b.innerHTML=`
    <div class="modal-header">
      <div>
        <h3 class="modal-title">Rekam Medis Elektronik (RME) - ${e.name}</h3>
        <span style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">
          No. RM: ${e.mrn} • Usia: ${e.age} Th • Gender: ${e.gender}
        </span>
      </div>
      <button class="drawer-close" id="btnCloseModal">&times;</button>
    </div>

    <div class="modal-body">
      <div style="background: #f0f7ff; border: 1px solid #bfdbfe; padding: 12px; border-radius: 8px; font-size: 0.82rem; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong>Status Bridging SIMRS & BPJS V-Claim:</strong><br>
          <span style="color: #0369a1;">✓ SEP Terverifikasi • RME Terhubung ke SatuSehat Kemenkes</span>
        </div>
        <span class="schedule-status-badge badge-green">Valid</span>
      </div>

      <div>
        <h4 style="font-size: 0.9rem; color: var(--blue-950); margin-bottom: 6px;">Diagnosis & Keluhan Klinis</h4>
        <div style="background: #f8fafc; border: 1px solid var(--border-subtle); padding: 12px; border-radius: 8px; font-size: 0.85rem;">
          <p><strong>Diagnosis Primer:</strong> ${e.diagnosis}</p>
          <p style="margin-top: 4px;"><strong>Keluhan Pasien:</strong> ${e.notes}</p>
          <p style="margin-top: 4px;"><strong>Pemeriksaan Penunjang:</strong> ${e.labStatus}</p>
        </div>
      </div>

      <div>
        <h4 style="font-size: 0.9rem; color: var(--blue-950); margin-bottom: 6px;">Catatan SOAP Dokter (SIMRS)</h4>
        <div style="display: grid; grid-template-columns: 1fr; gap: 8px; font-size: 0.82rem;">
          <div style="padding: 8px; background: #fff; border: 1px solid var(--border-subtle); border-radius: 6px;">
            <strong>[S] Subjective:</strong> Nyeri dada retrosternal timbul saat aktivitas fisik, berkurang dengan istirahat.
          </div>
          <div style="padding: 8px; background: #fff; border: 1px solid var(--border-subtle); border-radius: 6px;">
            <strong>[O] Objective:</strong> TD: 135/85 mmHg, HR: 88x/m, RR: 20x/m, SpO2: 98% room air. EKG menunjukkan ST depresi 1mm di V4-V6.
          </div>
          <div style="padding: 8px; background: #fff; border: 1px solid var(--border-subtle); border-radius: 6px;">
            <strong>[A] Assessment:</strong> Coronary Artery Disease - Angina Pectoris Tak Stabil (CCS III).
          </div>
          <div style="padding: 8px; background: #fff; border: 1px solid var(--border-subtle); border-radius: 6px;">
            <strong>[P] Plan:</strong> ISDN 5mg SL prn, Clopidogrel 75mg 1x1, Atorvastatin 40mg 1x1 malam. Pro Tindakan Koronarografi (Cath Lab).
          </div>
        </div>
      </div>
    </div>

    <div class="modal-footer">
      <button class="btn-secondary" id="btnCancelModal">Tutup</button>
      <button class="btn-primary" id="btnSaveRme">Simpan Resume Klinis ke SIMRS</button>
    </div>
  `,y.classList.add(`open`);let t=()=>y.classList.remove(`open`);b.querySelector(`#btnCloseModal`).addEventListener(`click`,t),b.querySelector(`#btnCancelModal`).addEventListener(`click`,t),b.querySelector(`#btnSaveRme`).addEventListener(`click`,()=>{t(),S(`✓ Catatan medis untuk ${e.name} berhasil disimpan dan disinkronkan ke SIMRS.`)})}y.addEventListener(`click`,e=>{e.target===y&&y.classList.remove(`open`)});function w(e){e===`doctor`?(l.classList.add(`active`),u.classList.remove(`active`),o.classList.add(`active`),s.classList.remove(`active`),p.textContent=`SP`,m.textContent=`dr. Surya Pratama, Sp.JP(K)`,h.textContent=`Spesialis Jantung & Pembuluh Darah`,n(o,C,S)):(l.classList.remove(`active`),u.classList.add(`active`),o.classList.remove(`active`),s.classList.add(`active`),p.textContent=`DIR`,m.textContent=`dr. H. Direktur Utama, M.Kes`,h.textContent=`Direksi RS PKU Muhammadiyah Gombong`,i(s,S))}l&&u&&(l.addEventListener(`click`,()=>w(`doctor`)),u.addEventListener(`click`,()=>w(`management`))),d&&f&&c&&(d.addEventListener(`click`,()=>{d.classList.add(`active`),f.classList.remove(`active`),c.classList.remove(`mobile-preview-mode`),S(`Beralih ke Tampilan Workstation Desktop / Tablet`)}),f.addEventListener(`click`,()=>{f.classList.add(`active`),d.classList.remove(`active`),c.classList.add(`mobile-preview-mode`),S(`Simulasi Mode Layar Smartphone Dokter (PWA Mobile View)`)})),g.addEventListener(`click`,()=>{_.classList.toggle(`open`)}),v.addEventListener(`click`,()=>{_.classList.remove(`open`)}),document.addEventListener(`DOMContentLoaded`,()=>{w(`doctor`)});