import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import API_BASE_URL from './config';
import { useAuth } from './AuthContext';
import { CreditCard, CheckCircle, Shield, Zap } from 'lucide-react';
import './Form.css'; // Reusing some base styles

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder_replace_me');

const Payment = () => {
    const { user, subscription } = useAuth();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleCheckout = async () => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch(`${API_BASE_URL}/create-checkout-session`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                },
                credentials: 'include'
            });

            const data = await response.json();
            
            if (response.status !== 200 || data.status === 'error') {
                throw new Error(data.message || 'Failed to create payment session. Check server logs.');
            }

            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({
                sessionId: data.id,
            });

            if (error) {
                throw error;
            }
        } catch (err) {
            console.error("Payment error:", err);
            setError(err.message);
            setLoading(false);
        }
    };

    if (subscription?.status === 'Active') {
        return (
            <div className="form-container" style={{ maxWidth: '600px', margin: '50px auto', textAlign: 'center' }}>
                <CheckCircle size={64} color="#10b981" style={{ marginBottom: '20px' }} />
                <h2>Subscription Active</h2>
                <p>You already have an active Premium subscription until {new Date(subscription.renewal_date).toLocaleDateString()}.</p>
                <button onClick={() => window.location.hash = '/app'} className="submit-btn" style={{ marginTop: '20px' }}>
                    Go to Dashboard
                </button>
            </div>
        );
    }

    return (
        <div className="payment-page" style={{ 
            minHeight: '100vh', 
            background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px'
        }}>
            <div className="payment-card" style={{
                background: 'white',
                padding: '40px',
                borderRadius: '24px',
                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.1)',
                maxWidth: '500px',
                width: '100%',
                textAlign: 'center'
            }}>
                <div style={{ 
                    width: '70px', 
                    height: '70px', 
                    background: '#eff6ff', 
                    borderRadius: '20px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    margin: '0 auto 24px',
                    color: '#2563eb'
                }}>
                    <Zap size={32} />
                </div>
                
                <h1 style={{ fontSize: '28px', fontWeight: '800', color: '#1e293b', marginBottom: '12px' }}>
                    Activate Premium Access
                </h1>
                <p style={{ color: '#64748b', marginBottom: '32px', fontSize: '16px' }}>
                    Unlock full access to the Lawyer Management System and start managing your cases professionally.
                </p>

                <div style={{ 
                    background: '#f8fafc', 
                    borderRadius: '16px', 
                    padding: '24px', 
                    marginBottom: '32px',
                    textAlign: 'left',
                    border: '1px solid #e2e8f0'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                        <span style={{ fontWeight: '600', color: '#475569' }}>Professional Plan</span>
                        <span style={{ fontSize: '24px', fontWeight: '800', color: '#1e293b' }}>$50.00</span>
                    </div>
                    <div style={{ fontSize: '14px', color: '#64748b' }}>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                            <CheckCircle size={16} color="#10b981" style={{ marginRight: '10px' }} /> Unlimited Cases & Clients
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                            <CheckCircle size={16} color="#10b981" style={{ marginRight: '10px' }} /> Lawyer Assignment & Tracking
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                            <CheckCircle size={16} color="#10b981" style={{ marginRight: '10px' }} /> Document Management
                        </div>
                    </div>
                </div>

                {error && <div style={{ color: '#ef4444', marginBottom: '16px', fontSize: '14px' }}>{error}</div>}

                <button 
                    onClick={handleCheckout} 
                    disabled={loading}
                    style={{
                        width: '100%',
                        padding: '16px',
                        background: '#2563eb',
                        color: 'white',
                        border: 'none',
                        borderRadius: '12px',
                        fontSize: '16px',
                        fontWeight: '600',
                        cursor: loading ? 'not-allowed' : 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '10px',
                        transition: 'all 0.2s',
                        boxShadow: '0 4px 6px -1px rgba(37, 99, 235, 0.2)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.background = '#1d4ed8'}
                    onMouseOut={(e) => e.currentTarget.style.background = '#2563eb'}
                >
                    {loading ? 'Processing...' : (
                        <>
                            <CreditCard size={20} />
                            Pay Securely with Stripe
                        </>
                    )}
                </button>

                <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', color: '#94a3b8', fontSize: '12px' }}>
                    <Shield size={14} />
                    Secure encrypted payments via Stripe
                </div>
            </div>
        </div>
    );
};

export default Payment;
