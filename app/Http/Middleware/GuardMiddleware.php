<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class GuardMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (Auth::guard('web')->check()) {
            dd(1);
            return redirect()->route('home');
        }elseif (Auth::guard('investigator')->check()) {
            dd(2);
            return redirect()->route('investigator.dashboard');
        }elseif (Auth::guard('client')->check()) {
            dd(3);
            return redirect()->route('client.dashboard');
        }

        return $next($request);
    }
}
