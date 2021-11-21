<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Company::first();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Company::first()) {
            return  Company::first()->update($request->all());
        } else {
             return Company::create($request->all());
        }

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Company $company)
    {
        return  Company::first()->update($request->all());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        //
    }
    public function company_logo(Request $request)
    {
        if ($request->hasFile('image')) {
            $image = Company::first();
            if ($image->logo) {
                // dd($file_arr);
                if (Storage::disk(env('STORAGE_DISK'))->exists($image->logo)) {
                    Storage::disk(env('STORAGE_DISK'))->delete($image->logo);
                }
            }
            $img = $request->image;
            $imagename = Storage::disk(env('STORAGE_DISK'))->put('logo', $img, 'public');
            $uploaded_img = 'storage/' . $imagename;
            $image->logo = $uploaded_img;
            $image->save();
            return $image;
        }
        return 'error';
    }
}
