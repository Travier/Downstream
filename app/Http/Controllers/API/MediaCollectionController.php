<?php

namespace App\Http\Controllers\API;

use App\Models\Media;
use App\Models\UserMedia;
use Illuminate\Http\Request;
use App\Services\YoutubeService;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;

class MediaCollectionController extends Controller
{
    /**
     * Logic:
     * - Check if videoId is already a media item
     * - if yes then add to users collection
     * - if no then create media item and add to users collection
     */
    public function postCollectItem(Request $request)
    {
        $userId = Auth::user()->id;
        $videoId = $request->videoId;

        if(!$userId || !$videoId) {
            return response()->json([
                'message' => 'userId or videoId not available',
                'userId' => $userId,
                'videoId' => $videoId
            ], 500);
        }

        $media = Media::where('index', $videoId)->first();

        if(!$media) {
            $video = YoutubeService::getVideoById($videoId);

            // runs another check to make sure media exists
            $media = Media::createFromYoutubeVideo($video, [
                'user_id' => $userId
            ]);

            if(!$media) {
                return response()->json([
                    'message' => 'Failed to create media item'
                ], 500);
            }
        }

        $userMediaId = UserMedia::firstOrCreate([
            'media_id' => $media->id,
            'user_id' => $userId
        ]);

        // Add mediaId to users collection
        if(!$userMediaId) {
            return response()->json([
                'message' => 'Failed to add media to users collection'
            ], 500);
        }

        return response()->json([
            'mediaId' => $media->id,
            'message' => 'successfully collected media item'
        ], 200);
    }

    public function removeItemFromCollection(Int $itemId) 
    {
        $userId = Auth::user()->id;

        UserMedia::where('user_id', $userId)
            ->where('media_id', $itemId)
            ->delete();

        return response()->json([
            'message' => 'removed item from collection'
        ], 200);
    }
}