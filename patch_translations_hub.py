import re

with open("public/translations.js", "r", encoding="utf-8") as f:
    content = f.read()

if "back_to_site" not in content:
    content = content.replace('"back_to_hub": { ro: "← Înapoi la Hub", en: "← Back to Hub" },', 
                              '"back_to_hub": { ro: "← Înapoi la Hub", en: "← Back to Hub" },\n  "back_to_site": { ro: "Înapoi la site", en: "Back to site" },')

with open("public/translations.js", "w", encoding="utf-8") as f:
    f.write(content)

print("Hub translations patched.")
