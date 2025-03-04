<script>
    const currentYear = new Date().getFullYear();
</script>

<footer>
    <div class="footer-content">
        <div class="footer-links">
            <p><a href="/contact">Contact Us</a></p>
            <p><a href="/about">About Us</a></p>
        </div>
        
        <div class="social-links">
            <p>Follow us on: 
                <a href="https://facebook.com" target="_blank" rel="noopener">
                    <i class="fab fa-facebook"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener">
                    <i class="fab fa-instagram"></i>
                </a>
            </p>
        </div>
        
        <p class="copyright">© {currentYear} Paris Museums Guide - Data from parismusees.paris.fr</p>
    </div>
</footer>

<style>
    footer {
        background-color: #f8f9fa;
        padding: 2rem;
        margin-top: 3rem;
        text-align: center;
        border-top: 1px solid #eee;
    }
    
    .footer-content {
        max-width: 1200px;
        margin: 0 auto;
    }
    
    .footer-links {
        margin-bottom: 1rem;
    }
    
    .social-links a {
        color: #2c3e50;
        font-size: 1.2rem;
        margin: 0 0.5rem;
        transition: color 0.3s;
    }
    
    .social-links a:hover {
        color: #3498db;
    }
    
    .copyright {
        margin-top: 1rem;
        font-size: 0.9rem;
        color: #666;
    }
    
    @media (prefers-color-scheme: dark) {
        footer {
            background-color: #1e1e1e;
            border-top: 1px solid #333;
        }
        
        .social-links a {
            color: #f0f0f0;
        }
        
        .copyright {
            color: #aaa;
        }
    }
</style>