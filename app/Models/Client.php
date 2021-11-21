<?php

namespace App\Models;

use App\Notifications\Client\ClientResetPassword;
use App\Notifications\Client\ClientVerifyEmail;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Client extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = ['code', 'client_name', 'location', 'contact', 'engaged_date', 'renewal_date', 'status'];

    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', Carbon::parse($date))->format('D d M Y H:i');
    }
    public function getStatusAttribute($status)
    {
        return (string) $status;
    }
}
