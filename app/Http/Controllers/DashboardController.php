<?php

namespace App\Http\Controllers;

use App\Models\Client;
use App\Models\User;

class DashboardController extends Controller
{
    public function client_count()
    {
        return Client::count();
    }
    public function users_count()
    {
        return User::count();
    }
    public function active_count()
    {
        return Client::where('status', 1)->count();
    }
    public function terminated_count()
    {
        return Client::where('status', 3)->count();
    }
    public function inactve_count()
    {
        return Client::where('status', 2)->count();
    }
    public function dashboard_data()
    {
        return array(
            'clients' => $this->client_count(),
            'inactive' => $this->inactve_count(),
            'active' => $this->active_count(),
            'terminated' => $this->terminated_count(),
            'users' => $this->users_count()
        );
    }
}
