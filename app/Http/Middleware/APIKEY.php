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
        $key = '$2y$10$898pIbtygVB2.uuU8fJuveEzxekF58bCPRznJY5H2xLx0DMSJrc1G';
        
        if(!Hash::check($token,$key)):
            return response()->json(['message' => 'App Key salah!'],401);
        endif;
        return $next($request);
    }
}
