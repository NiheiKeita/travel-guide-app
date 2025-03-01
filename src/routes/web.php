<?php

use App\Http\Controllers\Admin\TravelController;
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

    //管理画面側
    Route::get('admin/travels', [TravelController::class, 'index'])->name('admin.travel.index');
    Route::post('admin/travels', [TravelController::class, 'store'])->name('admin.travel.store');
    Route::get('admin/travels/add', [TravelController::class, 'create'])->name('admin.travel.create');
    Route::get('admin/travels/{id}', [TravelController::class, 'edit'])->name('admin.travel.edit');
    Route::put('admin/travels/{id}', [TravelController::class, 'update'])->name('admin.travel.update');
    Route::delete('admin/travels/{id}', [TravelController::class, 'delete'])->name('admin.travel.delete');

    // // API
    // Route::post('/api/upload', [ImageController::class, 'upload'])->withoutMiddleware(VerifyCsrfToken::class)->name('upload');
    // Route::post('/api/upload/ma', [ImageController::class, 'maUpload'])->withoutMiddleware(VerifyCsrfToken::class)->name('upload.ma');
});
