'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AuthForm } from "@/components/AuthForm";

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const router = useRouter();

  const handleSubmit = () => {
    router.push('/about'); 
  };

  return (
    <AuthForm
      isLogin={isLogin}
      onToggleAuthMode={() => setIsLogin(!isLogin)}
      onSubmit={handleSubmit} // ✅ Pass handleSubmit to AuthForm
    />
  );
}
