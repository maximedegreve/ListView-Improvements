<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Grid Layout List</title>
    <style>
      .grid-wrapper {
        display: grid;
        grid-template-columns: 30px 1fr auto auto auto auto;
        gap: 32px;
        max-width: 1400px;
        margin-left: auto;
        margin-right: auto;
      }

      .grid-container {
        display: contents; 
      }

      .icon {
        grid-column: 1;
        width: 30px;
        height: 30px;
        background-color: #f2f2f2;
        text-align: center;
        line-height: 30px;
      }

      .title {
        grid-column: 2;
      }

      .avatars {
        grid-column: 3;
        text-align: right;
      }

      .total-comments {
        grid-column: 4;
      }

      .total-people {
        grid-column: 5;
      }

      .total-request {
        grid-column: 6;
      }

      .grid-container > div {
        border: 1px solid #ccc;
      }

      .grid-container:last-child > div {
        border-bottom: 1px solid #ccc;
      }
    </style>
  </head>
  <body>
    <ul class="grid-wrapper">
      <li class="grid-container">
        <div class="icon">I</div>
        <div class="title">ActionMenu: Selected items use checkboxes instead of checkmarks #3838</div>
        <div class="avatars">😊</div>
        <div class="total-comments">💬 5</div>
        <div class="total-people">👩‍❤️‍👨 10</div>
        <div class="total-request">🔀 12</div>
      </li>

      <li class="grid-container">
        <div class="icon">I</div>
        <div class="title">TextInput action hover state is incorrect #3867</div>
        <div class="avatars">😊😊😊</div>
        <div class="total-comments">💬 325235</div>
        <div class="total-people">👩‍❤️‍👨 25</div>
        <div class="total-request">🔀 11</div>
      </li>

      <li class="grid-container">
        <div class="icon">I</div>
        <div class="title">🚀 Data table pagination breaks when setting defaultPageIndex #3854</div>
        <div class="avatars">😊</div>
        <div class="total-comments">💬 5</div>
        <div class="total-people">👩‍❤️‍👨 851</div>
        <div class="total-request">🔀 15</div>
      </li>

      <li class="grid-container">
        <div class="icon">I</div>
        <div class="title">Release tracking #3835</div>
        <div class="avatars">😊</div>
        <div class="total-comments">💬 5</div>
        <div class="total-people">👩‍❤️‍👨 851</div>
        <div class="total-request">🔀 15</div>
      </li>
    </ul>
  </body>
</html>
