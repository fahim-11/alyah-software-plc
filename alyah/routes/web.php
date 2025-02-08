<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\NewsletterController;
use App\Http\Controllers\ContentController;


Route::get('/', function () {
    return view('welcome');
});

// Newsletter subscription
Route::post('/subscribe', [NewsletterController::class, 'store'])->name('subscribe');

Route::get('/api/emails', [NewsletterController::class, 'index']);
route::post('/api/subscribers/accept/{email}', [NewsletterController::class, 'accept']);
Route::delete('/api/subscribers/reject/{email}', [NewsletterController::class, 'reject']);
// Admin view
Route::get('/signin', function () {
    return view('admin');
});

// Content routes
Route::post('/content/store', [ContentController::class, 'store']);
Route::put('/content/update/{id}', [ContentController::class, 'update']);
Route::get('/content/{id}', [ContentController::class, 'show']);
Route::delete('/content/{id}', [ContentController::class, 'destroy']);


use App\Http\Controllers\AdminController;

Route::get('/admins', [AdminController::class, 'index']);
Route::post('/admins', [AdminController::class, 'store']);
Route::put('/admins/{id}', [AdminController::class, 'update']);
Route::delete('/admins/{id}', [AdminController::class, 'destroy']);
