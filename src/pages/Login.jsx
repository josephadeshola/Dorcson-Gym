
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../../src/components/ui/button";
import { Input } from "../../src/components/ui/input";
import { Label } from "../../src/components/ui/label";
import { Activity, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate loading
    setTimeout(() => {
      console.log("Login attempt:", { email, password });
      setIsLoading(false);
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    console.log("Google sign-in clicked");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-red-950 flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-red-500/5 to-transparent rounded-full blur-3xl animate-spin opacity-30" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="max-w-md w-full space-y-8 mb-10 relative z-10">
        <div className="text-center transform hover:scale-105 transition-transform duration-300">
          <div className="flex items-center mt-20 justify-center space-x-2 mb-6 group">
            <div className="relative">
              <Activity className="h-12 w-12 text-red-500 group-hover:text-red-400 transition-colors duration-300" />
              <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            </div>
            <span className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              DorcsonGym
            </span>
          </div>
          <h2 className="text-3xl font-bold text-white mb-2 animate-fade-in">Welcome Back</h2>
          <p className="text-gray-400 animate-fade-in delay-200">Sign in to continue your fitness journey</p>
        </div>

        <div className="bg-gray-900/80 backdrop-blur-xl p-8 rounded-2xl border border-gray-800/50 shadow-2xl transform hover:scale-[1.02] transition-all duration-300 hover:shadow-red-500/10">
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white font-medium">Email</Label>
              <div className={`relative group transition-all duration-300 ${focusedField === 'email' ? 'scale-[1.02]' : ''}`}>
                <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
                  focusedField === 'email' ? 'text-red-500' : 'text-gray-400'
                }`} />
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  className="pl-10 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:bg-gray-800 transition-all duration-300 h-12 rounded-xl backdrop-blur-sm"
                  placeholder="Enter your email"
                  required
                />
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/20 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none ${
                  focusedField === 'email' ? 'opacity-100' : ''
                }`}></div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-white font-medium">Password</Label>
              <div className={`relative group transition-all duration-300 ${focusedField === 'password' ? 'scale-[1.02]' : ''}`}>
                <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 transition-colors duration-300 ${
                  focusedField === 'password' ? 'text-red-500' : 'text-gray-400'
                }`} />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocusedField('password')}
                  onBlur={() => setFocusedField(null)}
                  className="pl-10 pr-12 bg-gray-800/50 border-gray-700 text-white placeholder-gray-400 focus:border-red-500 focus:bg-gray-800 transition-all duration-300 h-12 rounded-xl backdrop-blur-sm"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white transition-colors duration-200 hover:scale-110"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-red-500/20 to-transparent opacity-0 transition-opacity duration-300 pointer-events-none ${
                  focusedField === 'password' ? 'opacity-100' : ''
                }`}></div>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <Link 
                to="/forgot-password" 
                className="text-sm text-red-500 hover:text-red-400 transition-colors duration-200 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            <Button 
              type="submit" 
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 h-12 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-red-500/25 disabled:opacity-70 disabled:cursor-not-allowed group"
            >
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                  <span>Signing In...</span>
                </div>
              ) : (
                <div className="flex items-center space-x-2 group-hover:space-x-3 transition-all duration-200">
                  <span>Sign In</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </div>
              )}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-gray-900/80 text-gray-400 backdrop-blur-sm">Or continue with</span>
              </div>
            </div>

            <Button
              onClick={handleGoogleSignIn}
              variant="outline"
              className="w-full mt-4 bg-white/95 hover:bg-white text-black border-gray-300 h-12 rounded-xl font-medium transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group backdrop-blur-sm"
            >
              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" viewBox="0 0 24 24">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
                <span>Sign in with Google</span>
              </div>
            </Button>
          </div>

          <div className="text-center mt-6">
            <p className="text-gray-400">
              Don't have an account?{" "}
              <Link 
                to="/auth/register" 
                className="text-red-500 hover:text-red-400 font-medium transition-colors duration-200 hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
