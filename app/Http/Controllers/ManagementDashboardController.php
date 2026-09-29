<?php

namespace App\Http\Controllers;

use App\Services\SimrsIntegrationService;
use App\Services\BpjsVClaimService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class ManagementDashboardController extends Controller
{
    protected SimrsIntegrationService $simrsService;
    protected BpjsVClaimService $bpjsService;

    public function __construct(SimrsIntegrationService $simrsService, BpjsVClaimService $bpjsService)
    {
        $this->simrsService = $simrsService;
        $this->bpjsService = $bpjsService;
    }

    /**
     * Render Executive Management Dashboard View
     */
    public function index()
    {
        $mgmtData = $this->simrsService->getManagementExecutiveData();
        $bpjsData = $this->bpjsService->getMonitoringKlaim();

        return view('management.index', compact('mgmtData', 'bpjsData'));
    }

    /**
     * API Endpoint for Management Metrics
     */
    public function getMetrics(): JsonResponse
    {
        $mgmtData = $this->simrsService->getManagementExecutiveData();
        $bpjsData = $this->bpjsService->getMonitoringKlaim();

        return response()->json([
            'status' => 'success',
            'data' => [
                'management' => $mgmtData,
                'bpjs_claims' => $bpjsData,
            ],
            'timestamp' => now()->toIso8601String(),
        ]);
    }
}
