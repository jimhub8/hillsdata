<?php

namespace App\Http\Controllers;

use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class ClientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $clients =  Client::paginate(200);
        $clients->transform(function ($client) {
            $active = '';
            if ($client->status == 1) {
                $active = 'Active';
            }elseif ($client->status == 2) {
                $active = 'Inactive';
            }elseif ($client->status == 3) {
                $active = 'Terminated';
            }elseif ($client->status == 2) {
                $active = 'Lead';
            }
            $client->active =$active;
            return $client;
        });
        return $clients;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        // return $request->all();
        $this->Validate($request, [
            'code' => 'required',
            'client_name' => 'required',
            'location' => 'required',
            'contact' => 'required',
            'engaged_date' => 'required',
            'renewal_date' => 'required',
            'status' => 'required'
        ]);


       return Client::create([
            'code' => $request->code,
            'client_name' => $request->client_name,
            'location' => $request->location,
            'contact' => $request->contact,
            'engaged_date' => $request->engaged_date,
            'renewal_date' => $request->renewal_date,
            'status' => $request->status
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        Client::find($id)->update([
            'code' => $request->code,
            'client_name' => $request->client_name,
            'location' => $request->location,
            'contact' => $request->contact,
            'engaged_date' => $request->engaged_date,
            'renewal_date' => $request->renewal_date,
            'status' => $request->status
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Client  $client
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function client_search($search)
    {
        return Client::where('client_name', 'LIKE', "%{$search}%")->paginate(100);
    }
}
