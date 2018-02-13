cd /Applications/MAMP/htdocs/github_gibbonEdu/core/modules/Free\ Learning
echo 'es_ES'
xgettext --from-code=iso-8859-1 --omit-header -j --language=PHP --keyword=__:2 -o ./i18n/es_ES/LC_MESSAGES/Free\ Learning.po $(find . -type f -name "*.php" ! -path "./lib/*" | sed 's/ /*/g')
msgfmt -cv -o ./i18n/es_ES/LC_MESSAGES/Free\ Learning.mo ./i18n/es_ES/LC_MESSAGES/Free\ Learning.po
