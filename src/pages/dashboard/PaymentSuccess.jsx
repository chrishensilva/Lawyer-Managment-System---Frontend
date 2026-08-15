import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import API_BASE_URL from './config';
import { useAuth } from './AuthContext';
import { CheckCircle, ShieldCheck, ArrowRight } from 'lucide-react';

const PaymentSuccess = () => {
    const [searchParams] = useSearchParams();
    const sessionId = searchParams.get('session_id');
    const [verifying, setVerifying] = useState(true);
    const [success, setSuccess] = useState(false);
    const { setSubscription } = useAuth();
    const [error, setError] = useState(null);

    useEffect(() => {
        const verify = async () => {
            if (!sessionId) {
                setError("Invalid session ID. Please contact support.");
                setVerifying(false);
                return;
            }

            try {
                const response = await fetch(`${API_BASE_URL}/verify-payment/${sessionId}`, {
                    headers: {
                      'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                });
                const data = await response.json();
                
                if (data.status === 'success') {
                    setSuccess(true);
                    // Update frontend state for subscription
                    // Fetch full subscription to be sure
                    const subRes = await fetch(`${API_BASE_URL}/getSubscription`, {
                        credentials: 'include',
                        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
                    });
                    const subData = await subRes.json();
                    setSubscription(subData);
                } else {
                    setError(data.message || "Something went wrong during verification.");
                }
            } catch (err) {
                console.error("Verification error:", err);
                setError("Could not verify your payment. Please refresh the page.");
            } finally {
                setVerifying(false);
            }
        };

        verify();
    }, [sessionId, setSubscription]);

    if (verifying) {
        return (
            <div style={{ textAlign: 'center', margin: '100px auto', maxWidth: '400px' }}>
                <div style={{ animation: 'spin 2s linear infinite', color: '#2563eb', marginBottom: '20px' }}>
                   {/* Minimal Spinner */}
                   <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.2"/>
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 13.5997 2.37562 15.1116 3.04348 16.4522" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                   </svg>
                </div>
                <h2>Verifying Payment...</h2>
                <p>Please wait while we activate your premium account.</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ 
                minHeight: '100vh', 
                background: '#fef2f2',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px'
            }}>
                <div style={{
                    background: 'white',
                    padding: '40px',
                    borderRadius: '24px',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                    maxWidth: '400px',
                    textAlign: 'center',
                    border: '1px solid #fee2e2'
                }}>
                    <div style={{ color: '#ef4444', marginBottom: '16px' }}>
                        <svg size={64} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="8" x2="12" y2="12" />
                            <line x1="12" y1="16" x2="12" y2="16" />
                        </svg>
                    </div>
                    <h2 style={{ color: '#991b1b', marginBottom: '16px' }}>Payment Error</h2>
                    <p style={{ color: '#7f1d1d', marginBottom: '24px' }}>{error}</p>
                    <button 
                        onClick={() => window.location.hash = '/payment'} 
                        style={{
                            padding: '12px 24px',
                            background: '#ef4444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '12px',
                            fontWeight: '600',
                            cursor: 'pointer'
                        }}
                    >
                        Try Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(135deg, #f0fdf4 0%, #dcfce7 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <style>{`
                @keyframes scaleIn {
                    from { transform: scale(0.8); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .success-card {
                    animation: scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
            `}</style>
            <div className="success-card" style={{
                background: 'white',
                padding: '50px 40px',
                borderRadius: '32px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.08)',
                maxWidth: '500px',
                width: '100%',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{ 
                    position: 'absolute', 
                    top: '-50px', 
                    right: '-50px', 
                    width: '150px', 
                    height: '150px', 
                    background: '#f0fdf4', 
                    borderRadius: '50%',
                    zIndex: 0
                }} />

                <div style={{ position: 'relative', zIndex: 1 }}>
                    <div style={{ 
                        width: '80px', 
                        height: '80px', 
                        background: '#dcfce7', 
                        borderRadius: '50%', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center',
                        margin: '0 auto 30px',
                        color: '#16a34a'
                    }}>
                        <CheckCircle size={40} />
                    </div>
                    
                    <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1e293b', marginBottom: '16px' }}>
                        Payment Successful!
                    </h1>
                    <p style={{ color: '#64748b', marginBottom: '40px', fontSize: '18px', lineHeight: '1.6' }}>
                        Your premium subscription is now active. Thank you for choosing our Lawyer Management System.
                    </p>

                    <div style={{ 
                        display: 'grid', 
                        gridTemplateColumns: 'repeat(2, 1fr)', 
                        gap: '16px', 
                        marginBottom: '40px',
                        textAlign: 'left'
                    }}>
                        <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '16px' }}>
                            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Transaction status</div>
                            <div style={{ fontWeight: '700', color: '#1e293b', display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <ShieldCheck size={16} color="#16a34a" /> Complete
                            </div>
                        </div>
                        <div style={{ padding: '16px', background: '#f8fafc', borderRadius: '16px' }}>
                            <div style={{ fontSize: '12px', color: '#64748b', marginBottom: '4px' }}>Activation</div>
                            <div style={{ fontWeight: '700', color: '#1e293b' }}>Instant</div>
                        </div>
                    </div>

                    <button 
                        onClick={() => window.location.hash = '/app'} 
                        style={{
                            width: '100%',
                            padding: '18px',
                            background: '#16a34a',
                            color: 'white',
                            border: 'none',
                            borderRadius: '16px',
                            fontSize: '18px',
                            fontWeight: '700',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '12px',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: '0 10px 15px -3px rgba(22, 163, 74, 0.2)'
                        }}
                        onMouseOver={(e) => {
                            e.currentTarget.style.transform = 'translateY(-2px)';
                            e.currentTarget.style.background = '#15803d';
                        }}
                        onMouseOut={(e) => {
                            e.currentTarget.style.transform = 'translateY(0)';
                            e.currentTarget.style.background = '#16a34a';
                        }}
                    >
                        Success, Let's go!
                        <ArrowRight size={22} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
