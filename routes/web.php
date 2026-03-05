<?php

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

    Route::get('/transactions', function () {
        return Inertia::render('Transactions');
    })->name('transactions');

});

require __DIR__.'/auth.php';
require __DIR__.'/settings.php';
