<?php

namespace App\Http\Controllers;

use App\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TicketCntroller extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        // return Ticket::orderBy('created_at', 'DESC')->get();

        return $users = DB::table('users')
            ->join('tickets', 'users.id', '=', 'tickets.user_id')
            ->select('users.name', 'tickets.*')
            ->get();

    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
//    public function create()
//    {
//        //
//    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //

        return Ticket::Create([
            'user_id'=>$request->user()->id,
            'type'=>$request->type,
            'title'=>$request->title,
            'description'=>$request->description,
            'response'=>$request->response,
            'orderPriority'=>$request->orderPriority,
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
        //  return Ticket::find($id);
         return $users = DB::table('users')
            ->join('tickets', 'users.id', '=', 'tickets.user_id')
            ->select('users.name', 'tickets.*')->where('tickets.id',$id)->get()->take(1);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
//    public function edit($id)
//    {
//        //
//    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
        return json_encode(Ticket::find($id)->Update($request->all()));

    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
        return json_encode(Ticket::find($id)->delete());

    }


    public function myTicket(Request $request){
        // return $request->user()->id;
        return Ticket::where('user_id',$request->user()->id)
                    ->orderBy('created_at', 'DESC')->get();

    }
}
