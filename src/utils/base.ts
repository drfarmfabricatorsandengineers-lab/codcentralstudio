/**
 * Prefix any internal path with the Astro base URL.
 * Works in both dev (base = '/') and production (base = '/codcentralstudio').
 *
 * Usage:
 *   import { base } from '../utils/base';
 *   <a href={base('/contact')}>...</a>
 *   <img src={base('/codcentral-logo.png')} />
 */

const BASE = import.meta.env.BASE_URL.replace(/\/$/, ''); // strip trailing slash

export function base(path: string): string {
  // Absolute URLs, mailto:, tel:, # anchors — return as-is
  if (!path.startsWith('/') || path.startsWith('//')) return path;
  return BASE + path;
}
