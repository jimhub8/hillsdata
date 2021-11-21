<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Facades\Notification;
use Spatie\WelcomeNotification\WelcomeController as BaseWelcomeController;
use Spatie\WelcomeNotification\WelcomeNotification;

class WelcomeController extends BaseWelcomeController
{
    public function wel()
    {
        $user = User::first();
        $expiresAt = now()->addDay();
        Notification::send($user, new WelcomeNotification($expiresAt));
    }
}
