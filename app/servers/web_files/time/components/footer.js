class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background-color: #1e293b;
          color: #e2e8f0;
          padding: 2rem 1rem;
          text-align: center;
        }
        
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .footer-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        
        .footer-link {
          color: #a5b4fc;
          text-decoration: none;
          transition: color 0.2s;
        }
        
        .footer-link:hover {
          color: #818cf8;
        }
        
        .copyright {
          font-size: 0.875rem;
          color: #94a3b8;
        }
      </style>
      
      <footer>
        <div class="footer-content">
          <div class="footer-links">
            <a href="#" class="footer-link">About</a>
            <a href="#" class="footer-link">Privacy</a>
            <a href="#" class="footer-link">Terms</a>
            <a href="#" class="footer-link">Contact</a>
          </div>
          <p class="copyright">© ${new Date().getFullYear()} TickTock Time Wizard. All rights reserved.</p>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);