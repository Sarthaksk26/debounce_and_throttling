// Utils
const getTime = () => new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit', fractionalSecondDigits: 2 });

const addLog = (elementId, message) => {
    const logEl = document.getElementById(elementId);
    const entry = document.createElement('div');
    entry.className = 'log-entry';
    entry.innerHTML = `<span class="time">[${getTime()}]</span> <span class="action">${message}</span>`;
    logEl.prepend(entry);
    
    // Keep only last 20 entries
    if (logEl.children.length > 20) {
        logEl.removeChild(logEl.lastChild);
    }
};

// --- Debounce Implementation ---
function debounce(fn, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

const debounceInput = document.getElementById('debounce-input');
const debRawCount = document.getElementById('debounce-raw-count');
const debProcCount = document.getElementById('debounce-proc-count');

let debRawValue = 0;
let debProcValue = 0;

const handleDebounce = debounce(() => {
    debProcValue++;
    debProcCount.textContent = debProcValue;
    addLog('debounce-log', 'API call simulated');
}, 1000);

debounceInput.addEventListener('input', () => {
    debRawValue++;
    debRawCount.textContent = debRawValue;
    handleDebounce();
});


// --- Throttle Implementation ---
function throttle(fn, limit) {
    let inThrottle = false;
    return function (...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
}

const throttleArea = document.getElementById('throttle-area');
const thrRawCount = document.getElementById('throttle-raw-count');
const thrProcCount = document.getElementById('throttle-proc-count');

let thrRawValue = 0;
let thrProcValue = 0;

const handleThrottle = throttle(() => {
    thrProcValue++;
    thrProcCount.textContent = thrProcValue;
    addLog('throttle-log', 'UI state updated');
}, 1500);

throttleArea.addEventListener('mousemove', () => {
    thrRawValue++;
    thrRawCount.textContent = thrRawValue;
    handleThrottle();
});

// Initialize logs
addLog('debounce-log', 'Waiting for input...');
addLog('throttle-log', 'Move mouse over area...');
