'use client';

import { useEffect, useState } from 'react';
import { 
  registerServiceWorker, 
  setupConnectivityListeners,
  setupInstallPrompt,
  isStandalone,
  promptInstall
} from '@/lib/pwa';

export function PWAInit() {
  const [isOnline, setIsOnline] = useState(true);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    // Register service worker
    registerServiceWorker();

    // Check if already installed
    setIsInstalled(isStandalone());

    // Setup connectivity listeners
    setupConnectivityListeners(
      () => setIsOnline(true),
      () => setIsOnline(false)
    );

    // Setup install prompt
    setupInstallPrompt(() => {
      if (!isStandalone()) {
        setShowInstallPrompt(true);
      }
    });

    // Set initial online status
    setIsOnline(navigator.onLine);
  }, []);

  const handleInstall = () => {
    promptInstall();
    setShowInstallPrompt(false);
  };

  const dismissInstallPrompt = () => {
    setShowInstallPrompt(false);
    // Don't show again for 7 days
    localStorage.setItem('installPromptDismissed', Date.now().toString());
  };

  // Check if we should show the install prompt
  useEffect(() => {
    const dismissed = localStorage.getItem('installPromptDismissed');
    if (dismissed) {
      const dismissedTime = parseInt(dismissed);
      const sevenDays = 7 * 24 * 60 * 60 * 1000;
      if (Date.now() - dismissedTime < sevenDays) {
        setShowInstallPrompt(false);
      }
    }
  }, []);

  return (
    <>
      {/* Offline indicator */}
      {!isOnline && (
        <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-white text-center py-2 px-4 text-sm font-medium z-50">
          📡 You're offline. Some features may be limited.
        </div>
      )}

      {/* Install prompt banner */}
      {showInstallPrompt && !isInstalled && (
        <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 shadow-lg z-50">
          <div className="max-w-4xl mx-auto flex items-center justify-between gap-4">
            <div className="flex-1">
              <p className="font-semibold">Install ZimStudy App</p>
              <p className="text-sm opacity-90">
                Access your learning materials offline, even without internet!
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={handleInstall}
                className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Install
              </button>
              <button
                onClick={dismissInstallPrompt}
                className="text-white px-4 py-2 rounded-lg hover:bg-white/10 transition-colors"
              >
                Later
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
