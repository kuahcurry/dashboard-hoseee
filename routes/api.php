<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DoctorDashboardController;
use App\Http\Controllers\ManagementDashboardController;
use App\Http\Controllers\ApiBridgeMonitorController;

/*
|--------------------------------------------------------------------------
| Hospital Management & Doctor Dashboard API Routes
|--------------------------------------------------------------------------
*/

Route::prefix('v1')->group(function () {
    // External API Bridge & Health Monitor
    Route::get('/bridge/status', [ApiBridgeMonitorController::class, 'status']);

    // Doctor Clinical APIs
    Route::prefix('doctor')->group(function () {
        Route::get('/live-data', [DoctorDashboardController::class, 'getLiveData']);
        Route::post('/save-soap', [DoctorDashboardController::class, 'saveSoap']);
    });

    // Management Analytics APIs
    Route::prefix('management')->group(function () {
        Route::get('/metrics', [ManagementDashboardController::class, 'getMetrics']);
    });
});
