// source for interactive backroung = https://codepen.io/chintuyadav/pen/WXypLR 
import React, { useEffect } from 'react';
import './Logo.css';
import logo from '/logo.png';

function Background() {
    useEffect(() => {
        const canvas = document.getElementById('test');
        const ctx = canvas.getContext('2d');
        const mouse = { x: 0, y: 0 };
        const colors = ['#b7a1ff', '#8b6eeb', '#684dc4', '#3f2d80', '#5844a7'];
        let particles = [];

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        function createParticles() {
            particles = [];
            // Increase the number of particles (e.g., from 50 to 100)
            for (let i = 0; i < 100; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    toX: Math.random() * 1 - 0.25, // Decrease the movement speed
                    toY: Math.random() * 0.5 - 0.25, // Decrease the movement speed
                    size: Math.random() * 7,
                    color: colors[Math.floor(Math.random() * colors.length)],
                });
            }
        }

        function updateParticles() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                const distanceFactor = Math.max(Math.min(15 - DistanceBetween(mouse, p) / 10, 10), 1);
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size * distanceFactor, 0, Math.PI * 2);
                ctx.fillStyle = p.color;
                ctx.fill();
                p.x += p.toX;
                p.y += p.toY;
                if (p.x > canvas.width || p.x < 0 || p.y > canvas.height || p.y < 0) {
                    p.x = Math.random() * canvas.width;
                    p.y = Math.random() * canvas.height;
                }
            }
            requestAnimationFrame(updateParticles);
        }

        function onMouseMove(e) {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }

        function DistanceBetween(p1, p2) {
            const dx = p2.x - p1.x;
            const dy = p2.y - p1.y;
            return Math.sqrt(dx * dx + dy * dy);
        }

        createParticles();
        updateParticles();

        canvas.addEventListener('mousemove', onMouseMove);

        return () => {
            canvas.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return <canvas id="test"></canvas>;
}


export default function Logo() {
    return (
        <div className='login-container'>
            <div className='bg'><Background /></div>
            <div className='part-1'>
                <img src={logo} className="logo-big" alt="logo" height='420' width='440' />
            </div>
        </div>
    );
}