<?php

use App\Http\Controllers\Admin\ImageController;
use App\Http\Controllers\Admin\TravelController;
use App\Http\Controllers\Web\TravelController as TravelWebController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Web\TopController;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;

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
    Route::get('/travels/{id}', [TravelWebController::class, 'show'])->name('travel.show');

    //管理画面側
    Route::prefix('admin')->name('admin.')->group(function () {
        Route::prefix('travels')->name('travel.')->group(function () {
            Route::get('/', [TravelController::class, 'index'])->name('index');
            Route::post('/', [TravelController::class, 'store'])->name('store');
            Route::get('add', [TravelController::class, 'create'])->name('create');
            Route::get('{id}', [TravelController::class, 'show'])->name('show');
            Route::get('{id}/edit', [TravelController::class, 'edit'])->name('edit');
            Route::put('{id}', [TravelController::class, 'update'])->name('update');
            Route::delete('{id}', [TravelController::class, 'delete'])->name('delete');
        });
    });
    // // API
    Route::post('/api/upload/image', [ImageController::class, 'upload'])->withoutMiddleware(VerifyCsrfToken::class)->name('upload');
    // Route::post('/api/upload/ma', [ImageController::class, 'maUpload'])->withoutMiddleware(VerifyCsrfToken::class)->name('upload.ma');
});
