class CustomHeader extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        header {
          background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
          color: white;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.5rem 2rem;
        }
        
        .logo {
          display: flex;
          align-items: center;
          font-weight: 700;
          font-size: 1.5rem;
          gap: 0.75rem;
        }
        
        .logo-icon {
          width: 2rem;
          height: 2rem;
        }
      </style>
      
      <header>
        <div class="header-content">
          <div class="logo">
            <i data-feather="clock" class="logo-icon"></i>
            <span>TickTock Time Wizard</span>
          </div>
        </div>
      </header>
    `;
  }
}

customElements.define('custom-header', CustomHeader);