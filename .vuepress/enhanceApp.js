export default () => {
  if (typeof window !== 'undefined') {
    const script = document.createElement('script');
    script.src = 'https://widget.cybreed.ai/cybreed.iife.js?chatVariable=4480aa5f-b1b0-11ef-b0da-e2964cdbbb43';
    script.async = true;
    document.body.appendChild(script);
  }
}
