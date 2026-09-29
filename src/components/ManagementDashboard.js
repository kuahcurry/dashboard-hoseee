import { managementData } from '../data/mockData.js';

export function renderManagementDashboard(container, showToast) {
  const { executiveOverview, strategicParadigm, bedMatrix, patientFlow, dailyTargetComparison, revenueByDepartment, payerInsuranceBreakdown, operatingRoomAnalytics, doctorWorkforceAnalytics } = managementData;
  const { operational, financial, quality } = executiveOverview;

  container.innerHTML = `
    <!-- Executive Management Header Banner -->
    <div class="hero-gradient-banner">
      <div class="hero-banner-content">
        <h2>${executiveOverview.directorGreeting}</h2>
        <p>${executiveOverview.hospitalName} • Executive Business Intelligence Portal • Data Terkini: <strong>${executiveOverview.date}</strong></p>
      </div>
      <div class="hero-stat-pills">
        <div class="stat-pill">
          <span class="pill-val" style="color: #6ee7b7;">${financial.revenueToday}</span>
          <span class="pill-lbl">Revenue Hari Ini</span>
        </div>
        <div class="stat-pill">
          <span class="pill-val">${operational.borPercent}%</span>
          <span class="pill-lbl">Bed Occupancy (BOR)</span>
        </div>
        <div class="stat-pill">
          <span class="pill-val" style="color: #93c5fd;">${operational.totalPatientsToday}</span>
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
        <div class="paradigm-headline">${strategicParadigm.happening.headline}</div>
        <div class="paradigm-desc">${strategicParadigm.happening.detail}</div>
      </div>
      <div class="paradigm-card why">
        <div class="paradigm-step">Step 2: Why is it happening</div>
        <div class="paradigm-headline">${strategicParadigm.why.headline}</div>
        <div class="paradigm-desc">${strategicParadigm.why.detail}</div>
      </div>
      <div class="paradigm-card attention">
        <div class="paradigm-step">Step 3: What needs attention</div>
        <div class="paradigm-headline">${strategicParadigm.attention.headline}</div>
        <div class="paradigm-desc">${strategicParadigm.attention.detail}</div>
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
          <div class="kpi-value">${operational.outpatients}</div>
          <div class="kpi-subtext">Target: 500 <span class="kpi-delta down">(94.4%)</span></div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Rawat Inap Aktif</span>
            <div class="kpi-icon-wrap emerald">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>
            </div>
          </div>
          <div class="kpi-value">${operational.inpatients}</div>
          <div class="kpi-subtext">Discharge hari ini: <strong>${operational.discharged} pasien</strong></div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Pasien IGD Masuk</span>
            <div class="kpi-icon-wrap rose">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
            </div>
          </div>
          <div class="kpi-value">${operational.emergencyIGD}</div>
          <div class="kpi-subtext"><span class="kpi-delta up">↑ 12%</span> vs rata-rata harian</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Bed Occupancy Rate (BOR)</span>
            <div class="kpi-icon-wrap purple">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
            </div>
          </div>
          <div class="kpi-value">${operational.borPercent}%</div>
          <div class="kpi-subtext">Tersedia: <strong>${operational.bedsAvailable} Bed</strong> dari 220</div>
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
            <span class="schedule-status-badge badge-green">Pencapaian: ${financial.achievementPercent}%</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 14px;">
            <div style="background: #f8fafc; border: 1px solid var(--border-subtle); border-radius: 8px; padding: 14px;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
                <span style="font-size: 0.85rem; color: var(--text-secondary);">Realisasi Pendapatan MTD</span>
                <strong style="font-size: 1.1rem; color: var(--blue-950); font-family: var(--font-mono);">${financial.revenueMtd}</strong>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: var(--text-muted); margin-bottom: 8px;">
                <span>Target Pendapatan Bulan Ini: ${financial.targetRevenueMtd}</span>
                <span>Proyeksi Akhir Bulan: <strong>${financial.forecastMonthEnd}</strong></span>
              </div>
              <div class="target-progress-bar">
                <div class="target-progress-fill" style="width: ${financial.achievementPercent}%;"></div>
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <div style="padding: 12px; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: 8px;">
                <span style="font-size: 0.75rem; color: var(--text-muted);">Biaya Operasional (Opex)</span>
                <div style="font-size: 1.1rem; font-weight: 800; color: #dc2626; font-family: var(--font-mono); margin-top: 4px;">${financial.costOperating}</div>
              </div>
              <div style="padding: 12px; background: #ffffff; border: 1px solid var(--border-subtle); border-radius: 8px;">
                <span style="font-size: 0.75rem; color: var(--text-muted);">Gross Margin Profit</span>
                <div style="font-size: 1.1rem; font-weight: 800; color: #16a34a; font-family: var(--font-mono); margin-top: 4px;">${financial.grossMarginPercent}%</div>
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
              <div style="font-size: 1.3rem; font-weight: 800; color: var(--blue-950); font-family: var(--font-mono);">${quality.alos}</div>
              <small style="font-size: 0.72rem; color: #059669;">Optimal (3.0 - 5.0 Hari)</small>
            </div>

            <div style="padding: 12px; border: 1px solid var(--border-subtle); border-radius: 8px; background: #f8fafc;">
              <span style="font-size: 0.75rem; color: var(--text-muted);">Readmission Rate (&lt;30 Hari)</span>
              <div style="font-size: 1.3rem; font-weight: 800; color: var(--blue-950); font-family: var(--font-mono);">${quality.readmissionRate}</div>
              <small style="font-size: 0.72rem; color: #059669;">Target &lt; 3.0% (Tercapai)</small>
            </div>

            <div style="padding: 12px; border: 1px solid var(--border-subtle); border-radius: 8px; background: #f8fafc;">
              <span style="font-size: 0.75rem; color: var(--text-muted);">Patient Satisfaction (CSAT)</span>
              <div style="font-size: 1.3rem; font-weight: 800; color: #0284c7; font-family: var(--font-mono);">${quality.patientSatisfaction}</div>
              <small style="font-size: 0.72rem; color: var(--text-muted);">Dari 842 Responden Survei</small>
            </div>

            <div style="padding: 12px; border: 1px solid var(--border-subtle); border-radius: 8px; background: #f8fafc;">
              <span style="font-size: 0.75rem; color: var(--text-muted);">Insiden Keselamatan Pasien</span>
              <div style="font-size: 1.3rem; font-weight: 800; color: #16a34a; font-family: var(--font-mono);">${quality.clinicalIncidents} Kasus</div>
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
              ${dailyTargetComparison.map(row => `
                <tr>
                  <td style="font-weight: 700; color: var(--blue-950);">${row.kpi}</td>
                  <td>${row.unit}</td>
                  <td style="font-family: var(--font-mono);">${row.target}</td>
                  <td style="font-family: var(--font-mono); font-weight: 700;">${row.actual}</td>
                  <td>
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="font-weight: 700; font-family: var(--font-mono); min-width: 48px;">${row.achievement}%</span>
                      <div class="target-progress-bar" style="max-width: 100px; margin: 0;">
                        <div class="target-progress-fill ${row.achievement >= 100 ? 'green' : row.achievement >= 90 ? '' : 'amber'}" style="width: ${Math.min(row.achievement, 100)}%;"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="schedule-status-badge ${row.achievement >= 95 ? 'badge-green' : row.achievement >= 90 ? 'badge-blue' : 'badge-amber'}">
                      ${row.achievement >= 100 ? 'Melampaui Target' : row.achievement >= 90 ? 'Memenuhi Standar' : 'Perlu Intervensi'}
                    </span>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- TAB 2: BED & ROOM MANAGEMENT -->
    <div class="mgmt-subtab-pane" id="pane-mgmt-beds" style="display: none;">
      <div class="bed-matrix-grid">
        <div class="bed-stat-card">
          <div class="bed-stat-num">${bedMatrix.total}</div>
          <div class="bed-stat-label">Total Kapasitas Bed</div>
        </div>
        <div class="bed-stat-card">
          <div class="bed-stat-num" style="color: #2563eb;">${bedMatrix.occupied}</div>
          <div class="bed-stat-label">Bed Terisi (Pasien)</div>
        </div>
        <div class="bed-stat-card">
          <div class="bed-stat-num" style="color: #10b981;">${bedMatrix.available}</div>
          <div class="bed-stat-label">Bed Siap Pakai</div>
        </div>
        <div class="bed-stat-card">
          <div class="bed-stat-num" style="color: #f59e0b;">${bedMatrix.cleaning}</div>
          <div class="bed-stat-label">Sedang Dibersihkan</div>
        </div>
        <div class="bed-stat-card">
          <div class="bed-stat-num" style="color: #8b5cf6;">${bedMatrix.reserved}</div>
          <div class="bed-stat-label">Reserved (Booking)</div>
        </div>
        <div class="bed-stat-card alert-high">
          <div class="bed-stat-num">${bedMatrix.bor}%</div>
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
              ${bedMatrix.byUnit.map(u => `
                <tr style="${u.status === 'Critical' ? 'background: #fff5f5;' : ''}">
                  <td style="font-weight: 700; color: var(--blue-950);">${u.unit}</td>
                  <td style="font-family: var(--font-mono);">${u.total}</td>
                  <td style="font-family: var(--font-mono); font-weight: 700;">${u.occupied}</td>
                  <td style="font-family: var(--font-mono); color: #16a34a; font-weight: 700;">${u.available}</td>
                  <td>
                    <div style="display: flex; align-items: center; gap: 8px;">
                      <span style="font-weight: 700; font-family: var(--font-mono);">${u.bor}%</span>
                      <div class="target-progress-bar" style="max-width: 120px; margin: 0;">
                        <div class="target-progress-fill ${u.bor > 90 ? 'amber' : 'green'}" style="width: ${u.bor}%; ${u.bor > 90 ? 'background:#ef4444;' : ''}"></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <span class="schedule-status-badge ${u.status === 'Critical' ? 'badge-red' : u.status === 'High' ? 'badge-amber' : 'badge-green'}">
                      ${u.status === 'Critical' ? '⚠️ Bottleneck Kritis (Segera Step-down ke HCU)' : u.status === 'High' ? 'Kapasitas Menipis' : 'Kapasitas Aman'}
                    </span>
                  </td>
                </tr>
              `).join('')}
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
          ${patientFlow.map((step, idx) => `
            <div class="flow-step-box ${step.bottleneck ? 'bottleneck' : ''}">
              <div class="flow-step-num">${step.count}</div>
              <div class="flow-step-name">${step.stage}</div>
              <div class="flow-time-pill">Wait: ${step.avgWait} • Svc: ${step.avgService}</div>
              ${step.bottleneck ? `
                <div style="font-size: 0.7rem; color: #b91c1c; margin-top: 6px; font-weight: 600;">
                  ⚠️ ${step.reason}
                </div>
              ` : ''}
            </div>
          `).join('')}
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
            ${revenueByDepartment.map(item => `
              <div>
                <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 4px;">
                  <strong style="color: var(--blue-950);">${item.dept}</strong>
                  <span style="font-family: var(--font-mono); font-weight: 700;">${item.revenue} (${item.percent}%)</span>
                </div>
                <div class="target-progress-bar">
                  <div class="target-progress-fill" style="width: ${item.percent * 2.5}%;"></div>
                </div>
              </div>
            `).join('')}
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
          <div class="kpi-value">${payerInsuranceBreakdown.claims.submitted}</div>
          <div class="kpi-subtext">Total berkas SEP & INA-CBG</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Klaim Approved (Lolos Verif)</span>
            <div class="kpi-icon-wrap emerald"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></div>
          </div>
          <div class="kpi-value">${payerInsuranceBreakdown.claims.approved}</div>
          <div class="kpi-subtext">Approval rate: <strong style="color: #16a34a;">90.8%</strong></div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Pending Verifikasi BPJS</span>
            <div class="kpi-icon-wrap amber"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg></div>
          </div>
          <div class="kpi-value">${payerInsuranceBreakdown.claims.pending}</div>
          <div class="kpi-subtext">Dalam review verifikator BPJS</div>
        </div>

        <div class="kpi-card">
          <div class="kpi-top">
            <span class="kpi-title">Outstanding / Aging Claim</span>
            <div class="kpi-icon-wrap rose"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
          </div>
          <div class="kpi-value" style="font-size: 1.3rem;">${payerInsuranceBreakdown.claims.outstandingAmount}</div>
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
              ${payerInsuranceBreakdown.claims.aging.map(row => `
                <tr>
                  <td style="font-weight: 700; color: var(--blue-950);">${row.bracket}</td>
                  <td style="font-family: var(--font-mono);">${row.count} Berkas</td>
                  <td style="font-family: var(--font-mono); font-weight: 700;">${row.value}</td>
                  <td>
                    <span class="priority-tag ${row.risk.includes('Low') ? 'normal' : row.risk.includes('High') ? 'emergency' : 'urgent'}">
                      ${row.risk}
                    </span>
                  </td>
                  <td>
                    <button class="btn-secondary" style="font-size: 0.72rem; padding: 4px 8px;" onclick="alert('Memverifikasi berkas kelengkapan koding ICD-10 & resume medis untuk percepatan pencairan klaim BPJS.')">
                      Audit Berkas
                    </button>
                  </td>
                </tr>
              `).join('')}
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
            <span class="schedule-status-badge badge-green">Utilisasi OK: ${operatingRoomAnalytics.utilizationRate}%</span>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            ${operatingRoomAnalytics.rooms.map(room => `
              <div style="border: 1px solid var(--border-subtle); padding: 12px; border-radius: 8px; display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <div style="font-weight: 700; color: var(--blue-950); font-size: 0.88rem;">${room.name}</div>
                  <div style="font-size: 0.76rem; color: var(--text-muted);">${room.surgery} • Operator: <strong>${room.operator}</strong></div>
                </div>
                <span class="schedule-status-badge ${room.status === 'Active' ? 'badge-green' : room.status === 'Sterilisasi' ? 'badge-amber' : 'badge-blue'}">${room.status}</span>
              </div>
            `).join('')}
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
                ${doctorWorkforceAnalytics.topDoctorVolume.map(doc => `
                  <tr>
                    <td style="font-weight: 700;">${doc.name}</td>
                    <td>${doc.unit}</td>
                    <td style="font-family: var(--font-mono); font-weight: 700;">${doc.patients}</td>
                    <td style="font-family: var(--font-mono);">${doc.surgeries}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach management events
  setupManagementEvents(container, showToast);
}

function setupManagementEvents(container, showToast) {
  const tabButtons = container.querySelectorAll('.clinical-tab-item');
  const panes = container.querySelectorAll('.mgmt-subtab-pane');

  tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tabButtons.forEach(b => b.classList.remove('active'));
      panes.forEach(p => {
        p.classList.remove('active');
        p.style.display = 'none';
      });

      btn.classList.add('active');
      const targetPane = container.querySelector(`#pane-${btn.dataset.tab}`);
      if (targetPane) {
        targetPane.classList.add('active');
        targetPane.style.display = 'block';
      }
    });
  });

  const exportBtn = container.querySelector('#btnExportMgmtReport');
  if (exportBtn) {
    exportBtn.addEventListener('click', () => {
      showToast('Menyiapkan Ringkasan Eksekutif Direksi RS PKU Muhammadiyah Gombong...');
      setTimeout(() => {
        showToast('✓ Laporan Eksekutif siap diunduh (PDF terformat otomatis).');
      }, 1000);
    });
  }
}
