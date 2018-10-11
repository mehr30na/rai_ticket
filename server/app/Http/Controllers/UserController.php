<?php
namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Http\Requests;
use App\Http\Controllers\Controller;
use JWTAuth;
use App\User;
use JWTAuthException;
use Validator;
use Hash;


class UserController extends Controller
{
    private $user;
    public function __construct(User $user){
        $this->user = $user;
    }

    public function register(Request $request)
    {

        $credentials = $request->only('username', 'password');
        $rules = [
            'username' => 'required|max:255|unique:users',
            'password' => 'required|min:6',
        ];
        $validator = Validator::make($credentials, $rules);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'error' => $validator->messages(),
            ]);
        }

        // return $request;

        $name = $request->name;
        $code = $request->code;
        $username = $request->username;
        $password =  Hash::make($request->password);
        $department = $request->department;
        $post = $request->post;
        $phone = $request->phone;

        $userData = [
            'name' => $name,
            'code' => $code,
            'username' => $username,
            'password' => $password,
            'department' => $department,
            'post' => $post,
            'phone' => $phone,
        ];

        $user = User::create($userData);

        return $this->login($request);

        return response()->json([
            'success' => true,
            'data' => ['user' => $user],
        ]);

    }




    public function login(Request $request)
    {
        $credentials = $request->only('username', 'password');
        $rules = [
            'username' => 'required|max:255',
            'password' => 'required|min:6',
        ];
        $validator = Validator::make($credentials, $rules);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'error' => $validator->messages(),
            ]);
        }
        

        try {

            // attempt to verify the credentials and create a token for the user
            if (!$token = JWTAuth::attempt($credentials)) {
                return response()->json(['success' => false, 'error' => 'Account does not exist!']);
            }
            
        } catch (JWTException $e) {
            // something went wrong whilst attempting to encode the token
            return response()->json(['success' => false, 'error' => 'Failed to login!']);
        }
        // all good so return the token
        return response()->json(['success' => true, 'data' => ['token' => $token]]);
    }




    public function getAuthUser(Request $request){
        $user = JWTAuth::toUser($request->token);
        return response()->json(['result' => $user]);
    }
}