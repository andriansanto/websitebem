<?php

namespace App\Http\Middleware;

use Closure;
use Hash;

class APIKEY
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $token = $request->header('APP_KEY');
        $key = '$2y$10$pcvhQneM.7eHbKkH5CdPP.fwhn/BV4Jp6zclZB75j68eocwH7lrr.';
        
        // if(!Hash::check($token,$key)):
        //     return response()->json(['message' => 'App Key salah!'],401);
        // endif;
        return $next($request);
    }
}
