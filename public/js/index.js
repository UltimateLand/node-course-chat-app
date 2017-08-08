var socket = io();

socket.on('updateRoomList', function (rooms) {
  var ul = jQuery('<ul style="list-style-type:none"></ul>');

  rooms.forEach(function (room) {
    ul.append(jQuery('<li></li>').text(room));
  });

  jQuery('#rooms').html(ul);
});
