<?php

use App\Http\Controllers\ItemController;
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
    Route::get('/transactions/create', [TRERegHdrController::class, 'create'])->name('transactions.create');
    Route::post('/transactions', [TRERegHdrController::class, 'store'])->name('transactions.store');
    Route::get('/transactions/{transaction}/edit', [TRERegHdrController::class, 'edit'])->name('transactions.edit');
    Route::put('/transactions/{transaction}', [TRERegHdrController::class, 'update'])->name('transactions.update');
    Route::delete('/transactions/{transaction}', [TRERegHdrController::class, 'destroy'])->name('transactions.destroy');

    Route::get('/items', [ItemController::class, 'index'])->name('items');
    Route::post('/items', [ItemController::class, 'store'])->name('items.store');
    Route::put('/items/{item}', [ItemController::class, 'update'])->name('items.update');
    Route::delete('/items/{item}', [ItemController::class, 'destroy'])->name('items.destroy');

});

require __DIR__.'/auth.php';
require __DIR__.'/settings.php';
