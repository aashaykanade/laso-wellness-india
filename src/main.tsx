import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Luxury type pairing — Cormorant Garamond (display) + Karla (body)
import '@fontsource/cormorant-garamond/300.css'
import '@fontsource/cormorant-garamond/400.css'
import '@fontsource/cormorant-garamond/500.css'
import '@fontsource/cormorant-garamond/400-italic.css'
import '@fontsource/cormorant-garamond/500-italic.css'
import '@fontsource/karla/300.css'
import '@fontsource/karla/400.css'
import '@fontsource/karla/500.css'

createRoot(document.getElementById("root")!).render(<App />);
