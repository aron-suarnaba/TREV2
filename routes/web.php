<?php

use App\Http\Controllers\TRERegHdrController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Landing');
})->name('home');

// keep the original welcome page available for reference/testing
Route::get('/welcome', function () {
    return Inertia::render('Welcome', [
        'canRegister' => Route::has('register'),
    ]);
});

Route::middleware(['auth'])->group(function () {

    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');

    Route::get('/transactions', [TRERegHdrController::class, 'index'])->name('transactions');

    Route::get('/items', function () {
        return Inertia::render('Items');
    })->name('items');

});

require __DIR__.'/auth.php';
require __DIR__.'/settings.php';
