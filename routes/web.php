<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DoctorDashboardController;
use App\Http\Controllers\ManagementDashboardController;

/*
|--------------------------------------------------------------------------
| Web Routes for RS PKU Muhammadiyah Dashboards
|--------------------------------------------------------------------------
*/

// Default landing route
Route::get('/', function () {
    return redirect()->route('doctor.index');
});

// Doctor Clinical Workspace (PWA & Workstation)
Route::get('/doctor', [DoctorDashboardController::class, 'index'])->name('doctor.index');

// Executive Management Intelligence
Route::get('/management', [ManagementDashboardController::class, 'index'])->name('management.index');
