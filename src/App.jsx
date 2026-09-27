import { useMemo, useState } from 'react'
import './App.css'

const starterProducts = [
  { id: 1, name: 'Dell Latitude 5420', shop: 'Abbottabad Computers', location: 'Abbottabad', price: 85000, condition: 'Excellent', stock: 'Available', image: 'https://images.unsplash.com/photo-1593642532400-2682810df593?auto=format&fit=crop&w=300&q=80' },
  { id: 2, name: 'HP EliteBook 840 G5', shop: 'Tech Point', location: 'Mandian', price: 68000, condition: 'Good', stock: 'Available', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300&q=80' },
  { id: 3, name: 'Lenovo ThinkPad T480', shop: 'Laptop Zone', location: 'Jinnahabad', price: 72000, condition: 'Like New', stock: 'Sold out', image: '' },
]

const starterUsers = [
  { id: 1, name: 'Muhammad Hamza', email: 'admin@laptophub.com', role: 'Admin', phone: '+92 300 1234567', shop: '' },
  { id: 2, name: 'Ali Khan', email: 'ali@example.com', role: 'Shop owner', phone: '+92 312 9876543', shop: 'Tech Point', location: 'Mandian, Abbottabad' },
  { id: 3, name: 'Ayesha Malik', email: 'ayesha@example.com', role: 'Customer', phone: '+92 333 4567890', shop: '' },
]

const defaultAccounts = [
  { email: 'admin@laptophub.com', password: 'admin123', name: 'Muhammad Hamza', role: 'admin' },
  { email: 'ali@example.com', password: 'shop123', name: 'Ali Khan', role: 'shop_owner', shop: 'Tech Point', location: 'Mandian, Abbottabad' },
  { email: 'ayesha@example.com', password: 'customer123', name: 'Ayesha Malik', role: 'customer' },
]

const money = (value) => `₨${Number(value).toLocaleString('en-PK')}`
const readStore = (key, fallback) => JSON.parse(localStorage.getItem(key) || 'null') || fallback

const publicFormFields = {
  contact: [['name', 'Full name', 'text'], ['email', 'Email address', 'email'], ['message', 'Message', 'textarea']],
  search: [['keyword', 'Laptop or brand', 'text'], ['location', 'Preferred location', 'text'], ['budget', 'Maximum budget (₨)', 'number']],
  inquiry: [['name', 'Full name', 'text'], ['email', 'Email address', 'email'], ['laptop', 'Laptop model', 'text'], ['message', 'Your inquiry', 'textarea']],
  feedback: [['name', 'Full name', 'text'], ['email', 'Email address', 'email'], ['rating', 'Rating', 'select']],
  shop: [['name', 'Owner name', 'text'], ['email', 'Email address', 'email'], ['shop', 'Shop name', 'text'], ['location', 'Shop location', 'text']],
  request: [['name', 'Full name', 'text'], ['email', 'Email address', 'email'], ['laptop', 'Requested laptop', 'text'], ['budget', 'Budget (₨)', 'number']],
  sell: [['name', 'Seller name', 'text'], ['email', 'Email address', 'email'], ['laptop', 'Laptop model', 'text'], ['price', 'Expected price (₨)', 'number']],
}

function PublicForm({ type, onClose }) {
  const titles = { contact: 'Contact us', search: 'Find a laptop', inquiry: 'Laptop inquiry', feedback: 'Customer feedback', shop: 'Register your shop', request: 'Request a laptop', sell: 'Sell your laptop' }
  const submit = (event) => { event.preventDefault(); event.currentTarget.reset(); window.alert(`${titles[type]} form submitted successfully.`) }
  return <div className="modal-backdrop"><div className="react-modal public-form-modal"><div className="modal-heading"><h3>{titles[type]}</h3><button onClick={onClose}>×</button></div><form className="modal-form" onSubmit={submit}>{publicFormFields[type].map(([name, label, inputType]) => <label key={name}>{label}{inputType === 'textarea' ? <textarea name={name} rows="4" required /> : inputType === 'select' ? <select name={name} required><option value="">Select rating</option><option>5 - Excellent</option><option>4 - Very good</option><option>3 - Good</option><option>2 - Needs improvement</option><option>1 - Poor</option></select> : <input name={name} type={inputType} required />}</label>)}<button className="btn btn-primary" type="submit">Submit form</button></form></div></div>
}

function Home({ onLogin, onRegister, onAdmin }) {
  const [activeForm, setActiveForm] = useState(null)
  return <><nav className="navbar navbar-expand-lg navbar-light fixed-top"><div className="container">
    <a className="navbar-brand fw-bold" href="#home">Laptop<span>Hub</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainMenu"><span className="navbar-toggler-icon" /></button>
    <div className="collapse navbar-collapse" id="mainMenu"><ul className="navbar-nav ms-auto align-items-lg-center gap-lg-3">
      <li className="nav-item"><a className="nav-link active" href="#home">Home</a></li><li className="nav-item"><a className="nav-link" href="#laptops">Laptops</a></li>      <li className="nav-item"><a className="nav-link" href="#offers">What We Offer</a></li><li className="nav-item"><a className="nav-link" href="#forms">Forms</a></li><li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
      <li className="nav-item"><button className="btn btn-outline-primary nav-button" onClick={onLogin}>Login</button></li>
      <li className="nav-item"><button className="btn btn-primary nav-button" onClick={onRegister}>Registration</button></li>
      <li className="nav-item"><button className="btn btn-light nav-button" onClick={onAdmin}>Admin</button></li>
    </ul></div>
  </div></nav>
  <header className="hero" id="home"><div className="container"><div className="row align-items-center g-5"><div className="col-lg-6">
    <p className="eyebrow">SMART CHOICE. BETTER VALUE.</p><h1>Find your perfect <span>laptop</span> for less.</h1><p className="hero-text">Reliable second-hand laptops, carefully checked and ready for your next idea, class or business.</p>
    <div className="d-flex flex-wrap gap-3"><a href="#laptops" className="btn btn-primary btn-lg">Explore Laptops</a><a href="#offers" className="btn btn-outline-primary btn-lg">Why LaptopHub?</a></div>
    <div className="hero-stats"><div><strong>500+</strong><small>Laptops sold</small></div><div><strong>4.9/5</strong><small>Happy customers</small></div><div><strong>30 days</strong><small>Warranty included</small></div></div>
  </div><div className="col-lg-6"><div className="hero-image"><img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=1000&q=85" alt="Open laptop on a desk" /><div className="price-badge"><small>Starting from</small><strong>₨24,900</strong></div></div></div></div></div></header>
  <section className="section-space" id="laptops"><div className="container"><div className="section-heading mb-4"><p className="eyebrow">OUR COLLECTION</p><h2>Popular laptops</h2></div><div className="row g-4">
    {starterProducts.map((product) => <div className="col-md-4" key={product.id}><article className="public-product"><img src={product.image || 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=500&q=80'} alt={product.name} /><div><p className="eyebrow">{product.shop}</p><h3>{product.name}</h3><p>{product.condition} · {product.location}</p><strong>{money(product.price)}</strong></div></article></div>)}
  </div></div></section>
  <section className="offers section-space" id="offers"><div className="container"><div className="text-center section-heading mb-5"><p className="eyebrow">WHY CHOOSE US</p><h2>More value with every laptop</h2><p>We make buying a used laptop simple, safe and stress-free.</p></div><div className="row g-4">{[['✓', 'Quality checked', 'Every laptop is tested, cleaned and checked before delivery.'], ['↻', '30-day warranty', 'Shop with confidence and get support when you need it.'], ['♡', 'Honest prices', 'Get dependable technology at prices that are fair and transparent.']].map(([icon, title, text]) => <div className="col-md-4" key={title}><div className="offer-card"><div className="icon">{icon}</div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>
  <section className="section-space forms-section" id="forms"><div className="container"><div className="section-heading mb-4"><p className="eyebrow">LAPTOPHUB FORMS</p><h2>How can we help?</h2><p>Choose a form to contact us, find a laptop or join our seller community.</p></div><div className="row g-3">{[['contact', 'Contact us'], ['search', 'Find a laptop'], ['inquiry', 'Laptop inquiry'], ['feedback', 'Customer feedback'], ['shop', 'Register your shop'], ['request', 'Request a laptop'], ['sell', 'Sell your laptop']].map(([type, label]) => <div className="col-sm-6 col-lg-4" key={type}><button className="form-card" onClick={() => setActiveForm(type)}>{label}<span>→</span></button></div>)}</div></div></section>
  <footer id="contact"><div className="container d-flex flex-wrap justify-content-between align-items-center gap-3"><div><a className="navbar-brand fw-bold" href="#home">Laptop<span>Hub</span></a><p className="mb-0 mt-2">Better laptops. Better value.</p></div><div className="footer-links"><a href="#home">Home</a><a href="#laptops">Laptops</a><a href="#offers">Services</a><a href="mailto:hello@laptophub.com">Email us</a></div></div><div className="container copyright">© 2026 LaptopHub. All rights reserved.</div></footer>
  {activeForm && <PublicForm type={activeForm} onClose={() => setActiveForm(null)} />}
  </>
}

function Auth({ onLogin, initialMode = 'login', adminOnly = false }) {
  const [mode, setMode] = useState(initialMode)
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'customer', shop: '', location: '', phone: '' })
  const [error, setError] = useState('')
  const accounts = readStore('laptopHubReactAccounts', defaultAccounts)
  const update = (event) => setForm({ ...form, [event.target.name]: event.target.value })
  const submit = (event) => {
    event.preventDefault()
    if (mode === 'login') {
      const account = accounts.find((item) => item.email === form.email && item.password === form.password)
      if (!account) return setError('The email or password is incorrect.')
      if (adminOnly && account.role !== 'admin') return setError('This form is only for the website administrator.')
      if (account.role !== 'admin') return setError(`Welcome back, ${account.name}. Your ${account.role === 'shop_owner' ? 'shop owner' : 'customer'} account is active. Please use the admin button for the admin portal.`)
      localStorage.setItem('laptopHubReactSession', JSON.stringify(account)); onLogin(account); return
    }
    if (accounts.some((item) => item.email === form.email)) return setError('An account with this email already exists. Please login instead.')
    if (!form.name || (form.role === 'shop_owner' && (!form.shop || !form.location))) return setError('Please complete all required account and shop details.')
    const account = { ...form }
    localStorage.setItem('laptopHubReactAccounts', JSON.stringify([...accounts, account]))
    const users = readStore('laptopHubReactUsers', starterUsers)
    localStorage.setItem('laptopHubReactUsers', JSON.stringify([...users, { ...account, id: Date.now(), role: form.role === 'shop_owner' ? 'Shop owner' : 'Customer' }]))
    setError(`${form.role === 'shop_owner' ? 'Shop owner and shop' : 'Customer'} registration successful. You can now login.`); setMode('login')
  }
  return <main className="react-auth"><div className="react-auth-card"><div className="auth-card-top"><a className="navbar-brand fw-bold" href="#" onClick={(e) => { e.preventDefault(); onLogin(null) }}>Laptop<span>Hub</span></a><button className="auth-back" type="button" onClick={() => onLogin(null)}>← Back</button></div><p className="eyebrow mt-5">{adminOnly ? 'ADMIN PORTAL' : 'LAPTOPHUB ACCOUNT'}</p><h1>{mode === 'login' ? (adminOnly ? 'Admin login' : 'Welcome back') : 'Join LaptopHub'}</h1><p className="muted">{mode === 'login' ? (adminOnly ? 'Sign in to manage products, shops and members.' : 'Login to your LaptopHub account.') : 'Register as a customer or shop owner.'}</p>{error && <div className={`alert ${error.includes('successful') ? 'alert-success' : 'alert-danger'}`}>{error}</div>}<form onSubmit={submit}>
    {mode === 'register' && <><label>Full name<input name="name" value={form.name} onChange={update} required /></label><label>Account type<select name="role" value={form.role} onChange={update}><option value="customer">Customer</option><option value="shop_owner">Shop owner</option></select></label>{form.role === 'shop_owner' && <div className="shop-register"><label>Shop name<input name="shop" value={form.shop} onChange={update} /></label><label>Shop location<input name="location" value={form.location} onChange={update} /></label><label>Shop phone<input name="phone" value={form.phone} onChange={update} /></label></div>}</>}
    <label>Email address<input name="email" type="email" value={form.email} onChange={update} required /></label><label>Password<input name="password" type="password" value={form.password} onChange={update} required /></label><button className="btn btn-primary w-100" type="submit">{mode === 'login' ? 'Login to dashboard' : 'Create account'}</button></form>{!adminOnly && <button className="auth-switch" onClick={() => { setMode(mode === 'login' ? 'register' : 'login'); setError('') }}>{mode === 'login' ? 'Need an account? Register here' : 'Already registered? Login here'}</button>}<p className="demo-note">{adminOnly ? <>Demo admin: <strong>admin@laptophub.com</strong> / <strong>admin123</strong></> : 'Use your registered email and password to continue.'}</p></div></main>
}

function Admin({ user, onLogout }) {
  const [section, setSection] = useState('overview')
  const [products, setProducts] = useState(() => readStore('laptopHubReactProducts', starterProducts))
  const [users, setUsers] = useState(() => readStore('laptopHubReactUsers', starterUsers))
  const [query, setQuery] = useState('')
  const [modal, setModal] = useState(null)
  const [editing, setEditing] = useState(null)
  const shopOwners = users.filter((item) => item.role === 'Shop owner').length
  const customers = users.filter((item) => item.role === 'Customer').length
  const shops = users.filter((item) => item.shop).length
  const visibleProducts = useMemo(() => products.filter((p) => `${p.name} ${p.shop} ${p.location}`.toLowerCase().includes(query.toLowerCase())), [products, query])
  const visibleUsers = useMemo(() => users.filter((item) => `${item.name} ${item.email} ${item.shop || ''}`.toLowerCase().includes(query.toLowerCase())), [users, query])
  const saveProducts = (next) => { setProducts(next); localStorage.setItem('laptopHubReactProducts', JSON.stringify(next)) }
  const saveUsers = (next) => { setUsers(next); localStorage.setItem('laptopHubReactUsers', JSON.stringify(next)) }
  const submitProduct = (event) => { event.preventDefault(); const data = Object.fromEntries(new FormData(event.currentTarget)); const next = editing ? products.map((p) => p.id === editing.id ? { ...editing, ...data, price: Number(data.price) } : p) : [...products, { ...data, id: Date.now(), price: Number(data.price) }]; saveProducts(next); setModal(null); setEditing(null) }
  const submitUser = (event) => { event.preventDefault(); const data = Object.fromEntries(new FormData(event.currentTarget)); const next = users.map((item) => item.id === editing.id ? { ...item, ...data } : item); saveUsers(next); setModal(null); setEditing(null) }
  const title = section[0].toUpperCase() + section.slice(1)
  return <div className="admin-layout"><aside className="admin-sidebar"><a className="navbar-brand fw-bold mb-5" href="#" onClick={(e) => { e.preventDefault(); onLogout() }}>Laptop<span>Hub</span></a><small>MAIN MENU</small>{[['overview', '▦ Overview'], ['products', '▣ Products'], ['members', '♙ Members']].map(([key, label]) => <button className={section === key ? 'side-link active' : 'side-link'} key={key} onClick={() => { setSection(key); setQuery('') }}>{label}</button>)}<a className="side-link" href="#home" onClick={onLogout}>↗ View website</a><div className="admin-sidebar-bottom"><small>Logged in as</small><strong>{user.name}</strong><button className="logout-link" onClick={onLogout}>⇥ Log out</button></div></aside>
    <main className="admin-main"><header className="admin-topbar"><div><p className="eyebrow mb-1">LAPTOPHUB ADMIN</p><h2>{title}</h2></div><span className="avatar">{user.name.charAt(0)}</span></header><div className="admin-content">
      {section === 'overview' && <><div className="welcome-banner"><p className="eyebrow">WEBSITE OWNER DASHBOARD</p><h1>Welcome back, {user.name.split(' ')[0]}.</h1><p>Monitor every shop, seller and customer on LaptopHub.</p></div><div className="stats-grid">{[['▣', 'Total products', products.length], ['✓', 'Available stock', products.filter((p) => p.stock === 'Available').length], ['♙', 'Shop owners', shopOwners], ['♙', 'Customers', customers], ['⌂', 'Registered shops', shops], ['₨', 'Stock value', money(products.reduce((sum, p) => sum + Number(p.price), 0))]].map(([icon, label, value]) => <div className="stat-card" key={label}><span className="stat-icon blue">{icon}</span><small>{label}</small><strong>{value}</strong><span className="stat-foot">Live platform data</span></div>)}</div><div className="admin-panel"><div className="panel-heading"><div><h3>Recently added laptops</h3><p>All shops listed on LaptopHub</p></div><button className="btn btn-sm btn-primary" onClick={() => setSection('products')}>View all</button></div><TableProducts products={products.slice(-5).reverse()} onEdit={() => {}} /></div></>}
      {section === 'products' && <><div className="section-intro"><div><p className="eyebrow">INVENTORY</p><h1>Product management</h1><p>Add, update or remove laptops from all registered shops.</p></div><button className="btn btn-primary" onClick={() => { setEditing(null); setModal('product') }}>+ Add product</button></div><div className="admin-panel"><div className="toolbar"><input className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search laptop or shop..." /></div><TableProducts products={visibleProducts} onEdit={(product) => { setEditing(product); setModal('product') }} onDelete={(id) => saveProducts(products.filter((p) => p.id !== id))} /></div></>}
      {section === 'members' && <><div className="section-intro"><div><p className="eyebrow">COMMUNITY</p><h1>Members and shops</h1><p>Review registered shop owners and customers.</p></div></div><div className="admin-panel"><div className="toolbar"><input className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search member or shop..." /></div><div className="table-responsive"><table className="table align-middle"><thead><tr><th>Member</th><th>Contact</th><th>Shop</th><th>Role</th><th>Actions</th></tr></thead><tbody>{visibleUsers.map((item) => <tr key={item.id}><td><strong>{item.name}</strong></td><td>{item.email}<span className="product-meta">{item.phone}</span></td><td>{item.shop || 'No shop'}<span className="product-meta">{item.location}</span></td><td><span className="status available">{item.role}</span></td><td><button className="action-btn" onClick={() => { setEditing(item); setModal('user') }}>✎</button>{item.role !== 'Admin' && <button className="action-btn delete" onClick={() => saveUsers(users.filter((u) => u.id !== item.id))}>⌫</button>}</td></tr>)}</tbody></table></div></div></>}
    </div></main>
    {modal === 'product' && <Modal title={editing ? 'Update product' : 'Add product'} onClose={() => setModal(null)}><form onSubmit={submitProduct} className="modal-form">{['name', 'shop', 'location', 'condition', 'price'].map((field) => <label key={field}>{field[0].toUpperCase() + field.slice(1)}<input name={field} type={field === 'price' ? 'number' : 'text'} defaultValue={editing?.[field] || ''} required /></label>)}<select name="stock" defaultValue={editing?.stock || 'Available'}><option>Available</option><option>Sold out</option></select><button className="btn btn-primary" type="submit">Save product</button></form></Modal>}
    {modal === 'user' && <Modal title="Update member" onClose={() => setModal(null)}><form onSubmit={submitUser} className="modal-form">{['name', 'email', 'phone', 'shop', 'location'].map((field) => <label key={field}>{field[0].toUpperCase() + field.slice(1)}<input name={field} defaultValue={editing?.[field] || ''} /></label>)}<button className="btn btn-primary" type="submit">Save member</button></form></Modal>}
  </div>
}

function TableProducts({ products, onEdit, onDelete }) {
  return <div className="table-responsive"><table className="table align-middle"><thead><tr><th>Laptop</th><th>Shop / Location</th><th>Condition</th><th>Price</th><th>Status</th><th>Actions</th></tr></thead><tbody>{products.map((p) => <tr key={p.id}><td><div className="product-cell">{p.image ? <img src={p.image} alt="" /> : <span className="product-placeholder">▣</span>}<strong>{p.name}</strong></div></td><td>{p.shop}<span className="product-meta">{p.location}</span></td><td>{p.condition}</td><td><strong>{money(p.price)}</strong></td><td><span className={`status ${p.stock === 'Available' ? 'available' : 'sold'}`}>{p.stock}</span></td><td><button className="action-btn" onClick={() => onEdit(p)}>✎</button>{onDelete && <button className="action-btn delete" onClick={() => onDelete(p.id)}>⌫</button>}</td></tr>)}</tbody></table>{!products.length && <div className="empty-state">No products found.</div>}</div>
}

function Modal({ title, onClose, children }) { return <div className="modal-backdrop"><div className="react-modal"><div className="modal-heading"><h3>{title}</h3><button onClick={onClose}>×</button></div>{children}</div></div> }

function App() {
  const [view, setView] = useState('home')
  const [user, setUser] = useState(() => JSON.parse(localStorage.getItem('laptopHubReactSession') || 'null'))
  const openAdmin = () => setView(user?.role === 'admin' ? 'admin' : 'admin-auth')
  const logout = () => { localStorage.removeItem('laptopHubReactSession'); setUser(null); setView('home') }
  if (view === 'admin' && user) return <Admin user={user} onLogout={logout} />
  if (view === 'auth') return <Auth initialMode="login" onLogin={(account) => { if (account) { setUser(account); setView('admin') } else setView('home') }} />
  if (view === 'register') return <Auth initialMode="register" onLogin={(account) => { if (account) { setUser(account); setView('admin') } else setView('home') }} />
  if (view === 'admin-auth') return <Auth adminOnly onLogin={(account) => { if (account) { setUser(account); setView('admin') } else setView('home') }} />
  return <Home onLogin={() => setView('auth')} onRegister={() => setView('register')} onAdmin={openAdmin} />
}

export default App
