@extends('layouts.app')

@section('title', 'Executive Management Intelligence | RS PKU Muhammadiyah')

@section('user_pill')
<div class="user-pill">
    <div class="user-avatar">DIR</div>
    <div class="user-meta">
        <span class="user-name">{{ $mgmtData['overview']['director_greeting'] }}</span>
        <span class="user-unit">Direksi RS PKU Muhammadiyah</span>
    </div>
</div>
@endsection

@section('content')
<div class="dashboard-root active" id="managementDashboardRoot">
    @php
        $overview = $mgmtData['overview'];
        $op = $overview['operational'];
        $fin = $overview['financial'];
        $ql = $overview['quality'];
    @endphp

    <!-- Executive Hero Banner -->
    <div class="hero-gradient-banner">
        <div class="hero-banner-content">
            <h2>{{ $overview['director_greeting'] }}</h2>
            <p>{{ $overview['hospital_name'] }} • Executive Business Intelligence Portal • <strong>{{ $overview['date'] }}</strong></p>
        </div>
        <div class="hero-stat-pills">
            <div class="stat-pill">
                <span class="pill-val" style="color: #6ee7b7;">{{ $fin['revenue_today'] }}</span>
                <span class="pill-lbl">Revenue Hari Ini</span>
            </div>
            <div class="stat-pill">
                <span class="pill-val">{{ $op['bor_percent'] }}%</span>
                <span class="pill-lbl">Bed Occupancy (BOR)</span>
            </div>
            <div class="stat-pill">
                <span class="pill-val" style="color: #93c5fd;">{{ $op['total_patients_today'] }}</span>
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
    </div>

    <!-- Executive Operations Alert Strip (Overhaul of What/Why/Attention) -->
    <div class="executive-alert-strip">
        <div class="alert-strip-left">
            <div class="alert-icon-pulse">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <div class="alert-strip-content">
                <div class="alert-strip-title">
                    <strong>Peringatan Manajerial:</strong> {{ $mgmtData['paradigm']['happening']['headline'] }}
                </div>
                <div class="alert-strip-sub">
                    <strong>Penyebab:</strong> {{ $mgmtData['paradigm']['why']['detail'] }} • <strong>Rekomendasi Tindakan:</strong> {{ $mgmtData['paradigm']['attention']['headline'] }}
                </div>
            </div>
        </div>
        <div class="alert-strip-actions">
            <button class="btn-primary" style="font-size: 0.78rem; padding: 7px 14px; white-space: nowrap;" onclick="switchMgmtTab('mgmt-beds')">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>
                Audit Bed ICU Sekarang
            </button>
        </div>
    </div>

    <!-- PANE 1: EXECUTIVE OVERVIEW -->
    <div class="mgmt-subtab-pane active" id="pane-mgmt-overview">
        <!-- Operational KPIs -->
        <h3 style="font-size: 1.05rem; font-weight: 700; color: var(--blue-950); margin-bottom: 12px; display:flex; align-items:center; gap:8px;">
            <span style="width: 4px; height: 18px; background: var(--blue-600); border-radius: 2px;"></span>
            Indikator Kinerja Operasional Rumah Sakit (Operational KPIs)
        </h3>
        <div class="kpi-grid">
            <div class="kpi-card">
                <div class="kpi-top">
                    <span class="kpi-title">Rawat Jalan (Poli)</span>
                    <div class="kpi-icon-wrap blue"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg></div>
                </div>
                <div class="kpi-value">{{ $op['outpatients'] }}</div>
                <div class="kpi-subtext">Target: 500 <span class="kpi-delta down">(94.4%)</span></div>
            </div>

            <div class="kpi-card">
                <div class="kpi-top">
                    <span class="kpi-title">Rawat Inap Aktif</span>
                    <div class="kpi-icon-wrap emerald"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg></div>
                </div>
                <div class="kpi-value">{{ $op['inpatients'] }}</div>
                <div class="kpi-subtext">Discharge hari ini: <strong>{{ $op['discharged'] }} pasien</strong></div>
            </div>

            <div class="kpi-card">
                <div class="kpi-top">
                    <span class="kpi-title">Pasien IGD Masuk</span>
                    <div class="kpi-icon-wrap rose"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg></div>
                </div>
                <div class="kpi-value">{{ $op['emergency_igd'] }}</div>
                <div class="kpi-subtext"><span class="kpi-delta up">↑ 12%</span> vs rata-rata harian</div>
            </div>

            <div class="kpi-card">
                <div class="kpi-top">
                    <span class="kpi-title">Bed Occupancy (BOR)</span>
                    <div class="kpi-icon-wrap purple"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg></div>
                </div>
                <div class="kpi-value">{{ $op['bor_percent'] }}%</div>
                <div class="kpi-subtext">Tersedia: <strong>{{ $op['beds_available'] }} Bed</strong> dari 220</div>
            </div>
        </div>

        <!-- VISUAL ANALYTICS: 7-Day Trend & Payer Mix Charts -->
        <div class="dashboard-grid-2col" style="margin-bottom: 24px;">
            <div class="chart-card">
                <div class="chart-card-header">
                    <div class="chart-card-title">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
                        Grafik Tren Kunjungan Pasien (7 Hari Terakhir)
                    </div>
                    <span class="chart-meta-pill">
                        <span class="status-dot"></span> Live SIMRS Data
                    </span>
                </div>
                <div class="chart-container">
                    <canvas id="chartPatientTrend"></canvas>
                </div>
            </div>

            <div class="chart-card">
                <div class="chart-card-header">
                    <div class="chart-card-title">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                        Komposisi Penjamin Pasien (Payer Mix)
                    </div>
                    <span class="chart-meta-pill">Total: 642 Pasien</span>
                </div>
                <div class="chart-container-donut">
                    <canvas id="chartPayerMix"></canvas>
                </div>
                <div class="chart-legend-grid">
                    @foreach($mgmtData['charts_data']['payer_mix']['labels'] as $idx => $label)
                    <div class="legend-item">
                        <span class="legend-color-dot" style="background: {{ ['#1d4ed8', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'][$idx] }};"></span>
                        <span>{{ $label }}: <strong>{{ $mgmtData['charts_data']['payer_mix']['percentages'][$idx] }}%</strong></span>
                    </div>
                    @endforeach
                </div>
            </div>
        </div>

        <!-- Financial & Clinical Quality KPIs -->
        <div class="dashboard-grid-2col">
            <div class="card-box">
                <div class="card-box-header">
                    <div class="card-box-title">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        Financial Performance (Bulan Berjalan)
                    </div>
                    <span class="schedule-status-badge badge-green">Pencapaian: {{ $fin['achievement_percent'] }}%</span>
                </div>

                <div style="display: flex; flex-direction: column; gap: 14px;">
                    <div style="background: #f8fafc; border: 1px solid var(--border-subtle); border-radius: 8px; padding: 14px;">
                        <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                            <span style="font-size: 0.85rem; color: var(--text-secondary);">Realisasi Pendapatan MTD</span>
                            <strong style="font-size: 1.1rem; color: var(--blue-950); font-family: var(--font-mono);">{{ $fin['revenue_mtd'] }}</strong>
                        </div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">
                            <span>Target: {{ $fin['target_revenue_mtd'] }}</span>
                            <span>Proyeksi: <strong>{{ $fin['forecast_month_end'] }}</strong></span>
                        </div>
                        <div class="target-progress-bar">
                            <div class="target-progress-fill" style="width: {{ $fin['achievement_percent'] }}%;"></div>
                        </div>
                    </div>

                    <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                        <div style="padding: 12px; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: 8px;">
                            <span style="font-size: 0.75rem; color: var(--text-muted);">Biaya Operasional (Opex)</span>
                            <div style="font-size: 1.1rem; font-weight: 800; color: #dc2626; font-family: var(--font-mono); margin-top: 4px;">{{ $fin['cost_operating'] }}</div>
                        </div>
                        <div style="padding: 12px; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: 8px;">
                            <span style="font-size: 0.75rem; color: var(--text-muted);">Gross Margin Profit</span>
                            <div style="font-size: 1.1rem; font-weight: 800; color: #16a34a; font-family: var(--font-mono); margin-top: 4px;">{{ $fin['gross_margin'] }}</div>
                        </div>
                    </div>
                </div>
            </div>

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
                        <div style="font-size: 1.3rem; font-weight: 800; color: var(--blue-950); font-family: var(--font-mono);">{{ $ql['alos'] }}</div>
                        <small style="font-size: 0.72rem; color: #059669;">Optimal (3.0 - 5.0 Hari)</small>
                    </div>

                    <div style="padding: 12px; border: 1px solid var(--border-subtle); border-radius: 8px; background: #f8fafc;">
                        <span style="font-size: 0.75rem; color: var(--text-muted);">Readmission Rate (&lt;30 Hari)</span>
                        <div style="font-size: 1.3rem; font-weight: 800; color: var(--blue-950); font-family: var(--font-mono);">{{ $ql['readmission_rate'] }}</div>
                        <small style="font-size: 0.72rem; color: #059669;">Target &lt; 3.0% (Tercapai)</small>
                    </div>

                    <div style="padding: 12px; border: 1px solid var(--border-subtle); border-radius: 8px; background: #f8fafc;">
                        <span style="font-size: 0.75rem; color: var(--text-muted);">Patient Satisfaction (CSAT)</span>
                        <div style="font-size: 1.3rem; font-weight: 800; color: #0284c7; font-family: var(--font-mono);">{{ $ql['satisfaction'] }}</div>
                        <small style="font-size: 0.72rem; color: var(--text-muted);">Dari 842 Responden</small>
                    </div>

                    <div style="padding: 12px; border: 1px solid var(--border-subtle); border-radius: 8px; background: #f8fafc;">
                        <span style="font-size: 0.75rem; color: var(--text-muted);">Insiden Keselamatan Pasien</span>
                        <div style="font-size: 1.3rem; font-weight: 800; color: #16a34a; font-family: var(--font-mono);">{{ $ql['incidents'] }} Kasus</div>
                        <small style="font-size: 0.72rem; color: #059669;">Zero Incident Bulan Ini</small>
                    </div>
                </div>
            </div>
        </div>

        <!-- Target Comparison Table -->
        <div class="card-box">
            <div class="card-box-header">
                <div class="card-box-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                    Monitoring Target Harian Rumah Sakit (Actual vs Target)
                </div>
                <button class="btn-secondary" style="font-size: 0.76rem; padding: 4px 10px;" onclick="showToast('Menyiapkan Ekspor Laporan Direksi RS PKU ke PDF...')">
                    Unduh Laporan Direksi
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
                        @foreach($mgmtData['daily_targets'] as $row)
                        <tr>
                            <td data-label="KPI" style="font-weight: 700; color: var(--blue-950);">{{ $row['kpi'] }}</td>
                            <td data-label="Satuan">{{ $row['unit'] }}</td>
                            <td data-label="Target" style="font-family: var(--font-mono);">{{ $row['target'] }}</td>
                            <td data-label="Realisasi" style="font-family: var(--font-mono); font-weight: 700;">{{ $row['actual'] }}</td>
                            <td data-label="Capaian">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="font-weight: 700; font-family: var(--font-mono); min-width: 48px;">{{ $row['achievement'] }}%</span>
                                    <div class="target-progress-bar" style="max-width: 100px; margin: 0;">
                                        <div class="target-progress-fill {{ $row['achievement'] >= 100 ? 'green' : ($row['achievement'] >= 90 ? '' : 'amber') }}" style="width: {{ min($row['achievement'], 100) }}%;"></div>
                                    </div>
                                </div>
                            </td>
                            <td data-label="Status">
                                <span class="schedule-status-badge {{ $row['achievement'] >= 95 ? 'badge-green' : ($row['achievement'] >= 90 ? 'badge-blue' : 'badge-amber') }}">
                                    {{ $row['achievement'] >= 100 ? 'Melampaui Target' : ($row['achievement'] >= 90 ? 'Memenuhi Standar' : 'Perlu Intervensi') }}
                                </span>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- PANE 2: BED & ROOM MANAGEMENT -->
    <div class="mgmt-subtab-pane" id="pane-mgmt-beds" style="display: none;">
        @php $bm = $mgmtData['bed_matrix']; @endphp
        <div class="bed-matrix-grid">
            <div class="bed-stat-card"><div class="bed-stat-num">{{ $bm['total'] }}</div><div class="bed-stat-label">Total Kapasitas Bed</div></div>
            <div class="bed-stat-card"><div class="bed-stat-num" style="color: #2563eb;">{{ $bm['occupied'] }}</div><div class="bed-stat-label">Bed Terisi Pasien</div></div>
            <div class="bed-stat-card"><div class="bed-stat-num" style="color: #10b981;">{{ $bm['available'] }}</div><div class="bed-stat-label">Bed Siap Pakai</div></div>
            <div class="bed-stat-card"><div class="bed-stat-num" style="color: #f59e0b;">{{ $bm['cleaning'] }}</div><div class="bed-stat-label">Sedang Dibersihkan</div></div>
            <div class="bed-stat-card"><div class="bed-stat-num" style="color: #8b5cf6;">{{ $bm['reserved'] }}</div><div class="bed-stat-label">Reserved (Booking)</div></div>
            <div class="bed-stat-card alert-high"><div class="bed-stat-num">{{ $bm['bor'] }}%</div><div class="bed-stat-label">Overall BOR Rumah Sakit</div></div>
        </div>

        <!-- Bed Capacity & Utilization Bar Chart -->
        <div class="chart-card" style="margin-bottom: 24px;">
            <div class="chart-card-header">
                <div class="chart-card-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>
                    Grafik Komparasi Kapasitas vs Keterisian Tempat Tidur per Bangsal
                </div>
                <span class="chart-meta-pill" style="background: #fef2f2; color: #dc2626; border-color: #fecdd3;">
                    ⚠️ Batas Waspada Kemenkes: 85% BOR
                </span>
            </div>
            <div class="chart-container" style="height: 300px;">
                <canvas id="chartBedCapacity"></canvas>
            </div>
        </div>

        <div class="card-box">
            <div class="card-box-header">
                <div class="card-box-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                    Kapasitas & Utilisasi Bed per Unit Ruangan (Early Warning Bottleneck)
                </div>
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
                        @foreach($bm['units'] as $u)
                        <tr style="{{ $u['status'] == 'Critical' ? 'background: #fff5f5;' : '' }}">
                            <td data-label="Ruangan" style="font-weight: 700; color: var(--blue-950);">{{ $u['unit'] }}</td>
                            <td data-label="Total Bed" style="font-family: var(--font-mono);">{{ $u['total'] }}</td>
                            <td data-label="Terisi" style="font-family: var(--font-mono); font-weight: 700;">{{ $u['occupied'] }}</td>
                            <td data-label="Tersedia" style="font-family: var(--font-mono); color: #16a34a; font-weight: 700;">{{ $u['available'] }}</td>
                            <td data-label="BOR">
                                <div style="display: flex; align-items: center; gap: 8px;">
                                    <span style="font-weight: 700; font-family: var(--font-mono);">{{ $u['bor'] }}%</span>
                                    <div class="target-progress-bar" style="max-width: 120px; margin: 0;">
                                        <div class="target-progress-fill {{ $u['bor'] > 90 ? 'amber' : 'green' }}" style="width: {{ $u['bor'] }}%; {{ $u['bor'] > 90 ? 'background:#ef4444;' : '' }}"></div>
                                    </div>
                                </div>
                            </td>
                            <td data-label="Status">
                                <span class="schedule-status-badge {{ $u['status'] == 'Critical' ? 'badge-red' : ($u['status'] == 'High' ? 'badge-amber' : 'badge-green') }}">
                                    {{ $u['status'] == 'Critical' ? '⚠️ Bottleneck Kritis (Step-down ke HCU)' : ($u['status'] == 'High' ? 'Kapasitas Menipis' : 'Kapasitas Aman') }}
                                </span>
                            </td>
                        </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>

    <!-- PANE 3: PATIENT FLOW -->
    <div class="mgmt-subtab-pane" id="pane-mgmt-flow" style="display: none;">
        <div class="card-box" style="margin-bottom: 24px;">
            <div class="card-box-header">
                <div class="card-box-title">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                    Patient Flow Tracking & SLA Detection (Dari Pendaftaran Hingga Selesai)
                </div>
                <span style="font-size: 0.78rem; color: #b91c1c; font-weight: 700;">⚠️ 2 Titik Bottleneck Terdeteksi</span>
            </div>

            <div class="flow-pipeline">
                @foreach($mgmtData['patient_flow'] as $step)
                <div class="flow-step-box {{ $step['bottleneck'] ? 'bottleneck' : '' }}">
                    <div class="flow-step-num">{{ $step['count'] }}</div>
                    <div class="flow-step-name">{{ $step['stage'] }}</div>
                    <div class="flow-time-pill">Wait: {{ $step['avg_wait'] }} • Svc: {{ $step['avg_service'] }}</div>
                    @if($step['bottleneck'])
                    <div style="font-size: 0.7rem; color: #b91c1c; margin-top: 6px; font-weight: 600;">
                        ⚠️ {{ $step['reason'] }}
                    </div>
                    @endif
                </div>
                @endforeach
            </div>
        </div>

        <!-- Patient Flow Wait Time vs SLA Chart -->
        <div class="chart-card" style="margin-bottom: 24px;">
            <div class="chart-card-header">
                <div class="chart-card-title">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
                    Grafik Analisis Waktu Tunggu Aktual vs Standar SLA Kemenkes/SIMRS (Menit)
                </div>
                <span class="chart-meta-pill">Early Bottleneck Detection: Lab & Farmasi</span>
            </div>
            <div class="chart-container" style="height: 290px;">
                <canvas id="chartFlowSla"></canvas>
            </div>
        </div>
    </div>

    <!-- PANE 4: REVENUE & FORECASTING -->
    <div class="mgmt-subtab-pane" id="pane-mgmt-finance" style="display: none;">
        <!-- Revenue Visual Analytics (Weekly Trend & Department Mix) -->
        <div class="dashboard-grid-2col" style="margin-bottom: 24px;">
            <div class="chart-card">
                <div class="chart-card-header">
                    <div class="chart-card-title">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        Grafik Tren Realisasi Pendapatan Mingguan vs Target (Milyar Rp)
                    </div>
                    <span class="chart-meta-pill">Realisasi vs Target MTD</span>
                </div>
                <div class="chart-container">
                    <canvas id="chartRevenueTrend"></canvas>
                </div>
            </div>

            <div class="chart-card">
                <div class="chart-card-header">
                    <div class="chart-card-title">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                        Proporsi Kontribusi Revenue per Departemen
                    </div>
                    <span class="chart-meta-pill">Total Rp 14.82 M</span>
                </div>
                <div class="chart-container-donut">
                    <canvas id="chartDeptRevenue"></canvas>
                </div>
            </div>
        </div>

        <div class="dashboard-grid-2col">
            <div class="card-box">
                <div class="card-box-header">
                    <div class="card-box-title">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.21 15.89A10 10 0 1 1 8 2.83"/><path d="M22 12A10 10 0 0 0 12 2v10z"/></svg>
                        Kontribusi Pendapatan per Departemen / Layanan
                    </div>
                </div>
                <div style="display: flex; flex-direction: column; gap: 14px;">
                    @foreach($mgmtData['revenue_departments'] as $item)
                    <div>
                        <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 4px;">
                            <strong style="color: var(--blue-950);">{{ $item['dept'] }}</strong>
                            <span style="font-family: var(--font-mono); font-weight: 700;">{{ $item['revenue'] }} ({{ $item['percent'] }}%)</span>
                        </div>
                        <div class="target-progress-bar">
                            <div class="target-progress-fill" style="width: {{ $item['percent'] * 2.5 }}%;"></div>
                        </div>
                    </div>
                    @endforeach
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
                    <h4 style="font-size: 1rem; margin-bottom: 8px;">Target September 2026: {{ $fin['target_revenue_mtd'] }}</h4>
                    <div class="forecast-row">
                        <span>Realisasi MTD Sampai Hari Ini:</span>
                        <strong style="font-size: 1.1rem; font-family: var(--font-mono);">{{ $fin['revenue_mtd'] }}</strong>
                    </div>
                    <div class="forecast-row">
                        <span>Estimasi Akhir Bulan (Forecast):</span>
                        <strong style="font-size: 1.1rem; font-family: var(--font-mono); color: #6ee7b7;">{{ $fin['forecast_month_end'] }}</strong>
                    </div>
                    <div class="forecast-row">
                        <span>Prediksi Deviasi:</span>
                        <strong style="color: #6ee7b7;">+ Rp 450 Juta (+2.9%) Melampaui Target</strong>
                    </div>
                </div>

                <p style="font-size: 0.8rem; color: var(--text-secondary); line-height: 1.4;">
                    Model peramalan pendapatan dihitung otomatis oleh Laravel Service menggunakan moving average rujukan BPJS dan tindakan elektif OK.
                </p>
            </div>
        </div>
    </div>

    <!-- PANE 5: BPJS CLAIMS & AGING -->
    <div class="mgmt-subtab-pane" id="pane-mgmt-insurance" style="display: none;">
        <div class="kpi-grid">
            <div class="kpi-card">
                <div class="kpi-top"><span class="kpi-title">Klaim Submitted</span><div class="kpi-icon-wrap blue"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg></div></div>
                <div class="kpi-value">{{ $bpjsData['total_submitted'] }}</div>
                <div class="kpi-subtext">Total berkas SEP diajukan</div>
            </div>

            <div class="kpi-card">
                <div class="kpi-top"><span class="kpi-title">Klaim Approved</span><div class="kpi-icon-wrap emerald"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div></div>
                <div class="kpi-value">{{ $bpjsData['approved'] }}</div>
                <div class="kpi-subtext">Approval rate: <strong style="color: #16a34a;">{{ $bpjsData['approval_rate'] }}%</strong></div>
            </div>

            <div class="kpi-card">
                <div class="kpi-top"><span class="kpi-title">Pending Verifikasi BPJS</span><div class="kpi-icon-wrap amber"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg></div></div>
                <div class="kpi-value">{{ $bpjsData['pending'] }}</div>
                <div class="kpi-subtext">Dalam review tim verifikator</div>
            </div>

            <div class="kpi-card">
                <div class="kpi-top"><span class="kpi-title">Outstanding / Aging Claim</span><div class="kpi-icon-wrap rose"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div></div>
                <div class="kpi-value" style="font-size: 1.25rem;">{{ $bpjsData['outstanding_claim_val'] }}</div>
                <div class="kpi-subtext">Cash flow penagihan klaim</div>
            </div>
        </div>

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
                            <th>Aksi Casemix RS PKU</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($bpjsData['aging'] as $row)
                        <tr>
                            <td data-label="Rentang Waktu" style="font-weight: 700; color: var(--blue-950);">{{ $row['bracket'] }}</td>
                            <td data-label="Jumlah Berkas" style="font-family: var(--font-mono);">{{ $row['count'] }} Berkas</td>
                            <td data-label="Nilai Piutang" style="font-family: var(--font-mono); font-weight: 700;">{{ $row['value'] }}</td>
                            <td data-label="Risiko">
                                <span class="priority-tag {{ str_contains($row['risk'], 'Low') ? 'normal' : (str_contains($row['risk'], 'High') ? 'emergency' : 'urgent') }}">
                                    {{ $row['risk'] }}
                                </span>
                            </td>
                            <td data-label="Aksi">
                                <button class="btn-secondary" style="font-size: 0.72rem; padding: 4px 8px;" onclick="showToast('Memverifikasi resume kelengkapan koding ICD-10 untuk berkas aging...')">
                                    Audit Berkas
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
@endsection

@push('scripts')
<script>
document.addEventListener('DOMContentLoaded', () => {
    const chartData = @json($mgmtData['charts_data']);
    const charts = {};

    // 1. Chart: Tren Kunjungan Pasien 7 Hari
    const ctxPatient = document.getElementById('chartPatientTrend');
    if (ctxPatient && window.Chart) {
        charts.patientTrend = new Chart(ctxPatient, {
            type: 'line',
            data: {
                labels: chartData.patient_trend_7d.labels,
                datasets: [
                    {
                        label: 'Rawat Jalan (Poli)',
                        data: chartData.patient_trend_7d.outpatients,
                        borderColor: '#2563eb',
                        backgroundColor: 'rgba(37, 99, 235, 0.08)',
                        borderWidth: 2.5,
                        fill: true,
                        tension: 0.35,
                        pointRadius: 4,
                        pointHoverRadius: 6,
                    },
                    {
                        label: 'Rawat Inap',
                        data: chartData.patient_trend_7d.inpatients,
                        borderColor: '#10b981',
                        backgroundColor: 'rgba(16, 185, 129, 0.08)',
                        borderWidth: 2.5,
                        fill: true,
                        tension: 0.35,
                        pointRadius: 4,
                        pointHoverRadius: 6,
                    },
                    {
                        label: 'IGD Masuk',
                        data: chartData.patient_trend_7d.emergency,
                        borderColor: '#f43f5e',
                        backgroundColor: 'rgba(244, 63, 94, 0.05)',
                        borderWidth: 2,
                        borderDash: [4, 4],
                        fill: false,
                        tension: 0.35,
                        pointRadius: 3,
                        pointHoverRadius: 5,
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    legend: {
                        position: 'top',
                        labels: {
                            boxWidth: 12,
                            font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' }
                        }
                    },
                    tooltip: {
                        backgroundColor: '#0d1e3d',
                        titleFont: { family: 'Plus Jakarta Sans', weight: '700' },
                        bodyFont: { family: 'JetBrains Mono', size: 12 },
                        padding: 10,
                        cornerRadius: 8
                    }
                },
                scales: {
                    y: {
                        grid: { color: '#f1f5f9' },
                        ticks: { font: { family: 'JetBrains Mono', size: 10 } }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { font: { family: 'Plus Jakarta Sans', size: 10, weight: '500' } }
                    }
                }
            }
        });
    }

    // 2. Chart: Payer Mix (Donut)
    const ctxPayer = document.getElementById('chartPayerMix');
    if (ctxPayer && window.Chart) {
        charts.payerMix = new Chart(ctxPayer, {
            type: 'doughnut',
            data: {
                labels: chartData.payer_mix.labels,
                datasets: [{
                    data: chartData.payer_mix.percentages,
                    backgroundColor: ['#1d4ed8', '#3b82f6', '#10b981', '#f59e0b', '#8b5cf6'],
                    borderWidth: 2,
                    borderColor: '#ffffff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '68%',
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return ` ${context.label}: ${context.raw}% (${chartData.payer_mix.counts[context.dataIndex]} Pasien)`;
                            }
                        }
                    }
                }
            }
        });
    }

    // Lazy initialization for hidden tabs
    let bedsInit = false;
    let flowInit = false;
    let financeInit = false;

    window.initBedsChart = function() {
        if (bedsInit) return;
        const ctxBeds = document.getElementById('chartBedCapacity');
        if (ctxBeds && window.Chart) {
            charts.bedCapacity = new Chart(ctxBeds, {
                type: 'bar',
                data: {
                    labels: chartData.bed_capacity_breakdown.labels,
                    datasets: [
                        {
                            label: 'Terisi Pasien',
                            data: chartData.bed_capacity_breakdown.occupied,
                            backgroundColor: '#2563eb',
                            borderRadius: 6,
                        },
                        {
                            label: 'Tersedia',
                            data: chartData.bed_capacity_breakdown.available,
                            backgroundColor: '#10b981',
                            borderRadius: 6,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: { boxWidth: 12, font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' } }
                        },
                        tooltip: {
                            callbacks: {
                                afterBody: function(items) {
                                    const idx = items[0].dataIndex;
                                    return `Tingkat BOR: ${chartData.bed_capacity_breakdown.bor_percent[idx]}% (Total: ${chartData.bed_capacity_breakdown.total[idx]} Bed)`;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            stacked: true,
                            grid: { color: '#f1f5f9' },
                            ticks: { font: { family: 'JetBrains Mono', size: 10 } }
                        },
                        x: {
                            stacked: true,
                            grid: { display: false },
                            ticks: { font: { family: 'Plus Jakarta Sans', size: 10, weight: '600' } }
                        }
                    }
                }
            });
            bedsInit = true;
        }
    };

    window.initFlowChart = function() {
        if (flowInit) return;
        const ctxFlow = document.getElementById('chartFlowSla');
        if (ctxFlow && window.Chart) {
            charts.flowSla = new Chart(ctxFlow, {
                type: 'bar',
                data: {
                    labels: chartData.service_sla_wait_times.labels,
                    datasets: [
                        {
                            label: 'Waktu Tunggu Aktual (Menit)',
                            data: chartData.service_sla_wait_times.actual_minutes,
                            backgroundColor: function(context) {
                                const val = context.raw;
                                const target = chartData.service_sla_wait_times.target_minutes[context.dataIndex];
                                return val > target ? '#ef4444' : '#2563eb';
                            },
                            borderRadius: 6,
                        },
                        {
                            label: 'Target SLA Standar (Menit)',
                            data: chartData.service_sla_wait_times.target_minutes,
                            backgroundColor: '#cbd5e1',
                            borderRadius: 6,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: { boxWidth: 12, font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' } }
                        }
                    },
                    scales: {
                        y: {
                            grid: { color: '#f1f5f9' },
                            title: { display: true, text: 'Menit', font: { size: 10 } }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { font: { family: 'Plus Jakarta Sans', size: 10, weight: '600' } }
                        }
                    }
                }
            });
            flowInit = true;
        }
    };

    window.initFinanceChart = function() {
        if (financeInit) return;
        const ctxRev = document.getElementById('chartRevenueTrend');
        if (ctxRev && window.Chart) {
            charts.revenueTrend = new Chart(ctxRev, {
                type: 'bar',
                data: {
                    labels: chartData.revenue_monthly_trend.labels,
                    datasets: [
                        {
                            type: 'line',
                            label: 'Target (Milyar Rp)',
                            data: chartData.revenue_monthly_trend.target,
                            borderColor: '#10b981',
                            borderWidth: 2.5,
                            borderDash: [5, 5],
                            pointRadius: 4,
                            fill: false,
                        },
                        {
                            type: 'bar',
                            label: 'Realisasi (Milyar Rp)',
                            data: chartData.revenue_monthly_trend.actual,
                            backgroundColor: '#2563eb',
                            borderRadius: 6,
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            position: 'top',
                            labels: { boxWidth: 12, font: { family: 'Plus Jakarta Sans', size: 11, weight: '600' } }
                        }
                    },
                    scales: {
                        y: {
                            grid: { color: '#f1f5f9' },
                            ticks: { font: { family: 'JetBrains Mono', size: 10 } }
                        },
                        x: {
                            grid: { display: false },
                            ticks: { font: { family: 'Plus Jakarta Sans', size: 10, weight: '600' } }
                        }
                    }
                }
            });
        }

        const ctxDept = document.getElementById('chartDeptRevenue');
        if (ctxDept && window.Chart) {
            charts.deptRevenue = new Chart(ctxDept, {
                type: 'doughnut',
                data: {
                    labels: ['Farmasi & Obat', 'Rawat Inap & ICU', 'Kamar Operasi', 'Rawat Jalan', 'Lab', 'Radiologi'],
                    datasets: [{
                        data: [30, 24, 20, 12, 8, 6],
                        backgroundColor: ['#2563eb', '#3b82f6', '#0284c7', '#10b981', '#f59e0b', '#8b5cf6'],
                        borderWidth: 2,
                        borderColor: '#ffffff'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    cutout: '60%',
                    plugins: {
                        legend: {
                            position: 'bottom',
                            labels: { boxWidth: 10, font: { size: 10 } }
                        }
                    }
                }
            });
        }
        financeInit = true;
    };

    // Tab switch listeners to initialize and resize charts
    document.querySelectorAll('.clinical-tab-item, .dock-item').forEach(el => {
        el.addEventListener('click', () => {
            const target = el.dataset.tab || el.dataset.dockTab;
            setTimeout(() => {
                if (target === 'mgmt-beds') window.initBedsChart();
                if (target === 'mgmt-flow') window.initFlowChart();
                if (target === 'mgmt-finance') window.initFinanceChart();
                Object.values(charts).forEach(c => { if (c) c.resize(); });
            }, 80);
        });
    });

    window.switchMgmtTab = function(tabName) {
        const btn = document.querySelector(`.clinical-tab-item[data-tab="${tabName}"]`);
        if (btn) btn.click();
        const dock = document.querySelector(`.dock-item[data-dock-tab="${tabName}"]`);
        if (dock) dock.click();
    };
});
</script>
@endpush
