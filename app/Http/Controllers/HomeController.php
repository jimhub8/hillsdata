<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Spatie\Permission\Models\Permission;

class HomeController extends Controller
{
    public function logged_user()
    {
        $user = new User();
        return  $user->logged_user();
    }
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        $user = $this->logged_user();
        $permissions = [];
        foreach (Permission::where('guard_name', 'web')->get() as $permission) {
            if ($user->hasPermissionTo($permission->name)) {
                $permissions[$permission->name] = true;
            } else {
                $permissions[$permission->name] = false;
            }
        }
        $auth_user = Arr::prepend($user->toArray(), $permissions, 'can');
        // $logo = $auth_user['company']['logo'];

        return view('welcome', compact(['auth_user']));
    }
}
