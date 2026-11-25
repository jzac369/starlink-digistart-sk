# starlink.digistart.sk

Neoficiálna slovenská informačná stránka o Starlinku. Čisté HTML/CSS/JS, bez build kroku.

## Nasadenie na GitHub Pages
1. Vytvoriť repozitár na GitHube a nahrať sem obsah priečinka.
2. Repo → **Settings → Pages** → Source: *Deploy from a branch*, branch `main`, folder `/ (root)`.
3. Súbor `CNAME` už obsahuje `starlink.digistart.sk`; v Settings → Pages skontrolovať Custom domain a zapnúť *Enforce HTTPS*.
4. U správcu DNS domény `digistart.sk` pridať záznam:

   | Typ   | Názov      | Hodnota                    |
   |-------|------------|----------------------------|
   | CNAME | `starlink` | `<tvoje-github-meno>.github.io` |
