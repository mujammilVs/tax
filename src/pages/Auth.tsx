import { useState } from 'react';
import { Lock, User } from 'lucide-react';

export default function Auth() {
  const [isSignIn, setIsSignIn] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-last p-8 rounded-lg shadow-md">
        <div>
          <div className="flex justify-center">
            {isSignIn ? (
              <Lock className="w-12 h-12 text-primary" />
            ) : (
              <User className="w-12 h-12 text-primary" />
            )}
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold text-primary">
            {isSignIn ? 'Sign in to your account' : 'Create your account'}
          </h2>
        </div>

        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setIsSignIn(true)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              isSignIn
                ? 'bg-primary text-last'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Sign In
          </button>
          <button
            onClick={() => setIsSignIn(false)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              !isSignIn
                ? 'bg-primary text-last'
                : 'bg-gray-100 text-primary hover:bg-gray-200'
            }`}
          >
            Sign Up
          </button>
        </div>

        <form className="mt-8 space-y-6">
          {!isSignIn && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-secondary"
                placeholder="John Doe"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-secondary"
              placeholder="email@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete={isSignIn ? "current-password" : "new-password"}
              required
              className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-secondary"
              placeholder="••••••••"
            />
          </div>

          {!isSignIn && (
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                required
                className="appearance-none rounded-lg relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-primary focus:border-secondary"
                placeholder="••••••••"
              />
            </div>
          )}

          {isSignIn && (
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-priamry focus:ring-primary border-gray-300 rounded "
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-primary">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-primary hover:text-primary">
                  Forgot password?
                </a>
              </div>
            </div>
          )}

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primary hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
            >
              {isSignIn ? 'Sign in' : 'Create Account'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}