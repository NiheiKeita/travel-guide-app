<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Hotel;
use App\Models\Image;
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
        // dd(Travel::where("id", $request->id)->with([
        //     'images',
        // ])->first());
        return Inertia::render('Admin/TravelShowView', [
            'travel' => Travel::where("id", $request->id)->with([
                'images',
                'hotels',
                'hotels.images',
                'modals',
                'modals.cards',
                'schedules',
            ])->first(),
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/TravelCreateView');
    }

    public function store(Request $request): RedirectResponse
    {
        // dd($request);
        $travel = Travel::create([
            "title" => $request->title,
            "memo" => $request->memo,
            "first_date" => $request->first_date,
            "last_date" => $request->last_date,
            "travel_price" => $request->travel_price,
            "count_down_start_time" => $request->count_down_start_time,
        ]);
        foreach ($request->images as $requestImage) {
            $image = Image::where("id", $requestImage["id"])->first();
            $travel->images()->save($image);
        }
        $requestHotel = $request->hotel;
        // foreach ($request->hotel as $requestHotel) {
        //     dd($requestHotel);
        $hotel = Hotel::updateOrCreate([
            "name" => $requestHotel["name"],
        ], [
            "name" => $requestHotel["name"],
            "address" => $requestHotel["address"],
            "accessUrl" => $requestHotel["accessUrl"],
            "url" => $requestHotel["url"],
        ]);
        foreach ($requestHotel["images"] as $image) {
            $image = Image::where("id", $image["id"])->first();
            $hotel->images()->save($image);
        }

        $travel->hotels()->save($hotel);
        // }

        $modalArray = [];
        foreach ($request->modals as $requestModal) {
            $modal = $travel->modals()->create([
                "type" => $requestModal["type"],
                "title" => $requestModal["title"],
            ]);
            //modalArrayに $modalと$requestModal["id"]をセット
            $modalArray[$requestModal["id"]] = $modal->id;

            foreach ($requestModal["cards"] as $card) {
                $modal->cards()->create([
                    "url" => $card["url"],
                    "title" => $card["title"],
                    "accessURL" => $card["accessURL"],
                ]);
            }
        }
        foreach ($request->schedules as $requestSchedule) {
            $travel->schedules()->create([
                "title" => $requestSchedule["title"],
                "time_text" => $requestSchedule["time_text"],
                "modal_id" => isset($requestSchedule["modal_id"]) ? $modalArray[$requestSchedule["modal_id"]] ?? null : null,
            ]);
        }
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
