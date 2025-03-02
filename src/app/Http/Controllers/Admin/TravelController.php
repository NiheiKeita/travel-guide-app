<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Travel;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TravelController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Admin/TravelListView', [
            'travels' => Travel::get(),
        ]);
    }

    public function show(Request $request): Response
    {
        return Inertia::render('Admin/TravelShowView', [
            'travel' => Travel::where("id", $request->travel_id)->first(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/TravelCreateView');
    }

    public function store(Request $request): RedirectResponse
    {
        dd($request);
        return redirect(route("admin.travel.index"))->with('message', '登録が完了しました');
    }

    public function edit(Request $request): Response
    {
        return Inertia::render('Admin/TravelEditView', [
            'travel' => Travel::where("id", $request->travel_id)->first(),
        ]);
    }

    public function update(): RedirectResponse
    {
        return redirect(route("admin.travel.index"))->with('message', '更新が完了しました');
    }

    public function delete(): RedirectResponse
    {
        return redirect(route("admin.travel.index"))->with('message', '削除が完了しました');
    }
}
