#!/bin/sh
#https://stackoverflow.com/questions/19456518/invalid-command-code-despite-escaping-periods-using-sed
sed -i 's/httpizza\.alpha\.elenet\.me/httpizza.ele.me/g' `find . -name '*.js' -not -path './node_modules/*'`
sed -i 's/ssodev\.rajax\.me/sso.rajax.me/g' `find . -name '*.js' -not -path './node_modules/*'`
sed -i 's/测试域名/线上域名/g' `find . -name '*.js' -not -path './node_modules/*'`
