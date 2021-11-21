<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Str;

class RolesAndPermissionsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        // Reset cached roles and permissions
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        Permission::create(['guard_name' => 'web', 'name' => 'User create']);
        Permission::create(['guard_name' => 'web', 'name' => 'User edit']);
        Permission::create(['guard_name' => 'web', 'name' => 'User permissions']);
        Permission::create(['guard_name' => 'web', 'name' => 'User reset password']);
        Permission::create(['guard_name' => 'web', 'name' => 'User delete']);
        Permission::create(['guard_name' => 'web', 'name' => 'User view']);
        Permission::create(['guard_name' => 'web', 'name' => 'Manage company']);

        Permission::create(['guard_name' => 'web', 'name' => 'Role create']);
        Permission::create(['guard_name' => 'web', 'name' => 'Role edit']);
        Permission::create(['guard_name' => 'web', 'name' => 'Role delete']);
        Permission::create(['guard_name' => 'web', 'name' => 'Role view']);



        $role = Role::create(['name' => 'Super admin']);

        $role->givePermissionTo(Permission::all());

        $user = User::create([
            'name' => 'Jimmy',
            'email' => 'jimlaravel@gmail.com',
            'email_verified_at' => now(),
            'address' => $faker->address(),
            'phone' => $faker->phoneNumber(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10)
        ]);
        $user->assignRole('Super admin');


        $user2 = User::create([
            'name' => 'Don Awene',
            'email' => 'don.awene@gmail.com',
            'email_verified_at' => now(),
            'address' => $faker->address(),
            'phone' => $faker->phoneNumber(),
            'password' => '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', // password
            'remember_token' => Str::random(10)
        ]);
        $user2->assignRole('Super admin');
    }
}
