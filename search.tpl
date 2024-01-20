<!DOCTYPE html>
<html>
  <head>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <meta http-equiv="pragma" content="no-cache" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="description" content="{{ DESCRIPTION }}" />
    <meta name="keywords" content="{{ KEYWORDS }}" />
    <title>{{ TITLE }}</title>
    <link href="styles.css" rel="stylesheet" />
  </head>

  <body>
    <section class="container">
      {{ CONTENT }}

      <div><a href="index.php">Задачи</a></div>
      <input type="text" class="search" id="search" name="search" value="задача">
      <div class="results"></div>
      <div class="list">
        <div class="row">
          <div>Номер задачи</div>
          <div>Заголовок</div>
          <div>Дата выполнения</div>
        </div>
        <div class="onclick items">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>

      <!-- <div class="arrows">
        <div class="arrow arrow_prev">&lt;</div>
        <div class="arrow arrow_next">&gt;</div>
      </div> -->

      <div class="modal" id="modal_main">
        <div class="modal__content">
          <div class="modal__close modal__close_times">&times;</div>
          <div class="modal__disc">
            <div class="modal__disc__item">
              <h2 class="modal__disc__item__title">Информация о задаче №</h2>
              <h3 class="modal__disc__item__disc">Заголовок 87</h3>
            </div>
            <div class="modal__disc__item">
              <h2 class="modal__disc__item__title">Заголовок</h2>
              <h3 class="modal__disc__item__disc">Заголовок 87</h3>
            </div>
            <div class="modal__disc__item">
              <h2 class="modal__disc__item__title">Дата выполнения</h2>
              <h3 class="modal__disc__item__disc">Текущая дата + 87 часов</h3>
            </div>
            <div class="modal__disc__item">
              <h2 class="modal__disc__item__title">Автор</h2>
              <h3 class="modal__disc__item__disc">Автор 87</h3>
            </div>
            <div class="modal__disc__item">
              <h2 class="modal__disc__item__title">Статус</h2>
              <h3 class="modal__disc__item__disc">Статус 87</h3>
            </div>
            <div class="modal__disc__item">
              <h2 class="modal__disc__item__title">Описание</h2>
              <h3 class="modal__disc__item__disc">Описание 87</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <script type="text/javascript" src="script.js" defer></script>
  </body>
</html>
