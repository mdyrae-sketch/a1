// ==========================================================================
// SPICEBOWLMINT - Interactive Botanical Kitchen Architecture
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Reading Progress Bar
    const progressBar = document.getElementById('readingProgress');
    if (progressBar) {
        window.addEventListener('scroll', () => {
            const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
            if (totalScroll > 0) {
                const currentProgress = (window.pageYOffset / totalScroll) * 100;
                progressBar.style.width = currentProgress + '%';
            }
        });
    }

    // 2. Theme Toggle (Fresh Garden Mint Light vs Twilight Herbal Dark)
    const themeToggleBtn = document.getElementById('themeToggle');
    const currentTheme = localStorage.getItem('sbm_theme') || 'light';
    document.body.setAttribute('data-theme', currentTheme);

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const activeTheme = document.body.getAttribute('data-theme');
            const newTheme = activeTheme === 'light' ? 'dark' : 'light';
            document.body.setAttribute('data-theme', newTheme);
            localStorage.setItem('sbm_theme', newTheme);
        });
    }

    // 3. Mobile Navigation Drawer
    const menuToggleBtn = document.getElementById('menuToggle');
    const drawerCloseBtn = document.getElementById('drawerClose');
    const mobileDrawer = document.getElementById('mobileDrawer');

    if (menuToggleBtn && mobileDrawer) {
        menuToggleBtn.addEventListener('click', () => {
            mobileDrawer.classList.add('active');
        });
    }

    if (drawerCloseBtn && mobileDrawer) {
        drawerCloseBtn.addEventListener('click', () => {
            mobileDrawer.classList.remove('active');
        });
    }

    // 4. Interactive Spice & Mint Bowl Architect
    const grainBtns = document.querySelectorAll('[data-group="grain"]');
    const herbBtns = document.querySelectorAll('[data-group="herb"]');
    const spiceBtns = document.querySelectorAll('[data-group="spice"]');
    const toppingBtns = document.querySelectorAll('[data-group="top"]');
    const dressingBtns = document.querySelectorAll('[data-group="dressing"]');

    const previewNameEl = document.getElementById('previewBowlName');
    const previewFlavorEl = document.getElementById('previewBowlFlavor');
    const previewGrainEl = document.getElementById('previewGrain');
    const previewHerbEl = document.getElementById('previewHerb');
    const previewSpiceEl = document.getElementById('previewSpice');
    const previewDressingEl = document.getElementById('previewDressing');
    const previewNoteEl = document.getElementById('previewFlavorNote');

    let bowlState = {
        grain: 'Ancient Quinoa & Wild Rice',
        herb: 'Fresh Moroccan Spearmint',
        spice: 'Toasted Cumin & Mustard Tarka',
        top: 'Crispy Roasted Chickpeas',
        dressing: 'Whipped Tahini Mint Emulsion'
    };

    function updateBowlArchitectUI() {
        if (!previewNameEl) return;
        
        previewNameEl.textContent = `${bowlState.herb.replace('Fresh ', '')} & ${bowlState.grain.split(' ')[0]} Harvest Bowl`;
        if (previewGrainEl) previewGrainEl.textContent = bowlState.grain;
        if (previewHerbEl) previewHerbEl.textContent = bowlState.herb;
        if (previewSpiceEl) previewSpiceEl.textContent = bowlState.spice;
        if (previewDressingEl) previewDressingEl.textContent = bowlState.dressing;
        
        if (previewFlavorEl) {
            previewFlavorEl.textContent = `Menthol Crisp • Toasted Terpenes • Velvety Herbaceous`;
        }
        if (previewNoteEl) {
            previewNoteEl.textContent = `The cooling volatile menthol in ${bowlState.herb} counterbalances the rich roasted lipid notes of the ${bowlState.spice}, while ${bowlState.dressing} coats the palate for an unctuous, lingering aromatic finish.`;
        }
    }

    function setupChipGroup(buttons, stateKey) {
        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                bowlState[stateKey] = btn.getAttribute('data-value');
                updateBowlArchitectUI();
            });
        });
    }

    setupChipGroup(grainBtns, 'grain');
    setupChipGroup(herbBtns, 'herb');
    setupChipGroup(spiceBtns, 'spice');
    setupChipGroup(toppingBtns, 'top');
    setupChipGroup(dressingBtns, 'dressing');

    // 5. Seasonal Harmonizer Tabs
    const seasonTabs = document.querySelectorAll('.season-tab-btn');
    const seasonCards = document.querySelectorAll('.season-content-card');

    seasonTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetSeason = tab.getAttribute('data-season');
            
            seasonTabs.forEach(t => t.classList.remove('active'));
            seasonCards.forEach(c => c.classList.remove('active'));

            tab.classList.add('active');
            const activeCard = document.getElementById(`season-${targetSeason}`);
            if (activeCard) {
                activeCard.classList.add('active');
            }
        });
    });
});
