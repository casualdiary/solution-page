import pathlib
d=pathlib.Path(__file__).parent
css=''.join((d/f).read_text() for f in ['tokens.css','style.css','pages.css'])
js=''.join((d/f).read_text()+'\n' for f in ['core.js','art.js','p-hub.js','p-smb.js','p-sellers.js','p-creators.js','p-marketing.js','p-agencies.js','p-startups.js'])
js+="globalInit();route();\n"
html=f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Designs.ai Solutions (prototype)</title>
<link rel="preconnect" href="https://rsms.me"><link rel="stylesheet" href="https://rsms.me/inter/inter.css">
<style>{css}</style></head><body><main id="main"></main><script>{js}</script></body></html>'''
(d.parent/'index.html').write_text(html)
print(len(html))
