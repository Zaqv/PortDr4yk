(function() {
    var known = ['home','vfx','proj1','proj2','proj3','proj4','proj5','proj6','proj7','secret','terminal'];
    var parts = window.location.pathname.split('/').filter(Boolean);
    var base = [];
    for (var i = 0; i < parts.length; i++) {
        if (known.includes(parts[i])) break;
        base.push(parts[i]);
    }
    window.SITE_BASE = base.length ? '/' + base.join('/') : '';
})();

const ROUTES = {
    'home':       '/',
    'vfx':        '/vfx',
    'proj1':      '/vfx/proj1',
    'proj2':      '/vfx/proj2',
    'proj3':      '/vfx/proj3',
    'proj4':      '/vfx/proj4',
    'proj5':      '/vfx/proj5',
    'proj6':      '/vfx/proj6',
    'proj7':      '/vfx/proj7',
    'proj_secret':'/secret',
    'terminal':   '/terminal'
};

const REVERSE_ROUTES = {};
for (const [page, path] of Object.entries(ROUTES)) {
    REVERSE_ROUTES[path] = page;
}

function getRouteUrl(pageName) {
    return window.SITE_BASE + (ROUTES[pageName] || '/');
}

function getPageFromCurrentPath() {
    const path = window.location.pathname.slice(window.SITE_BASE.length) || '/';
    return REVERSE_ROUTES[path] || 'home';
}

const STRINGS = {
    en: {
        "nav.home": "Home", "nav.vfx": "VFX",
        "hero.subtitle": "Roblox Studio Developer • VFX Artist",
        "hero.scroll": "Scroll down to explore",
        "home.explore": "Explore My Work",
        "card.vfx.desc": "Explosions, slashes, flashes and visual effects.",
        "card.vfx.tag": "Visual Effects",
        "vfx.desc": "Explosions, slashes, flashes and visual effects crafted with Roblox Studio.",
        "vfx.disclaimer": "The videos below may take a moment to load — this is normal. Please be patient while they buffer. Thank you!",
        "btn.view": "View Project", "btn.back": "< BACK",
        "proj1.title":"Light Explosion","proj1.desc":"Bright light explosion with radiant energy burst.","proj1.detail":"Bright light explosion with radiant energy that illuminates the entire area.","proj1.f1":"Radiant light burst","proj1.f2":"Dynamic lighting","proj1.f3":"Energy particles",
        "proj2.title":"Blue Explosion","proj2.desc":"Intense blue energy explosion with shockwave rings.","proj2.detail":"Intense blue energy explosion with expanding shockwave rings.","proj2.f1":"Blue energy core","proj2.f2":"Shockwave rings","proj2.f3":"Particle burst",
        "proj3.title":"Pixel Slash","proj3.desc":"Blue slash with pixelated texture effect.","proj3.detail":"Blue slash with pixelated texture for a retro game feel.","proj3.f1":"Pixelated texture","proj3.f2":"Blue energy trail","proj3.f3":"Retro style",
        "proj4.title":"Blue Slash","proj4.desc":"Clean blue energy slash with trailing particles.","proj4.detail":"Clean blue energy slash with trailing particles.","proj4.f1":"Blue energy arc","proj4.f2":"Particle trail","proj4.f3":"Smooth animation",
        "proj5.title":"Big Explosion","proj5.desc":"Massive explosion with screen shake and debris.","proj5.detail":"Massive explosion with debris, smoke, and screen shake.","proj5.f1":"Large blast radius","proj5.f2":"Debris particles","proj5.f3":"Screen shake",
        "proj6.title":"Smooth Explosion","proj6.desc":"Fluid explosion with smooth particle transitions.","proj6.detail":"Fluid explosion with smooth particle transitions and fire.","proj6.f1":"Smooth particles","proj6.f2":"Fire effects","proj6.f3":"Seamless loop",
        "proj7.title":"Black Flash (Kokusen)","proj7.desc":"JJK-style Black Flash with dark energy burst.","proj7.detail":"JJK-inspired Black Flash with dark energy distortion.","proj7.f1":"Dark energy burst","proj7.f2":"Space distortion","proj7.f3":"Impact flash",
        "footer.by": "Portfolio by", "footer.credits": "Credits to", "footer.for": "for organizing the repository on GitHub and contributing to the visual of this site."
    },
    pt: {
        "nav.home": "Início", "nav.vfx": "VFX",
        "hero.subtitle": "Desenvolvedor Roblox Studio • Artista VFX",
        "hero.scroll": "Role para explorar",
        "home.explore": "Explore meu trabalho",
        "card.vfx.desc": "Explosões, cortes, flashes e efeitos visuais.",
        "card.vfx.tag": "Efeitos Visuais",
        "vfx.desc": "Explosões, cortes, flashes e efeitos visuais criados no Roblox Studio.",
        "vfx.disclaimer": "Os vídeos abaixo podem demorar um momento para carregar — isso é normal. Por favor, tenha paciência enquanto carregam. Obrigado!",
        "btn.view": "Ver Projeto", "btn.back": "< VOLTAR",
        "proj1.title":"Explosão de Luz","proj1.desc":"Explosão de luz brilhante com liberação de energia radiante.","proj1.detail":"Explosão de luz brilhante com energia radiante que ilumina toda a área.","proj1.f1":"Explosão de luz radiante","proj1.f2":"Iluminação dinâmica","proj1.f3":"Partículas de energia",
        "proj2.title":"Explosão Azul","proj2.desc":"Explosão de energia azul intensa com anéis de onda de choque.","proj2.detail":"Explosão de energia azul intensa com anéis de choque em expansão.","proj2.f1":"Núcleo de energia azul","proj2.f2":"Anéis de choque","proj2.f3":"Explosão de partículas",
        "proj3.title":"Corte Pixelado","proj3.desc":"Corte azul com efeito de textura pixelada.","proj3.detail":"Corte azul com textura pixelada para visual retrô.","proj3.f1":"Textura pixelada","proj3.f2":"Rastro de energia azul","proj3.f3":"Estilo retrô",
        "proj4.title":"Corte Azul","proj4.desc":"Corte de energia azul limpo com partículas de rastro.","proj4.detail":"Corte de energia azul limpo com partículas de rastro.","proj4.f1":"Arco de energia azul","proj4.f2":"Rastro de partículas","proj4.f3":"Animação suave",
        "proj5.title":"Grande Explosão","proj5.desc":"Explosão massiva com tremor de tela e detritos.","proj5.detail":"Explosão massiva com detritos, fumaça e tremor de tela.","proj5.f1":"Grande raio de explosão","proj5.f2":"Partículas de detritos","proj5.f3":"Tremor de tela",
        "proj6.title":"Explosão Suave","proj6.desc":"Explosão fluida com transições de partículas suaves.","proj6.detail":"Explosão fluida com transições de partículas suaves e fogo.","proj6.f1":"Partículas suaves","proj6.f2":"Efeitos de fogo","proj6.f3":"Loop sem cortes",
        "proj7.title":"Black Flash (Kokusen)","proj7.desc":"Black Flash estilo JJK com explosão de energia sombria.","proj7.detail":"Black Flash inspirado em JJK com distorção de energia sombria.","proj7.f1":"Explosão de energia sombria","proj7.f2":"Distorção espacial","proj7.f3":"Flash de impacto",
        "footer.by": "Portfólio por", "footer.credits": "Créditos a", "footer.for": "por organizar o repositório no GitHub e contribuir no visual deste site."
    }
};

let lang = localStorage.getItem('dr4yk_lang') || 'en';
let busy = false;

function t(k) { return STRINGS[lang][k] || STRINGS['en'][k] || k; }

function applyLang(l) {
    lang = l;
    localStorage.setItem('dr4yk_lang', l);
    
    // Animate text transitions
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const k = el.getAttribute('data-i18n');
        if (k) {
            el.classList.remove('lang-transition-in');
            el.classList.add('lang-transition-out');
            setTimeout(() => {
                el.textContent = t(k);
                el.classList.remove('lang-transition-out');
                el.classList.add('lang-transition-in');
                setTimeout(() => {
                    el.classList.remove('lang-transition-in');
                }, 300);
            }, 300);
        }
    });
    
    document.getElementById('btnEn').classList.toggle('active', l === 'en');
    document.getElementById('btnPt').classList.toggle('active', l === 'pt');
    document.documentElement.lang = l === 'pt' ? 'pt-BR' : 'en';
    
    setTimeout(() => {
        document.getElementById('footerCredits1').innerHTML =
            t('footer.credits') + ' <a class="gothic-link" href="https://guns.lol/zaqv43" target="_blank" rel="noopener">Zaqv43</a> ' + t('footer.for');
        document.getElementById('footerCredits2').innerHTML =
            t('footer.by') + ' <a class="gothic-link" href="https://www.roblox.com/users/5362892693/profile" target="_blank" rel="noopener">Dr4yk</a>';
    }, 300);
}

function setLang(l) { applyLang(l); }

const overlay = document.getElementById('overlay');

function showOverlay(cb) {
    overlay.classList.add('blocking');
    overlay.style.transition = 'opacity 0.2s ease';
    overlay.style.opacity = '1';
    setTimeout(cb, 210);
}

function hideOverlay() {
    overlay.style.transition = 'opacity 0.28s ease';
    overlay.style.opacity = '0';
    setTimeout(() => { overlay.classList.remove('blocking'); busy = false; }, 300);
}

function staggerCards(pageEl) {
    const cards = pageEl.querySelectorAll('.card-animated');
    cards.forEach((c) => {
        c.classList.remove('card-visible');
        c.style.transitionDelay = '0s';
    });
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            cards.forEach((c, i) => {
                c.style.transitionDelay = (i * 0.07) + 's';
                c.classList.add('card-visible');
            });
        });
    });
}

function navigateTo(pageName, pushState = true) {
    if (busy) return;
    busy = true;
    document.getElementById('navLinks').classList.remove('open');

    if (pushState) {
        history.pushState({ page: pageName }, '', getRouteUrl(pageName));
    }

    showOverlay(() => {
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        const target = document.getElementById(pageName);
        if (target) {
            target.classList.add('active');
            staggerCards(target);
        }
        window.scrollTo({ top: 0, behavior: 'instant' });

        document.querySelectorAll('.nav-link').forEach(link => {
            const key = link.getAttribute('data-i18n');
            link.classList.toggle('active',
                (pageName === 'home' && key === 'nav.home') ||
                (pageName === 'vfx'  && key === 'nav.vfx')
            );
        });

        hideOverlay();
    });
}

window.addEventListener('popstate', (e) => {
    const page = (e.state && e.state.page) ? e.state.page : getPageFromCurrentPath();
    navigateTo(page, false);
});

function toggleMenu() { document.getElementById('navLinks').classList.toggle('open'); }

const starsContainer = document.getElementById('starsContainer');
let currentStars = [];
const MAX_STARS = 75;

function createStar() {
    if (currentStars.length >= MAX_STARS) return;
    const star = document.createElement('div');
    star.className = 'star';
    star.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%`;
    const size = Math.random() * 5 + 2;
    const lifetime = Math.random() * 3 + 2;
    const glow = Math.random() * 4 + 1;
    const colors = ['#fff','#e0ffe0','#b0f0b0','#8fdf8f','#c0ffc0','#a0e0a0'];
    star.style.setProperty('--size', size + 'px');
    star.style.setProperty('--lifetime', lifetime + 's');
    star.style.setProperty('--glow', glow + 'px');
    star.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
    starsContainer.appendChild(star);
    currentStars.push(star);
    setTimeout(() => {
        star.remove();
        currentStars = currentStars.filter(s => s !== star);
        createStar();
    }, lifetime * 1000);
}

for (let i = 0; i < MAX_STARS; i++) setTimeout(createStar, i * 130);

// Easter Egg - Special Star
let specialStarTriggered = false;
let specialStarElement = null;

function createSpecialStar() {
    const star = document.createElement('div');
    star.className = 'star';
    star.id = 'special-star';
    star.style.cssText = `left:${Math.random()*80 + 10}%;top:${Math.random()*60 + 10}%;cursor:pointer;z-index:1000;position:fixed;pointer-events:auto;`;
    star.style.setProperty('--size', '18px');
    star.style.setProperty('--lifetime', '10s');
    star.style.setProperty('--glow', '14px');
    star.style.setProperty('--color', '#0099ff');
    star.style.filter = 'drop-shadow(0 0 25px #0099ff)';
    star.style.animation = 'specialStarPulse 2s infinite ease-in-out';
    star.style.opacity = '0.9';
    star.style.pointerEvents = 'auto';
    
    star.onclick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        if (!specialStarTriggered) {
            specialStarTriggered = true;
            navigateTo('proj_secret');
        }
    };
    
    star.onmouseenter = () => {
        star.style.filter = 'drop-shadow(0 0 45px #0099ff)';
        star.style.transform = 'scale(2)';
    };
    
    star.onmouseleave = () => {
        star.style.filter = 'drop-shadow(0 0 25px #0099ff)';
        star.style.transform = 'scale(1)';
    };
    
    starsContainer.appendChild(star);
    specialStarElement = star;
}

setTimeout(createSpecialStar, 2000);

// Terminal System
let terminalBooted = false;
const terminalContent = document.getElementById('terminalContent');
const terminalInput = document.getElementById('terminalInput');
const terminalStatus = document.getElementById('terminalStatus');

function printTerminal(text, delay = 0) {
    return new Promise(resolve => {
        setTimeout(() => {
            const line = document.createElement('div');
            line.className = 'terminal-line';
            line.textContent = text;
            terminalContent.appendChild(line);
            terminalContent.scrollTop = terminalContent.scrollHeight;
            resolve();
        }, delay);
    });
}

async function bootSystem() {
    if (terminalBooted) return;
    terminalBooted = true;
    
    terminalContent.innerHTML = '<div class="terminal-line">ZAQV OS - Welcome!</div><div class="terminal-line">================================</div>';
    
    await printTerminal('[*] System Boot Sequence Initiated...', 200);
    await printTerminal('', 300);
    await printTerminal('[*] Initializing CPU...', 400);
    await printTerminal('    CPU: Quantum Core x8', 600);
    await printTerminal('[OK] CPU Ready', 800);
    await printTerminal('', 300);
    
    await printTerminal('[*] Initializing RAM...', 400);
    await printTerminal('    RAM: 32GB DDR5', 600);
    await printTerminal('[OK] RAM Ready', 800);
    await printTerminal('', 300);
    
    await printTerminal('[*] Initializing GPU...', 400);
    await printTerminal('    GPU: RTX Quantum', 600);
    await printTerminal('[OK] GPU Ready', 800);
    await printTerminal('', 300);
    
    await printTerminal('[*] Loading Storage...', 400);
    await printTerminal('    Storage: SSD 2TB', 600);
    await printTerminal('[OK] Storage Ready', 800);
    await printTerminal('', 300);
    
    await printTerminal('[*] Verifying System Integrity...', 400);
    await printTerminal('[OK] All Systems Nominal', 800);
    await printTerminal('', 300);
    
    await printTerminal('================================', 300);
    await printTerminal('System fully operational.', 400);
    await printTerminal('', 200);
    await printTerminal('Type "help" for available commands.', 300);
    
    terminalInput.disabled = false;
    terminalInput.focus();
}

// Handle Terminal Commands
if (terminalInput) {
    terminalInput.addEventListener('keypress', async (e) => {
        if (e.key === 'Enter') {
            const command = terminalInput.value.trim().toLowerCase();
            terminalInput.value = '';
            
            await printTerminal('root@zaqv:~# ' + command);
            
            if (command === 'help') {
                await printTerminal('Available commands:');
                await printTerminal('  help - Show this help message');
                await printTerminal('  neofetch - System information with ASCII art');
                await printTerminal('  download - Download a file');
                await printTerminal('  about - System information');
                await printTerminal('  clear - Clear terminal');
                await printTerminal('  back - Return to home');
            } else if (command === 'neofetch') {
                await printTerminal('');
                await printTerminal('  ███████╗ █████╗ ██████╗ ██╗   ██╗ ██████╗ ███████╗');
                await printTerminal('  ╚════██║██╔══██╗██╔═══██╗██║   ██║██╔════╝ ██╔════╝');
                await printTerminal('      ██║███████║██║   ██║██║   ██║██║  ███╗███████╗');
                await printTerminal('      ██║██╔══██║██║▄▄██║██║   ██║██║   ██║╚════██║');
                await printTerminal('      ██║██║  ██║╚██████╔╝╚██████╔╝╚██████╔╝███████║');
                await printTerminal('      ╚═╝╚═╝  ╚═╝ ╚═══▀▀═╝  ╚═════╝  ╚═════╝ ╚══════╝');
                await printTerminal('');
                await printTerminal('System: ZAQV OS v1.0');
                await printTerminal('Host: Quantum Core x8');
                await printTerminal('Kernel: ZAQV-1.0.0-generic');
                await printTerminal('Uptime: 0 days 0h 2m 47s');
                await printTerminal('Packages: 9999 (apt)');
                await printTerminal('Shell: bash');
                await printTerminal('Resolution: 1920x1080');
                await printTerminal('Memory: 32GB DDR5');
                await printTerminal('GPU: RTX Quantum');
                await printTerminal('Storage: 2TB SSD');
                await printTerminal('');
            } else if (command === 'download') {
                await printTerminal('');
                await printTerminal('[*] File selection dialog would open here...');
                await printTerminal('[*] Please provide the file path/URL to download');
                await printTerminal('    (User can configure this file in the index.html)');
                await printTerminal('[*] Example: download https://example.com/file.zip');
            } else if (command === 'about') {
                await printTerminal('');
                await printTerminal('ZAQV OS v1.0');
                await printTerminal('Developed by: Dr4yk');
                await printTerminal('Release Date: 2026');
                await printTerminal('');
            } else if (command === 'clear') {
                terminalContent.innerHTML = '';
            } else if (command === 'back') {
                navigateTo('proj_secret');
                terminalBooted = false;
            } else if (command === '') {
                // Do nothing on empty command
            } else {
                await printTerminal('Command not found: ' + command);
                await printTerminal('Type "help" for available commands.');
            }
        }
    });
}

// Boot system when terminal page is shown
const observer = new MutationObserver(() => {
    const terminalPage = document.getElementById('terminal');
    if (terminalPage && terminalPage.classList.contains('active')) {
        if (!terminalBooted) {
            bootSystem();
        }
    }
});

observer.observe(document.body, { attributes: true, subtree: true });

setTimeout(() => document.getElementById('loadingScreen').classList.add('hidden'), 1500);
applyLang(lang);

const initialPage = getPageFromCurrentPath();
history.replaceState({ page: initialPage }, '', getRouteUrl(initialPage));

if (initialPage === 'home') {
    staggerCards(document.getElementById('home'));
} else {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const target = document.getElementById(initialPage);
    if (target) {
        target.classList.add('active');
        staggerCards(target);
    }
    document.querySelectorAll('.nav-link').forEach(link => {
        const key = link.getAttribute('data-i18n');
        link.classList.toggle('active',
            (initialPage === 'home' && key === 'nav.home') ||
            (initialPage === 'vfx'  && key === 'nav.vfx')
        );
    });
}
