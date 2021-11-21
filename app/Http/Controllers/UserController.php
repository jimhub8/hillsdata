<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class UserController extends Controller
{
    public function logged_user()
    {
        // return User::find(1);
        $user = new User();
        return  $user->logged_user();
    }
    public function index()
    {
        // return User::find(1);

        $users = User::orderBy('name')->paginate(500);
        // $users = User::orderBy('name')->with('roles')->paginate(500);
        $users->transform(function ($user) {
            // dd($user->roles, count($user->roles));
            $user->role_id = (count($user->roles) > 0) ? $user->roles[0]['id'] : null;
            // $user->status = 'active';
            return $user;
        });
        return response()->json($users);
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->Validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'role_id' => 'required',
        ]);
        // return $request->all();
        $password = Str::random(8);
        $user = new User;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->address = $request->address;
        $user->password = Hash::make($password);
        // $user->company_id = Company::first()->id;
        $user->save();
        $user->assignRole($request->role_id);

        // Mail::send(new UserRegisterMail($user, $password));

        // $user_mail = new User;
        // $user_mail->welcome_mail($user);

        return $user;
    }

    public function generateRandomString($length = 10)
    {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // return $request->all();
        $this->Validate($request, [
            'name' => 'required',
            'email' => 'required|email',
            'phone' => 'required',
            'role_id' => 'required'
        ]);
        $user = User::find($id);
        // $user->city = $request->city;
        $user->name = $request->name;
        $user->email = $request->email;
        $user->address = $request->address;
        $user->phone = $request->phone;
        $user->save();

        if (!empty(User::find($id)->roles)) {
            $user->syncRoles($request->role_id);
        } else {
            $user->assignRole($request->role_id);
        }



        return $user;
    }

    public function AuthUserUp(Request $request)
    {
        $user = User::find(Auth::id());
        $user->name = $request->name;
        $user->email = $request->email;
        $user->phone = $request->phone;
        $user->branch_id = $request->branch_id;
        $user->address = $request->address;
        $user->city = $request->city;
        $user->country = $request->country;
        $user->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\User  $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        User::find($user->id)->delete();
    }

    public function getLogedinUsers()
    {
        return $this->logged_user();
    }

    public function profile(Request $request, $id)
    {
        $upload = User::find($request->id);
        if ($request->hasFile('image')) {
            // return('test');
            // $imagename = time() . $request->image->getClientOriginalName();
            // $request->image->storeAs('public/test', $imagename);
            $img = $request->image;
            // $image_path = ;

            if (File::exists('storage/profile/' . $upload->image)) {

                // return('test');
                $image_path = 'storage/profile/' . $upload->image;

                File::delete($image_path);
                // return $image_path;
            }
            // $imagename =  Storage::disk('uploads')->put('profile', $img);
            $imagename = Storage::disk('public')->put('profile', $img);
        }

        // return('noop');
        $imgArr = explode('/', $imagename);
        $image_name = $imgArr[1];
        $upload->profile = '/storage/profile/' . $image_name;
        // $upload->profile = '/healthwise/products/'.$image_name;
        $upload->save();
        return $upload;
    }


    public function password(Request $request)
    {
        $this->Validate($request, [
            'password' => 'required|string|min:6',
            // 'password' => 'required|string|min:6|confirmed',
        ]);
        $user = User::find(Auth::id());
        $user->password = Hash::make($request->password);
        $user->save();
        return $user;
    }

    public function logoutOther()
    {
        return view('auth.Logout');
    }

    public function logOtherDevices(Request $request)
    {
        Auth::logoutOtherDevices($request->password);
        return redirect('/courier');
    }

    public function userpermisions(Request $request, $id)
    {
        // return $request->all();
        $user = User::find($id);
        $user->syncPermissions($request->selected);
        return $user;
    }


    public function undeletedUser($id)
    {
        User::withTrashed()->find($id)->restore();
    }

    public function force_user($id)
    {
        User::withTrashed()->find($id)->forceDelete();
    }

    public function deletedUsers()
    {
        $users = User::onlyTrashed()->get();
        return $users;
    }


    public function getUserPerm(Request $request, $id)
    {
        $user = User::find($id);
        $permissions = $user->getAllPermissions();
        $can = [];
        foreach ($permissions as $perm) {
            $can[] = $perm->name;
        }
        return $can;
    }

    public function change_password(Request $request, $id)
    {
        User::find($id)->update(['password' => Hash::make($request->password)]);
    }
}
