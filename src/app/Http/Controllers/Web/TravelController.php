<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Travel;
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
            'travel' => Travel::where("id", $request->id)->with([
                'images',
                'hotels',
                'hotels.images',
                'modals',
                'modals.cards',
                'modals.cards.images',
                'scheduleGroups',
                'scheduleGroups.schedules',
            ])->first(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/TravelCreateView');
    }
}
