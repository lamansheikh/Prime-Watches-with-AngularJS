import { Routes } from '@angular/router';
import { Home } from './components/pages/home/home';
import { About } from './components/pages/about/about';
import { Contact } from './components/pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about-us', component: About },
  { path: 'contact-us', component: Contact },
  
];


