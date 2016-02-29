Pentru informatii detaliate: http://gruntjs.com/getting-started
###############################################################

Instalare grunt-cli:
# npm install -g grunt-cli

Adaugare grunt la devDependencies:
# npm install grunt --save-dev

Pentru a putea utiliza grunt avem nevoie de plugin-uri care fac diferite operatiuni.
Lista completa aici: http://gruntjs.com/plugins

--------------------------------------------------------------------------------

Cateva din plugin-urile must have:

# npm install grunt-contrib-concat --save-dev   

cu acest plugin se concateneaza toate fisierele cu anumite extensii intr-un singur fisier.
Fisierul rezultat este adaugat in index.html.
--------------------------------------------------------------------------------

# npm install grunt-contrib-copy --save-dev

cu acest plugin se copiaza fisiere si foldere
--------------------------------------------------------------------------------

# npm install --save-dev load-grunt-tasks

cu acest plugin incarcam task-uri. Ex: Task-uri pentru concat, copy, minify.
--------------------------------------------------------------------------------

# npm install grunt-contrib-watch --save-dev

Run predefined tasks whenever watched file patterns are added, changed or deleted
--------------------------------------------------------------------------------
