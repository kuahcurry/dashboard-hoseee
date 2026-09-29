@extends('layouts.app')

@section('title', 'Doctor Clinical Workspace | RS PKU Muhammadiyah')

@section('user_pill')
<div class="user-pill">
    <div class="user-avatar">{{ $clinicalData['profile']['avatar'] }}</div>
    <div class="user-meta">
        <span class="user-name">{{ $clinicalData['profile']['name'] }}</span>
        <span class="user-unit">{{ $clinicalData['profile']['specialty'] }}</span>
    </div>
</div>
@endsection

@section('content')
<div class="dashboard-root active" id="doctorDashboardRoot">
    <!-- Doctor Hero Banner -->
    <div class="hero-gradient-banner">
        <div class="hero-banner-content">
            <h2>{{ $clinicalData['profile']['name'] }}</h2>
            <p>{{ $clinicalData['profile']['specialty'] }} • {{ $clinicalData['profile']['room'] }} • <span style="font-family: var(--font-mono); font-size: 0.8rem; opacity:0.85;">{{ $clinicalData['profile']['sip'] }}</span></p>
        </div>
        <div class="hero-stat-pills">
            <div class="stat-pill">
                <span class="pill-val">{{ $clinicalData['summary']['today_patients'] }}</span>
                <span class="pill-lbl">Total Pasien Hari Ini</span>
            </div>
            <div class="stat-pill">
                <span class="pill-val" style="color: #6ee7b7;">{{ $clinicalData['summary']['waiting'] }}</span>
                <span class="pill-lbl">Menunggu di Poli</span>
            </div>
            <div class="stat-pill">
                <span class="pill-val" style="color: #fde047;">{{ $clinicalData['summary']['surgeries_today'] }}</span>
                <span class="pill-lbl">Tindakan OK / Cath</span>
            </div>
        </div>
    </div>

    <!-- Critical CITO Alerts Bar -->
    @if(count($clinicalData['critical_alerts']) > 0)
    <div class="doctor-alert-bar">
        <div class="alert-item-group">
            <span class="alert-badge-pulse">CITO ALERT</span>
            <div class="alert-text-body">
                <strong>{{ $clinicalData['critical_alerts'][0]['patient_name'] }}:</strong> {{ $clinicalData['critical_alerts'][0]['message'] }} ({{ $clinicalData['critical_alerts'][0]['time'] }})
            </div>
        </div>
        <div>
            <button class="btn-primary" style="font-size: 0.78rem; padding: 6px 12px;" onclick="showToast('Membuka Hasil Lab CITO Troponin I Tn. Bambang Sutrisno di IGD Bed 02...')">
                {{ $clinicalData['critical_alerts'][0]['action'] }}
            </button>
        </div>
    </div>
    @endif

    <!-- Clinical Sub-Tabs -->
    <div class="clinical-tab-bar" id="doctorTabBar">
        <button class="clinical-tab-item active" data-tab="tab-overview">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
            Overview & Antrean
        </button>
        <button class="clinical-tab-item" data-tab="tab-schedule">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            Jadwal Praktik & Kalender
            <span class="tab-badge">{{ count($clinicalData['schedule']) }}</span>
        </button>
        <button class="clinical-tab-item" data-tab="tab-patients">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
            Daftar Pasien & RME
            <span class="tab-badge">{{ count($clinicalData['patients']) }}</span>
        </button>
        <button class="clinical-tab-item" data-tab="tab-operations">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m18 15-6-6-6 6"/></svg>
            Kamar Operasi (Cath Lab)
            <span class="tab-badge">{{ count($clinicalData['operations']) }}</span>
        </button>
        <button class="clinical-tab-item" data-tab="tab-analytics">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            Personal Analytics
        </button>
    </div>

    <!-- PANE 1: OVERVIEW & QUEUE -->
    <div class="doctor-subtab-pane active" id="pane-tab-overview">
        <div class="kpi-grid">
            <div class="kpi-card">
                <div class="kpi-top">
                    <span class="kpi-title">Pasien Menunggu</span>
                    <div class="kpi-icon-wrap amber">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                    </div>
                </div>
                <div class="kpi-value">{{ $clinicalData['summary']['waiting'] }}</div>
                <div class="kpi-subtext">Est. tunggu antrean: <strong>~18 mnt</strong></div>
            </div>

            <div class="kpi-card">
                <div class="kpi-top">
                    <span class="kpi-title">Sedang Ditangani</span>
                    <div class="kpi-icon-wrap blue">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                    </div>
                </div>
                <div class="kpi-value">{{ $clinicalData['summary']['in_progress'] }}</div>
                <div class="kpi-subtext">Ruang Poli 05 (H. Suwandi)</div>
            </div>

            <div class="kpi-card">
                <div class="kpi-top">
                    <span class="kpi-title">Pasien Selesai</span>
                    <div class="kpi-icon-wrap emerald">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
                    </div>
                </div>
                <div class="kpi-value">{{ $clinicalData['summary']['completed'] }}</div>
                <div class="kpi-subtext"><span class="kpi-delta up">↑ 60%</span> kuota harian</div>
            </div>

            <div class="kpi-card">
                <div class="kpi-top">
                    <span class="kpi-title">Rawat Inap (DPJP)</span>
                    <div class="kpi-icon-wrap purple">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 7h18M3 12h18M3 17h18"/></svg>
                    </div>
                </div>
                <div class="kpi-value">{{ $clinicalData['summary']['inpatient_count'] }}</div>
                <div class="kpi-subtext">Visit jam 12:00 WIB</div>
            </div>
        </div>

        <!-- Live Active Consultation Card -->
        @php $activePatient = $clinicalData['patients'][0]; @endphp
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
                        {{ $activePatient['name'] }} <span style="font-weight: 500; font-size: 0.85rem; color: var(--text-muted);">({{ $activePatient['age'] }} Thn, {{ $activePatient['gender'] }})</span>
                    </h3>
                    <p style="font-size: 0.85rem; color: var(--text-secondary); margin-bottom: 10px;">
                        No. RM: <strong style="font-family: var(--font-mono);">{{ $activePatient['mrn'] }}</strong> • Penjamin: <span class="badge-blue" style="font-size: 0.72rem; padding: 2px 6px; border-radius: 4px;">{{ $activePatient['bpjs_status'] }}</span>
                    </p>
                    <div style="background: #f8fafc; border: 1px solid var(--border-subtle); padding: 12px; border-radius: 8px; font-size: 0.85rem;">
                        <strong style="color: var(--blue-900);">Diagnosis:</strong> {{ $activePatient['diagnosis'] }}<br>
                        <strong style="color: var(--blue-900);">Keluhan:</strong> {{ $activePatient['notes'] }}<br>
                        <strong style="color: var(--blue-900);">Penunjang:</strong> {{ $activePatient['lab_status'] }}
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; justify-content: center; gap: 10px;">
                    <button class="btn-primary" onclick="openPatientModal({{ json_encode($activePatient) }})">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                        Input SOAP / E-Resep (SIMRS)
                    </button>
                    <button class="btn-secondary" onclick="showToast('Memanggil Antrean #07 (Ibu Marwiyah) ke Ruang Poli 05...')">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" x2="19" y1="5" y2="19"/></svg>
                        Selesaikan & Panggil Berikutnya
                    </button>
                </div>
            </div>
        </div>

        <!-- Schedule & Next Queues -->
        <div class="dashboard-grid-2col">
            <div class="card-box">
                <div class="card-box-header">
                    <div class="card-box-title">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                        Agenda Dokter Hari Ini
                    </div>
                    <button class="btn-secondary" style="font-size: 0.76rem; padding: 4px 10px;" onclick="showToast('Jadwal tersinkronisasi otomatis dengan Kalender Smartphone & SIMRS')">
                        Sinkronkan Kalender
                    </button>
                </div>
                @foreach($clinicalData['schedule'] as $item)
                <div class="schedule-item {{ $item['is_ongoing'] ? 'ongoing' : '' }}">
                    <div class="schedule-time">
                        {{ explode(' - ', $item['time'])[0] }}
                        <small>{{ explode(' - ', $item['time'])[1] }}</small>
                    </div>
                    <div class="schedule-content">
                        <div class="schedule-title">
                            {{ $item['activity'] }}
                            <span class="schedule-status-badge {{ $item['status_class'] }}">{{ $item['status'] }}</span>
                        </div>
                        <div class="schedule-location">
                            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                            {{ $item['location'] }}
                        </div>
                        <div style="font-size: 0.74rem; color: var(--text-secondary); margin-top: 4px;">
                            {{ $item['details'] }}
                        </div>
                    </div>
                </div>
                @endforeach
            </div>

            <div class="card-box">
                <div class="card-box-header">
                    <div class="card-box-title">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                        Antrean Poliklinik Berikutnya
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
                            @foreach(array_slice($clinicalData['patients'], 1, 3) as $idx => $p)
                            <tr>
                                <td data-label="Antrean">#0{{ $idx + 7 }}</td>
                                <td data-label="Pasien">
                                    <span class="patient-cell-name">{{ $p['name'] }}</span>
                                    <span class="patient-cell-sub">{{ $p['mrn'] }} • {{ $p['age'] }} Th</span>
                                </td>
                                <td data-label="Prioritas"><span class="priority-tag {{ $p['priority'] }}">{{ $p['priority'] }}</span></td>
                                <td data-label="Status"><span class="schedule-status-badge {{ $p['status'] == 'menunggu' ? 'badge-amber' : 'badge-green' }}">{{ $p['status_label'] }}</span></td>
                                <td data-label="Aksi">
                                    <button class="btn-secondary" style="font-size: 0.72rem; padding: 4px 8px;" onclick="openPatientModal({{ json_encode($p) }})">
                                        Buka RME
                                    </button>
                                </td>
                            </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <!-- PANE 2: SCHEDULE FULL -->
    <div class="doctor-subtab-pane" id="pane-tab-schedule" style="display: none;">
        <div class="card-box">
            <div class="card-box-header">
                <div class="card-box-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                    Kalender Aktivitas Dokter (Terkoneksi SIMRS & Smartphone PWA)
                </div>
                <button class="btn-primary" onclick="showToast('Fitur perubahan jadwal telah diajukan ke Bagian Pelayanan Medik')">
                    Ajukan Perubahan Jadwal
                </button>
            </div>

            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
                @foreach($clinicalData['schedule'] as $item)
                <div class="schedule-item {{ $item['is_ongoing'] ? 'ongoing' : '' }}" style="flex-direction: column; gap: 8px;">
                    <div style="display: flex; justify-content: space-between; width: 100%;">
                        <span class="schedule-time" style="font-size: 1rem;">{{ $item['time'] }}</span>
                        <span class="schedule-status-badge {{ $item['status_class'] }}">{{ $item['status'] }}</span>
                    </div>
                    <h4 style="font-size: 1rem; color: var(--blue-950); margin: 4px 0;">{{ $item['activity'] }}</h4>
                    <p style="font-size: 0.82rem; color: var(--text-muted); display:flex; align-items:center; gap: 5px;">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                        {{ $item['location'] }}
                    </p>
                    <div style="font-size: 0.78rem; background: #f8fafc; padding: 8px; border-radius: 6px; width: 100%; border: 1px solid var(--border-subtle);">
                        {{ $item['details'] }}
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>

    <!-- PANE 3: PATIENT LIST & RME -->
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
                        <option value="operasi">Jadwal Tindakan Operasi</option>
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
                <table class="data-table">
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
                        @foreach($clinicalData['patients'] as $p)
                        <tr data-category="{{ $p['category'] }}" data-priority="{{ $p['priority'] }}">
                            <td data-label="Pasien">
                                <span class="patient-cell-name">{{ $p['name'] }}</span>
                                <span class="patient-cell-sub">{{ $p['mrn'] }} • {{ $p['age'] }} Th • {{ $p['gender'] }}</span>
                            </td>
                            <td data-label="Unit / Kamar">
                                <span style="font-weight: 600; font-size: 0.82rem;">{{ $p['unit'] }}</span>
                                <small style="display:block; color: var(--text-muted); font-size: 0.72rem;">{{ $p['room'] }}</small>
                            </td>
                            <td data-label="Diagnosis"><span style="font-size: 0.8rem; font-weight: 600;">{{ $p['diagnosis'] }}</span></td>
                            <td data-label="Penjamin"><span class="badge-blue" style="font-size: 0.72rem; padding: 2px 6px; border-radius: 4px;">{{ $p['bpjs_status'] }}</span></td>
                            <td data-label="Penunjang"><span style="font-size: 0.75rem; color: var(--text-secondary); text-align: right;">{{ $p['lab_status'] }}</span></td>
                            <td data-label="Prioritas"><span class="priority-tag {{ $p['priority'] }}">{{ $p['priority'] }}</span></td>
                            <td data-label="Aksi">
                                <button class="btn-primary" style="font-size: 0.72rem; padding: 4px 10px;" onclick="openPatientModal({{ json_encode($p) }})">
                                    Lihat RME
                                </button>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- PANE 4: OPERATION DASHBOARD (OK 03 / CATH LAB) -->
    <div class="doctor-subtab-pane" id="pane-tab-operations" style="display: none;">
        <div class="card-box" style="margin-bottom: 20px;">
            <div class="card-box-header">
                <div class="card-box-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M2 12h20"/></svg>
                    Jadwal Kamar Operasi Cath Lab & Bedah Vaskular Hari Ini
                </div>
                <span class="schedule-status-badge badge-green">Live SIMRS OK Bridging</span>
            </div>

            <div class="or-card-grid">
                @foreach($clinicalData['operations'] as $op)
                <div class="or-card">
                    <div class="or-card-header">
                        <span class="or-card-name">{{ $op['or_room'] }}</span>
                        <span class="schedule-status-badge {{ $op['status'] == 'Terjadwal' ? 'badge-blue' : 'badge-amber' }}">{{ $op['status'] }}</span>
                    </div>
                    <div style="margin-bottom: 12px;">
                        <h4 style="font-size: 0.95rem; color: var(--blue-900); font-weight: 700;">{{ $op['procedure'] }}</h4>
                        <p style="font-size: 0.8rem; color: var(--text-muted);">Pasien: <strong>{{ $op['patient_name'] }}</strong> ({{ $op['mrn'] }})</p>
                    </div>

                    <div class="or-detail-row">
                        <span>Jadwal Mulai</span>
                        <strong>{{ $op['start_time'] }}</strong>
                    </div>
                    <div class="or-detail-row">
                        <span>Operator Utama</span>
                        <span>{{ $op['operator'] }}</span>
                    </div>
                    <div class="or-detail-row">
                        <span>Dokter Anestesi</span>
                        <span>{{ $op['anesthetist'] }}</span>
                    </div>
                    <div class="or-detail-row">
                        <span>Persiapan Pasien</span>
                        <span style="color: #059669; font-weight: 600;">{{ $op['prep_status'] }}</span>
                    </div>
                    <div class="or-detail-row">
                        <span>Status Ruang OK</span>
                        <span>{{ $op['room_status'] }}</span>
                    </div>
                    <div class="or-detail-row">
                        <span>Pre-Op Assessment</span>
                        <span class="schedule-status-badge badge-green" style="font-size: 0.68rem;">{{ $op['pre_op'] }}</span>
                    </div>

                    <div style="margin-top: 14px; display: flex; gap: 8px;">
                        <button class="btn-primary" style="flex: 1; font-size: 0.75rem; padding: 6px;" onclick="showToast('Checklist WHO Surgical Safety Checklist Terverifikasi.')">
                            Checklist Safety WHO
                        </button>
                        <button class="btn-secondary" style="font-size: 0.75rem; padding: 6px;" onclick="showToast('Membuka Monitor C-Arm Cath Lab OK 03')">
                            Monitor OK
                        </button>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>

    <!-- PANE 5: PERSONAL ANALYTICS -->
    <div class="doctor-subtab-pane" id="pane-tab-analytics" style="display: none;">
        @php $analytics = $clinicalData['analytics']; @endphp
        <div class="kpi-grid">
            <div class="kpi-card">
                <div class="kpi-top">
                    <span class="kpi-title">Pasien Bulan Ini</span>
                    <div class="kpi-icon-wrap blue"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
                </div>
                <div class="kpi-value">{{ $analytics['monthly_patients'] }}</div>
                <div class="kpi-subtext"><span class="kpi-delta up">↑ 8.4%</span> vs bulan lalu</div>
            </div>

            <div class="kpi-card">
                <div class="kpi-top">
                    <span class="kpi-title">Tindakan Cath Lab / OK</span>
                    <div class="kpi-icon-wrap emerald"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                </div>
                <div class="kpi-value">{{ $analytics['surgeries_this_month'] }}</div>
                <div class="kpi-subtext">PCI Stent & Angiografi</div>
            </div>

            <div class="kpi-card">
                <div class="kpi-top">
                    <span class="kpi-title">Rata-rata Waktu Konsultasi</span>
                    <div class="kpi-icon-wrap amber"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg></div>
                </div>
                <div class="kpi-value">{{ $analytics['avg_consultation_time'] }}</div>
                <div class="kpi-subtext">Waktu efektif pemeriksaan</div>
            </div>

            <div class="kpi-card">
                <div class="kpi-top">
                    <span class="kpi-title">Rata-rata Antrean Pasien</span>
                    <div class="kpi-icon-wrap purple"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
                </div>
                <div class="kpi-value" style="font-size: 1.2rem;">{{ $analytics['queue_wait_avg'] }}</div>
                <div class="kpi-subtext"><span class="kpi-delta up">✓ Sesuai SLA BPJS</span></div>
            </div>
        </div>

        <div class="card-box">
            <div class="card-box-header">
                <div class="card-box-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                    Distribusi 10 Besar Diagnosis Kasus Terbanyak (Spesialis Jantung)
                </div>
            </div>
            <div style="display: flex; flex-direction: column; gap: 14px;">
                @foreach($analytics['top_cases'] as $item)
                <div>
                    <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 4px;">
                        <span style="font-weight: 600; color: var(--blue-950);">{{ $item['case'] }}</span>
                        <span style="font-family: var(--font-mono); color: var(--text-muted);">{{ $item['count'] }} Kasus ({{ $item['percent'] }}%)</span>
                    </div>
                    <div class="target-progress-bar">
                        <div class="target-progress-fill" style="width: {{ $item['percent'] * 2 }}%;"></div>
                    </div>
                </div>
                @endforeach
            </div>
        </div>
    </div>
</div>
@endsection
