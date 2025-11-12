#!/usr/bin/env node

/**
 * PWA Setup Validation Script
 * Tests that all PWA components are correctly configured
 */

const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const results = {
  passed: [],
  failed: [],
  warnings: []
};

function test(name, condition, errorMsg) {
  if (condition) {
    results.passed.push(`✅ ${name}`);
    return true;
  } else {
    results.failed.push(`❌ ${name}: ${errorMsg}`);
    return false;
  }
}

function warn(name, message) {
  results.warnings.push(`⚠️  ${name}: ${message}`);
}

console.log('🔍 Testing PWA Setup for ZimStudy.com\n');

// Test 1: Service Worker exists
const swPath = path.join(publicDir, 'sw.js');
test(
  'Service Worker file exists',
  fs.existsSync(swPath),
  'sw.js not found in public directory'
);

// Test 2: Manifest exists and is valid JSON
const manifestPath = path.join(publicDir, 'manifest.json');
let manifestValid = false;
if (test(
  'Manifest file exists',
  fs.existsSync(manifestPath),
  'manifest.json not found in public directory'
)) {
  try {
    const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
    manifestValid = true;
    
    test('Manifest has name', manifest.name, 'name field missing');
    test('Manifest has short_name', manifest.short_name, 'short_name field missing');
    test('Manifest has start_url', manifest.start_url, 'start_url field missing');
    test('Manifest has display mode', manifest.display, 'display field missing');
    test('Manifest has icons', manifest.icons && manifest.icons.length > 0, 'icons array missing or empty');
    
    if (manifest.icons) {
      const has192 = manifest.icons.some(icon => icon.sizes === '192x192');
      const has512 = manifest.icons.some(icon => icon.sizes === '512x512');
      test('Manifest has 192x192 icon', has192, 'No 192x192 icon defined');
      test('Manifest has 512x512 icon', has512, 'No 512x512 icon defined');
    }
  } catch (e) {
    results.failed.push(`❌ Manifest is invalid JSON: ${e.message}`);
  }
}

// Test 3: Offline page exists
const offlinePath = path.join(publicDir, 'offline.html');
test(
  'Offline fallback page exists',
  fs.existsSync(offlinePath),
  'offline.html not found in public directory'
);

// Test 4: Required icon sizes exist
const requiredSizes = [72, 96, 128, 144, 152, 192, 384, 512];
requiredSizes.forEach(size => {
  const iconPath = path.join(publicDir, `icon-${size}.png`);
  test(
    `Icon ${size}x${size} exists`,
    fs.existsSync(iconPath),
    `icon-${size}.png not found`
  );
});

// Test 5: PWA utility library exists
const pwaLibPath = path.join(__dirname, 'src', 'lib', 'pwa.ts');
test(
  'PWA utility library exists',
  fs.existsSync(pwaLibPath),
  'src/lib/pwa.ts not found'
);

// Test 6: PWA initialization component exists
const pwaInitPath = path.join(__dirname, 'src', 'components', 'PWAInit.tsx');
test(
  'PWA initialization component exists',
  fs.existsSync(pwaInitPath),
  'src/components/PWAInit.tsx not found'
);

// Test 7: Check if service worker has caching logic
if (fs.existsSync(swPath)) {
  const swContent = fs.readFileSync(swPath, 'utf8');
  test(
    'Service Worker has install handler',
    swContent.includes("addEventListener('install'"),
    'Install event listener not found'
  );
  test(
    'Service Worker has fetch handler',
    swContent.includes("addEventListener('fetch'"),
    'Fetch event listener not found'
  );
  test(
    'Service Worker has activate handler',
    swContent.includes("addEventListener('activate'"),
    'Activate event listener not found'
  );
  test(
    'Service Worker has cache strategy',
    swContent.includes('caches.open'),
    'Cache API usage not found'
  );
}

// Warnings
if (manifestValid) {
  warn('Manifest screenshots', 'Consider adding screenshots for better app store presentation');
}

// Print results
console.log('\n📊 Test Results:\n');
console.log(`Passed: ${results.passed.length}`);
console.log(`Failed: ${results.failed.length}`);
console.log(`Warnings: ${results.warnings.length}\n`);

if (results.passed.length > 0) {
  console.log('✅ Passed Tests:');
  results.passed.forEach(msg => console.log(`   ${msg}`));
  console.log('');
}

if (results.failed.length > 0) {
  console.log('❌ Failed Tests:');
  results.failed.forEach(msg => console.log(`   ${msg}`));
  console.log('');
}

if (results.warnings.length > 0) {
  console.log('⚠️  Warnings:');
  results.warnings.forEach(msg => console.log(`   ${msg}`));
  console.log('');
}

// Summary
if (results.failed.length === 0) {
  console.log('🎉 All PWA components are properly configured!\n');
  console.log('Next steps:');
  console.log('1. Run `npm run build` to build the application');
  console.log('2. Run `npm start` to test in production mode');
  console.log('3. Open DevTools > Application > Service Workers to verify registration');
  console.log('4. Test offline functionality by toggling offline mode in DevTools\n');
  process.exit(0);
} else {
  console.log('⚠️  Some PWA components are missing or misconfigured.\n');
  console.log('Please fix the failed tests above before deploying.\n');
  process.exit(1);
}
