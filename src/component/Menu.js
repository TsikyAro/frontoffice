
import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Badge } from 'primereact/badge';
import { Avatar } from 'primereact/avatar'; 
import avatar from '../assets/img/landing.jpg' 

export default function Menu() {
    const token = localStorage.getItem('token');
    const itemRenderer = (item) => (
        <a href={item.lien} className="flex align-items-center p-menuitem-link">
            <span className={item.icon} />
            <span className="mx-2">{item.label}</span>
            {item.badge && <Badge className="ml-auto" value={item.badge} />}
            {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
        </a>
    );
    const items = [
        {
            label: 'Acceuil',
            icon: 'pi pi-home',
            lien:'/home',
            template: itemRenderer
        },
        {
            label: 'Annonce',
            icon: 'pi pi-star',
            lien:'formulaire',
            template: itemRenderer
        },
        ...(token ? [{
            label: 'Message',
            icon: 'pi pi-envelope',
            badge:  3,
            template: itemRenderer
        }] : []),
        ...(token ? [] : [{
            label: 'Connexion',
            icon: 'pi pi-sign-in',
            lien: '/login', // Redirige vers la page de connexion
            template: itemRenderer
        }])
    ];

    const start = "Occasion'Auto  ";
    const end = token ? (
        <div className="flex align-items-center gap-2">
            <Avatar image={avatar} shape="circle"/>
        </div>
    ) : null;

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}
        
        