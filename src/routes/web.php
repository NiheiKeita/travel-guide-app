<?php

use App\Http\Controllers\Web\MessageController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\TopController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::group(['middleware' => 'basicauth'], function () {
    Route::fallback(function () {
        return redirect(route('web.top'));
    });
    Route::get('/', [TopController::class, 'index'])->name('web.top');


    // // API
    // Route::post('/api/upload', [ImageController::class, 'upload'])->withoutMiddleware(VerifyCsrfToken::class)->name('upload');
    // Route::post('/api/upload/ma', [ImageController::class, 'maUpload'])->withoutMiddleware(VerifyCsrfToken::class)->name('upload.ma');
});

Route::get('/messages', [MessageController::class, 'index'])->name('web.message');
