import test from 'node:test';
import assert from 'node:assert/strict';
import { computeStageLayout, computeSpotlightCoords, wrapIndex } from './layoutMath';

test('computeStageLayout handles phone mode', () => {
  const result = computeStageLayout(390, 844, true);
  assert.equal(result.isPhone, true);
  assert.equal(result.isMobile, false);
  assert.equal(result.navCompact, true);
  assert.equal(result.bw, null);
});

test('computeStageLayout handles desktop landscape 1536x1024', () => {
  const result = computeStageLayout(1536, 1024, false);
  assert.equal(result.isPhone, false);
  assert.equal(result.isMobile, false);
  assert.equal(result.bw, 1536);
  assert.equal(result.bh, 1024);
  assert.equal(result.s, 1);
  assert.equal(result.navCompact, false);
});

test('computeStageLayout clamps width to bounds on extreme aspect ratios', () => {
  const wide = computeStageLayout(3840, 1080, false);
  assert.equal(wide.isMobile, false);
  assert.equal(wide.bw, 2600); // capped at hi 2600
  assert.equal(wide.isFit, true);

  const narrow = computeStageLayout(900, 1000, false);
  assert.equal(narrow.isMobile, true);
  assert.ok(narrow.bw! >= 560 && narrow.bw! <= 1450);
});

test('computeSpotlightCoords correctly un-scales rendered coordinates to element space', () => {
  // Element is unscaled 600x759, but rendered at half size (300x379.5) due to stage transform
  const rect = { left: 100, top: 50, width: 300, height: 379.5 };
  const offsetWidth = 600;
  const offsetHeight = 759;

  // Pointer at center of rendered box: clientX = 100 + 150 = 250, clientY = 50 + 189.75 = 239.75
  const coords = computeSpotlightCoords(250, 239.75, rect, offsetWidth, offsetHeight);
  assert.ok(Math.abs(coords.x - 300) < 0.001);
  assert.ok(Math.abs(coords.y - 379.5) < 0.001);
});

test('wrapIndex cycles cleanly through avatar bounds', () => {
  assert.equal(wrapIndex(0, 5), 0);
  assert.equal(wrapIndex(4, 5), 4);
  assert.equal(wrapIndex(5, 5), 0);
  assert.equal(wrapIndex(-1, 5), 4);
});
