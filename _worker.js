export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/sheets-proxy') {
      const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQB5DaeXCB71JJEirxddx3C5mJf8dGLMNoqVchwgwWb35gLY5BDwNiStZpUEW3-aU3PSwtAKSNyQjqV/pub?gid=485151315&single=true&output=csv';
      const res = await fetch(SHEET_URL);
      const text = await res.text();
      return new Response(text, { headers: { 'Content-Type': 'text/csv', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } });
    }

    if (url.pathname === '/scores-proxy') {
      const SCORES_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQB5DaeXCB71JJEirxddx3C5mJf8dGLMNoqVchwgwWb35gLY5BDwNiStZpUEW3-aU3PSwtAKSNyQjqV/pub?gid=1738518390&single=true&output=csv';
      const res = await fetch(SCORES_URL);
      const text = await res.text();
      return new Response(text, { headers: { 'Content-Type': 'text/csv', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } });
    }

    if (url.pathname === '/gallery-proxy') {
      const GALLERY_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQB5DaeXCB71JJEirxddx3C5mJf8dGLMNoqVchwgwWb35gLY5BDwNiStZpUEW3-aU3PSwtAKSNyQjqV/pub?gid=431906449&single=true&output=csv';
      const res = await fetch(GALLERY_URL);
      const text = await res.text();
      return new Response(text, { headers: { 'Content-Type': 'text/csv', 'Access-Control-Allow-Origin': '*', 'Cache-Control': 'no-store' } });
    }

    if (url.pathname === '/save-scores' && request.method === 'POST') {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzw_3lfm80ptRSued2d9HQaCtiefJ2nqhD2aZ1PXkOBZpE_Lyfhy1G_DTd80X6J6MP-CA/exec';
      const body = await request.text();
      const res = await fetch(SCRIPT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: body
      });
      return new Response('ok', { headers: { 'Access-Control-Allow-Origin': '*' } });
    }

    return env.ASSETS.fetch(request);
  }
}
