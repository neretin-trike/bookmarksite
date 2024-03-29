## Сайт Закладок

Тестовое задание от ЦФТ, в виде SPA приложения, позволяющее добавлять и редактировать закладки. 

Основные технологии:
- Язык: TypeScript v3.4;
- Библиотека: React v16.8;
- Способ огранизации хранилища: Redux v4;
- Фреймворки тестирования: Jest v24, Enzyme v3.9;
- Сборщик проекта: Webpack

Основные возможности:
- Возможность создавать/просматривать/редактировать/удалять закладки.
- Возможность произвести поиск закладок по имени и тегам через единую поисковую строку в реальном времени.
- При клике по закладке открывать связанный с закладкой URL в новом окне.

Дополнительные возможности:
- Автоматическая подстановка наименование закладки на основании ссылки с помощью сервиса [textance.herokuapp.com](http://textance.herokuapp.com) при нажатии на кнопку `◈`
- Наличие подсказок для тегов при создании/редактировании закладки, и автозаполнение при нажатии на кнопки `TAB` / `→`

## Скрипты

Из директории проекта вы можете запустить следующие команды:

### `yarn install`

Установит все зависимости.

### `yarn start`

Запустит приложение в режиме разработки <br>
Откройте [http://localhost:8080](http://localhost:8080) чтобы просматривать его в браузере.

### `yarn test`

Запустит модульное тестирование редьюсеров и компонентов представления с помощью Jest и Enzyme
