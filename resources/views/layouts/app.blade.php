<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>@yield('title', 'MedPulse PKU | Hospital Intelligence')</title>
    <meta name="description" content="Dashboard Terintegrasi RS PKU Muhammadiyah Gombong berbasis Laravel 11">

    <!-- Modern Typography -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet">

    <!-- Minimalistic Modern Gradient Blue Stylesheet -->
    <link rel="stylesheet" href="{{ asset('css/dashboard-pku.css') }}">
    @stack('styles')
</head>
<body>
    <!-- Top Global Header -->
    <header class="app-header">
        <div class="header-left">
            <a href="{{ route('doctor.index') }}" class="brand-logo">
                <div class="brand-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                    </svg>
                </div>
                <div class="brand-text">
                    <span class="brand-title">MedPulse<span class="brand-badge">PKU</span></span>
                    <span class="brand-subtitle">RS PKU Muhammadiyah • Laravel Core</span>
                </div>
            </a>
            
            <div class="portal-context-badge">
                @if(request()->routeIs('doctor.*'))
                    <span class="portal-pill-indicator doctor">
                        <span class="portal-dot"></span>
                        Doctor Clinical Workspace
                    </span>
                @else
                    <span class="portal-pill-indicator management">
                        <span class="portal-dot"></span>
                        Executive Management Intelligence
                    </span>
                @endif
            </div>
        </div>

        <div class="header-right">
            <!-- Live Sync & API Status Pill -->
            <button class="api-status-trigger" id="apiStatusBtn" title="Status External API Gateway & Bridging">
                <span class="status-dot pulsing"></span>
                <span class="api-label">SIMRS & BPJS V-Claim: <strong class="text-emerald">SYNCED (Laravel BFF)</strong></span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 14 14"/></svg>
            </button>

            <!-- Profile Info -->
            @yield('user_pill')
        </div>
    </header>

    <!-- External API Gateway Drawer -->
    <aside class="api-drawer" id="apiDrawer">
        <div class="drawer-header">
            <div class="drawer-title">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
                <span>Laravel External API Gateway & BFF</span>
            </div>
            <button class="drawer-close" id="closeApiDrawer">&times;</button>
        </div>
        <div class="drawer-body">
            <p class="drawer-desc">Laravel bertindak sebagai <strong>Backend-For-Frontend (BFF)</strong> pada VPS yang sama. Menyerap request external API, mengenkripsi signature BPJS, dan meng-cache data SIMRS.</p>
            
            <div class="api-service-card ok">
                <div class="svc-header">
                    <span class="svc-name">SIMRS Core (Evotech Engine)</span>
                    <span class="svc-badge connected">Connected</span>
                </div>
                <div class="svc-details">
                    <span>Latency: <strong>18ms</strong></span>
                    <span>Laravel Cache TTL: <strong>30 detik</strong></span>
                    <span>Endpoint: <code>/api/v1/simrs/patient-queue</code></span>
                </div>
            </div>

            <div class="api-service-card ok">
                <div class="svc-header">
                    <span class="svc-name">BPJS V-Claim 2.0 Bridging</span>
                    <span class="svc-badge connected">Bridged</span>
                </div>
                <div class="svc-details">
                    <span>Auth: <strong>HMAC-SHA256 (PHP Native)</strong></span>
                    <span>Pending Claims: <strong>95 Klaim</strong></span>
                    <span>Endpoint: <code>/Monitoring/Klaim</code></span>
                </div>
            </div>

            <div class="api-service-card ok">
                <div class="svc-header">
                    <span class="svc-name">SatuSehat Kemenkes (HL7 FHIR)</span>
                    <span class="svc-badge connected">Synced</span>
                </div>
                <div class="svc-details">
                    <span>Regulasi: <strong>Permenkes 24/2022</strong></span>
                    <span>Encounter Sync: <strong>Active</strong></span>
                </div>
            </div>

            <div class="api-service-card ok">
                <div class="svc-header">
                    <span class="svc-name">Smart Bed IoT & Telemetry</span>
                    <span class="svc-badge live">Live Telemetry</span>
                </div>
                <div class="svc-details">
                    <span>Beds Monitored: <strong>220 Beds</strong></span>
                    <span>Protocol: <strong>Webhook / SSE</strong></span>
                </div>
            </div>

            <div class="bff-banner">
                <h4>🚀 Keuntungan Laravel di VPS Existing:</h4>
                <p>1. <strong>Zero Extra Cost</strong>: Berjalan langsung di Nginx/PHP-FPM yang sudah ada.<br>
                2. <strong>Keamanan</strong>: Token & Secret Key BPJS tersimpan aman di <code>.env</code> server.<br>
                3. <strong>Anti Overload</strong>: SIMRS dilindungi oleh <code>Cache::remember()</code>.</p>
            </div>
        </div>
    </aside>

    <!-- Main Viewport -->
    <main class="main-viewport" id="mainViewport">
        @yield('content')
    </main>

    <!-- Interactive Patient RME Modal -->
    <div class="modal-backdrop" id="patientModalBackdrop">
        <div class="modal-dialog" id="patientModalDialog"></div>
    </div>

    <!-- Notification Toast Container -->
    <div class="toast-container" id="toastContainer"></div>

    <!-- Mobile Bottom Navigation Dock (PWA Friendly) -->
    <nav class="mobile-bottom-dock" id="mobileBottomDock">
        @if(request()->routeIs('doctor.*'))
        <button class="dock-item active" data-dock-tab="tab-overview">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
            <span>Antrean</span>
        </button>
        <button class="dock-item" data-dock-tab="tab-schedule">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect width="18" height="18" x="3" y="4" rx="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
            <span>Jadwal</span>
        </button>
        <button class="dock-item" data-dock-tab="tab-patients">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            <span>Pasien</span>
        </button>
        <button class="dock-item" data-dock-tab="tab-operations">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="m18 15-6-6-6 6"/></svg>
            <span>Cath/OK</span>
        </button>
        <button class="dock-item" id="btnDockApiBridge">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/></svg>
            <span>Bridge</span>
        </button>
        @else
        <button class="dock-item active" data-dock-tab="mgmt-overview">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>
            <span>Overview</span>
        </button>
        <button class="dock-item" data-dock-tab="mgmt-beds">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>
            <span>Beds</span>
        </button>
        <button class="dock-item" data-dock-tab="mgmt-flow">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><circle cx="6" cy="12" r="3"/><circle cx="18" cy="12" r="3"/><line x1="9" x2="15" y1="12" y2="12"/></svg>
            <span>Flow</span>
        </button>
        <button class="dock-item" data-dock-tab="mgmt-finance">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><line x1="12" x2="12" y1="2" y2="22"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            <span>Revenue</span>
        </button>
        <button class="dock-item" data-dock-tab="mgmt-insurance">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>BPJS</span>
        </button>
        @endif
    </nav>

    <!-- Chart.js for High-Performance Visual Analytics -->
    <script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.2/dist/chart.umd.min.js"></script>
    <script src="{{ asset('js/dashboard-pku.js') }}"></script>
    @stack('scripts')
</body>
</html>
