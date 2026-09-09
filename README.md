# Напарник — готовый статический сайт

Откройте index.html локально или загрузите содержимое этой папки в корень репозитория GitHub. Сборка, npm, backend и внешние библиотеки не нужны.

## Структура
```
index.html
styles.css
script.js
.nojekyll
README.md
assets/
  favicon.svg
  route.svg
```

Все ресурсы подключены относительно страницы: ./styles.css, ./script.js, ./assets/… . Сайт поддерживает размещение и в корне домена, и в подпапке репозитория. .nojekyll отключает обработку Jekyll на GitHub Pages.

## Telegram-ссылка
В начале script.js замените значение TELEGRAM_BOT_URL:
```js
const TELEGRAM_BOT_URL = 'https://t.me/your_bot';
```
Вставьте настоящий адрес своего бота. Все три кнопки обновятся автоматически. Пока стоит '#', открывается сообщение о будущем запуске.

## Публикация на GitHub Pages
1. Зарегистрируйтесь или войдите на https://github.com и подтвердите email.
2. Нажмите «+» → «New repository». Название: naparnik. Выберите Public, включите Add README, нажмите Create repository.
3. Откройте Add file → Upload files. Перетащите СОДЕРЖИМОЕ этой папки: index.html, styles.css, script.js, .nojekyll, README.md и папку assets. Не загружайте ZIP или внешнюю папку naparnik целиком.
4. Нажмите Commit changes; если появится дополнительный диалог, сохраните напрямую в main. В корне репозитория должен быть виден index.html рядом с assets.
5. Убедитесь, что .nojekyll тоже загрузился. Если нет: Add file → Create new file, имя .nojekyll, содержимое оставьте пустым (или один перевод строки), затем Commit changes.
6. Settings → Pages → Build and deployment. Source: Deploy from a branch. Branch: main. Folder: /(root). Нажмите Save. Собственный workflow создавать не нужно.
7. Подождите несколько минут, иногда до 10. Обновите Settings → Pages и нажмите Visit site.
8. Публичный адрес будет иметь вид https://ВАШ-ЛОГИН.github.io/naparnik/ . Это пример, а не уже опубликованная ссылка. Скопируйте фактический адрес из Visit site.
9. В Pages проверьте Enforce HTTPS. Для стандартного домена github.io HTTPS применяется автоматически; если флажок уже включён и недоступен, это нормально. Custom domain оставьте пустым.
10. Откройте адрес в приватном окне или на телефоне, проверьте оформление и кнопки. Этот HTTPS-адрес можно отправить друзьям: вход в GitHub им не нужен.

Public означает, что исходные файлы сайта также доступны всем. Для этого статического лендинга серверные ключи и токены не нужны.

## Обновления
Для замены ссылки откройте script.js в репозитории, нажмите карандаш Edit, измените TELEGRAM_BOT_URL и нажмите Commit changes. GitHub Pages обновится автоматически, публичный адрес сохранится. Остальные файлы можно обновлять аналогично или через Add file → Upload files.

## Если что-то не получилось
- 404 сразу после настройки: подождите до 10 минут и проверьте вкладку Actions. У pages build and deployment должен быть зелёный статус.
- 404 остаётся: проверьте main + /(root) и наличие index.html в корне, а не внутри второй папки naparnik.
- Нет оформления: убедитесь, что styles.css и script.js рядом с index.html, assets содержит оба SVG, регистр имён совпадает.
- Изменения не видны: дождитесь завершения Actions и нажмите Ctrl+F5.
- Telegram не открывается: замените '#' настоящим адресом в script.js. Пока это значение не задано, сообщение о запуске — ожидаемое поведение.

## Что проверено
Сайт открыт в браузере через локальный HTTP-сервер. Страница и её CSS, JS, SVG возвращают HTTP 200 с корректными MIME-типами как из /, так и из /naparnik/. В консоли нет ошибок и предупреждений. Проверены FAQ, открытие диалога CTA и его закрытие Escape. На ширинах 360, 390, 430, 768, 1024 и 1440 px нет горизонтального переполнения; исправлены узкие карточки и декоративный маршрут. Все картинки загружаются.

Проверка проведена локально; на GitHub сайт пока не опубликован. Интернет нужен для доступа к опубликованному сайту и Telegram. Сами файлы сайта не зависят от внешних ресурсов.

## Официальная документация
- https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
- https://docs.github.com/en/pages/getting-started-with-github-pages/securing-your-github-pages-site-with-https
