import React, { createContext, useState, useEffect } from 'react';
import { User } from '../types';
import axios from 'axios';
import { API_URL } from '../config';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: false,
  error: null,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
});

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Check if user is already logged in
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const token = localStorage.getItem('token');
        
        if (token) {
          // For demo purposes, we'll simulate getting user data
          // In a real app, you would validate the token with your backend
          const userData = JSON.parse(localStorage.getItem('user') || 'null');
          
          if (userData) {
            setUser(userData);
          } else {
            // If we have a token but no user data, try to fetch it
            const { data } = await axios.get(`${API_URL}/auth/me`, {
              headers: { Authorization: `Bearer ${token}` }
            });
            setUser(data);
            localStorage.setItem('user', JSON.stringify(data));
          }
        }
      } catch (err) {
        console.error('Auth check failed:', err);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // For the MVP, we'll simulate a successful login with mock data
      // In a real app, you would call your backend API
      
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock response for demo
      const mockResponse = {
        token: 'mock-jwt-token',
        user: {
          id: '1',
          name: 'Demo User',
          email: email,
          avatar: 'https://ui-avatars.com/api/?name=Demo+User&background=4F46E5&color=fff',
          createdAt: new Date().toISOString()
        }
      };
      
      // Store auth data
      localStorage.setItem('token', mockResponse.token);
      localStorage.setItem('user', JSON.stringify(mockResponse.user));
      
      setUser(mockResponse.user);
    } catch (err: any) {
      console.error('Login failed:', err);
      setError(err.response?.data?.message || 'Failed to login. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      
      // For the MVP, we'll simulate a successful signup with mock data
      // In a real app, you would call your backend API
      
      // Simulating API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock response for demo
      const mockResponse = {
        token: 'mock-jwt-token',
        user: {
          id: '1',
          name: name,
          email: email,
          avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=4F46E5&color=fff`,
          createdAt: new Date().toISOString()
        }
      };
      
      // Store auth data
      localStorage.setItem('token', mockResponse.token);
      localStorage.setItem('user', JSON.stringify(mockResponse.user));
      
      setUser(mockResponse.user);
    } catch (err: any) {
      console.error('Signup failed:', err);
      setError(err.response?.data?.message || 'Failed to create account. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};