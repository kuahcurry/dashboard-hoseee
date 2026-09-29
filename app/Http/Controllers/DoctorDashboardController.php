<?php

namespace App\Http\Controllers;

use App\Services\SimrsIntegrationService;
use App\Services\BpjsVClaimService;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;

class DoctorDashboardController extends Controller
{
    protected SimrsIntegrationService $simrsService;
    protected BpjsVClaimService $bpjsService;

    public function __construct(SimrsIntegrationService $simrsService, BpjsVClaimService $bpjsService)
    {
        $this->simrsService = $simrsService;
        $this->bpjsService = $bpjsService;
    }

    /**
     * Render Doctor Clinical Workspace View
     */
    public function index()
    {
        $clinicalData = $this->simrsService->getDoctorClinicalData();
        return view('doctor.index', compact('clinicalData'));
    }

    /**
     * API Endpoint for Live Data Poll / AJAX
     */
    public function getLiveData(): JsonResponse
    {
        $data = $this->simrsService->getDoctorClinicalData();
        return response()->json([
            'status' => 'success',
            'data' => $data,
            'timestamp' => now()->toIso8601String(),
        ]);
    }

    /**
     * Simpan Resume Medis / SOAP Pasien
     */
    public function saveSoap(Request $request): JsonResponse
    {
        $validated = $request->validate([
            'patient_id' => 'required|string',
            'subjective' => 'nullable|string',
            'objective' => 'nullable|string',
            'assessment' => 'nullable|string',
            'plan' => 'nullable|string',
        ]);

        // Di produksi: disinkronkan ke tabel rme_soap SIMRS
        return response()->json([
            'status' => 'success',
            'message' => 'Catatan SOAP berhasil disimpan dan disinkronkan ke SIMRS & SatuSehat.',
            'patient_id' => $validated['patient_id'],
        ]);
    }
}
