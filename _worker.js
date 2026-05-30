export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    
    if (url.pathname === '/sheets-proxy') {
      const SHEET_URL = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vQB5DaeXCB71JJEirxddx3C5mJf8dGLMNoqVchwgwWb35gLY5BDwNiStZpUEW3-aU3PSwtAKSNyQjqV/pub?gid=485151315&single=true&output=csv';
      const res = await fetch(SHEET_URL);
      const text = await res.text();
      return new Response(text, {
        headers: {
          'Content-Type': 'text/csv',
          'Access-Control-Allow-Origin': '*',
          'Cache-Control': 'no-store'
        }
      });
    }

    return env.ASSETS.fetch(request);
  }
}
