<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Notification;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;
use Spatie\WelcomeNotification\WelcomeNotification;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    protected $fillable = [
        'name',
        'email',
        'password', 'address', 'phone'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];


    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', Carbon::parse($date))->format('D d M Y H:i');
    }

    public function logged_user()
    {

        if (Auth::check()) {
            $user =  Auth::user();
        } elseif (Auth::guard('client')->check()) {
            $user =  Auth::guard('client')->user();
        } elseif (Auth::guard('investigator')->check()) {
            $user =  Auth::guard('investigator')->user();
        }  else {
            $user = User::first();
        }
        return $user;
    }

    public function welcome_mail($user)
    {
        $expiresAt = now()->addDay();
        // $this->notify(new WelcomeNotification($expiresAt));

        Notification::send($user, new WelcomeNotification($expiresAt));
    }
}
