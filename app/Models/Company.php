<?php

namespace App\Models;

use App\Seller;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    protected $fillable = ['about', 'address', 'email', 'name', 'phone', 'terms', 'website', 'notes'];

    public function users()
    {
        return $this->hasMany(User::class, 'company_id');
    }

    public function sellers()
    {
        return $this->hasMany(Seller::class, 'company_id');
    }

    public function getCreatedAtAttribute($date)
    {
        return Carbon::createFromFormat('Y-m-d H:i:s', Carbon::parse($date))->format('D d M Y H:i');
    }

}
