<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;

class TopController extends Controller
{
    public function index(): Response
    {
        return Inertia::render('Web/Top');
    }

    public function suwako(): Response
    {
        $travelSwako = [
            "id" => 1,
            "created_at" => "2025-03-29T02:08:56.000000Z",
            "updated_at" => "2025-07-23T16:17:58.000000Z",
            "title" => "諏訪湖の旅！",
            "memo" => "ゆうちゃんの生まれ育った諏訪湖旅を、このしおりでサポートします！",
            "travel_price" => 30000,
            "first_date" => "2025-07-26 09:00:00",
            "last_date" => "2025-07-27 17:00:00",
            "count_down_start_time" => "2025-07-26 09:00:00",
            "images" => [
                [
                    "id" => 19,
                    "url" => "https://suwakko.com/wp-content/uploads/2025/04/s-770.jpg"
                ]
            ],
            "hotels" => [
                [
                    "name" => "ホテル鷺乃湯",
                    "url" => "https://www.saginoyu.com/",
                    "images" => [
                        [
                            "url" => "https://www.saginoyu.com/saginoyu2021/wp-content/uploads/2024/08/slider001.jpg",
                            "id" => "1"
                        ]
                    ],
                    "address" => "長野県諏訪市湖岸通 3-2-14",
                    "accessUrl" => "https://www.saginoyu.com/access"
                ]
            ],
            "modals" => [
                [
                    "id" => 7,
                    "title" => "っっs",
                    "type" => 1,
                    "cards" => []
                ]
            ],
            "schedule_groups" => [
                [
                    "id" => 49,
                    "title" => "1日目",
                    "schedules" => [
                        [
                            "title" => "あずさ号で移動！",
                            "time_text" => "10:04 - 12:49",
                            "modal_id" => null,
                        ],
                        [
                            "title" => "アピタいってぶらぶら",
                            "time_text" => "13:30 - 15:00",
                            "modal_id" => null,
                        ],
                        [
                            "title" => "あっくんお迎え",
                            "time_text" => "15:00 -",
                            "modal_id" => null,
                        ],
                        [
                            "title" => "お家ご挨拶　お茶",
                            "time_text" => "15:30-17:00",
                            "modal_id" => null,
                        ],
                        [
                            "title" => "鷺の湯着",
                            "time_text" => "17:00 - ",
                            "modal_id" => null,
                        ],
                        [
                            "title" => "夕食",
                            "time_text" => "18:30-",
                            "modal_id" => null,
                        ]
                    ]
                ],
                [
                    "id" => 50,
                    "title" => "2日目",
                    "schedules" => [
                        [
                            "title" => "朝ごはん！",
                            "time_text" => "9:00",
                            "modal_id" => null,
                        ],
                        [
                            "title" => "チェックアウト",
                            "time_text" => "10:00",
                            "modal_id" => null,
                        ],
                        [
                            "title" => "諏訪大社参拝＋ドライブ",
                            "time_text" => "11:00-13:00",
                            "modal_id" => null,
                        ],
                        [
                            "title" => "うなぎ！！",
                            "time_text" => "13:00-15:00",
                            "modal_id" => null,
                        ],
                        [
                            "title" => "ちっぷ！！",
                            "time_text" => "15:00-16:00",
                            "modal_id" => null,
                        ],
                        [
                            "title" => "帰りの電車",
                            "time_text" => "17:30",
                            "modal_id" => null,
                        ]
                    ]
                ]
            ]
        ];

        return Inertia::render('Web/SuwakoView', [
            'travel' => $travelSwako,
        ]);
    }
}
