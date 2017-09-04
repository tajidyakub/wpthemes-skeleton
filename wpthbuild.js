shell = require('shelljs');

shell.exec('mkdir -p src/assets/fonts src/assets/images src/assets/styles src/assets/scripts/bootstrap src/assets/scripts/jquery src/assets/scripts/popper.js');
shell.exec('cp node_modules/jquery/dist/*.* src/assets/scripts/jquery/');
shell.exec('cp -R node_modules/popper.js/dist/* src/assets/scripts/popper.js/');
shell.exec('cp node_modules/bootstrap/dist/js/*.* src/assets/scripts/bootstrap/');
shell.exec('./node_modules/.bin/node-sass --output-style compressed --include-path scss scss/bootstrap.scss src/assets/styles/bootstrap.css');
shell.exec('./node_modules/.bin/node-sass --output-style compressed --include-path scss scss/style.scss src/assets/styles/style.css');

shell.exec('cd src && zip -r ../release/themes.zip ./*');

