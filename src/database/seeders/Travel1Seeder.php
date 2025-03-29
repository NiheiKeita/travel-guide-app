<?php

namespace Database\Seeders;

use App\Models\Travel;
use App\Models\Modal;
use App\Models\ScheduleGroup;
use App\Models\Schedule;
use App\Models\Card;
use App\Models\Image;
use App\Models\Hotel;
use Illuminate\Database\Seeder;

class Travel1Seeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        // 旅行データを作成
        $travel = Travel::create([
            "title" => "草津冒険の3日間",
            "memo" => "草津で過ごす楽しいひとときを、このしおりでサポートします！",
            "first_date" => "2025-03-01",
            "last_date" => "2025-03-03",
            "travel_price" => 100000,
            "count_down_start_time" => "2025-03-01",
        ]);
        Image::create([
            "imageable_id" => $travel->id,
            "imageable_type" => Travel::class,
            "url" => "/img/top/top.jpg",
        ]);

        $hotel = Hotel::create([
            "name" => "季の庭",
            "url" => "https://dormy-hotels.com/resort/hotels/tokinoniwa",
            "access_url" => "https://dormy-hotels.com/resort/hotels/tokinoniwa/access/",
            "address" => "群馬県吾妻郡草津町大字草津白根464-214",
        ]);
        Image::create([
            "imageable_id" => $hotel->id,
            "imageable_type" => Hotel::class,
            "url" => "/img/top/hotel.jpg",
        ]);

        $travel->hotels()->save($hotel);

        // モーダルデータを作成
        $modalMap = [];
        foreach (
            [
                ["id" => 1, "title" => "~食べ歩きグルメ~"],
                ["id" => 2, "title" => "~星空ウォーク~"],
                ["id" => 3, "title" => "~おさ湯~"],
                ["id" => 4, "title" => "~陶芸体験~"],
                ["id" => 5, "title" => "~熱帯園~"],
            ] as $modalData
        ) {
            $modal = Modal::create([
                "id" => $modalData["id"],
                "travel_id" => $travel->id,
                "title" => $modalData["title"],
                "modal_type" => "A",
            ]);
            $modalMap[$modalData["id"]] = $modal->id;
        }

        // カードデータを作成
        foreach (
            [
                [
                    "img" => "/img/top/dango.jpg",
                    "title" => "射的茶屋まつりやの前",
                    "url" => "https://www.instagram.com/p/DAo0VYzToeD/?img_index=4&igsh=MWxwM2F6OWVnMmtwMA==",
                    "accessURL" => "https://maps.app.goo.gl/Q3ThRuwVCWYASPoW6?g_st=com.google.maps.preview.copy"
                ],
                [
                    "img" => "/img/top/daibutsu.jpg",
                    "title" => "TOLOSTAND",
                    "url" => "https://urakusatsu-tou.com",
                    "accessURL" => "https://maps.app.goo.gl/Q3ThRuwVCWYASPoW6?g_st=com.google.maps.preview.copy"
                ],
                [
                    "img" => "/img/top/pulin.jpg",
                    "title" => "草津温泉プリン",
                    "url" => "https://www.kusatsuonsen-purin.com",
                    "accessURL" => "https://maps.app.goo.gl/uaZ6KJbd7euTUBXm7?g_st=com.google.maps.preview.copy"
                ],
                [
                    "img" => "/img/top/macha.jpg",
                    "title" => "カフェ花いんげん",
                    "url" => "https://www.instagram.com/hanaingen_seigetsudou?igsh=N2FtbXJmYTR3ZHlq",
                    "accessURL" => "https://maps.app.goo.gl/qa8tRP3NxJZNQR5x6?g_st=com.google.maps.preview.copy"
                ],
                [
                    "img" => "/img/top/tamago.jpg",
                    "title" => "草津ガラス蔵",
                    "url" => "https://932gw.com/",
                    "accessURL" => "https://maps.app.goo.gl/T8Nrdr7dYJMVcSpL6?g_st=com.google.maps.preview.copy"
                ],
                [
                    "img" => "/img/top/onsenmanjuu.jpg",
                    "title" => "山びこ温泉まんじゅう",
                    "url" => "",
                    "accessURL" => "https://maps.app.goo.gl/JchoGAmwV6zRMnPK8?g_st=com.google.maps.preview.copy"
                ],
                [
                    "img" => "/img/top/buta.jpg",
                    "title" => "豚りんの",
                    "url" => "https://www.instagram.com/butarinno?igsh=a3plM25zNWY3dnYz",
                    "accessURL" => "https://maps.app.goo.gl/Tio86bqCpz7VXmXB7?g_st=com.google.maps.preview.copy"
                ],
                [
                    "img" => "/img/top/gomafuku.jpg",
                    "title" => "ごま福堂",
                    "url" => "https://www.telacoya.co.jp/company/shop_detail/shop_detail-569/",
                    "accessURL" => "https://maps.app.goo.gl/vZKVKFUbSVTngjFBA?g_st=com.google.maps.preview.copy"
                ],
            ] as $cardData
        ) {
            $card = Card::create([
                "modal_id" => $modalMap[1], // 食べ歩きグルメのモーダルIDを関連付け
                "title" => $cardData["title"],
                "url" => $cardData["url"],
                "accessURL" => $cardData["accessURL"],
            ]);
            Image::create([
                "imageable_id" => $card->id,
                "imageable_type" => Card::class,
                "url" => $cardData["img"],
            ]);
        }
        //星空ウォーク
        foreach (
            [
                [
                    "img" => "/img/top/star.jpg",
                    "title" => "星空ウォーク",
                    "url" => "https://www.instagram.com/p/DEehsssSnJb/?igsh=MWtkd3J0YzE5ZDRwdg==",
                    "accessURL" => null
                ],
            ] as $cardData
        ) {
            $card = Card::create([
                "modal_id" => $modalMap[2],
                "title" => $cardData["title"],
                "url" => $cardData["url"],
                "accessURL" => $cardData["accessURL"],
            ]);
            Image::create([
                "imageable_id" => $card->id,
                "imageable_type" => Card::class,
                "url" => $cardData["img"],
            ]);
        }
        //おさ湯
        foreach (
            [
                [
                    "img" => "/img/top/osayu.jpg",
                    "title" => "おさ湯",
                    "url" => "https://www.instagram.com/kusatsuonsen_osayu?igsh=bnAwdXgzcnplNDZu",
                    "accessURL" => "https://maps.app.goo.gl/2grymNj3Ka64QPdY7?g_st=com.google.maps.preview.copy"
                ],
            ] as $cardData
        ) {
            $card = Card::create([
                "modal_id" => $modalMap[3],
                "title" => $cardData["title"],
                "url" => $cardData["url"],
                "accessURL" => $cardData["accessURL"],
            ]);
            Image::create([
                "imageable_id" => $card->id,
                "imageable_type" => Card::class,
                "url" => $cardData["img"],
            ]);
        }
        //陶工房 美土里の洞
        foreach (
            [
                [
                    "img" => "/img/top/tougei.jpeg",
                    "title" => "陶工房 美土里の洞",
                    "url" => "https://midori-hora.moo.jp/",
                    "accessURL" => "https://maps.app.goo.gl/Mb7Mb5wmKBSCobuB9"
                ],
            ] as $cardData
        ) {
            $card = Card::create([
                "modal_id" => $modalMap[4],
                "title" => $cardData["title"],
                "url" => $cardData["url"],
                "accessURL" => $cardData["accessURL"],
            ]);
            Image::create([
                "imageable_id" => $card->id,
                "imageable_type" => Card::class,
                "url" => $cardData["img"],
            ]);
        }
        //草津熱帯圏
        foreach (
            [
                [
                    "img" => "/img/top/anettai.jpg",
                    "title" => "草津熱帯圏",
                    "url" => "http://nettaiken.com/",
                    "accessURL" => "http://nettaiken.com/index-3.html"
                ],
            ] as $cardData
        ) {
            $card = Card::create([
                "modal_id" => $modalMap[5],
                "title" => $cardData["title"],
                "url" => $cardData["url"],
                "accessURL" => $cardData["accessURL"],
            ]);
            Image::create([
                "imageable_id" => $card->id,
                "imageable_type" => Card::class,
                "url" => $cardData["img"],
            ]);
        }

        // スケジュールデータを作成
        $scheduleGroups = [
            [
                "title" => "1日目",
                "schedule" => [
                    ["time" => "09:05-13:10", "title" => "バス移動(新宿)"],
                    ["time" => "13:10-15:00", "title" => "食べ歩き", "modal_id" => "1"],
                    ["time" => "15:00", "title" => "チェックイン"],
                    ["time" => "15:00-17:30", "title" => "ゆったりぶらぶら", "modal_id" => "1"],
                    ["time" => "17:30", "title" => "夕食！"],
                    ["time" => "18:30-18:45", "title" => "移動"],
                    ["time" => "19:00-21:00", "title" => "（星空ウォーク）", "modal_id" => "2"],
                    ["time" => "22:00", "title" => "夜鳴きそば！"],
                ],
            ],
            [
                "title" => "2日目",
                "schedule" => [
                    ["time" => "9:00", "title" => "朝ごはん！"],
                    ["time" => "11:00", "title" => "熱帯園", "modal_id" => "5"],
                    ["time" => "14:00-15:00", "title" => "陶芸体験", "modal_id" => "4"],
                    ["time" => "15:00-16:00", "title" => "おさ湯", "modal_id" => "3"],
                    ["time" => "16:00-17:30", "title" => "ゆったりぶらぶら", "modal_id" => "1"],
                    ["time" => "17:30", "title" => "夕食！"],
                    ["time" => "22:00", "title" => "夜鳴きそば！"],
                ],
            ],
            [
                "title" => "3日目",
                "schedule" => [
                    ["time" => "9:00", "title" => "朝ごはん！"],
                    ["time" => "11:00", "title" => "草津ぶーらぶら", "modal_id" => "1"],
                    ["time" => "16:00-20:10", "title" => "バスで帰り"],
                ],
            ],
        ];

        foreach ($scheduleGroups as $index => $group) {
            $scheduleGroup = ScheduleGroup::create([
                "travel_id" => $travel->id,
                "title" => $group["title"],
                "sort" => $index + 1,
            ]);

            foreach ($group["schedule"] as $schedule) {
                Schedule::create([
                    "schedule_group_id" => $scheduleGroup->id,
                    "modal_id" => $schedule["modal_id"] ?? null,
                    "title" => $schedule["title"],
                    "time_text" => $schedule["time"],
                ]);
            }
        }
    }
}
