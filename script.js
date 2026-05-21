document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.tab-btn');
    const html = document.documentElement;
    
    // Palette definitions for the UI display
    const palettes = {
        'palette-01': {
            primary: '#009393',
            accent: '#EADCB6',
            neutral: '#FCF9F5',
            dark: '#2E4143'
        },
        'palette-02': {
            primary: '#DE9079',
            accent: '#C6A28B',
            neutral: '#F2F7F7',
            dark: '#28393B'
        },
        'palette-03': {
            primary: '#C6A28B',
            accent: '#D9C3A2',
            neutral: '#F2F7F7',
            dark: '#28393B'
        },
        'palette-04': {
            primary: '#05828E',
            accent: '#DE9079',
            neutral: '#F9F9F9',
            dark: '#113236'
        },
        'palette-05': {
            primary: '#156565',
            accent: '#CB7B66',
            neutral: '#F3EBE3',
            dark: '#483A31'
        },
        'palette-06': { primary: '#05828E', accent: '#DE9079', neutral: '#F7F4EF', dark: '#5A3E35' },
        'palette-07': { primary: '#05828E', accent: '#DFA08E', neutral: '#F8F5F1', dark: '#18363A' },
        'palette-08': { primary: '#DE9079', accent: '#4D8E95', neutral: '#FAF6F2', dark: '#4B3830' },
        'palette-09': { primary: '#C65D3A', accent: '#E2A98B', neutral: '#FAF7F3', dark: '#7A2E1F' },
        'palette-10': { primary: '#6B7C5A', accent: '#D9C3A2', neutral: '#F7F4EF', dark: '#3A4832' },
        'palette-11': { primary: '#B7482B', accent: '#D8977D', neutral: '#FFF8F4', dark: '#6A2C23' },
        'palette-12': { primary: '#D1933D', accent: '#EADCC6', neutral: '#FCF9F5', dark: '#7C6046' },
        'palette-13': { primary: '#A35A3F', accent: '#C6B7A6', neutral: '#F6F3F0', dark: '#4B3830' }
    };

    // DOM elements for hex display
    const hexDisplays = document.querySelectorAll('.active-palette-info .hex');

    function updateHexDisplay(theme) {
        const colors = palettes[theme];
        if (colors && hexDisplays.length === 4) {
            hexDisplays[0].textContent = colors.primary;
            hexDisplays[1].textContent = colors.accent;
            hexDisplays[2].textContent = colors.neutral;
            hexDisplays[3].textContent = colors.dark;
        }
    }

    // Initialize with default theme
    updateHexDisplay('palette-03');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Get target theme
            const targetTheme = tab.getAttribute('data-target');
            
            // Update HTML data-theme attribute
            html.setAttribute('data-theme', targetTheme);
            
            // Update the hex labels
            updateHexDisplay(targetTheme);
        });
    });
});
