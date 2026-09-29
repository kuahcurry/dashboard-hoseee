import { renderDoctorDashboard } from './components/DoctorDashboard.js';
import { renderManagementDashboard } from './components/ManagementDashboard.js';

// Application State
const state = {
  currentRole: 'doctor', // 'doctor' | 'management'
  isMobilePreview: false,
};

// DOM References
const doctorRoot = document.getElementById('doctorDashboardRoot');
const managementRoot = document.getElementById('managementDashboardRoot');
const mainViewport = document.getElementById('mainViewport');
const btnRoleDoctor = document.getElementById('btnRoleDoctor');
const btnRoleManagement = document.getElementById('btnRoleManagement');
const btnDesktopView = document.getElementById('btnDesktopView');
const btnMobileView = document.getElementById('btnMobileView');
const userAvatar = document.getElementById('userAvatar');
const userName = document.getElementById('userName');
const userUnit = document.getElementById('userUnit');
const apiStatusBtn = document.getElementById('apiStatusBtn');
const apiDrawer = document.getElementById('apiDrawer');
const closeApiDrawer = document.getElementById('closeApiDrawer');
const patientModalBackdrop = document.getElementById('patientModalBackdrop');
const patientModalDialog = document.getElementById('patientModalDialog');
const toastContainer = document.getElementById('toastContainer');

// Notification Toast Utility
export function showToast(message, type = 'info') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2563eb" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    setTimeout(() => toast.remove(), 250);
  }, 3500);
}

// Patient Detail Modal Handler
export function openPatientModal(patient) {
  patientModalDialog.innerHTML = `
    <div class="modal-header">
      <div>
        <h3 class="modal-title">Rekam Medis Elektronik (RME) - ${patient.name}</h3>
        <span style="font-size: 0.78rem; color: var(--text-muted); font-family: var(--font-mono);">
          No. RM: ${patient.mrn} • Usia: ${patient.age} Th • Gender: ${patient.gender}
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
          <p><strong>Diagnosis Primer:</strong> ${patient.diagnosis}</p>
          <p style="margin-top: 4px;"><strong>Keluhan Pasien:</strong> ${patient.notes}</p>
          <p style="margin-top: 4px;"><strong>Pemeriksaan Penunjang:</strong> ${patient.labStatus}</p>
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
  `;

  patientModalBackdrop.classList.add('open');

  // Close handlers
  const closeModal = () => patientModalBackdrop.classList.remove('open');
  patientModalDialog.querySelector('#btnCloseModal').addEventListener('click', closeModal);
  patientModalDialog.querySelector('#btnCancelModal').addEventListener('click', closeModal);
  patientModalDialog.querySelector('#btnSaveRme').addEventListener('click', () => {
    closeModal();
    showToast(`✓ Catatan medis untuk ${patient.name} berhasil disimpan dan disinkronkan ke SIMRS.`);
  });
}

// Close modal when clicking outside dialog
patientModalBackdrop.addEventListener('click', (e) => {
  if (e.target === patientModalBackdrop) {
    patientModalBackdrop.classList.remove('open');
  }
});

// Role Switcher Handler
function switchRole(role) {
  state.currentRole = role;

  if (role === 'doctor') {
    btnRoleDoctor.classList.add('active');
    btnRoleManagement.classList.remove('active');
    doctorRoot.classList.add('active');
    managementRoot.classList.remove('active');

    userAvatar.textContent = 'SP';
    userName.textContent = 'dr. Surya Pratama, Sp.JP(K)';
    userUnit.textContent = 'Spesialis Jantung & Pembuluh Darah';

    renderDoctorDashboard(doctorRoot, openPatientModal, showToast);
  } else {
    btnRoleDoctor.classList.remove('active');
    btnRoleManagement.classList.add('active');
    doctorRoot.classList.remove('active');
    managementRoot.classList.add('active');

    userAvatar.textContent = 'DIR';
    userName.textContent = 'dr. H. Direktur Utama, M.Kes';
    userUnit.textContent = 'Direksi RS PKU Muhammadiyah Gombong';

    renderManagementDashboard(managementRoot, showToast);
  }
}

// Optional toggles if present
if (btnRoleDoctor && btnRoleManagement) {
  btnRoleDoctor.addEventListener('click', () => switchRole('doctor'));
  btnRoleManagement.addEventListener('click', () => switchRole('management'));
}

if (btnDesktopView && btnMobileView && mainViewport) {
  btnDesktopView.addEventListener('click', () => {
    state.isMobilePreview = false;
    btnDesktopView.classList.add('active');
    btnMobileView.classList.remove('active');
    mainViewport.classList.remove('mobile-preview-mode');
    showToast('Beralih ke Tampilan Workstation Desktop / Tablet');
  });

  btnMobileView.addEventListener('click', () => {
    state.isMobilePreview = true;
    btnMobileView.classList.add('active');
    btnDesktopView.classList.remove('active');
    mainViewport.classList.add('mobile-preview-mode');
    showToast('Simulasi Mode Layar Smartphone Dokter (PWA Mobile View)');
  });
}

// API Gateway Drawer Toggle
apiStatusBtn.addEventListener('click', () => {
  apiDrawer.classList.toggle('open');
});

closeApiDrawer.addEventListener('click', () => {
  apiDrawer.classList.remove('open');
});

// Initialize on Load
document.addEventListener('DOMContentLoaded', () => {
  switchRole('doctor');
});
