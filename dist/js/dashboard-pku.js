// MedPulse PKU Dashboard Interaction Controller

document.addEventListener('DOMContentLoaded', () => {
    // 1. Clinical Sub-Tabs Switching (Doctor & Management)
    const setupTabs = (barId, paneClass) => {
        const tabBar = document.getElementById(barId);
        if (!tabBar) return;

        const tabButtons = tabBar.querySelectorAll('.clinical-tab-item');
        const panes = document.querySelectorAll(`.${paneClass}`);

        tabButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                tabButtons.forEach(b => b.classList.remove('active'));
                panes.forEach(p => {
                    p.classList.remove('active');
                    p.style.display = 'none';
                });

                btn.classList.add('active');
                const targetPane = document.getElementById(`pane-${btn.dataset.tab}`);
                if (targetPane) {
                    targetPane.classList.add('active');
                    targetPane.style.display = 'block';
                }
            });
        });
    };

    setupTabs('doctorTabBar', 'doctor-subtab-pane');
    setupTabs('mgmtTabBar', 'mgmt-subtab-pane');

    // Mobile Bottom Dock Interaction
    const dockItems = document.querySelectorAll('.dock-item[data-dock-tab]');
    const btnDockApiBridge = document.getElementById('btnDockApiBridge');

    dockItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetTabName = item.dataset.dockTab;
            const targetTabBtn = document.querySelector(`.clinical-tab-item[data-tab="${targetTabName}"]`);
            if (targetTabBtn) {
                targetTabBtn.click();
                dockItems.forEach(d => d.classList.remove('active'));
                item.classList.add('active');
            }
        });
    });

    if (btnDockApiBridge) {
        btnDockApiBridge.addEventListener('click', () => {
            const apiDrawer = document.getElementById('apiDrawer');
            if (apiDrawer) apiDrawer.classList.toggle('open');
        });
    }

    // 3. API Drawer Toggle
    const apiStatusBtn = document.getElementById('apiStatusBtn');
    const apiDrawer = document.getElementById('apiDrawer');
    const closeApiDrawer = document.getElementById('closeApiDrawer');

    if (apiStatusBtn && apiDrawer) {
        apiStatusBtn.addEventListener('click', () => {
            apiDrawer.classList.toggle('open');
        });
    }

    if (closeApiDrawer && apiDrawer) {
        closeApiDrawer.addEventListener('click', () => {
            apiDrawer.classList.remove('open');
        });
    }

    // 4. Modal RME Handlers
    const modalBackdrop = document.getElementById('patientModalBackdrop');
    const modalDialog = document.getElementById('patientModalDialog');

    window.openPatientModal = function (patientJson) {
        let patient = typeof patientJson === 'string' ? JSON.parse(patientJson) : patientJson;

        modalDialog.innerHTML = `
            <div class="modal-header">
                <div>
                    <h3 class="modal-title">Rekam Medis Elektronik (RME) - ${patient.name}</h3>
                    <span style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">
                        No. RM: ${patient.mrn} • Usia: ${patient.age} Th • Gender: ${patient.gender}
                    </span>
                </div>
                <button class="drawer-close" onclick="closePatientModal()">&times;</button>
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
                        <p><strong>Diagnosis Primer:</strong> ${patient.diagnosis || 'I20.0 - Unstable Angina Pectoris'}</p>
                        <p style="margin-top: 4px;"><strong>Keluhan Pasien:</strong> ${patient.notes || 'Nyeri dada substernal'}</p>
                        <p style="margin-top: 4px;"><strong>Pemeriksaan Penunjang:</strong> ${patient.lab_status || 'EKG: ST-Depresi V4-V6'}</p>
                    </div>
                </div>

                <div>
                    <h4 style="font-size: 0.9rem; color: var(--blue-950); margin-bottom: 6px;">Catatan SOAP Dokter (SIMRS)</h4>
                    <div style="display: grid; grid-template-columns: 1fr; gap: 8px; font-size: 0.82rem;">
                        <div style="padding: 8px; background: #fff; border: 1px solid var(--border-subtle); border-radius: 6px;">
                            <strong>[S] Subjective:</strong> Nyeri dada retrosternal timbul saat aktivitas, berkurang saat istirahat.
                        </div>
                        <div style="padding: 8px; background: #fff; border: 1px solid var(--border-subtle); border-radius: 6px;">
                            <strong>[O] Objective:</strong> TD: 135/85 mmHg, HR: 88x/m, RR: 20x/m, SpO2: 98%. EKG ST depresi di V4-V6.
                        </div>
                        <div style="padding: 8px; background: #fff; border: 1px solid var(--border-subtle); border-radius: 6px;">
                            <strong>[A] Assessment:</strong> Coronary Artery Disease - Angina Pectoris Tak Stabil (CCS III).
                        </div>
                        <div style="padding: 8px; background: #fff; border: 1px solid var(--border-subtle); border-radius: 6px;">
                            <strong>[P] Plan:</strong> ISDN 5mg SL prn, Clopidogrel 75mg 1x1, Atorvastatin 40mg. Pro Kateterisasi.
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal-footer">
                <button class="btn-secondary" onclick="closePatientModal()">Tutup</button>
                <button class="btn-primary" onclick="saveSoapPatient('${patient.id}')">Simpan Resume Klinis ke SIMRS</button>
            </div>
        `;

        modalBackdrop.classList.add('open');
    };

    window.closePatientModal = function () {
        if (modalBackdrop) modalBackdrop.classList.remove('open');
    };

    window.saveSoapPatient = function (patientId) {
        closePatientModal();
        showToast(`✓ Catatan SOAP pasien berhasil disimpan ke SIMRS & SatuSehat.`);
    };

    if (modalBackdrop) {
        modalBackdrop.addEventListener('click', (e) => {
            if (e.target === modalBackdrop) closePatientModal();
        });
    }

    // 5. Toast Notification System
    window.showToast = function (message) {
        const container = document.getElementById('toastContainer');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
            <span>${message}</span>
        `;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateY(10px)';
            setTimeout(() => toast.remove(), 250);
        }, 3500);
    };

    // 6. Patient Search & Filter
    const searchInput = document.getElementById('doctorPatientSearch');
    const categoryFilter = document.getElementById('doctorFilterCategory');
    const priorityFilter = document.getElementById('doctorFilterPriority');
    const tableRows = document.querySelectorAll('#doctorPatientListBody tr');

    function filterTable() {
        const q = (searchInput?.value || '').toLowerCase();
        const cat = categoryFilter?.value || 'all';
        const prio = priorityFilter?.value || 'all';

        tableRows.forEach(row => {
            const text = row.innerText.toLowerCase();
            const matchSearch = !q || text.includes(q);
            const matchCat = cat === 'all' || row.dataset.category === cat;
            const matchPrio = prio === 'all' || row.dataset.priority === prio;

            row.style.display = matchSearch && matchCat && matchPrio ? '' : 'none';
        });
    }

    if (searchInput) searchInput.addEventListener('input', filterTable);
    if (categoryFilter) categoryFilter.addEventListener('change', filterTable);
    if (priorityFilter) priorityFilter.addEventListener('change', filterTable);
});
